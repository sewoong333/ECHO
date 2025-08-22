import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";
import { FaExclamationTriangle } from "react-icons/fa";

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

function checkSafety(pitch, targetFreq, volume) {
  if (!pitch || !targetFreq) return null;
  
  const freqRatio = pitch / targetFreq;
  
  // 극도로 높은 주파수 (줄이 끊어질 위험)
  if (freqRatio > 1.5) {
    return {
      type: 'danger',
      title: '⚠️ 위험!',
      message: '주파수가 너무 높습니다. 베이스줄이 끊어질 수 있어요!',
      action: '즉시 줄을 느슨하게 해주세요.'
    };
  }
  
  // 높은 주파수 경고
  if (freqRatio > 1.2) {
    return {
      type: 'warning', 
      title: '⚠️ 주의',
      message: '주파수가 높습니다. 조심스럽게 조정하세요.',
      action: '천천히 줄을 느슨하게 해주세요.'
    };
  }
  
  // 극도로 낮은 주파수
  if (freqRatio < 0.5) {
    return {
      type: 'info',
      title: 'ℹ️ 안내',
      message: '주파수가 너무 낮습니다.',
      action: '줄을 조금씩 조여주세요.'
    };
  }
  
  // 볼륨이 너무 높음 (스피커나 앰프 손상 방지)
  if (volume > 0.8) {
    return {
      type: 'warning',
      title: '🔊 볼륨 주의',
      message: '입력 볼륨이 너무 높습니다.',
      action: '기기 볼륨을 낮춰주세요.'
    };
  }
  
  return null;
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
  max-width: 320px;
  z-index: 1000;
  animation: slideInBounce 0.5s ease-out;
  
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
          
          // 안전 체크
          const safety = checkSafety(freq, BASS_NOTES[selected].freq, rms);
          setSafetyWarning(safety);
        } else {
          setPitch(null);
          setDiff(null);
          setSafetyWarning(null);
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
      
      {/* 안전 경고 알림 */}
      {safetyWarning && (
        <SafetyAlert type={safetyWarning.type}>
          <SafetyTitle>
            <FaExclamationTriangle />
            {safetyWarning.title}
          </SafetyTitle>
          <SafetyMessage>{safetyWarning.message}</SafetyMessage>
          <SafetyAction>{safetyWarning.action}</SafetyAction>
        </SafetyAlert>
      )}
      
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
                {/* 바늘 */}
                <g
                  style={{
                    transform: `rotate(${Math.max(-100, Math.min(100, diff || 0)) * 0.9}deg)`,
                    transformOrigin: "170px 150px",
                  }}
                >
                  <rect
                    x="167"
                    y="150"
                    width="6"
                    height="-70"
                    rx="3"
                    fill="#222"
                    filter="url(#shadow)"
                  />
                  <circle
                    cx="170"
                    cy="150"
                    r="16"
                    fill="#fff"
                    stroke="#222"
                    strokeWidth="5"
                  />
                  <circle cx="170" cy="150" r="9" fill="#222" />
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
          </GaugeWrap>
        </TunerRow>
        <StandardText>
          표준튜닝: G₂(98.0) - D₂(73.4) - A₁(55.0) - E₁(41.2)
        </StandardText>
      </Frame>
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
