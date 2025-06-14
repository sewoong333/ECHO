import React from 'react';
import styled from 'styled-components';
import TopBar from '../components/TopBar';

const MAX_WIDTH = '480px';
const SIDE_PADDING = '18px';

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e0f7fa 100%);
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin: 0 auto;
  padding: 32px 12px 100px 12px;
  box-sizing: border-box;
`;

const Hero = styled.section`
  width: 100vw;
  background: linear-gradient(120deg, #2ed8b6 60%, #ff7e36 100%);
  border-radius: 24px;
  box-shadow: 0 8px 32px rgba(46,216,182,0.10);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 12px;
  margin-bottom: 2.5rem;
  position: relative;
  overflow: hidden;
  margin-left: auto;
  margin-right: auto;
`;

const HeroImage = styled.img`
  width: 90%;
  max-width: 340px;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10);
  margin-bottom: 1.5rem;
  object-fit: cover;
`;

const HeroTitle = styled.h1`
  font-size: 2rem;
  font-weight: 900;
  color: #fff;
  margin-bottom: 0.7rem;
  text-shadow: 0 2px 8px rgba(0,0,0,0.08);
  text-align: center;
  line-height: 1.3;
  word-break: keep-all;
  white-space: normal;
`;

const HeroSubtitle = styled.p`
  font-size: 1.08rem;
  color: #f8fafc;
  font-weight: 500;
  text-align: center;
  margin-bottom: 0.5rem;
  line-height: 1.5;
  word-break: keep-all;
  white-space: normal;
`;

const Section = styled.section`
  width: 100vw;
  margin: 0 auto 2.5rem auto;
  padding-left: 12px;
  padding-right: 12px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-left: auto;
  margin-right: auto;
`;

const Card = styled.div`
  width: 100vw;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 16px rgba(46,216,182,0.08);
  padding: 1.5rem 0;
  display: flex;
  align-items: flex-start;
  gap: 1.2rem;
  transition: box-shadow 0.2s;
  margin-left: auto;
  margin-right: auto;
  &:hover {
    box-shadow: 0 6px 24px rgba(46,216,182,0.16);
  }
`;

const CardIcon = styled.div`
  font-size: 2.1rem;
  color: #2ed8b6;
  flex-shrink: 0;
`;

const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const CardTitle = styled.h3`
  font-size: 1.13rem;
  font-weight: 700;
  color: #1a4740;
`;

const CardDesc = styled.p`
  font-size: 1rem;
  color: #444;
  line-height: 1.5;
`;

const StepSection = styled(Section)`
  gap: 1.2rem;
`;

const StepCard = styled(Card)`
  border-left: 5px solid #2ed8b6;
  background: #f8fafc;
`;

const StepNumber = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  background: #ff7e36;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  font-weight: 800;
  margin-right: 1rem;
`;

const PromiseSection = styled(Section)`
  background: #f8f9fa;
  border-radius: 18px;
  box-shadow: 0 2px 10px rgba(46,216,182,0.07);
  padding: 1.3rem 0;
  margin-bottom: 2.5rem;
`;

const PromiseTitle = styled.h3`
  font-size: 1.08rem;
  font-weight: 700;
  color: #1a4740;
  margin-bottom: 0.7rem;
`;

const PromiseList = styled.ul`
  padding-left: 1.1rem;
  li {
    font-size: 0.98rem;
    color: #444;
    margin-bottom: 0.5rem;
    list-style: disc inside;
  }
`;

const CTAButton = styled.a`
  display: block;
  width: 100%;
  max-width: 320px;
  margin: 2.5rem auto 0 auto;
  background: linear-gradient(90deg, #2ed8b6 60%, #ff7e36 100%);
  color: #fff;
  font-size: 1.15rem;
  font-weight: 800;
  text-align: center;
  border-radius: 14px;
  padding: 1.1rem 0;
  box-shadow: 0 2px 10px rgba(46,216,182,0.13);
  text-decoration: none;
  letter-spacing: 0.01em;
  transition: background 0.18s, transform 0.13s;
  &:active {
    background: #2ed8b6;
    transform: scale(0.98);
  }
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 15px rgba(46,216,182,0.2);
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

export default function EchoShare() {
  return (
    <Wrapper>
      <TopBar />
      <Container>
        <Hero>
          <HeroImage src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80" alt="기타와 앰프가 놓인 음악 스튜디오" />
          <HeroTitle>악기 공유, 새로운 수익의 시작</HeroTitle>
          <HeroSubtitle>기타, 피아노, 드럼 등 다양한 악기를 쉽고 안전하게 공유하세요!</HeroSubtitle>
        </Hero>

        <Section>
          <Card>
            <CardIcon>🎸</CardIcon>
            <CardContent>
              <CardTitle>다양한 악기 공유</CardTitle>
              <CardDesc>기타, 피아노, 드럼 등 다양한 악기를 쉽고 빠르게 공유하고 대여할 수 있습니다.</CardDesc>
            </CardContent>
          </Card>
          <Card>
            <CardIcon>💰</CardIcon>
            <CardContent>
              <CardTitle>수익 창출</CardTitle>
              <CardDesc>사용하지 않는 악기를 통해 추가 수익을 창출해보세요.</CardDesc>
            </CardContent>
          </Card>
          <Card>
            <CardIcon>🤝</CardIcon>
            <CardContent>
              <CardTitle>안전한 거래</CardTitle>
              <CardDesc>검증된 사용자와 안전하게 거래할 수 있습니다.</CardDesc>
            </CardContent>
          </Card>
        </Section>

        <StepSection>
          <StepCard>
            <StepNumber>1</StepNumber>
            <CardContent>
              <CardTitle>악기 등록</CardTitle>
              <CardDesc>공유하고 싶은 악기를 사진과 함께 등록하세요.</CardDesc>
            </CardContent>
          </StepCard>
          <StepCard>
            <StepNumber>2</StepNumber>
            <CardContent>
              <CardTitle>대여 요청 수락</CardTitle>
              <CardDesc>대여 요청을 확인하고 수락하세요.</CardDesc>
            </CardContent>
          </StepCard>
          <StepCard>
            <StepNumber>3</StepNumber>
            <CardContent>
              <CardTitle>수익 창출</CardTitle>
              <CardDesc>악기 대여를 통해 수익을 창출하세요.</CardDesc>
            </CardContent>
          </StepCard>
        </StepSection>

        <PromiseSection>
          <PromiseTitle>ECHO SHARE의 약속</PromiseTitle>
          <PromiseList>
            <li>모든 악기는 검증된 사용자만 등록할 수 있습니다.</li>
            <li>안전한 거래를 위한 보증 시스템을 제공합니다.</li>
            <li>24시간 고객 지원 서비스를 제공합니다.</li>
          </PromiseList>
        </PromiseSection>

        <CTAButton href="/product-register">지금 시작하기</CTAButton>
        <Footer>
          <p>&copy; 2025 Puregold. All rights reserved.</p>
        </Footer>
      </Container>
    </Wrapper>
  );
}