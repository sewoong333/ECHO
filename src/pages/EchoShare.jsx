import React from 'react';
import styled from 'styled-components';
import TopBar from '../components/TopBar';

const Container = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  min-height: calc(100vh - 56px);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #fff;
  padding: 0 1rem;
  box-sizing: border-box;
`;

const Header = styled.header`
  width: 100%;
  box-sizing: border-box;
  padding: 1.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const Title = styled.h1`
  font-size: 2.25rem;
  font-weight: 900;
  color: #212529;
  margin-bottom: 0.75rem;
  line-height: 1.2;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #6c757d;
`;

const HeroImage = styled.div`
  width: 100%;
  margin-bottom: 2.5rem;
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    aspect-ratio: 16/9;
    border-radius: 0.75rem;
    display: block;
  }
`;

const Section = styled.section`
  width: 100%;
  max-width: 420px;
  box-sizing: border-box;
  margin: 0 auto 2.5rem auto;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid #f3f4f6;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 1.875rem;
  font-weight: 800;
  text-align: center;
  color: #212529;
  margin-bottom: 2rem;
`;

const BenefitCard = styled.div`
  width: 100%;
  max-width: 420px;
  margin: 0 auto 1rem auto;
  background: #fff;
  border-radius: 0.75rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.25rem;
  text-align: left;
  &:hover {
    transform: scale(1.02);
  }
`;

const Icon = styled.i`
  color: #0066ff;
  font-size: 1.875rem;
  margin-right: 1.25rem;
`;

const BenefitContent = styled.div`
  h3 {
    font-size: 1.25rem;
    font-weight: 700;
    color: #1f2937;
    margin-bottom: 0.25rem;
  }
  
  p {
    color: #495057;
    line-height: 1.6;
  }
`;

const StepCard = styled.div`
  width: 100%;
  max-width: 420px;
  margin: 0 auto 1rem auto;
  background: #fff;
  border-radius: 0.75rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
  border-left: 4px solid #0066ff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1.25rem;
  text-align: left;
`;

const StepNumber = styled.div`
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #0066ff;
  color: white;
  border-radius: 9999px;
  font-size: 1.125rem;
  font-weight: 700;
  margin-right: 1rem;
`;

const PromiseSection = styled.div`
  background: #fff3cd;
  border: 1px solid #ffeeba;
  border-radius: 0.75rem;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
`;

const PromiseTitle = styled.h3`
  font-size: 1.875rem;
  font-weight: 800;
  color: #664d03;
  margin-bottom: 1.25rem;
`;

const PromiseList = styled.ul`
  color: #664d03;
  font-size: 1.125rem;
  
  li {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.75rem;
    
    i {
      margin-right: 0.75rem;
      font-size: 1.5rem;
    }
  }
`;

