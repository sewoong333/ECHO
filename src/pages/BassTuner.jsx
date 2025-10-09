import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";
import { FaExclamationTriangle, FaCheckCircle, FaToggleOn, FaToggleOff } from "react-icons/fa";

const ECHO_COLOR = "#2ed8b6";
const ECHO_ACCENT = "#1976d2";
const BASS_NOTES = [
  { name: "G₂", freq: 98.0, label: "1번줄 (G2)" },
  { name: "D₂", freq: 73.42, label: "2번줄 (D2)" },
  { name: "A₁", freq: 55.0, label: "3번줄 (A1)" },
  { name: "E₁", freq: 41.2, label: "4번줄 (E1)" },
];

function getDiffHz(freq, target) {
  return freq - target;
}

function getAdvice(diff) {
  if (diff == null) return "";
  if (Math.abs(diff) < 1) return "정확합니다!";
  if (diff > 0) return "좀 더 낮게 조정해";
  return "좀 더 높게 조정해";
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
  
  // 4. 베이스 전용 손상 감지 로직 (낮은 주파수 특화)
  
  // 심각한 손상 - 즉시 중단 필요
  if (freqRatio > 1.7 || stability < 0.25 || harmonicRatio < 0.15) {
    return {
      type: 'critical',
      title: '🚨 즉시 중단!',
      message: '베이스에 심각한 손상이 감지되었습니다!',
      action: '즉시 튜닝을 중단하고 베이스를 확인하세요.',
      damageLevel: 'severe',
      details: `안정성: ${(stability * 100).toFixed(1)}%, 하모닉: ${(harmonicRatio * 100).toFixed(1)}%`
    };
  }
  
  // 줄 끊어짐 임박 (베이스는 더 강한 장력)
  if (freqRatio > 1.4 || peakRatio > 0.12) {
    return {
      type: 'danger',
      title: '⚠️ 베이스줄 파손 위험!',
      message: '베이스줄이 끊어질 위험이 매우 높습니다!',
      action: '즉시 줄을 느슨하게 해주세요.',
      damageLevel: 'high',
      details: `장력 위험도: ${((freqRatio - 1) * 100).toFixed(1)}%`
    };
  }
  
  // 중간 손상 위험
  if (freqRatio > 1.15 || stability < 0.55 || harmonicRatio < 0.4) {
    return {
      type: 'warning',
      title: '⚠️ 베이스 상태 주의',
      message: '베이스에 스트레스가 가해지고 있습니다.',
      action: '조심스럽게 조정하고 베이스 상태를 확인하세요.',
      damageLevel: 'medium',
      details: `안정성: ${(stability * 100).toFixed(1)}%, 하모닉: ${(harmonicRatio * 100).toFixed(1)}%`
    };
  }
  
  // 경미한 주의사항
  if (freqRatio > 1.05 || volume > 0.7 || stability < 0.75) {
    return {
      type: 'info',
      title: 'ℹ️ 상태 확인',
      message: '베이스 상태를 주의깊게 관찰하세요.',
      action: '천천히 조정하며 소리 변화를 확인하세요.',
      damageLevel: 'low',
      details: `신호 품질: ${(stability * 100).toFixed(1)}%`
    };
  }
  
  return null;
}

function analyzeHarmonics(buf, sampleRate, fundamental) {
  if (!fundamental || fundamental <= 0) return 0;
  
  // 베이스 전용 하모닉 분석 (낮은 주파수 대역)
  let harmonicStrength = 0;
  const windowSize = Math.floor(sampleRate / fundamental);
  
  if (windowSize > 0 && windowSize < buf.length / 2) {
    // 기본 주파수 강도
    let fundamentalSum = 0;
    for (let i = 0; i < windowSize && i < buf.length; i++) {
      fundamentalSum += Math.abs(buf[i]);
    }
    
    // 2배음 강도 (베이스는 2배음이 강함)
    let harmonicSum = 0;
    const halfWindow = Math.floor(windowSize / 2);
    for (let i = 0; i < halfWindow && i < buf.length; i++) {
      harmonicSum += Math.abs(buf[i]);
    }
    
    if (fundamentalSum > 0) {
      harmonicStrength = Math.min(1.0, harmonicSum / fundamentalSum * 1.2); // 베이스 보정
    }
  }
  
  return harmonicStrength;
}

