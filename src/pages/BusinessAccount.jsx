import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaStore, FaClock, FaBell } from "react-icons/fa";
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const IconContainer = styled.div`
  width: 120px;
  height: 120px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.3);
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin-bottom: 12px;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 32px;
  max-width: 300px;
`;

const ComingSoonBadge = styled.div`
  background: linear-gradient(135deg, #2ed8b6 0%, #26c4a8 100%);
  color: white;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 32px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const FeaturesList = styled.div`
  background: white;
  border-radius: 16px;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

const FeatureTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
  text-align: left;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const FeatureIcon = styled.div`
  width: 40px;
  height: 40px;
  background: #f8f9fa;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2ed8b6;
  font-size: 16px;
`;

const FeatureText = styled.div`
  flex: 1;
  font-size: 14px;
  color: #666;
  text-align: left;
`;

const NotificationBox = styled.div`
  background: #fff3cd;
  border: 1px solid #ffeaa7;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 24px;
  width: 100%;
  max-width: 400px;
`;

const NotificationText = styled.p`
  font-size: 14px;
  color: #856404;
  margin: 0;
  line-height: 1.4;
`;

const BackButton = styled.button`
  background: #2ed8b6;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #26c4a8;
    transform: translateY(-1px);
  }
`;

export default function BusinessAccount() {
  const navigate = useNavigate();

  const features = [
    {
      icon: <FaStore />,
      text: "전문 상점 운영 도구"
    },
    {
      icon: <FaBell />,
      text: "고급 알림 시스템"
    },
    {
      icon: <FaClock />,
      text: "24시간 고객 지원"
    }
  ];

  return (
    <Container>
      <TopBar title="비즈니스 계정" />
      
      <Content>
        <IconContainer>
          <FaStore size={48} color="white" />
        </IconContainer>
        
        <Title>비즈니스 계정</Title>
        <Subtitle>
          전문적인 상점 운영을 위한<br />
          특별한 기능들이 준비 중입니다
        </Subtitle>
        
        <ComingSoonBadge>
          <FaClock />
          준비 중
        </ComingSoonBadge>
        
        <FeaturesList>
          <FeatureTitle>예정된 기능</FeatureTitle>
          {features.map((feature, index) => (
            <FeatureItem key={index}>
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureText>{feature.text}</FeatureText>
            </FeatureItem>
          ))}
        </FeaturesList>
        
        <NotificationBox>
          <NotificationText>
            <strong>알림:</strong> 비즈니스 계정 기능은 현재 개발 중입니다. 
            곧 더 많은 기능과 함께 찾아뵙겠습니다.
          </NotificationText>
        </NotificationBox>
        
        <BackButton onClick={() => navigate(-1)}>
          돌아가기
        </BackButton>
      </Content>
    </Container>
  );
}