const CTAButton = styled.a`
  display: block;
  width: 100%;
  padding: 1.25rem;
  background: #0066ff;
  color: white;
  font-weight: 700;
  font-size: 1.25rem;
  border-radius: 0.75rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: scale(1.02);
    background: #0047b3;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }
  
  &:active {
    transform: scale(0.98);
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

function EchoShare() {
  return (
    <>
      <TopBar />
      <Container>
        <Header>
          <Title>🎸 잠자는 악기를 수익으로!</Title>
          <Subtitle>ECHO의 새로운 '수익 공유' 프로그램</Subtitle>
        </Header>

        <HeroImage>
          <img src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80" alt="다양한 악기 이미지" />
        </HeroImage>

        <Section>
          <SectionTitle>✔️ 악기 판매자님, 이런 혜택을 놓치지 마세요!</SectionTitle>
          <BenefitCard>
            <Icon className="fas fa-money-bill-wave" />
            <BenefitContent>
              <h3>💰 추가 수익 발생</h3>
              <p>판매를 기다리는 동안, 내 악기가 스스로 돈을 벌어옵니다. 매월 정산되는 렌털 수익으로 쏠쏠한 추가 수입을 만들어보세요.</p>
            </BenefitContent>
          </BenefitCard>
          <BenefitCard>
            <Icon className="fas fa-rocket" />
            <BenefitContent>
              <h3>🚀 더 빠른 판매 기회</h3>
              <p>"일단 써보고 결정하자!" 렌털을 통해 당신의 악기를 체험한 고객은 가장 확실한 구매자가 됩니다. 판매 성공 확률이 훌쩍 올라갑니다.</p>
            </BenefitContent>
          </BenefitCard>
          <BenefitCard>
            <Icon className="fas fa-shield-alt" />
            <BenefitContent>
              <h3>🛡️ 완벽한 케어와 관리</h3>
              <p>렌털 전후로 ECHO의 전문 리페어팀이 내 악기의 컨디션을 최상으로 점검하고 관리합니다. 이제 악기 관리는 ECHO에 맡기세요.</p>
            </BenefitContent>
          </BenefitCard>
        </Section>

        <Section>
          <SectionTitle>✔️ 악기 구매자님, 후회 없는 선택을 경험하세요!</SectionTitle>
          <BenefitCard>
            <Icon className="fas fa-music" />
            <BenefitContent>
              <h3>🎶 사기 전, 마음껏 연주하고 결정!</h3>
              <p>사진만 보고 덜컥 구매하기 불안하셨죠? 이제 ECHO에서 원하는 악기를 충분히 렌털하고 체험한 뒤, 확신을 갖고 구매하세요.</p>
            </BenefitContent>
          </BenefitCard>
          <BenefitCard>
            <Icon className="fas fa-check-circle" />
            <BenefitContent>
              <h3>✅ 렌털비가 구매 할인으로!</h3>
              <p>체험에 사용된 렌털 비용의 일부를 구매 시 할인해 드립니다. 합리적인 가격으로 최고의 만족을 누리세요.</p>
            </BenefitContent>
          </BenefitCard>
          <BenefitCard>
            <Icon className="fas fa-certificate" />
            <BenefitContent>
              <h3>🎓 전문가 인증은 기본</h3>
              <p>모든 악기는 ECHO의 비파괴 정밀 검사를 통과한 '인증 중고 악기'입니다. 최상의 퀄리티를 보장합니다.</p>
            </BenefitContent>
          </BenefitCard>
        </Section>

        <Section>
          <SectionTitle>🤔 어떻게 이용하나요? 아주 간단합니다!</SectionTitle>
          <StepCard>
            <StepNumber>1</StepNumber>
            <BenefitContent>
              <h4>위탁 신청 및 동의</h4>
              <p>내 악기를 ECHO에 위탁하며 '판매 연계 렌털 서비스'에 동의해 주세요.</p>
            </BenefitContent>
          </StepCard>
          <StepCard>
            <StepNumber>2</StepNumber>
            <BenefitContent>
              <h4>ECHO의 진단 및 리스팅</h4>
              <p>전문가가 악기를 진단/평가하고, 판매와 렌털이 모두 가능하도록 등록합니다.</p>
            </BenefitContent>
          </StepCard>
          <StepCard>
            <StepNumber>3</StepNumber>
            <BenefitContent>
              <h4>수익 발생 및 판매</h4>
              <p>렌털 수익은 매월 정산! 악기가 판매되면 안전하게 거래를 마무리합니다.</p>
            </BenefitContent>
          </StepCard>
        </Section>

        <Section>
          <PromiseSection>
            <PromiseTitle>ECHO의 약속: 안심하세요, 저희가 책임집니다!</PromiseTitle>
            <PromiseList>
              <li><i className="fas fa-handshake" /> 렌털 중 파손/분실 보험 적용</li>
              <li><i className="fas fa-handshake" /> 렌털 이용 시 안전 보증금 제도 운영</li>
              <li><i className="fas fa-handshake" /> 전문 리페어팀의 꼼꼼한 악기 관리</li>
            </PromiseList>
          </PromiseSection>
        </Section>

        <CTAButton href="#">
          ➡️ 내 악기 수익 잠재력 확인하기
        </CTAButton>

        <Footer>
          <p>&copy; 2025 Puregold. All rights reserved.</p>
        </Footer>
      </Container>
    </>
  );
}

export default EchoShare; 