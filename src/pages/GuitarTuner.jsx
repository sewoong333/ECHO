import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";
import { FaExclamationTriangle } from "react-icons/fa";

// Premium color scheme
const COLORS = {
  primary: '#0a0e1a',
  secondary: '#1a1f3a', 
  accent: '#2a3154',
  highlight: '#ff6b6b',
  success: '#4ecdc4',
  warning: '#ffd93d',
  danger: '#ff4757',
  text: '#ffffff',
  textSecondary: '#b8bcc8',
  glass: 'rgba(255, 255, 255, 0.08)',
  glassBorder: 'rgba(255, 255, 255, 0.15)',
  shadow: 'rgba(0, 0, 0, 0.4)',
  glow: 'rgba(78, 205, 196, 0.3)'
};

const GUITAR_NOTES = [
  { name: "E₄", freq: 329.63, label: "1번줄 (E4)" },
  { name: "B₃", freq: 246.94, label: "2번줄 (B3)" },
  { name: "G₃", freq: 196.0, label: "3번줄 (G3)" },
  { name: "D₃", freq: 146.83, label: "4번줄 (D3)" },
  { name: "A₂", freq: 110.0, label: "5번줄 (A2)" },
  { name: "E₂", freq: 82.41, label: "6번줄 (E2)" },
];

function getDiffHz(freq, target) {
  return freq - target;
}

function getAdvice(diff) {
  if (diff == null) return "";
  if (Math.abs(diff) < 1) return "🎯 완벽합니다!";
  if (diff > 0) return "🔽 음정을 낮춰주세요";
  return "🔼 음정을 높여주세요";
}

function analyzeAudioHealth(buf, sampleRate, pitch, targetFreq, volume) {
  if (!pitch || !targetFreq || buf.length === 0) return null;
  
  // 기본 파라미터 계산
  const freqRatio = pitch / targetFreq;
  
  // 1. 음향 신호 품질 분석
  let rms = 0;
  let peakCount = 0;
  let irregularities = 0;
  
  // RMS와 peak 분석
  for (let i = 0; i < buf.length; i++) {
    rms += buf[i] * buf[i];
    if (i > 0 && Math.abs(buf[i] - buf[i-1]) > 0.1) {
      irregularities++;
    }
    if (Math.abs(buf[i]) > 0.7) {
      peakCount++;
    }
  }
  rms = Math.sqrt(rms / buf.length);
  
  // 2. 하모닉 분석 (배음 구조로 줄 상태 판단)
  const harmonicRatio = analyzeHarmonics(buf, sampleRate, pitch);
  
  // 3. 신호 안정성 분석
  const stability = 1 - (irregularities / buf.length);
  const peakRatio = peakCount / buf.length;
  
  // 4. 손상 감지 로직
  
  // 심각한 손상 - 즉시 중단 필요
  if (freqRatio > 1.8 || stability < 0.3 || harmonicRatio < 0.2) {
    return {
      type: 'critical',
      title: '🚨 즉시 중단!',
      message: '악기에 심각한 손상이 감지되었습니다!',
      action: '즉시 튜닝을 중단하고 악기를 확인하세요.',
      damageLevel: 'severe',
      details: `안정성: ${(stability * 100).toFixed(1)}%, 하모닉: ${(harmonicRatio * 100).toFixed(1)}%`
    };
  }
  
  // 줄 끊어짐 임박
  if (freqRatio > 1.5 || peakRatio > 0.15) {
    return {
      type: 'danger',
      title: '⚠️ 줄 파손 위험!',
      message: '줄이 끊어질 위험이 매우 높습니다!',
      action: '즉시 줄을 느슨하게 해주세요.',
      damageLevel: 'high',
      details: `장력 위험도: ${((freqRatio - 1) * 100).toFixed(1)}%`
    };
  }
  
  // 중간 손상 위험
  if (freqRatio > 1.2 || stability < 0.6 || harmonicRatio < 0.5) {
    return {
      type: 'warning',
      title: '⚠️ 악기 상태 주의',
      message: '악기에 스트레스가 가해지고 있습니다.',
      action: '조심스럽게 조정하고 악기 상태를 확인하세요.',
      damageLevel: 'medium',
      details: `안정성: ${(stability * 100).toFixed(1)}%, 하모닉: ${(harmonicRatio * 100).toFixed(1)}%`
    };
  }
  
  // 경미한 주의사항
  if (freqRatio > 1.1 || volume > 0.8 || stability < 0.8) {
    return {
      type: 'info',
      title: 'ℹ️ 상태 확인',
      message: '악기 상태를 확인해보세요.',
      action: '계속 모니터링하며 조심스럽게 진행하세요.',
      damageLevel: 'low',
      details: `볼륨: ${(volume * 100).toFixed(0)}%, 안정성: ${(stability * 100).toFixed(1)}%`
    };
  }
  
  return {
    type: 'normal',
    title: '✅ 정상',
    message: '악기 상태가 양호합니다.',
    action: '안전하게 튜닝을 계속하세요.',
    damageLevel: 'normal',
    details: `상태 양호 - 안정성: ${(stability * 100).toFixed(1)}%`
  };
}