function autoCorrelate(buf, sampleRate) {
  let SIZE = buf.length;
  let rms = 0;
  for (let i = 0; i < SIZE; i++) rms += buf[i] * buf[i];
  rms = Math.sqrt(rms / SIZE);
  if (rms < 0.01) return -1;
  let r1 = 0,
    r2 = SIZE - 1,
    thres = 0.2;
  for (let i = 0; i < SIZE / 2; i++)
    if (Math.abs(buf[i]) < thres) {
      r1 = i;
      break;
    }
  for (let i = 1; i < SIZE / 2; i++)
    if (Math.abs(buf[SIZE - i]) < thres) {
      r2 = SIZE - i;
      break;
    }
  buf = buf.slice(r1, r2);
  SIZE = buf.length;
  let c = new Array(SIZE).fill(0);
  for (let i = 0; i < SIZE; i++)
    for (let j = 0; j < SIZE - i; j++) c[i] = c[i] + buf[j] * buf[j + i];
  let d = 0;
  while (c[d] > c[d + 1]) d++;
  let maxval = -1,
    maxpos = -1;
  for (let i = d; i < SIZE; i++) {
    if (c[i] > maxval) {
      maxval = c[i];
      maxpos = i;
    }
  }
  let T0 = maxpos;
  return sampleRate / T0;
}

// styled-components
const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #f7f8fa;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-bottom: 180px;
`;
const Frame = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  padding: 0 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  background: none;
  z-index: 2;
`;
const TopRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 18px 0 10px 0;
`;
const Pill = styled.div`
  background: #1976d2;
  border-radius: 22px;
  display: flex;
  align-items: center;
  padding: 0 22px 0 22px;
  height: 44px;
  box-shadow: 0 2px 8px #b2f0e6;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  letter-spacing: 1px;
  position: relative;
`;
const PillArrow = styled.span`
  display: inline-block;
  margin-left: 10px;
  font-size: 22px;
  font-weight: 700;
  color: #fff;
`;
const PillSub = styled.div`
  font-size: 15px;
  color: #e0e2e6;
  font-weight: 500;
  margin-top: 2px;
  text-align: center;
`;

// 성공 표시와 손상 감지 온오프를 위한 새로운 컴포넌트들
const SuccessIndicator = styled.div`
  display: ${props => props.$show ? 'flex' : 'none'};
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: rgba(76, 175, 80, 0.2);
  border: 2px solid #4CAF50;
  border-radius: 15px;
  padding: 15px;
  margin: 20px 0;
  animation: pulse 1s ease-in-out;
  
  @keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
  }
`;

const DamageSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 20px;
  margin-bottom: 250px;
`;

const DamageToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 15px;
`;

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${props => props.$active ? ECHO_COLOR : '#ccc'};
  font-size: 24px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const DamageStatusArea = styled.div`
  min-height: 120px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DamageCardFixed = styled.div`
  width: 100%;
  background: ${props => {
    if (props.$type === 'critical') return 'rgba(244, 67, 54, 0.1)';
    if (props.$type === 'danger') return 'rgba(255, 152, 0, 0.1)';
    if (props.$type === 'warning') return 'rgba(255, 193, 7, 0.1)';
    return 'rgba(76, 175, 80, 0.1)';
  }};
  border: 2px solid ${props => {
    if (props.$type === 'critical') return '#F44336';
    if (props.$type === 'danger') return '#FF9800';
    if (props.$type === 'warning') return '#FFC107';
    return '#4CAF50';
  }};
  border-radius: 12px;
  padding: 15px;
  animation: fadeIn 0.5s ease-out;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const EmptyDamageArea = styled.div`
  color: rgba(255, 255, 255, 0.3);
  font-size: 14px;
  text-align: center;
`;
const TunerRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0;
  max-width: 480px;
  margin-top: 8px;
`;
const StringCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22px;
  margin-right: 24px;
  margin-top: 8px;
