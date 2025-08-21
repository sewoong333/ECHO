import React, { useState, useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../store/UserContext";
import { useToast } from "../store/ToastContext";
import { reviewService } from "../utils/reviewService";
import {
  FaTimes,
  FaStar,
  FaRegStar,
  FaThumbsUp,
  FaThumbsDown,
  FaComments,
  FaUser,
  FaShoppingBag,
  FaCheckCircle
} from "react-icons/fa";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const ModalContent = styled.div`
  background: white;
  border-radius: 20px;
  width: 100%;
  max-width: 480px;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 24px 0;
  margin-bottom: 20px;
`;

const ModalTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #333;
  margin: 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: #666;
  cursor: pointer;
  padding: 4px;
  
  &:hover {
    color: #333;
  }
`;

const ModalBody = styled.div`
  padding: 0 24px 24px;
`;

const TransactionInfo = styled.div`
  display: flex;
  gap: 12px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 12px;
  margin-bottom: 24px;
`;

const ProductImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
`;

const ProductInfo = styled.div`
  flex: 1;
`;

const ProductTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
  line-height: 1.3;
`;

const ProductPrice = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #2ed8b6;
  margin-bottom: 4px;
`;

const RevieweeInfo = styled.div`
  font-size: 12px;
  color: #666;
`;

const Section = styled.div`
  margin-bottom: 24px;
`;

const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const RatingSection = styled.div`
  text-align: center;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 12px;
  margin-bottom: 20px;
`;

const RatingLabel = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 12px;
`;

const StarRating = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-bottom: 12px;
`;

const StarButton = styled.button`
  background: none;
  border: none;
  font-size: 32px;
  color: ${props => props.filled ? '#ffc107' : '#e0e0e0'};
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.1);
    color: #ffc107;
  }
`;

const RatingText = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;

const TagsSection = styled.div`
  margin-bottom: 20px;
`;

const TagsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const TagButton = styled.button`
  padding: 8px 12px;
  border: 1px solid ${props => props.selected ? '#2ed8b6' : '#e0e0e0'};
  border-radius: 20px;
  background: ${props => props.selected ? '#2ed8b6' : 'white'};
  color: ${props => props.selected ? 'white' : '#666'};
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #2ed8b6;
    color: ${props => props.selected ? 'white' : '#2ed8b6'};
  }
`;

const CommentSection = styled.div`
  margin-bottom: 24px;
`;

const CommentTextarea = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  font-family: inherit;
  resize: vertical;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #2ed8b6;
  }
  
  &::placeholder {
    color: #999;
  }
`;

const CharacterCount = styled.div`
  text-align: right;
  font-size: 12px;
  color: #999;
  margin-top: 4px;
`;

const PrivacyOption = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 20px;
  cursor: pointer;
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  accent-color: #2ed8b6;
`;

const PrivacyText = styled.div`
  font-size: 13px;
  color: #666;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 16px;
  background: linear-gradient(135deg, #2ed8b6 0%, #25b89a 100%);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #25b89a 0%, #1ea085 100%);
    transform: translateY(-1px);
    box-shadow: 0 4px 16px rgba(46, 216, 182, 0.3);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
  }
`;

const ratingLabels = {
  1: '매우 불만족',
  2: '불만족',
  3: '보통',
  4: '만족',
  5: '매우 만족'
};

