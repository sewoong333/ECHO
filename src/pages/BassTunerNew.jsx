import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";
import { FaExclamationTriangle, FaCheckCircle, FaToggleOn, FaToggleOff } from "react-icons/fa";

const ECHO_COLOR = "#2ed8b6";
const ECHO_ACCENT = "#1976d2";
const BASS_NOTES = [
  { name: "G₃", freq: 196.0, label: "1번줄 (G3)" },
  { name: "D₃", freq: 146.83, label: "2번줄 (D3)" },
  { name: "A₂", freq: 110.0, label: "3번줄 (A2)" },
  { name: "E₂", freq: 82.41, label: "4번줄 (E2)" },
];

const Container = styled.div`
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  color: white;
`;

const TunerContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 20px;
`;

const NoteSelector = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
  justify-content: center;
`;

const NoteButton = styled.button`
  background: ${props => props.$active ? ECHO_COLOR : 'rgba(255, 255, 255, 0.2)'};
  color: white;
  border: none;
  border-radius: 25px;
  padding: 12px 20px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.$active ? ECHO_COLOR : 'rgba(255, 255, 255, 0.3)'};
    transform: translateY(-2px);
  }
`;

const TunerDisplay = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  margin: 0 auto 30px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%);
  border-radius: 50%;
  border: 3px solid rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NeedleContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Needle = styled.div`
  position: absolute;
  width: 4px;
  height: 120px;
  background: linear-gradient(to bottom, #4CAF50, #66BB6A);
  border-radius: 2px;
  transform-origin: bottom center;
  transform: rotate(${props => props.$angle}deg);
  box-shadow: 0 0 10px rgba(76, 175, 80, 0.5);
  transition: transform 0.3s ease;
  z-index: 2;
`;

const NeedleTip = styled.div`
  position: absolute;
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 0;
  height: 0;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 12px solid #4CAF50;
`;

const CenterDot = styled.div`
  position: absolute;
  width: 12px;
  height: 12px;
  background: white;
  border-radius: 50%;
  z-index: 3;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
`;

const FrequencyDisplay = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const CurrentFreq = styled.div`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 10px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
`;

const TargetFreq = styled.div`
  font-size: 24px;
  opacity: 0.8;
  margin-bottom: 5px;
`;

const DiffDisplay = styled.div`
  font-size: 18px;
  color: ${props => {
    if (Math.abs(props.$diff) < 1) return '#4CAF50';
    if (Math.abs(props.$diff) < 5) return '#FF9800';
    return '#F44336';
  }};
  font-weight: 600;
`;

const StatusDisplay = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const StatusText = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${props => {
    if (props.$status === 'perfect') return '#4CAF50';
    if (props.$status === 'close') return '#FF9800';
    return '#F44336';
  }};
  margin-bottom: 10px;
`;

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

const ControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
`;

const ControlRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  padding: 15px;
`;

const ControlLabel = styled.div`
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
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

const DamageCard = styled.div`
  background: rgba(244, 67, 54, 0.1);
  border: 2px solid #F44336;
  border-radius: 15px;
  padding: 20px;
  margin: 20px 0;
  animation: slideIn 0.5s ease-out;
  
  @keyframes slideIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const DamageTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: #F44336;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

const DamageMessage = styled.div`
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 10px;
`;

const DamageAction = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #FF5722;
`;

