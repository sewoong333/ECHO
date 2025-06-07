import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import TopBar from '../components/TopBar';

const ECHO_COLOR = '#2ed8b6';
const ECHO_ACCENT = '#1976d2';
const GUITAR_NOTES = [
  { name: 'E₄', freq: 329.63, label: '1번줄 (E4)' },
  { name: 'B₃', freq: 246.94, label: '2번줄 (B3)' },
  { name: 'G₃', freq: 196.00, label: '3번줄 (G3)' },
  { name: 'D₃', freq: 146.83, label: '4번줄 (D3)' },
  { name: 'A₂', freq: 110.00, label: '5번줄 (A2)' },
  { name: 'E₂', freq: 82.41, label: '6번줄 (E2)' },
];

function getDiffHz(freq, target) {
  return freq - target;
}

function getAdvice(diff) {
  if (diff == null) return '';
  if (Math.abs(diff) < 1) return '정확합니다!';
  if (diff > 0) return '좀 더 낮게 조정해';
  return '좀 더 높게 조정해';
}

function autoCorrelate(buf, sampleRate) {
  let SIZE = buf.length;
  let rms = 0;
  for (let i = 0; i < SIZE; i++) rms += buf[i] * buf[i];
  rms = Math.sqrt(rms / SIZE);
  if (rms < 0.01) return -1;
  let r1 = 0, r2 = SIZE - 1, thres = 0.2;
  for (let i = 0; i < SIZE / 2; i++) if (Math.abs(buf[i]) < thres) { r1 = i; break; }
  for (let i = 1; i < SIZE / 2; i++) if (Math.abs(buf[SIZE - i]) < thres) { r2 = SIZE - i; break; }
  buf = buf.slice(r1, r2);
  SIZE = buf.length;
  let c = new Array(SIZE).fill(0);
  for (let i = 0; i < SIZE; i++) for (let j = 0; j < SIZE - i; j++) c[i] = c[i] + buf[j] * buf[j + i];
  let d = 0; while (c[d] > c[d + 1]) d++;
  let maxval = -1, maxpos = -1;
  for (let i = d; i < SIZE; i++) {
    if (c[i] > maxval) {
      maxval = c[i];
      maxpos = i;
    }
  }
  let T0 = maxpos;
  return sampleRate / T0;
}

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
const TuningSelect = styled.div`
  background: ${ECHO_ACCENT};
  border-radius: 22px;
  display: flex;
  align-items: center;
  padding: 0 18px;
  height: 44px;
  box-shadow: 0 2px 8px #b2f0e6;
  cursor: pointer;
`;
const Select = styled.select`
  font-size: 18px;
  font-weight: 700;
  border-radius: 22px;
  background: transparent;
  color: #fff;
  border: none;
  outline: none;
  padding: 10px 0 10px 0;
  appearance: none;
  min-width: 110px;
`;
const Standard = styled.span`
  color: ${ECHO_ACCENT};
  font-weight: 600;
  font-size: 15px;
  margin-left: 12px;
`;
const TunerRow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0;
  max-width: 420px;
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
  border: 2.5px solid ${({ $active }) => ($active ? '#1976d2' : '#e0e2e6')};
  background: ${({ $active }) => ($active ? '#1976d2' : '#fff')};
  color: ${({ $active }) => ($active ? '#fff' : '#222')};
  font-weight: 900;
  font-size: 24px;
  outline: none;
  cursor: pointer;
  box-shadow: ${({ $active }) => ($active ? '0 2px 8px #b2f0e6' : 'none')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: background 0.18s, color 0.18s, border 0.18s;
  letter-spacing: 1px;
  padding: 0;
`;
const GaugeWrap = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  box-shadow: 0 4px 32px 0 rgba(46,216,182,0.10), 0 1.5px 8px 0 #b2f0e6;
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
  width: 180px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  z-index: 1;
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
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const sourceRef = useRef(null);
  const rafRef = useRef(null);

  useEffect(() => {
    let stopped = false;
    async function listen() {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const audioContext = new (window.AudioContext || window.webkitAudioContext)();
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
        const freq = autoCorrelate(buf, audioContext.sampleRate);
        if (freq > 0) {
          setPitch(freq);
          setDiff(getDiffHz(freq, GUITAR_NOTES[selected].freq));
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
    // eslint-disable-next-line
  }, [selected]);

  const angle = Math.max(-100, Math.min(100, diff || 0));
  const animatedAngle = useAnimatedAngle(angle);

  return (
    <Wrapper>
      <TopBar />
      <Frame>
        <TopRow>
          <Pill>
            기타 6현
            <PillArrow>▶</PillArrow>
          </Pill>
          <PillSub>표준</PillSub>
        </TopRow>
        <TunerRow>
          <StringCol>
            {GUITAR_NOTES.map((n, i) => (
              <StringBtn key={n.name} $active={i === selected} onClick={() => setSelected(i)}>
                <span style={{ fontSize: 22, fontWeight: 900, lineHeight: 1 }}>{n.name.split('₁')[0].split('₂')[0].split('₃')[0].split('₄')[0]}</span>
                <span style={{ fontSize: 15, fontWeight: 500, lineHeight: 1, marginTop: 1 }}>{n.name.match(/₁|₂|₃|₄/) ? n.name.match(/₁|₂|₃|₄/)[0] : ''}</span>
              </StringBtn>
            ))}
          </StringCol>
          <GaugeWrap>
            <GaugeBox style={{ background: 'none', boxShadow: 'none', borderRadius: 0, padding: 0, margin: '0 auto 18px auto', width: '100%', maxWidth: 420, height: 220 }}>
              <svg width="100%" height="180" viewBox="0 0 340 180" style={{ maxWidth: 420, display: 'block', margin: '0 auto' }}>
                {/* 반원형 회색 눈금 */}
                <path d="M20 150 A150 150 0 0 1 320 150" fill="none" stroke="#e0e2e6" strokeWidth="14" />
                {/* 파란 부채꼴: 중앙(정확)일 때만 표시, ±10도(합산 20도) */}
                {Math.abs(diff) < 1 && (
                  <path
                    d="M170 150 L153.16 52.64 A100 100 0 0 1 186.84 52.64 L170 150 Z"
                    fill="#1976d2" opacity="0.22"
                  />
                )}
                {/* 눈금선/숫자 */}
                {[...Array(11)].map((_, i) => {
                  const val = -100 + i * 20;
                  const angle = (val / 200) * 180;
                  const rad = (angle - 90) * Math.PI / 180;
                  const x1 = 170 + 120 * Math.cos(rad);
                  const y1 = 150 + 120 * Math.sin(rad);
                  const x2 = 170 + 140 * Math.cos(rad);
                  const y2 = 150 + 140 * Math.sin(rad);
                  return (
                    <g key={val}>
                      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={val === 0 ? '#1976d2' : '#b0b3b8'} strokeWidth={val === 0 ? 4 : 2} />
                      <text x={170 + 105 * Math.cos(rad)} y={150 + 105 * Math.sin(rad) + 7} textAnchor="middle" fontSize="18" fontWeight={val === 0 ? 700 : 400} fill={val === 0 ? '#222' : '#b0b3b8'}>{val}</text>
                    </g>
                  );
                })}
                {/* 바늘 */}
                <g style={{ transform: `rotate(${Math.max(-100, Math.min(100, diff || 0)) * 0.9}deg)`, transformOrigin: '170px 150px' }}>
                  <rect x="167" y="150" width="6" height="-70" rx="3" fill="#222" />
                  <circle cx="170" cy="150" r="16" fill="#fff" stroke="#222" strokeWidth="5" />
                  <circle cx="170" cy="150" r="9" fill="#222" />
                </g>
              </svg>
              {/* 음표/기준주파수 */}
              <div style={{ position: 'absolute', top: 10, left: 0, width: '100%', textAlign: 'center' }}>
                <div style={{ fontSize: 38, fontWeight: 900, color: '#222', letterSpacing: 2 }}>{GUITAR_NOTES[selected].name}</div>
                <div style={{ fontSize: 22, color: '#222', fontWeight: 900 }}>{GUITAR_NOTES[selected].freq.toFixed(1)}</div>
              </div>
            </GaugeBox>
            <PitchRow>
              <PitchNum>{pitch ? pitch.toFixed(1) : '--'}</PitchNum>
              <PitchHz>Hz</PitchHz>
            </PitchRow>
            <Advice>{getAdvice(diff)}</Advice>
          </GaugeWrap>
        </TunerRow>
        <StandardText>
          표준튜닝: E₄(329.6) - B₃(246.9) - G₃(196.0) - D₃(146.8) - A₂(110.0) - E₂(82.4)
        </StandardText>
      </Frame>
      <HeadSVGWrap>
        <svg width="180" height="180" viewBox="0 0 180 180">
          <rect x="70" y="60" width="40" height="90" rx="20" fill="#bfa07a" />
          {GUITAR_NOTES.map((n, i) => (
            <line key={n.name} x1={90 + (i-2.5)*10} y1={150} x2={90 + (i-2.5)*10} y2={60} stroke={i === selected ? ECHO_ACCENT : '#bbb'} strokeWidth={i === selected ? 4 : 2.5} />
          ))}
          {GUITAR_NOTES.map((n, i) => (
            <circle key={n.name} cx={90 + (i-2.5)*10} cy={60} r={7} fill={i === selected ? ECHO_ACCENT : '#888'} />
          ))}
        </svg>
      </HeadSVGWrap>
    </Wrapper>
  );
} 