function analyzeHarmonics(buf, sampleRate, fundamental) {
  // 간단한 하모닉 분석 - FFT 없이 기본적인 배음 강도 계산
  const bufLength = buf.length;
  let harmonicStrength = 0;
  
  // 2차, 3차 하모닉 주파수에서의 신호 강도 측정
  const harmonicFreqs = [fundamental * 2, fundamental * 3];
  
  for (let harmonic of harmonicFreqs) {
    const period = sampleRate / harmonic;
    const samplesPerPeriod = Math.round(period);
    
    if (samplesPerPeriod < bufLength / 4) {
      let correlation = 0;
      const testLength = Math.min(samplesPerPeriod * 3, bufLength - samplesPerPeriod);
      
      for (let i = 0; i < testLength; i++) {
        correlation += buf[i] * buf[i + samplesPerPeriod];
      }
      harmonicStrength += Math.abs(correlation) / testLength;
    }
  }
  
  return Math.min(1, harmonicStrength);
}

function autoCorrelate(buf, sampleRate) {
  // Chris Wilson's improved ACF2+ algorithm
  let SIZE = buf.length;
  let rms = 0;

  // Calculate RMS for signal strength check
  for (let i = 0; i < SIZE; i++) {
    let val = buf[i];
    rms += val * val;
  }
  rms = Math.sqrt(rms / SIZE);
  if (rms < 0.01) return -1; // Not enough signal

  // Find signal boundaries using threshold
  let r1 = 0, r2 = SIZE - 1, thres = 0.2;
  for (let i = 0; i < SIZE / 2; i++)
    if (Math.abs(buf[i]) < thres) { r1 = i; break; }
  for (let i = 1; i < SIZE / 2; i++)
    if (Math.abs(buf[SIZE - i]) < thres) { r2 = SIZE - i; break; }

  // Trim buffer to signal boundaries
  buf = buf.slice(r1, r2);
  SIZE = buf.length;

  // Calculate autocorrelation
  let c = new Array(SIZE).fill(0);
  for (let i = 0; i < SIZE; i++)
    for (let j = 0; j < SIZE - i; j++)
      c[i] = c[i] + buf[j] * buf[j + i];

  // Find first minimum (avoid octave errors)
  let d = 0; 
  while (c[d] > c[d + 1]) d++;
  
  // Find maximum correlation after first minimum
  let maxval = -1, maxpos = -1;
  for (let i = d; i < SIZE; i++) {
    if (c[i] > maxval) {
      maxval = c[i];
      maxpos = i;
    }
  }
  let T0 = maxpos;

  // Parabolic interpolation for better accuracy
  if (T0 > 0 && T0 < SIZE - 1) {
    let x1 = c[T0 - 1], x2 = c[T0], x3 = c[T0 + 1];
    let a = (x1 + x3 - 2 * x2) / 2;
    let b = (x3 - x1) / 2;
    if (a) T0 = T0 - b / (2 * a);
  }

  return sampleRate / T0;
}

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(135deg, ${COLORS.primary} 0%, ${COLORS.secondary} 50%, ${COLORS.accent} 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-bottom: 80px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, ${COLORS.glow} 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.15) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(255, 217, 61, 0.1) 0%, transparent 50%);
    pointer-events: none;
    z-index: 0;
  }