`;
const StringBtn = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  border: 2.5px solid ${({ $active }) => ($active ? "#1976d2" : "#e0e2e6")};
  background: ${({ $active }) => ($active ? "#1976d2" : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : "#222")};
  font-weight: 900;
  font-size: 24px;
  outline: none;
  cursor: pointer;
  box-shadow: ${({ $active }) => ($active ? "0 2px 8px #b2f0e6" : "none")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition:
    background 0.18s,
    color 0.18s,
    border 0.18s;
  letter-spacing: 1px;
  padding: 0;
`;
const GaugeWrap = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 0;
`;
const GaugeBox = styled.div`
  width: 100%;
  max-width: 340px;
  height: 220px;
  margin: 0 auto 18px auto;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  border-radius: 32px;
  box-shadow:
    0 4px 32px 0 rgba(46, 216, 182, 0.1),
    0 1.5px 8px 0 #b2f0e6;
  padding-top: 12px;
  padding-bottom: 18px;
  @media (max-width: 480px) {
    max-width: 98vw;
    height: 180px;
    border-radius: 18px;
    padding-top: 6px;
    padding-bottom: 10px;
  }
`;
const NoteName = styled.div`
  font-size: 32px;
  font-weight: 800;
  color: ${ECHO_ACCENT};
  letter-spacing: 2px;
  margin-bottom: 2px;
`;
const NoteFreq = styled.div`
  font-size: 18px;
  color: #222;
  font-weight: 700;
  margin-bottom: 0;
`;
const PitchRow = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 18px;
  margin-bottom: 2px;
`;
const PitchNum = styled.span`
  font-size: 38px;
  font-weight: 900;
  color: ${ECHO_COLOR};
  line-height: 1;
`;
const PitchHz = styled.span`
  font-size: 22px;
  color: #888;
  font-weight: 600;
  margin-left: 4px;
  margin-bottom: 3px;
`;
const Advice = styled.div`
  font-size: 19px;
  color: #444;
  margin-bottom: 18px;
  margin-top: 2px;
  font-weight: 600;
  text-align: center;
`;
const StandardText = styled.div`
  margin-top: 10px;
  color: #888;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
`;
const HeadSVGWrap = styled.div`
  position: fixed;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  width: 200px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  z-index: 1;
`;

const SafetyAlert = styled.div`
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  background: ${props => {
    switch(props.type) {
      case 'critical': return 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)';
      case 'danger': return 'linear-gradient(135deg, #ff4757 0%, #ff3838 100%)';
      case 'warning': return 'linear-gradient(135deg, #ffa502 0%, #ff6348 100%)';
      case 'info': return 'linear-gradient(135deg, #3742fa 0%, #2f3542 100%)';
      default: return 'linear-gradient(135deg, #2ed8b6 0%, #1976d2 100%)';
    }
  }};
  color: white;
  padding: 16px 20px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
  max-width: 360px;
  z-index: 1000;
  animation: ${props => props.type === 'critical' ? 'criticalPulse' : 'slideInBounce'} 0.5s ease-out;
  
  @keyframes slideInBounce {
    0% {
      opacity: 0;
      transform: translateX(-50%) translateY(-20px) scale(0.9);
    }
    60% {
      opacity: 1;
      transform: translateX(-50%) translateY(5px) scale(1.05);
    }
    100% {
      opacity: 1;
      transform: translateX(-50%) translateY(0px) scale(1);
    }
  }
  
  @keyframes criticalPulse {
    0%, 100% {
      opacity: 1;
      transform: translateX(-50%) translateY(0px) scale(1);
    }
    25%, 75% {
      opacity: 0.8;
      transform: translateX(-50%) translateY(-2px) scale(1.02);
    }
    50% {
      opacity: 1;
      transform: translateX(-50%) translateY(0px) scale(1.05);
    }
  }
`;

const SafetyTitle = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SafetyMessage = styled.div`
  font-size: 14px;
  margin-bottom: 8px;
  line-height: 1.4;
`;

const SafetyAction = styled.div`
  font-size: 13px;
  font-weight: 600;
  opacity: 0.9;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  padding-top: 8px;
  margin-top: 8px;
`;

