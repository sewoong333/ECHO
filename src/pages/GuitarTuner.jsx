import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";

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
  if (Math.abs(diff) < 2) return "🎯 완벽합니다!";
  if (diff > 0) return "🔽 음정을 낮춰주세요";
  return "🔼 음정을 높여주세요";
}

// Simple and reliable pitch detection using FFT
function detectPitch(analyser) {
  const bufferLength = analyser.frequencyBinCount;
  const dataArray = new Uint8Array(bufferLength);
  analyser.getByteFrequencyData(dataArray);
  
  const sampleRate = analyser.context.sampleRate;
  const nyquist = sampleRate / 2;
  let maxValue = 0;
  let maxIndex = 0;
  
  // Find the frequency with maximum amplitude
  for (let i = 10; i < bufferLength / 4; i++) { // Limit search range
    if (dataArray[i] > maxValue && dataArray[i] > 50) { // Threshold filter
      maxValue = dataArray[i];
      maxIndex = i;
    }
  }
  
  if (maxValue < 50) return -1; // Not enough signal
  
  const frequency = (maxIndex * nyquist) / bufferLength;
  
  // Guitar frequency range filter
  if (frequency < 70 || frequency > 400) return -1;
  
  return frequency;
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

const TunerDisplay = styled.div`
  width: 100%;
  max-width: 400px;
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

const DifferenceDisplay = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  color: ${props => {
    if (!props.diff) return COLORS.textSecondary;
    if (Math.abs(props.diff) < 2) return COLORS.success;
    if (Math.abs(props.diff) < 5) return COLORS.warning;
    return COLORS.danger;
  }};
  margin-bottom: 16px;
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

const VolumeIndicator = styled.div`
  position: fixed;
  top: 100px;
  right: 24px;
  width: 60px;
  height: 200px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  z-index: 100;
  border: 1px solid rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(15px);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: flex-end;
  padding: 10px;
`;

const VolumeLevel = styled.div`
  width: 100%;
  height: ${props => Math.min(90, props.level * 100)}%;
  background: ${props => {
    if (props.level > 0.8) return `linear-gradient(0deg, ${COLORS.danger} 0%, ${COLORS.warning} 100%)`;
    if (props.level > 0.6) return `linear-gradient(0deg, ${COLORS.warning} 0%, ${COLORS.success} 100%)`;
    return `linear-gradient(0deg, ${COLORS.success} 0%, ${COLORS.highlight} 100%)`;
  }};
  transition: height 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(78, 205, 196, 0.6);
`;

export default function GuitarTuner() {
  const [pitch, setPitch] = useState(null);
  const [diff, setDiff] = useState(null);
  const [selected, setSelected] = useState(0);
  const [volumeLevel, setVolumeLevel] = useState(0);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const sourceRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    let stopped = false;
    async function startAudio() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        audioContextRef.current = audioContext;
        
        const analyser = audioContext.createAnalyser();
        analyser.fftSize = 2048;
        analyser.smoothingTimeConstant = 0.8;
        analyserRef.current = analyser;
        
        const source = audioContext.createMediaStreamSource(stream);
        source.connect(analyser);
        sourceRef.current = source;
        
        const detectAudio = () => {
          if (stopped) return;
          
          // Volume level calculation
          const bufferLength = analyser.frequencyBinCount;
          const dataArray = new Uint8Array(bufferLength);
          analyser.getByteFrequencyData(dataArray);
          
          let sum = 0;
          for (let i = 0; i < bufferLength; i++) {
            sum += dataArray[i];
          }
          const average = sum / bufferLength;
          setVolumeLevel(average / 255);
          
          // Pitch detection
          const freq = detectPitch(analyser);
          if (freq > 0) {
            setPitch(freq);
            const diffValue = getDiffHz(freq, GUITAR_NOTES[selected].freq);
            setDiff(diffValue);
          } else {
            setPitch(null);
            setDiff(null);
          }
          
          rafRef.current = requestAnimationFrame(detectAudio);
        };
        
        rafRef.current = requestAnimationFrame(detectAudio);
      } catch (error) {
        console.error('Audio access error:', error);
      }
    }
    
    startAudio();
    
    return () => {
      stopped = true;
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [selected]);

  return (
    <Wrapper>
      <TopBar />
      
      <VolumeIndicator>
        <VolumeLevel level={volumeLevel} />
      </VolumeIndicator>

      <Frame>
        <Header>
          <Title>🎸 기타 튜너</Title>
          <Subtitle>정확한 음정으로 완벽한 연주를</Subtitle>
        </Header>

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

          <TunerDisplay>
            <TargetFrequency>
              목표: <span>{GUITAR_NOTES[selected].name} - {GUITAR_NOTES[selected].freq.toFixed(1)}Hz</span>
            </TargetFrequency>
            
            <FrequencyDisplay>
              <FrequencyNumber>{pitch ? pitch.toFixed(1) : "--"}</FrequencyNumber>
              <FrequencyUnit>Hz</FrequencyUnit>
            </FrequencyDisplay>

            <DifferenceDisplay diff={diff}>
              {diff ? `${diff > 0 ? '+' : ''}${diff.toFixed(1)} Hz` : '음을 내주세요'}
            </DifferenceDisplay>

            <TuningAdvice>{getAdvice(diff)}</TuningAdvice>
          </TunerDisplay>

          <StatusInfo>
            표준 튜닝: E₄(329.6) - B₃(246.9) - G₃(196.0) - D₃(146.8) - A₂(110.0) - E₂(82.4)<br/>
            악기를 마이크에 가까이 하고 줄을 하나씩 튕겨주세요
          </StatusInfo>
        </MainDisplay>
      </Frame>
    </Wrapper>
  );
}