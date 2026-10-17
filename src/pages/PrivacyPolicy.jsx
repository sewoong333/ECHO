import React from "react";
import styled from "styled-components";
import { FaArrowLeft, FaShieldAlt, FaUser, FaDatabase, FaLock } from "react-icons/fa";
import TopBar from "../components/TopBar";

const Container = styled.div`
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  padding-bottom: 80px;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  max-width: 600px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 32px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin-bottom: 8px;
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
`;

const Section = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
`;

const SectionTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const SectionContent = styled.div`
  font-size: 14px;
  line-height: 1.6;
  color: #555;
`;

const List = styled.ul`
  margin: 8px 0;
  padding-left: 20px;
`;

const ListItem = styled.li`
  margin-bottom: 4px;
`;

const Highlight = styled.span`
  background: #fff3cd;
  padding: 2px 4px;
  border-radius: 4px;
  font-weight: 600;
`;

const ContactInfo = styled.div`
  background: #e3f2fd;
  border-radius: 8px;
  padding: 16px;
  margin-top: 16px;
`;

const ContactTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #0d47a1;
  margin-bottom: 8px;
`;

const ContactText = styled.p`
  font-size: 14px;
  color: #555;
  margin: 0;
`;

export default function PrivacyPolicy() {

  return (
    <Container>
      <TopBar title="개인정보 처리방침" />
      
      <Content>
        <Header>
          <Title>개인정보 처리방침</Title>
          <Subtitle>최종 업데이트: 2024년 12월</Subtitle>
        </Header>

        <Section>
          <SectionTitle>
            <FaShieldAlt />
            개인정보 수집 및 이용
          </SectionTitle>
          <SectionContent>
            <p>ECHO는 다음과 같은 개인정보를 수집합니다:</p>
            <List>
              <ListItem>필수 정보: 이메일, 닉네임, 전화번호</ListItem>
              <ListItem>선택 정보: 프로필 사진, 주소, 생년월일</ListItem>
              <ListItem>자동 수집: IP 주소, 쿠키, 접속 로그</ListItem>
            </List>
            <p>
              수집된 정보는 <Highlight>서비스 제공, 고객 지원, 보안 강화</Highlight> 목적으로만 사용됩니다.
            </p>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>
            <FaUser />
            정보 이용 및 제공
          </SectionTitle>
          <SectionContent>
            <p>수집된 개인정보는 다음의 경우에만 이용됩니다:</p>
            <List>
              <ListItem>회원가입 및 본인 확인</ListItem>
              <ListItem>상품 거래 및 결제 처리</ListItem>
              <ListItem>고객 문의 및 불만 처리</ListItem>
              <ListItem>서비스 개선 및 신규 서비스 개발</ListItem>
            </List>
            <p>
              <Highlight>법령에 의해 요구되는 경우를 제외하고는</Highlight> 
              제3자에게 개인정보를 제공하지 않습니다.
            </p>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>
            <FaDatabase />
            개인정보 보유 및 이용기간
          </SectionTitle>
          <SectionContent>
            <p>개인정보는 다음 기간 동안 보관됩니다:</p>
            <List>
              <ListItem>회원 정보: 회원 탈퇴 시까지</ListItem>
              <ListItem>거래 정보: 5년 (전자상거래법)</ListItem>
              <ListItem>로그 정보: 3개월</ListItem>
              <ListItem>문의 정보: 3년</ListItem>
            </List>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>
            <FaLock />
            개인정보 보호 조치
          </SectionTitle>
          <SectionContent>
            <p>개인정보 보호를 위해 다음과 같은 조치를 취합니다:</p>
            <List>
              <ListItem>개인정보 암호화 저장</ListItem>
              <ListItem>접근 권한 관리 및 접근 로그 기록</ListItem>
              <ListItem>정기적인 보안 점검</ListItem>
              <ListItem>개인정보 처리방침 정기 검토</ListItem>
            </List>
          </SectionContent>
        </Section>

        <Section>
          <SectionTitle>
            <FaShieldAlt />
            이용자의 권리
          </SectionTitle>
          <SectionContent>
            <p>이용자는 언제든지 다음 권리를 행사할 수 있습니다:</p>
            <List>
              <ListItem>개인정보 열람 요구</ListItem>
              <ListItem>개인정보 정정·삭제 요구</ListItem>
              <ListItem>개인정보 처리정지 요구</ListItem>
              <ListItem>개인정보 제3자 제공 동의 철회</ListItem>
            </List>
          </SectionContent>
        </Section>

        <ContactInfo>
          <ContactTitle>개인정보 보호책임자</ContactTitle>
          <ContactText>
            이메일: privacy@echo.com<br />
            전화: 1588-0000<br />
            주소: 서울특별시 강남구 테헤란로 123
          </ContactText>
        </ContactInfo>
      </Content>
    </Container>
  );
}