const SafetyDetails = styled.div`
  font-size: 11px;
  opacity: 0.8;
  margin-top: 6px;
  padding: 6px 8px;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  font-family: monospace;
`;

const DamageIndicator = styled.div`
  position: fixed;
  top: 60px;
  right: 20px;
  background: ${props => {
    switch(props.level) {
      case 'severe': return '#e74c3c';
      case 'high': return '#ff4757';
      case 'medium': return '#ffa502';
      case 'low': return '#3742fa';
      default: return '#2ed8b6';
    }
  }};
  color: white;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 11px;
  font-weight: bold;
  z-index: 999;
  animation: ${props => props.level === 'severe' ? 'severeDamage' : 'fadeIn'} 0.3s ease;
  
  @keyframes severeDamage {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.6; }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const VolumeIndicator = styled.div`
  position: fixed;
  top: 140px;
  right: 20px;
  width: 60px;
  height: 8px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  overflow: hidden;
  z-index: 100;
`;

const VolumeLevel = styled.div`
  height: 100%;
  width: ${props => Math.min(100, props.level * 100)}%;
  background: ${props => {
    if (props.level > 0.8) return '#ff4757';
    if (props.level > 0.6) return '#ffa502';
    return '#2ed8b6';
  }};
  transition: width 0.1s ease;
  border-radius: 4px;
