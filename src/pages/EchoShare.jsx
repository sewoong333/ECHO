import React, { useState } from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e0f7fa 100%);
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  box-sizing: border-box;
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 100vw;
  min-width: 0;
  margin: 0 auto;
  padding: 0 0 80px 0;
  box-sizing: border-box;
  overflow-x: hidden;
`;

const Hero = styled.section`
  width: 100%;
  max-width: 480px;
  background: linear-gradient(120deg, #2ed8b6 60%, #26c4a8 100%);
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(46, 216, 182, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2.2rem 14px 2.5rem 14px;
  margin: 0 auto 2.2rem auto;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
`;

const HeroBadgeRow = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1.1rem;
  flex-wrap: wrap;
`;

const Badge = styled.span`
  background: #fff;
  color: #2ed8b6;
  font-weight: 700;
  font-size: 0.98rem;
  border-radius: 12px;
  padding: 0.32em 0.9em;
  box-shadow: 0 2px 8px rgba(46, 216, 182, 0.1);
  display: inline-block;
`;

const HeroTitle = styled.h1`
  font-size: 2.4rem;
  font-weight: 900;
  color: #222;
  background: none;
  text-shadow:
    0 2px 8px rgba(34, 34, 34, 0.1),
    0 0px 0px #fff;
  margin-bottom: 0.7rem;
  text-align: center;
  line-height: 1.3;
  word-break: keep-all;
`;

const HeroSubtitle = styled.p`
  font-size: 1.13rem;
  color: #f8fafc;
  font-weight: 500;
  text-align: center;
  margin-bottom: 1.2rem;
  line-height: 1.5;
`;

const CTAButton = styled.a`
  display: block;
  width: 100%;
  max-width: 360px;
  margin: 1.7rem auto 0 auto;
  background: #222;
  color: #fff;
  font-size: 1.23rem;
  font-weight: 900;
  text-align: center;
  border-radius: 18px;
  padding: 1.3rem 0;
  box-shadow: 0 6px 24px rgba(34, 34, 34, 0.18);
  text-decoration: none;
  letter-spacing: 0.01em;
  border: 2.5px solid #fff;
  outline: 2.5px solid #2ed8b6;
  transition:
    background 0.18s,
    color 0.18s,
    box-shadow 0.18s,
    border 0.18s;
  &:active {
    background: #2ed8b6;
    color: #fff;
    transform: scale(0.98);
  }
  &:hover {
    background: #fff;
    color: #222;
    border: 2.5px solid #2ed8b6;
    outline: 2.5px solid #fff;
    box-shadow: 0 10px 32px rgba(46, 216, 182, 0.22);
  }
`;

// --- Option Simulator ---
const OptionSection = styled.section`
  width: 100%;
  max-width: 480px;
  margin: 0 auto 2.2rem auto;
  padding: 0 10px;
  box-sizing: border-box;
`;

const OptionCardRow = styled.div`
  display: flex;
  gap: 0.7rem;
  margin-bottom: 1.2rem;
  flex-wrap: wrap;
`;

const OptionCard = styled.button`
  flex: 1 1 0;
  min-width: 120px;
  background: ${({ active }) =>
    active ? "linear-gradient(90deg, #2ed8b6 60%, #26c4a8 100%)" : "#fff"}};
  color: ${({ active }) => (active ? "#fff" : "#1a4740")};
  border: none;
  border-radius: 18px;
  box-shadow: ${({ active }) =>
    active
      ? "0 6px 24px rgba(46,216,182,0.18)"
      : "0 2px 10px rgba(46,216,182,0.07)"};
  padding: 1.3rem 0.7rem;
  font-size: 1.13rem;
  font-weight: 800;
  cursor: pointer;
  transition:
    background 0.18s,
    color 0.18s,
    box-shadow 0.18s,
    transform 0.18s;
  outline: ${({ active }) => (active ? "2px solid #26c4a8" : "none")};
  transform: ${({ active }) => (active ? "scale(1.06)" : "scale(1)")};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  &:hover {
    background: linear-gradient(90deg, #2ed8b6 60%, #26c4a8 100%);
    color: #fff;
    transform: scale(1.06);
    box-shadow: 0 8px 28px rgba(46, 216, 182, 0.22);
  }
`;

const OptionDesc = styled.div`
  font-size: 0.97rem;
  color: #888;
  margin-bottom: 1.1rem;
  text-align: left;
`;

const FormRow = styled.div`
  display: flex;
  gap: 0.7rem;
  margin-bottom: 1.1rem;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.7rem 0.9rem;
  border-radius: 10px;
  border: 1.5px solid #e0e0e0;
  font-size: 1rem;
  background: #f8fafc;
  outline: none;
`;

const Select = styled.select`
  flex: 1;
  padding: 0.7rem 0.9rem;
  border-radius: 10px;
  border: 1.5px solid #e0e0e0;
  font-size: 1rem;
  background: #f8fafc;
  outline: none;
`;

const ResultBox = styled.div`
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 10px rgba(46, 216, 182, 0.07);
  padding: 1.2rem 10px;
  margin-bottom: 1.2rem;
  text-align: center;
  font-size: 1.13rem;
  color: #1a4740;
  font-weight: 700;
`;

// --- Other Sections (문제제기, 신뢰, 절차, 후기, 혜택, FAQ, 푸터) ---
const Section = styled.section`
  width: 100%;
  max-width: 480px;
  margin: 0 auto 2.5rem auto;
  padding: 1.5rem 14px;
  background: #fff;
  border-radius: 22px;
  box-shadow: 0 4px 18px rgba(46, 216, 182, 0.1);
  box-sizing: border-box;
`;

const SectionTitle = styled.h2`
  font-size: 1.18rem;
  font-weight: 800;
  color: #2ed8b6;
  margin-bottom: 0.7rem;
`;

const SectionDesc = styled.p`
  font-size: 1.05rem;
  color: #444;
  margin-bottom: 0.2rem;
  text-align: left;
`;

const TrustRow = styled.div`
  display: flex;
  gap: 1.1rem;
  margin-bottom: 1.1rem;
  flex-wrap: wrap;
`;

const TrustBadge = styled.div`
  background: #e0f7fa;
  color: #2ed8b6;
  font-weight: 800;
  border-radius: 12px;
  padding: 0.7em 1.2em;
  font-size: 1.05rem;
  box-shadow: 0 2px 8px rgba(46, 216, 182, 0.1);
  display: flex;
  align-items: center;
  gap: 0.5em;
`;

const StepRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

const StepCard = styled.div`
  display: flex;
  align-items: flex-start;
  background: #f8fafc;
  border-radius: 12px;
  padding: 1rem 10px;
  gap: 1rem;
  border-left: 5px solid #2ed8b6;
`;

const StepNumber = styled.div`
  width: 2.1rem;
  height: 2.1rem;
  background: #2ed8b6;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 800;
  margin-right: 0.7rem;
`;

const ReviewSection = styled(Section)`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 10px rgba(46, 216, 182, 0.07);
  padding: 1.2rem 10px 1.5rem 10px;
  margin-bottom: 1.7rem;
`;

const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;

const ReviewCard = styled.div`
  background: #f8fafc;
  border-radius: 16px;
  padding: 1.1rem 12px;
  font-size: 1.08rem;
  color: #444;
  box-shadow: 0 2px 10px rgba(46, 216, 182, 0.1);
  display: flex;
  align-items: center;
  gap: 1.1rem;
`;

const ReviewAvatar = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.7rem;
  border: 2.5px solid #2ed8b6;
`;

const ReviewContent = styled.div`
  flex: 1;
`;

const ReviewUser = styled.div`
  font-size: 1.05rem;
  color: #2ed8b6;
  font-weight: 900;
`;

const ReviewStars = styled.div`
  color: #ffb300;
  font-size: 1.25rem;
  margin-bottom: 0.2rem;
`;

const FomoSection = styled(Section)`
  background: linear-gradient(90deg, #fffde7 60%, #ffe082 100%);
  border: 2.5px solid #ffb300;
  box-shadow: 0 4px 18px rgba(255, 193, 7, 0.13);
  text-align: center;
`;

const FomoTitle = styled.h3`
  font-size: 1.13rem;
  font-weight: 800;
  color: #2ed8b6;
  margin-bottom: 0.7rem;
`;

const FomoDesc = styled.p`
  font-size: 1.01rem;
  color: #b26a00;
  margin-bottom: 0.2rem;
`;

const FAQSection = styled(Section)`
  background: #f8fafc;
  border: 2px solid #e0f7fa;
`;

const FAQList = styled.ul`
  padding-left: 1.1rem;
  li {
    font-size: 0.98rem;
    color: #444;
    margin-bottom: 0.5rem;
    list-style: disc inside;
  }
`;

const Footer = styled.footer`
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  color: #6c757d;
  font-size: 0.875rem;
  margin-top: 2.5rem;
`;

// --- Option Simulator Logic ---
const OPTIONS = [
  {
    key: "quick",
    label: "급매가격",
    desc: "당장 빨리 팔고 싶은 분",
    calc: (base) => Math.round(base * 0.7),
  },
  {
    key: "consign",
    label: "위탁판매",
    desc: "천천히 팔아도 되는데 위탁으로 판매하고 싶은 분",
    calc: (base) => Math.round(base * 0.9),
  },
  {
    key: "rental",
    label: "위탁임대",
    desc: "팔기는 아까운데 돈이 필요하신 분",
    calc: (base) => Math.round(base * 0.08), // 월 임대료(8% 가정)
  },
];

const INSTRUMENTS = [
  { label: "기타", value: "guitar" },
  { label: "피아노", value: "piano" },
  { label: "드럼", value: "drum" },
  { label: "신디사이저", value: "synth" },
  { label: "관악기", value: "wind" },
  { label: "현악기", value: "string" },
  { label: "기타(직접입력)", value: "custom" },
];

const BRANDS = {
  guitar: ["Fender", "Gibson", "Yamaha", "Cort", "Squier", "기타(직접입력)"],
  piano: [
    "Yamaha",
    "Kawai",
    "Samick",
    "Young Chang",
    "Roland",
    "기타(직접입력)",
  ],
  drum: ["Yamaha", "Pearl", "Tama", "Mapex", "Roland", "기타(직접입력)"],
  synth: ["Roland", "Korg", "Yamaha", "Nord", "Arturia", "기타(직접입력)"],
  wind: ["Yamaha", "Selmer", "Jupiter", "Yanagisawa", "기타(직접입력)"],
  string: ["Yamaha", "Stentor", "Eastman", "기타(직접입력)"],
  custom: ["직접입력"],
};

const MODELS = {
  Fender: ["Stratocaster", "Telecaster", "Jazzmaster", "기타(직접입력)"],
  Gibson: ["Les Paul", "SG", "ES-335", "기타(직접입력)"],
  Yamaha: ["C40", "U1", "P-45", "P-125", "기타(직접입력)"],
  Roland: ["FP-30", "TD-1DMK", "FA-06", "기타(직접입력)"],
  Korg: ["Kross 2", "Minilogue", "기타(직접입력)"],
  Squier: ["Affinity", "Classic Vibe", "기타(직접입력)"],
  기타: ["직접입력"],
  "기타(직접입력)": ["직접입력"],
  직접입력: ["직접입력"],
  // ... 기타 브랜드별 모델 추가 가능
};

const CONDITIONS = [
  { label: "최상", value: 1.0 },
  { label: "양호", value: 0.85 },
  { label: "보통", value: 0.7 },
];

// --- Main Component ---
export default function EchoShare() {
  // Option Simulator State
  const [selectedOption, setSelectedOption] = useState("quick");
  const [instrument, setInstrument] = useState("guitar");
  const [condition, setCondition] = useState(1.0);
  const [customBase, _setCustomBase] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");
  const [apiResult, setApiResult] = useState(null);
  const [customInstrument, setCustomInstrument] = useState("");
  const [customBrand, setCustomBrand] = useState("");
  const [customModel, setCustomModel] = useState("");

  // 계산 로직
  const _basePrice =
    instrument === "custom"
      ? Number(customBase) || 500000
      : INSTRUMENTS.find((i) => i.value === instrument).base;
  const _conditionRate = Number(condition);
  const _finalBase = Math.round(_basePrice * _conditionRate);
  const _selected = OPTIONS.find((o) => o.key === selectedOption);
  const _result = _selected.calc(_finalBase);

  // 옵션 설명
  const _optionDesc = OPTIONS.find((o) => o.key === selectedOption).desc;

  // 후기 더미
  const reviews = [
    {
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "김민수",
      stars: 5,
      text: "급매로 바로 팔아서 공간도 확보, 현금도 생겼어요!",
    },
    {
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "이수진",
      stars: 5,
      text: "위탁판매로 시세에 가깝게 팔 수 있어 만족!",
    },
    {
      avatar: "https://randomuser.me/api/portraits/men/65.jpg",
      name: "박지훈",
      stars: 4,
      text: "위탁임대로 매달 임대료가 들어와요!",
    },
  ];

  const isCustomInstrument = instrument === "custom";
  const isCustomBrand = brand === "기타(직접입력)" || brand === "직접입력";
  const isCustomModel = model === "기타(직접입력)" || model === "직접입력";
  const isFormValid =
    (isCustomInstrument ? customInstrument.trim() : instrument) &&
    (isCustomBrand ? customBrand.trim() : brand) &&
    (isCustomModel ? customModel.trim() : model) &&
    condition;

  async function handleEstimate() {
    setShowResult(false);
    setApiError("");
    setApiResult(null);
    setLoading(true);
    try {
      const reqInstrument =
        instrument === "custom" ? customInstrument : instrument;
      const reqBrand =
        brand === "기타(직접입력)" || brand === "직접입력"
          ? customBrand
          : brand;
      const reqModel =
        model === "기타(직접입력)" || model === "직접입력"
          ? customModel
          : model;
      const apiUrl = "/api/estimatePrice";
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          instrument: reqInstrument,
          brand: reqBrand,
          model: reqModel,
          condition,
        }),
      });
      const text = await res.text();
      if (!res.ok) throw new Error(`API 오류: ${res.status} ${text}`);
      const data = JSON.parse(text);
      setApiResult(data);
      setShowResult(true);
    } catch (e) {
      setApiError("예상금액 조회에 실패했습니다. " + (e.message || ""));
    } finally {
      setLoading(false);
    }
  }

  return (
    <Wrapper>
      <TopBar />
      <Container>
        {/* Hero Section */}
        <Hero>
          <HeroBadgeRow>
            <Badge>누적 거래 1,200건+</Badge>
            <Badge>월 임대료 15만원+</Badge>
            <Badge>만족도 98%</Badge>
          </HeroBadgeRow>
          <HeroTitle>내 악기, 얼마에 팔거나 빌릴 수 있을까요?</HeroTitle>
          <HeroSubtitle>
            내 악기, 한 달에 얼마 벌 수 있을지 궁금하다면?
            <br />
            아래 <b>"내 악기 예상금액 확인"</b> 버튼을 꼭 눌러보세요!
            <br />
            3가지 방법(급매/위탁/임대) 중 내 상황에 맞는 최적의 금액을 바로
            확인할 수 있습니다.
          </HeroSubtitle>
          <CTAButton
            href="#simulator"
            style={{
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
          >
            <span role="img" aria-label="계산">
              💸
            </span>{" "}
            내 악기 예상 금액 확인하기
          </CTAButton>
        </Hero>

        {/* Option Simulator Section */}
        <OptionSection id="simulator">
          <SectionTitle>내 상황에 맞는 옵션을 선택하세요</SectionTitle>
          <OptionCardRow>
            {OPTIONS.map((opt) => (
              <OptionCard
                key={opt.key}
                active={selectedOption === opt.key}
                onClick={() => {
                  setSelectedOption(opt.key);
                  setShowResult(false);
                }}
              >
                {opt.label}
              </OptionCard>
            ))}
          </OptionCardRow>
          <OptionDesc>
            아래에서 <b>내 악기 종류와 상태</b>를 선택하고,{" "}
            <b>"예상금액 확인"</b> 버튼을 눌러보세요.
            <br />
            내 악기, 지금 팔면 얼마? 빌리면 한 달에 얼마?
            <br />
            <span style={{ color: "#2ed8b6", fontWeight: 700 }}>
              지금 바로 확인!
            </span>
          </OptionDesc>
          <FormRow
            style={{
              flexDirection: "column",
              alignItems: "stretch",
              gap: "1.1rem",
              marginBottom: "1.1rem",
            }}
          >
            <label style={{ fontWeight: 600, marginBottom: 4 }}>
              악기 종류
              <Select
                value={instrument}
                onChange={(e) => {
                  setInstrument(e.target.value);
                  setBrand("");
                  setModel("");
                  setCustomInstrument("");
                  setShowResult(false);
                }}
              >
                <option value="">선택</option>
                {INSTRUMENTS.map((i) => (
                  <option key={i.value} value={i.value}>
                    {i.label}
                  </option>
                ))}
              </Select>
              {instrument === "custom" && (
                <Input
                  type="text"
                  placeholder="직접 입력"
                  value={customInstrument}
                  onChange={(e) => setCustomInstrument(e.target.value)}
                  style={{ marginTop: 6 }}
                />
              )}
            </label>
            <label style={{ fontWeight: 600, marginBottom: 4 }}>
              브랜드
              <Select
                value={brand}
                onChange={(e) => {
                  setBrand(e.target.value);
                  setModel("");
                  setCustomBrand("");
                  setShowResult(false);
                }}
                disabled={!instrument}
              >
                <option value="">선택</option>
                {(BRANDS[instrument] || []).map((b) => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </Select>
              {(brand === "기타(직접입력)" || brand === "직접입력") && (
                <Input
                  type="text"
                  placeholder="직접 입력"
                  value={customBrand}
                  onChange={(e) => setCustomBrand(e.target.value)}
                  style={{ marginTop: 6 }}
                />
              )}
            </label>
            <label style={{ fontWeight: 600, marginBottom: 4 }}>
              모델명
              <Select
                value={model}
                onChange={(e) => {
                  setModel(e.target.value);
                  setCustomModel("");
                  setShowResult(false);
                }}
                disabled={!brand}
              >
                <option value="">선택</option>
                {(MODELS[brand] || []).map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </Select>
              {(model === "기타(직접입력)" || model === "직접입력") && (
                <Input
                  type="text"
                  placeholder="직접 입력"
                  value={customModel}
                  onChange={(e) => setCustomModel(e.target.value)}
                  style={{ marginTop: 6 }}
                />
              )}
            </label>
            <label style={{ fontWeight: 600, marginBottom: 4 }}>
              상태
              <Select
                value={condition}
                onChange={(e) => {
                  setCondition(e.target.value);
                  setShowResult(false);
                }}
              >
                <option value="최상">최상</option>
                <option value="양호">양호</option>
                <option value="보통">보통</option>
                <option value="하">하</option>
              </Select>
            </label>
          </FormRow>
          <CTAButton
            as="button"
            onClick={handleEstimate}
            style={{
              margin: "0 auto 1.1rem auto",
              fontSize: "1.08rem",
              display: "block",
            }}
            disabled={loading || !isFormValid}
          >
            {loading ? (
              "조회 중..."
            ) : (
              <>
                <span role="img" aria-label="계산">
                  🔍
                </span>{" "}
                예상 금액 확인
              </>
            )}
          </CTAButton>
          {apiError && (
            <div
              style={{ color: "#ff4d4f", textAlign: "center", marginBottom: 8 }}
            >
              {apiError}
            </div>
          )}
          {showResult && apiResult && (
            <ResultBox>
              예상 시세:{" "}
              <span style={{ color: "#2ed8b6", fontWeight: 800 }}>
                {apiResult.average.toLocaleString()}원
              </span>
              <div style={{ fontSize: 13, color: "#888", marginTop: 4 }}>
                참고 거래 {apiResult.count}건
              </div>
            </ResultBox>
          )}
        </OptionSection>

        {/* 문제제기 & 공감 */}
        <Section>
          <SectionTitle>혹시 이런 고민 있으신가요?</SectionTitle>
          <SectionDesc>
            방치된 악기, 공간만 차지하고 있지 않나요? <br />
            중고거래는 불안하고, 대여는 더더욱 걱정된다면? <br />
            <b>내 악기의 가치를 지금 바로 확인해보세요!</b>
          </SectionDesc>
        </Section>

        {/* 신뢰/검증 시스템 */}
        <Section>
          <SectionTitle>ECHO 검증 시스템</SectionTitle>
          <TrustRow>
            <TrustBadge>✔ 실명 인증</TrustBadge>
            <TrustBadge>🛡️ 사진·정보 검증</TrustBadge>
            <TrustBadge>🌟 관리자 승인</TrustBadge>
            <TrustBadge>💬 24시간 상담</TrustBadge>
          </TrustRow>
          <SectionDesc>3단계 검증으로 사고·분쟁 걱정 없이 안심!</SectionDesc>
          <SectionDesc>
            ECHO 인증마크로 신뢰도 UP, 대여/판매 성공률 UP!
          </SectionDesc>
        </Section>

        {/* 절차 안내 */}
        <Section>
          <SectionTitle>진행 절차</SectionTitle>
          <StepRow>
            <StepCard>
              <StepNumber>1</StepNumber>
              <div>
                <b>악기 등록</b> <br />
                사진·정보 입력, 실명 인증
              </div>
            </StepCard>
            <StepCard>
              <StepNumber>2</StepNumber>
              <div>
                <b>ECHO 검증</b> <br />
                관리자 확인 및 인증마크 부여
              </div>
            </StepCard>
            <StepCard>
              <StepNumber>3</StepNumber>
              <div>
                <b>공유/판매/임대 시작</b> <br />
                검증 완료 후 안전하게 진행
              </div>
            </StepCard>
          </StepRow>
        </Section>

        {/* 후기 */}
        <ReviewSection>
          <SectionTitle>실제 사용자 후기</SectionTitle>
          <ReviewList>
            {reviews.map((r) => (
              <ReviewCard key={r.name}>
                <ReviewAvatar src={r.avatar} alt={r.name} />
                <ReviewContent>
                  <ReviewStars>
                    {"★".repeat(r.stars)}
                    {"☆".repeat(5 - r.stars)}
                  </ReviewStars>
                  <div style={{ marginBottom: "0.2rem" }}>{r.text}</div>
                  <ReviewUser>{r.name}</ReviewUser>
                </ReviewContent>
              </ReviewCard>
            ))}
          </ReviewList>
        </ReviewSection>

        {/* FOMO/혜택 */}
        <FomoSection>
          <FomoTitle>선착순 100명 한정 혜택!</FomoTitle>
          <FomoDesc>
            <b>내 악기 예상금액 확인</b> 후, 지금 검증받으면{" "}
            <b>첫 거래 수수료 0%</b> + <b>추가 보너스 지급</b>!<br />
            선착순 100명 한정,{" "}
            <span style={{ color: "#2ed8b6" }}>지금 바로 확인하세요!</span>
          </FomoDesc>
          <CTAButton href="/product-register">
            <span role="img" aria-label="등록">
              🎉
            </span>{" "}
            지금 바로 시작하기
          </CTAButton>
        </FomoSection>

        {/* FAQ */}
        <FAQSection>
          <SectionTitle>자주 묻는 질문</SectionTitle>
          <FAQList>
            <li>
              <b>Q. 내 악기 예상금액 확인은 무료인가요?</b>
              <br />
              A. 네! 완전 무료입니다. 아래 버튼을 꼭 눌러보세요.
            </li>
            <li>
              <b>Q. 검증 소요 시간은?</b>
              <br />
              A. 평균 1시간 이내, 최대 24시간 이내 완료!
            </li>
            <li>
              <b>Q. 검증/등록 후 바로 판매·임대 가능한가요?</b>
              <br />
              A. 네! 검증 완료 즉시 바로 시작할 수 있습니다.
            </li>
            <li>
              <b>Q. 문의는 어떻게 하나요?</b>
              <br />
              A. 우측 하단 채팅버튼 또는 1:1 문의를 이용해 주세요.
            </li>
          </FAQList>
        </FAQSection>

        {/* 마지막 CTA */}
        <CTAButton
          href="/product-register"
          style={{
            marginTop: "0.5rem",
            fontSize: "1.13rem",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          <span role="img" aria-label="등록">
            🚀
          </span>{" "}
          내 악기 검증/등록하고 수익 시작하기
        </CTAButton>
        <Footer>
          <p>&copy; 2025 Puregold. All rights reserved.</p>
        </Footer>
      </Container>
    </Wrapper>
  );
}