export default function ReviewModal({ 
  isOpen, 
  onClose, 
  transaction, 
  revieweeType, // 'seller' or 'buyer'
  onReviewSubmitted 
}) {
  const { user } = useContext(UserContext);
  const { showSuccess, showError } = useToast();
  
  const [rating, setRating] = useState(0);
  const [selectedTags, setSelectedTags] = useState([]);
  const [comment, setComment] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  const recommendedTags = reviewService.getRecommendedTags(revieweeType);
  const maxCommentLength = 500;

  const handleTagToggle = (tag) => {
    setSelectedTags(prev => {
      if (prev.includes(tag)) {
        return prev.filter(t => t !== tag);
      } else {
        return [...prev, tag];
      }
    });
  };

  const handleSubmit = async () => {
    if (rating === 0) {
      showError('별점을 선택해주세요.');
      return;
    }

    if (comment.trim().length < 10) {
      showError('후기를 10자 이상 작성해주세요.');
      return;
    }

    setSubmitting(true);

    try {
      const reviewData = {
        transactionId: transaction.id,
        reviewerId: user.uid,
        revieweeId: revieweeType === 'seller' ? transaction.sellerId : transaction.buyerId,
        productId: transaction.productId,
        type: revieweeType,
        rating,
        criteria: {
          overall: rating,
          communication: rating,
          manner: rating,
          punctuality: rating
        },
        comment: comment.trim(),
        tags: selectedTags,
        productTitle: transaction.productSnapshot?.title,
        productPrice: transaction.productSnapshot?.price,
        productImages: transaction.productSnapshot?.images,
        isPublic
      };

      await reviewService.createTransactionReview(reviewData);
      
      showSuccess('후기가 등록되었습니다!');
      onReviewSubmitted();
      onClose();
      
    } catch (error) {
      console.error('후기 등록 실패:', error);
      showError('후기 등록에 실패했습니다.');
    } finally {
      setSubmitting(false);
    }
  };

  const getRevieweeInfo = () => {
    if (revieweeType === 'seller') {
      return {
        name: transaction.sellerNickname || '판매자',
        role: '판매자'
      };
    } else {
      return {
        name: transaction.buyerNickname || '구매자',
        role: '구매자'
      };
    }
  };

  if (!isOpen || !transaction) return null;

  const revieweeInfo = getRevieweeInfo();

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        <ModalHeader>
          <ModalTitle>
            <FaStar color="#ffc107" />
            거래 후기 작성
          </ModalTitle>
          <CloseButton onClick={onClose}>
            <FaTimes />
          </CloseButton>
        </ModalHeader>

        <ModalBody>
          {/* 거래 정보 */}
          <TransactionInfo>
            {transaction.productSnapshot?.images?.[0] && (
              <ProductImage 
                src={transaction.productSnapshot.images[0]} 
                alt={transaction.productSnapshot.title}
              />
            )}
            <ProductInfo>
              <ProductTitle>{transaction.productSnapshot?.title}</ProductTitle>
              <ProductPrice>
                ₩{new Intl.NumberFormat('ko-KR').format(transaction.productSnapshot?.price || 0)}
              </ProductPrice>
              <RevieweeInfo>
                {revieweeInfo.role}: {revieweeInfo.name}
              </RevieweeInfo>
            </ProductInfo>
          </TransactionInfo>

          {/* 별점 평가 */}
          <Section>
            <SectionTitle>
              <FaStar />
              {revieweeInfo.role}는 어떠셨나요?
            </SectionTitle>
            <RatingSection>
              <RatingLabel>거래 만족도를 평가해주세요</RatingLabel>
              <StarRating>
                {[1, 2, 3, 4, 5].map(star => (
                  <StarButton
                    key={star}
                    filled={star <= rating}
                    onClick={() => setRating(star)}
                  >
                    {star <= rating ? <FaStar /> : <FaRegStar />}
                  </StarButton>
                ))}
              </StarRating>
              {rating > 0 && (
                <RatingText>{ratingLabels[rating]}</RatingText>
              )}
            </RatingSection>
          </Section>

          {/* 추천 태그 */}
          <Section>
            <SectionTitle>
              <FaThumbsUp />
              {revieweeInfo.name}님은 어떤 분이셨나요? (선택사항)
            </SectionTitle>
            <TagsSection>
              <TagsGrid>
                {recommendedTags.map(tag => (
                  <TagButton
                    key={tag}
                    selected={selectedTags.includes(tag)}
                    onClick={() => handleTagToggle(tag)}
                  >
                    {tag}
                  </TagButton>
                ))}
              </TagsGrid>
            </TagsSection>
          </Section>

          {/* 상세 후기 */}
          <Section>
            <SectionTitle>
              <FaComments />
              상세 후기를 남겨주세요
            </SectionTitle>
            <CommentSection>
              <CommentTextarea
                placeholder={`${revieweeInfo.name}님과의 거래는 어떠셨나요? 다른 사용자들에게 도움이 되는 후기를 남겨주세요.`}
                value={comment}
                onChange={(e) => setComment(e.target.value.slice(0, maxCommentLength))}
              />
              <CharacterCount>
                {comment.length}/{maxCommentLength}자
              </CharacterCount>
            </CommentSection>
          </Section>

          {/* 공개 설정 */}
          <PrivacyOption>
            <Checkbox
              type="checkbox"
              checked={isPublic}
              onChange={(e) => setIsPublic(e.target.checked)}
            />
            <PrivacyText>
              다른 사용자에게 후기를 공개합니다. (비공개 시 평점만 반영됩니다)
            </PrivacyText>
          </PrivacyOption>

          {/* 제출 버튼 */}
          <SubmitButton 
            onClick={handleSubmit}
            disabled={submitting || rating === 0}
          >
            {submitting ? (
              <>
                <FaCheckCircle />
                후기 등록 중...
              </>
            ) : (
              <>
                <FaCheckCircle />
                후기 등록하기
              </>
            )}
          </SubmitButton>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
}