`;

// 바늘 애니메이션(이징)
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

export default function BassTuner() {
  const [pitch, setPitch] = useState(null);
  const [diff, setDiff] = useState(null);
  const [selected, setSelected] = useState(0); // 0: G2, 1: D2, 2: A1, 3: E1
  const [safetyWarning, setSafetyWarning] = useState(null);
  const [volumeLevel, setVolumeLevel] = useState(0);
  const [damageDetection, setDamageDetection] = useState(true); // 손상 감지 온오프
  const [showSuccess, setShowSuccess] = useState(false); // 성공 표시
  const [lastDamageCheck, setLastDamageCheck] = useState(null); // 마지막 손상 체크 결과
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
        if (freq > 0) {
          setPitch(freq);
          const diffValue = getDiffHz(freq, BASS_NOTES[selected].freq);
          setDiff(diffValue);
          
          // 튜닝 성공 체크 및 손상 분석
          if (Math.abs(diffValue) < 1) {
            setShowSuccess(true);
            setTimeout(() => setShowSuccess(false), 2000);
            
            // 튜닝 완료 시에만 손상 분석 수행 (온오프 기능)
            if (damageDetection) {
              const healthAnalysis = analyzeAudioHealth(buf, audioContext.sampleRate, freq, BASS_NOTES[selected].freq, rms);
              setLastDamageCheck(healthAnalysis);
            }
          }
        } else {
          setPitch(null);
          setDiff(null);
        }
        rafRef.current = requestAnimationFrame(detect);
      };
      detect();
    }
    listen();
    return () => {
      stopped = true;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (audioContextRef.current) audioContextRef.current.close();
    };
     
  }, [selected]);

  // 게이지 바늘 각도: -100~+100Hz 차이 → -100~+100deg (최대 ±100Hz만 표시)
  const angle = Math.max(-100, Math.min(100, diff || 0));
  const _animatedAngle = useAnimatedAngle(angle);

  return (
    <Wrapper>
      <TopBar />
      
      {/* 볼륨 레벨 표시기 */}
      <VolumeIndicator>
        <VolumeLevel level={volumeLevel} />
      </VolumeIndicator>
      
      <Frame>
        {/* 상단 드롭다운 */}
        <TopRow>
          <Pill>
            베이스 4현
            <PillArrow>▶</PillArrow>
          </Pill>
          <PillSub>표준</PillSub>
        </TopRow>
        {/* 튜너 프레임: 좌측 현선택, 우측 게이지/안내 */}
        <TunerRow>
          {/* 현 선택 버튼 (좌측) */}
          <StringCol>
            {BASS_NOTES.map((n, i) => (
              <StringBtn
                key={n.name}
                $active={i === selected}
                onClick={() => setSelected(i)}
              >
                <span style={{ fontSize: 22, fontWeight: 900, lineHeight: 1 }}>
                  {n.name.split("₁")[0].split("₂")[0]}
                </span>
                <span
                  style={{
                    fontSize: 15,
                    fontWeight: 500,
                    lineHeight: 1,
                    marginTop: 1,
                  }}
                >
                  {n.name.match(/₁|₂/)
                    ? n.name.match(/₁|₂/)[0].replace("₁", "₁").replace("₂", "₂")
                    : ""}
                </span>
              </StringBtn>
            ))}
          </StringCol>
          {/* 게이지/안내 (우측) */}
          <GaugeWrap>
            {/* 게이지 */}
            <GaugeBox
              style={{
                background: "none",
                boxShadow: "none",
                borderRadius: 0,
                padding: 0,
                margin: "0 auto 18px auto",
                width: "100%",
                maxWidth: 420,
                height: 220,
              }}
            >
              <svg
                width="100%"
                height="180"
                viewBox="0 0 340 180"
                style={{ maxWidth: 420, display: "block", margin: "0 auto" }}
              >
                {/* 반원형 회색 눈금 */}
                <path
                  d="M20 150 A150 150 0 0 1 320 150"
                  fill="none"
                  stroke="#e0e2e6"
                  strokeWidth="14"
                />
                {/* 파란 부채꼴: 중앙(정확)일 때만 표시, ±10도(합산 20도) */}
                {Math.abs(diff) < 1 && (
                  <path
                    d="M170 150 L153.16 52.64 A100 100 0 0 1 186.84 52.64 L170 150 Z"
                    fill="#1976d2"
                    opacity="0.22"
                  />
                )}
                {/* 눈금선/숫자 */}
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
                        stroke={val === 0 ? "#1976d2" : "#b0b3b8"}
                        strokeWidth={val === 0 ? 4 : 2}
                      />
                      <text
                        x={170 + 105 * Math.cos(rad)}
                        y={150 + 105 * Math.sin(rad) + 7}
                        textAnchor="middle"
                        fontSize="18"
                        fontWeight={val === 0 ? 700 : 400}
                        fill={val === 0 ? "#222" : "#b0b3b8"}
                      >
                        {val}
                      </text>
                    </g>
                  );
                })}
                {/* 바늘 - 헤르츠에 따라 부드럽게 움직이고 색상 변경 */}
                <g
                  style={{
                    transform: `rotate(${Math.max(-100, Math.min(100, diff || 0)) * 0.9}deg)`,
                    transformOrigin: "170px 150px",
                    transition: "transform 0.1s linear",
                  }}
                >
                  {/* 직선 침 */}
                  <line
                    x1="170"
                    y1="150"
                    x2="170"
                    y2="75"
                    stroke={Math.abs(diff || 0) < 1 ? "#4CAF50" : Math.abs(diff || 0) < 5 ? "#FF9800" : "#F44336"}
                    strokeWidth="4"
                    strokeLinecap="round"
                    style={{
                      filter: "drop-shadow(0 0 8px rgba(0,0,0,0.3))",
                      transition: "stroke 0.2s ease",
                    }}
                  />
                  {/* 중심점 */}
                  <circle
                    cx="170"
                    cy="150"
                    r="16"
                    fill="#fff"
                    stroke={Math.abs(diff || 0) < 1 ? "#4CAF50" : Math.abs(diff || 0) < 5 ? "#FF9800" : "#F44336"}
                    strokeWidth="5"
                    style={{
                      transition: "stroke 0.2s ease",
                    }}
                  />
                  <circle 
                    cx="170" 
                    cy="150" 
                    r="9" 
                    fill={Math.abs(diff || 0) < 1 ? "#4CAF50" : Math.abs(diff || 0) < 5 ? "#FF9800" : "#F44336"}
                    style={{
                      transition: "fill 0.2s ease",
                    }}
                  />
                </g>
              </svg>
              {/* 음표/기준주파수 */}
              <div
                style={{
                  position: "absolute",
                  top: 10,
                  left: 0,
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: 38,
                    fontWeight: 900,
                    color: "#222",
                    letterSpacing: 2,
                  }}
                >
                  {BASS_NOTES[selected].name}
                </div>
                <div style={{ fontSize: 22, color: "#222", fontWeight: 900 }}>
                  {BASS_NOTES[selected].freq.toFixed(1)}
                </div>
              </div>
            </GaugeBox>
            {/* 감지된 주파수/안내 */}
            <div
              style={{
                fontSize: "32px",
                fontWeight: 900,
                color: "#222",
                textAlign: "center",
                marginTop: "18px",
                letterSpacing: "0.5px",
                lineHeight: 1.1,
              }}
            >
              {pitch ? pitch.toFixed(1) : "--"}
              <span
                style={{ fontWeight: 500, fontSize: "22px", marginLeft: 2 }}
              >
                헤르츠
              </span>
            </div>
            <div
              style={{
                fontSize: "20px",
                color: "#888",
                textAlign: "center",
                marginTop: "4px",
                fontWeight: 600,
              }}
            >
              {pitch ? getAdvice(diff) : "소리를 들려주세요"}
            </div>
            
            {/* 성공 표시 */}
            <SuccessIndicator $show={showSuccess}>
              <FaCheckCircle size={24} color="#4CAF50" />
              <span>튜닝 완료!</span>
            </SuccessIndicator>
          </GaugeWrap>
        </TunerRow>
      </Frame>
      
      {/* 손상 감지 섹션 - 상하 정렬 */}
      <DamageSection>
        {/* 손상 감지 온오프 토글 */}
        <DamageToggle>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <FaExclamationTriangle />
            손상 감지
          </div>
          <ToggleButton
            $active={damageDetection}
            onClick={() => setDamageDetection(!damageDetection)}
          >
            {damageDetection ? <FaToggleOn /> : <FaToggleOff />}
          </ToggleButton>
        </DamageToggle>
        
        {/* 고정된 손상 상태 영역 - 튜닝 완료 시에만 표시 */}
        {damageDetection && (
          <DamageStatusArea>
            {lastDamageCheck ? (
              <DamageCardFixed $type={lastDamageCheck.type}>
                <SafetyTitle>
                  <FaExclamationTriangle />
                  {lastDamageCheck.title}
                </SafetyTitle>
                <SafetyMessage>{lastDamageCheck.message}</SafetyMessage>
                <SafetyAction>{lastDamageCheck.action}</SafetyAction>
                {lastDamageCheck.details && (
                  <SafetyDetails>분석 결과: {lastDamageCheck.details}</SafetyDetails>
                )}
              </DamageCardFixed>
            ) : (
              <EmptyDamageArea>
                튜닝 완료 시 악기 상태를 확인합니다
              </EmptyDamageArea>
            )}
          </DamageStatusArea>
        )}
      </DamageSection>
      
      {/* 헤드 일러스트 (간단 SVG) - 하단 중앙 고정 */}
      <HeadSVGWrap>
        <svg width="180" height="180" viewBox="0 0 180 180">
          {/* 헤드 모양: 사진처럼 곡선, 밝은 갈색 */}
          <path
            d="M60 160 Q70 80 90 60 Q120 40 140 60 Q160 80 120 170 Z"
            fill="#bfa07a"
            stroke="#a88b6a"
            strokeWidth="3"
          />
          {/* 줄: 4현, 선택된 현만 파란색, 나머지는 연회색 */}
          {BASS_NOTES.map((n, i) => {
            const x = 80 + i * 16;
            return (
              <line
                key={n.name}
                x1={x}
                y1={160}
                x2={x - 2}
                y2={60}
                stroke={i === selected ? "#1976d2" : "#d0d2d6"}
                strokeWidth={i === selected ? 4 : 2.2}
              />
            );
          })}
          {/* 페그: 4개, 선택된 현만 파란색, 나머지는 회색 */}
          {BASS_NOTES.map((n, i) => {
            const x = 78 + i * 16;
            return (
              <circle
                key={n.name}
                cx={x - 2}
                cy={60}
                r={8}
                fill={i === selected ? "#1976d2" : "#bbb"}
                stroke="#888"
                strokeWidth="1.5"
              />
            );
          })}
        </svg>
      </HeadSVGWrap>
    </Wrapper>
  );
}