`;

const Frame = styled.div`
  width: calc(100vw - 32px);
  max-width: 480px;
  margin: 0 auto;
  padding: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  background: ${COLORS.glass};
  backdrop-filter: blur(25px);
  border-radius: 32px;
  border: 1px solid ${COLORS.glassBorder};
  box-shadow: 0 25px 50px ${COLORS.shadow}, 0 0 0 1px rgba(255,255,255,0.05) inset;
  z-index: 2;
  margin-top: 20px;
  
  &::before {
    content: '';
    position: absolute;
    inset: 1px;
    border-radius: 31px;
    background: linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%);
    pointer-events: none;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 32px;
  width: 100%;
`;

const Title = styled.h1`
  color: ${COLORS.text};
  font-size: 28px;
  font-weight: 800;
  margin: 0 0 8px 0;
  letter-spacing: -0.5px;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  background: linear-gradient(135deg, ${COLORS.success} 0%, ${COLORS.highlight} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  color: ${COLORS.textSecondary};
  font-size: 16px;
  font-weight: 500;
  margin: 0;
  opacity: 0.9;
`;

const TuningSelector = styled.div`
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid ${COLORS.glassBorder};
  border-radius: 20px;
  padding: 16px 24px;
  margin-bottom: 32px;
  width: 100%;
  backdrop-filter: blur(10px);
`;

const SelectorLabel = styled.div`
  color: ${COLORS.textSecondary};
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 12px;
  text-align: center;
`;

const Select = styled.select`
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.1);
  color: ${COLORS.text};
  border: 1px solid ${COLORS.glassBorder};
  outline: none;
  padding: 16px 20px;
  appearance: none;
  text-align: center;
  backdrop-filter: blur(10px);
  
  &:focus {
    border-color: ${COLORS.success};
    box-shadow: 0 0 0 3px rgba(78, 205, 196, 0.2);
  }
  
  option {
    background: ${COLORS.secondary};
    color: ${COLORS.text};
    padding: 12px;
  }
`;

const MainDisplay = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
`;

const StringButtons = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  width: 100%;
  max-width: 300px;
`;

const StringBtn = styled.button`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 2px solid ${({ $active }) => ($active ? COLORS.success : COLORS.glassBorder)};
  background: ${({ $active }) => 
    $active 
      ? `linear-gradient(135deg, ${COLORS.success} 0%, ${COLORS.highlight} 100%)` 
      : COLORS.glass
  };
  color: ${COLORS.text};
  font-weight: 800;
  font-size: 18px;
  outline: none;
  cursor: pointer;
  box-shadow: ${({ $active }) => 
    $active 
      ? `0 12px 30px ${COLORS.glow}, 0 0 20px rgba(78, 205, 196, 0.4)` 
      : `0 8px 25px ${COLORS.shadow}`
  };
  backdrop-filter: blur(15px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    transform: translateY(-4px) scale(1.05);
    box-shadow: ${({ $active }) => 
      $active 
        ? `0 20px 40px ${COLORS.glow}, 0 0 30px rgba(78, 205, 196, 0.6)` 
        : `0 15px 35px ${COLORS.shadow}`
    };
  }
  
  &:active {
    transform: translateY(-2px) scale(1.02);
  }
`;

const StringNote = styled.div`
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 4px;
`;

const StringFreq = styled.div`
  font-size: 12px;
  opacity: 0.8;
  font-weight: 600;
`;

const TunerGauge = styled.div`
  width: 100%;
  max-width: 400px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  padding: 32px 24px;
  position: relative;
  backdrop-filter: blur(15px);
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    background: linear-gradient(145deg, rgba(255,255,255,0.03) 0%, transparent 100%);
    pointer-events: none;
  }
`;

const FrequencyDisplay = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 12px;
  margin-bottom: 24px;
  padding: 20px 32px;
  background: rgba(78, 205, 196, 0.1);
  border-radius: 20px;
  border: 1px solid rgba(78, 205, 196, 0.3);
  backdrop-filter: blur(10px);
`;

