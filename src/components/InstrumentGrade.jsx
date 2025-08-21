import React from 'react';
import styled from 'styled-components';

const GradeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 10px 0;
`;

const GradeBadge = styled.div`
  padding: 4px 12px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 0.8rem;
  background: ${props => {
    switch(props.grade) {
      case 'S': return 'linear-gradient(135deg, #FFD700, #FFA500)';
      case 'A': return 'linear-gradient(135deg, #4CAF50, #45a049)';
      case 'B': return 'linear-gradient(135deg, #2196F3, #1976D2)';
      case 'C': return 'linear-gradient(135deg, #FF9800, #F57C00)';
      default: return '#666';
    }
  }};
  color: white;
  box-shadow: 0 2px 8px rgba(0,0,0,0.2);
`;

const GradeDescription = styled.span`
  font-size: 0.85rem;
  color: var(--color-text-secondary);
`;

const gradeDescriptions = {
  'S': '최상급 - 새것과 동일',
  'A': '우수 - 사용감 거의 없음',
  'B': '양호 - 약간의 사용감',
  'C': '보통 - 사용감 있음'
};

export const InstrumentGrade = ({ grade, showDescription = true }) => {
  if (!grade) return null;
  
  return (
    <GradeContainer>
      <GradeBadge grade={grade}>
        {grade}급
      </GradeBadge>
      {showDescription && (
        <GradeDescription>
          {gradeDescriptions[grade]}
        </GradeDescription>
      )}
    </GradeContainer>
  );
};

export default InstrumentGrade;