const StartButton = styled.button`
  background: ${props => props.$recording ? '#F44336' : ECHO_COLOR};
  color: white;
  border: none;
  border-radius: 25px;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 100%;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export default function BassTunerNew() {
  const [selectedNote, setSelectedNote] = useState(BASS_NOTES[0]);
  const [currentFreq, setCurrentFreq] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [damageDetection, setDamageDetection] = useState(true);
  const [damageAlert, setDamageAlert] = useState(null);
  const [tuningStatus, setTuningStatus] = useState('none'); // none, close, perfect
  const [showSuccess, setShowSuccess] = useState(false);
  
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const microphoneRef = useRef(null);
  const animationRef = useRef(null);

  // 주파수 차이에 따른 침 각도 계산
  const getNeedleAngle = (freq, target) => {
    if (!freq || !target) return 0;
    const diff = freq - target;
    const maxAngle = 45; // 최대 45도
    const angle = Math.max(-maxAngle, Math.min(maxAngle, diff * 2));
    return angle;
  };

  // 튜닝 상태 판단
  const getTuningStatus = (freq, target) => {
    if (!freq || !target) return 'none';
    const diff = Math.abs(freq - target);
    if (diff < 1) return 'perfect';
    if (diff < 5) return 'close';
    return 'none';
  };

  // 주파수 분석 (베이스 특화)
  const analyzeFrequency = (buffer, sampleRate) => {
    const bufferLength = buffer.length;
    const dataArray = new Float32Array(bufferLength);
    
    // FFT 분석을 위한 데이터 준비
    for (let i = 0; i < bufferLength; i++) {
      dataArray[i] = buffer[i];
    }
    
    // 베이스 주파수 분석 (저주파 특화)
    let maxValue = 0;
    let maxIndex = 0;
    
    // 저주파 영역에 더 집중 (베이스 특성)
    const lowFreqEnd = Math.floor(bufferLength * 0.3);
    
    for (let i = 0; i < lowFreqEnd; i++) {
      const value = Math.abs(dataArray[i]);
      if (value > maxValue) {
        maxValue = value;
        maxIndex = i;
      }
    }
    
    const frequency = (maxIndex * sampleRate) / bufferLength;
    return frequency;
  };

  // 오디오 스트림 시작
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
      analyserRef.current = audioContextRef.current.createAnalyser();
      microphoneRef.current = audioContextRef.current.createMediaStreamSource(stream);
      
      analyserRef.current.fftSize = 2048;
      analyserRef.current.smoothingTimeConstant = 0.8;
      microphoneRef.current.connect(analyserRef.current);
      
      setIsRecording(true);
      analyzeAudio();
    } catch (error) {
      console.error('마이크 접근 실패:', error);
      alert('마이크 접근 권한이 필요합니다.');
    }
  };

  // 오디오 스트림 중지
  const stopRecording = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    if (microphoneRef.current) {
      microphoneRef.current.disconnect();
    }
    if (audioContextRef.current) {
      audioContextRef.current.close();
    }
    setIsRecording(false);
    setCurrentFreq(0);
    setTuningStatus('none');
    setShowSuccess(false);
  };

  // 오디오 분석
  const analyzeAudio = () => {
    if (!analyserRef.current) return;
    
    const bufferLength = analyserRef.current.frequencyBinCount;
    const dataArray = new Float32Array(bufferLength);
    analyserRef.current.getFloatFrequencyData(dataArray);
    
    // 주파수 분석
    const frequency = analyzeFrequency(dataArray, audioContextRef.current.sampleRate);
    setCurrentFreq(frequency);
    
    // 튜닝 상태 업데이트
    const status = getTuningStatus(frequency, selectedNote.freq);
    setTuningStatus(status);
    
    // 성공 표시
    if (status === 'perfect') {
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 2000);
    }
    
    // 손상 감지 (활성화된 경우에만)
    if (damageDetection && frequency > 0) {
      const damage = analyzeDamage(dataArray, frequency);
      setDamageAlert(damage);
    } else {
      setDamageAlert(null);
    }
    
    animationRef.current = requestAnimationFrame(analyzeAudio);
  };

  // 손상 분석 (베이스 특화)
  const analyzeDamage = (dataArray, frequency) => {
    if (!frequency || frequency < 30 || frequency > 500) return null;
    
    // 베이스 특화 신호 품질 분석
    let rms = 0;
    let peakCount = 0;
    let lowFreqEnergy = 0;
    
    for (let i = 0; i < dataArray.length; i++) {
      rms += dataArray[i] * dataArray[i];
      if (Math.abs(dataArray[i]) > 0.7) {
        peakCount++;
      }
      // 저주파 에너지 분석 (베이스 특성)
      if (i < dataArray.length * 0.2) {
        lowFreqEnergy += Math.abs(dataArray[i]);
      }
    }
    rms = Math.sqrt(rms / dataArray.length);
    lowFreqEnergy = lowFreqEnergy / (dataArray.length * 0.2);
    
    // 베이스 특화 손상 위험도 판단
    if (rms > 0.8 || peakCount > dataArray.length * 0.1 || lowFreqEnergy > 0.6) {
      return {
        type: 'warning',
        title: '⚠️ 베이스 상태 주의',
        message: '저주파 신호에 불안정성이 감지되었습니다.',
        action: '베이스 줄을 조심스럽게 조정하세요.'
      };
    }
    
    return null;
  };

  const getDiffText = (freq, target) => {
    if (!freq || !target) return '';
    const diff = freq - target;
    if (Math.abs(diff) < 1) return '정확!';
    if (diff > 0) return `+${diff.toFixed(1)}Hz`;
    return `${diff.toFixed(1)}Hz`;
  };

  const getAdviceText = (freq, target) => {
    if (!freq || !target) return '마이크에 소리를 내세요';
    const diff = freq - target;
    if (Math.abs(diff) < 1) return '완벽합니다!';
    if (diff > 0) return '줄을 느슨하게 해주세요';
    return '줄을 더 조여주세요';
  };

  return (
    <Container>
      <TopBar title="베이스 튜너" />
      
      <TunerContainer>
        <NoteSelector>
          {BASS_NOTES.map((note) => (
            <NoteButton
              key={note.name}
              $active={selectedNote.name === note.name}
              onClick={() => setSelectedNote(note)}
            >
              {note.name}
            </NoteButton>
          ))}
        </NoteSelector>

        <TunerDisplay>
          <NeedleContainer>
            <Needle 
              $angle={getNeedleAngle(currentFreq, selectedNote.freq)}
            >
              <NeedleTip />
            </Needle>
            <CenterDot />
          </NeedleContainer>
        </TunerDisplay>

        <FrequencyDisplay>
          <CurrentFreq>
            {currentFreq > 0 ? `${currentFreq.toFixed(1)}Hz` : '--'}
          </CurrentFreq>
          <TargetFreq>목표: {selectedNote.freq}Hz</TargetFreq>
          <DiffDisplay $diff={currentFreq - selectedNote.freq}>
            {getDiffText(currentFreq, selectedNote.freq)}
          </DiffDisplay>
        </FrequencyDisplay>

        <StatusDisplay>
          <StatusText $status={tuningStatus}>
            {getAdviceText(currentFreq, selectedNote.freq)}
          </StatusText>
        </StatusDisplay>

        <SuccessIndicator $show={showSuccess}>
          <FaCheckCircle size={24} color="#4CAF50" />
          <span>튜닝 완료!</span>
        </SuccessIndicator>

        <ControlsContainer>
          <ControlRow>
            <ControlLabel>
              <FaExclamationTriangle />
              손상 감지
            </ControlLabel>
            <ToggleButton
              $active={damageDetection}
              onClick={() => setDamageDetection(!damageDetection)}
            >
              {damageDetection ? <FaToggleOn /> : <FaToggleOff />}
            </ToggleButton>
          </ControlRow>
        </ControlsContainer>

        {damageAlert && damageDetection && (
          <DamageCard>
            <DamageTitle>
              <FaExclamationTriangle />
              {damageAlert.title}
            </DamageTitle>
            <DamageMessage>{damageAlert.message}</DamageMessage>
            <DamageAction>{damageAlert.action}</DamageAction>
          </DamageCard>
        )}

        <StartButton
          $recording={isRecording}
          onClick={isRecording ? stopRecording : startRecording}
        >
          {isRecording ? '튜닝 중지' : '튜닝 시작'}
        </StartButton>
      </TunerContainer>
    </Container>
  );
}