const FrequencyNumber = styled.span`
  color: ${COLORS.text};
  font-size: 48px;
  font-weight: 900;
  line-height: 1;
  letter-spacing: -2px;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  background: linear-gradient(135deg, ${COLORS.success} 0%, ${COLORS.highlight} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const FrequencyUnit = styled.span`
  color: ${COLORS.textSecondary};
  font-size: 20px;
  font-weight: 700;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
`;

const TargetFrequency = styled.div`
  text-align: center;
  color: ${COLORS.textSecondary};
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
  
  span {
    color: ${COLORS.success};
    font-weight: 800;
  }
`;

const TuningAdvice = styled.div`
  text-align: center;
  font-size: 20px;
  font-weight: 700;
  color: ${COLORS.text};
  margin-top: 16px;
  letter-spacing: 0.3px;
  min-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  background: rgba(255, 107, 107, 0.1);
  border-radius: 20px;
  border: 1px solid rgba(255, 107, 107, 0.2);
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
`;

const StatusInfo = styled.div`
  text-align: center;
  color: ${COLORS.textSecondary};
  font-size: 13px;
  line-height: 1.6;
  padding: 20px 24px;
  background: rgba(255, 255, 255, 0.04);
  border-radius: 20px;
  margin-top: 24px;
  border: 1px solid ${COLORS.glassBorder};
  backdrop-filter: blur(10px);
`;

const InstrumentHealthCard = styled.div`
  position: fixed;
  top: 100px;
  right: 24px;
  background: ${props => {
    switch(props.level) {
      case 'severe': return `linear-gradient(135deg, ${COLORS.danger} 0%, #c0392b 100%)`;
      case 'high': return `linear-gradient(135deg, ${COLORS.warning} 0%, #e84393 100%)`;
      case 'medium': return `linear-gradient(135deg, #ffa502 0%, ${COLORS.warning} 100%)`;
      case 'low': return `linear-gradient(135deg, ${COLORS.accent} 0%, ${COLORS.secondary} 100%)`;
      default: return `linear-gradient(135deg, ${COLORS.success} 0%, #00b894 100%)`;
    }
  }};
  color: white;
  padding: 16px 20px;
  border-radius: 20px;
  box-shadow: 0 15px 45px rgba(0, 0, 0, 0.4), 0 5px 15px rgba(0, 0, 0, 0.3);
  width: 180px;
  height: 90px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  z-index: 999;
  backdrop-filter: blur(25px);
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  animation: ${props => props.level === 'severe' ? 'premiumPulse 3s infinite' : 'none'};
  
  @keyframes premiumPulse {
    0%, 100% {
      transform: scale(1);
      box-shadow: 0 15px 45px rgba(0, 0, 0, 0.4), 0 5px 15px rgba(0, 0, 0, 0.3);
    }
    50% {
      transform: scale(1.03);
      box-shadow: 0 25px 60px rgba(231, 76, 60, 0.5), 0 10px 25px rgba(231, 76, 60, 0.4);
    }
  }
`;

const HealthTitle = styled.div`
  font-size: 13px;
  font-weight: 700;
  margin-bottom: 6px;
  opacity: 0.9;
  text-align: center;
`;

const HealthStatus = styled.div`
  font-size: 16px;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  text-align: center;
`;

const HealthDetail = styled.div`
  font-size: 10px;
  opacity: 0.8;
  margin-top: 6px;
  font-family: 'SF Mono', 'Monaco', monospace;
  text-align: center;
  line-height: 1.3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const VolumeIndicator = styled.div`
  position: fixed;
  top: 210px;
  right: 24px;
  width: 180px;
  height: 12px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  overflow: hidden;
  z-index: 100;
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
`;

const VolumeLevel = styled.div`
  height: 100%;
  width: ${props => Math.min(100, props.level * 100)}%;
  background: ${props => {
    if (props.level > 0.8) return `linear-gradient(90deg, ${COLORS.warning} 0%, ${COLORS.danger} 100%)`;
    if (props.level > 0.6) return `linear-gradient(90deg, ${COLORS.success} 0%, ${COLORS.warning} 100%)`;
    return `linear-gradient(90deg, ${COLORS.success} 0%, ${COLORS.highlight} 100%)`;
  }};
  transition: width 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 20px;
  box-shadow: 0 0 15px rgba(78, 205, 196, 0.6);
`;

const useAnimatedAngle = (value, duration = 120) => {
  const [animated, setAnimated] = useState(value);
  useEffect(() => {
    let raf;
    let start = null;
    let from = animated;
    let to = value;
    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setAnimated(from + (to - from) * progress);
      if (progress < 1) raf = requestAnimationFrame(animate);
    };
    if (from !== to) raf = requestAnimationFrame(animate);
    return () => raf && cancelAnimationFrame(raf);
    // eslint-disable-next-line
  }, [value]);
  return animated;
};

export default function GuitarTuner() {
  const [pitch, setPitch] = useState(null);
  const [diff, setDiff] = useState(null);
  const [selected, setSelected] = useState(0); // 0: 1번줄(E4)
  const [safetyWarning, setSafetyWarning] = useState(null);
  const [volumeLevel, setVolumeLevel] = useState(0);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const sourceRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    let stopped = false;
    async function listen() {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
      audioContextRef.current = audioContext;
      const analyser = audioContext.createAnalyser();
      analyser.fftSize = 2048;
      analyserRef.current = analyser;
      const source = audioContext.createMediaStreamSource(stream);
      source.connect(analyser);
      sourceRef.current = source;
      const buf = new Float32Array(analyser.fftSize);
      const detect = () => {
        if (stopped) return;
        analyser.getFloatTimeDomainData(buf);
        
        // RMS 볼륨 계산
        let rms = 0;
        for (let i = 0; i < buf.length; i++) {
          rms += buf[i] * buf[i];
        }
        rms = Math.sqrt(rms / buf.length);
        setVolumeLevel(rms);
        
        const freq = autoCorrelate(buf, audioContext.sampleRate);
        // Guitar frequency range: ~80Hz (E2) to ~330Hz (E4)
        if (freq > 0 && freq >= 70 && freq <= 400) {
          setPitch(freq);
          const diffValue = getDiffHz(freq, GUITAR_NOTES[selected].freq);
          setDiff(diffValue);
          
          // 고급 악기 손상 분석
          const healthAnalysis = analyzeAudioHealth(buf, audioContext.sampleRate, freq, GUITAR_NOTES[selected].freq, rms);
          setSafetyWarning(healthAnalysis);
        } else {
          setPitch(null);
          setDiff(null);
        }
        rafRef.current = requestAnimationFrame(detect);
      };
      rafRef.current = requestAnimationFrame(detect);
    }
    listen().catch(console.error);
    return () => {
      stopped = true;
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [selected]);

  const animatedAngle = useAnimatedAngle(Math.max(-100, Math.min(100, diff || 0)) * 0.9);

  return (
    <Wrapper>
      <TopBar />
      
      {/* 악기 상태 모니터링 카드 - 항상 표시 */}
      <InstrumentHealthCard level={safetyWarning?.damageLevel || 'normal'}>
        <HealthTitle>🎸 기타 상태</HealthTitle>
        <HealthStatus>
          {(() => {
            const level = safetyWarning?.damageLevel || 'normal';
            switch(level) {
              case 'severe': return '🚨 심각한 손상';
              case 'high': return '⚠️ 위험 감지';
              case 'medium': return '⚠️ 주의 필요';
              case 'low': return 'ℹ️ 상태 확인';
              default: return '✅ 정상 상태';
            }
          })()}
        </HealthStatus>
        <HealthDetail>
          {safetyWarning?.details || '모니터링 중...'}
        </HealthDetail>
      </InstrumentHealthCard>
      
      {/* 볼륨 레벨 표시기 */}
      <VolumeIndicator>
        <VolumeLevel level={volumeLevel} />
      </VolumeIndicator>

      <Frame>
        <Header>
          <Title>🎸 기타 튜너</Title>
          <Subtitle>정확한 음정으로 완벽한 연주를</Subtitle>
        </Header>

        <TuningSelector>
          <SelectorLabel>튜닝 타입 선택</SelectorLabel>
          <Select value="standard" onChange={() => {}}>
            <option value="standard">표준 튜닝 (E-A-D-G-B-E)</option>
            <option value="drop_d">Drop D 튜닝</option>
            <option value="open_g">오픈 G 튜닝</option>
          </Select>
        </TuningSelector>

        <MainDisplay>
          <StringButtons>
            {GUITAR_NOTES.map((note, i) => (
              <StringBtn 
                key={i} 
                $active={selected === i} 
                onClick={() => setSelected(i)}
              >
                <StringNote>{note.name}</StringNote>
                <StringFreq>{note.freq.toFixed(0)}Hz</StringFreq>
              </StringBtn>
            ))}
          </StringButtons>

          <TunerGauge>
            <TargetFrequency>
              목표: <span>{GUITAR_NOTES[selected].name} - {GUITAR_NOTES[selected].freq.toFixed(1)}Hz</span>
            </TargetFrequency>
            
            <FrequencyDisplay>
              <FrequencyNumber>{pitch ? pitch.toFixed(1) : "--"}</FrequencyNumber>
              <FrequencyUnit>Hz</FrequencyUnit>
            </FrequencyDisplay>

            {/* SVG 게이지 */}
            <div style={{ width: '100%', height: '180px', position: 'relative' }}>
              <svg
                width="100%"
                height="180"
                viewBox="0 0 340 180"
                style={{ maxWidth: 380, display: "block", margin: "0 auto" }}
              >
                {/* 반원형 배경 게이지 */}
                <path
                  d="M20 150 A150 150 0 0 1 320 150"
                  fill="none"
                  stroke="rgba(255, 255, 255, 0.1)"
                  strokeWidth="12"
                />
                
                {/* 정확한 구간 표시 */}
                {Math.abs(diff || 0) < 1 && (
                  <path
                    d="M170 150 L153.16 52.64 A100 100 0 0 1 186.84 52.64 L170 150 Z"
                    fill={COLORS.success}
                    opacity="0.3"
                  />
                )}
                
                {/* 눈금선과 숫자 */}
                {[...Array(11)].map((_, i) => {
                  const val = -100 + i * 20;
                  const angle = (val / 200) * 180;
                  const rad = ((angle - 90) * Math.PI) / 180;
                  const x1 = 170 + 120 * Math.cos(rad);
                  const y1 = 150 + 120 * Math.sin(rad);
                  const x2 = 170 + 140 * Math.cos(rad);
                  const y2 = 150 + 140 * Math.sin(rad);
                  return (
                    <g key={val}>
                      <line
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke={val === 0 ? COLORS.success : "rgba(255, 255, 255, 0.3)"}
                        strokeWidth={val === 0 ? 4 : 2}
                      />
                      <text
                        x={170 + 105 * Math.cos(rad)}
                        y={150 + 105 * Math.sin(rad) + 7}
                        textAnchor="middle"
                        fontSize="16"
                        fontWeight={val === 0 ? 800 : 500}
                        fill={val === 0 ? COLORS.success : COLORS.textSecondary}
                      >
                        {val}
                      </text>
                    </g>
                  );
                })}
                
                {/* 바늘 */}
                <g
                  style={{
                    transform: `rotate(${animatedAngle}deg)`,
                    transformOrigin: "170px 150px",
                    transition: 'transform 0.1s ease-out'
                  }}
                >
                  <rect
                    x="167"
                    y="150"
                    width="6"
                    height="-75"
                    rx="3"
                    fill={COLORS.highlight}
                  />
                  <circle
                    cx="170"
                    cy="150"
                    r="18"
                    fill={COLORS.glass}
                    stroke={COLORS.success}
                    strokeWidth="3"
                  />
                  <circle 
                    cx="170" 
                    cy="150" 
                    r="8" 
                    fill={COLORS.highlight} 
                  />
                </g>
              </svg>
            </div>

            <TuningAdvice>{getAdvice(diff)}</TuningAdvice>
          </TunerGauge>

          <StatusInfo>
            표준 튜닝: E₄(329.6) - B₃(246.9) - G₃(196.0) - D₃(146.8) - A₂(110.0) - E₂(82.4)<br/>
            악기를 마이크에 가까이 하고 줄을 하나씩 튕겨주세요
          </StatusInfo>
        </MainDisplay>
      </Frame>
    </Wrapper>
  );
}