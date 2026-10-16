import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../store/UserContext";
import PageErrorBoundary from "../components/PageErrorBoundary";
import { useToast } from "../store/ToastContext";
import { reviewService } from "../utils/reviewService";
import { db } from "../utils/firebase";
import { collection, query, where, getDocs, doc, getDoc } from "firebase/firestore";
// import { transactionService } from "../utils/transactionService";
import {
  FaArrowLeft,
  FaStar,
  FaRegStar,
  FaThermometerHalf,
  FaShoppingBag,
  FaHeart,
  FaTrophy,
  FaCalendar,
  FaMapMarkerAlt,
  FaUserShield,
  FaExclamationTriangle,
  FaComments,
  FaThumbsUp,
  FaTag,
  FaUser,
  FaChartBar,
  FaAward,
  FaCheckCircle
} from "react-icons/fa";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: var(--color-bg-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

const SellerGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 14px;
  @media (min-width: 640px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
`;

const SellerItem = styled.button`
  all: unset;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
`;

const SellerThumb = styled.div`
  position: relative;
  aspect-ratio: 1 / 1;
  border-radius: 12px;
  overflow: hidden;
  background: #f1f5f4;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  img { width: 100%; height: 100%; object-fit: cover; }
`;

const SellerBadge = styled.span`
  position: absolute;
  left: 8px;
  top: 8px;
  padding: 3px 8px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.65);
  color: #fff;
  font-size: 11px;
  font-weight: 600;
`;

const SellerTitle = styled.div`
  font-size: 14px;
  color: #222;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const SellerPrice = styled.div`
  font-size: 14px;
  font-weight: 700;
  color: #111;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 500px;
  background: var(--color-bg-primary);
  min-height: 100vh;
  position: relative;
  box-shadow: var(--shadow-lg);
  
  @media (max-width: 500px) {
    box-shadow: none;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 0 20px;
  border-bottom: 1px solid #f0f0f0;
  position: sticky;
  top: 0;
  background: #fff;
  z-index: 100;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #666;
  cursor: pointer;
  padding: 8px;
  
  &:hover {
    color: #333;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const Content = styled.div`
  padding: 20px;
`;

const ProfileCard = styled.div`
  background: linear-gradient(135deg, 
    rgba(46, 216, 182, 0.1) 0%, 
    rgba(46, 216, 182, 0.05) 100%);
  border: 1px solid rgba(46, 216, 182, 0.2);
  border-radius: 20px;
  padding: 24px;
  margin-bottom: 20px;
  text-align: center;
  position: relative;
`;

const ProfileAvatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: ${props => props.imageUrl ? `url(${props.imageUrl})` : '#2ed8b6'};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px;
  color: white;
  font-size: 32px;
  font-weight: 600;
  border: 3px solid white;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
`;

const ProfileName = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

const VerifiedBadge = styled.div`
  background: #2ed8b6;
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
`;

const ProfileInfo = styled.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const MannerSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 16px;
`;

const MannerTemp = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: ${props => props.color};
  display: flex;
  align-items: center;
  gap: 4px;
`;

const MannerGrade = styled.div`
  background: ${props => props.color};
  color: white;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-top: 20px;
`;

const StatItem = styled.div`
  text-align: center;
`;

const StatNumber = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #2ed8b6;
  margin-bottom: 4px;
`;

const StatLabel = styled.div`
  font-size: 12px;
  color: #666;
`;

const SectionCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0f0;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const RatingOverview = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 20px;
  padding: 16px;
  background: #f8f9fa;
  border-radius: 12px;
`;

const RatingDisplay = styled.div`
  text-align: center;
`;

const RatingNumber = styled.div`
  font-size: 36px;
  font-weight: 700;
  color: #ffc107;
  margin-bottom: 4px;
`;

const RatingStars = styled.div`
  display: flex;
  gap: 2px;
  margin-bottom: 4px;
`;

const ReviewCount = styled.div`
  font-size: 12px;
  color: #666;
`;

const RatingBars = styled.div`
  flex: 1;
`;

const RatingBar = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 4px;
  font-size: 12px;
`;

const RatingBarLabel = styled.div`
  min-width: 20px;
  color: #666;
`;

const RatingBarTrack = styled.div`
  flex: 1;
  height: 6px;
  background: #e0e0e0;
  border-radius: 3px;
  overflow: hidden;
`;

const RatingBarFill = styled.div`
  height: 100%;
  background: #ffc107;
  width: ${props => props.percentage}%;
  transition: width 0.3s ease;
`;

const RatingBarCount = styled.div`
  min-width: 20px;
  color: #666;
  text-align: right;
`;

const TagsSection = styled.div`
  margin-bottom: 20px;
`;

const TagsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const PopularTag = styled.div`
  background: linear-gradient(135deg, #2ed8b6, #25b89a);
  color: white;
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 12px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const TagCount = styled.span`
  background: rgba(255, 255, 255, 0.2);
  padding: 2px 6px;
  border-radius: 8px;
  font-size: 10px;
`;

const ReviewItem = styled.div`
  padding: 16px 0;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
`;

const ReviewHeader = styled.div`
  display: flex;
  justify-content: between;
  align-items: flex-start;
  margin-bottom: 8px;
`;

const ReviewMeta = styled.div`
  flex: 1;
`;

const ReviewerName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
`;

const ReviewDate = styled.div`
  font-size: 12px;
  color: #999;
`;

const ReviewRating = styled.div`
  display: flex;
  gap: 2px;
`;

const ReviewComment = styled.div`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 8px;
`;

const ReviewTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
`;

const ReviewTag = styled.span`
  background: #e8f5e8;
  color: #2e7d32;
  padding: 2px 6px;
  border-radius: 8px;
  font-size: 11px;
`;

const LoadingState = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  color: #666;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 40px 20px;
  color: #666;
  
  svg {
    margin-bottom: 12px;
    opacity: 0.5;
  }
  
  h4 {
    margin: 0 0 8px 0;
    font-size: 16px;
  }
  
  p {
    margin: 0;
    font-size: 14px;
    line-height: 1.4;
  }
`;

export default function UserProfile() {
  const navigate = useNavigate();
  const { userId } = useParams();
  const { showError } = useToast();
  
  const { user: currentUser } = useContext(UserContext) || {};
  const [sellerProducts, setSellerProducts] = useState([]);

  const [userProfile, setUserProfile] = useState(null);
  const [trustStats, setTrustStats] = useState(null);
  const [recentReviews, setRecentReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userId) {
      loadUserProfile();
    }
  }, [userId]);

  const loadUserProfile = async () => {
    try {
      setLoading(true);
      
      // 병렬로 데이터 로드 (후기 조회 실패해도 프로필은 표시)
      const [stats, reviews, productSnap] = await Promise.all([
        reviewService.getUserTrustStats(userId).catch(() => null),
        reviewService.getUserReviews(userId, 'received', 10).catch(() => []),
        getDocs(query(collection(db, 'products'), where('sellerId', '==', userId)))
      ]);

      const safeStats = stats || {
        mannerScore: 80, reviewCount: 0, totalReviews: 0, recommendedReviews: 0,
        rating: 0, ratingDistribution: {}, popularTags: []
      };
      setTrustStats(safeStats);
      setRecentReviews(reviews || []);

      const toDate = (v) => (v?.toDate ? v.toDate() : v ? new Date(v) : null);
      const products = productSnap.docs
        .map(d => ({ id: d.id, ...d.data() }))
        .filter(p => p.status === 'active' || p.status === 'reserved' || p.status === 'sold')
        .sort((a, b) => (toDate(b.createdAt) || 0) - (toDate(a.createdAt) || 0));
      setSellerProducts(products);

      // 공개 정보: 상품 문서에 저장된 판매자 정보 → 로그인 상태면 users 문서로 보강
      const first = products[0] || {};
      let profile = {
        id: userId,
        nickname: first.sellerNickname || '에코 사용자',
        profileImage: first.sellerProfileImage || null,
        location: first.fullLocation || [first.region, first.district].filter(Boolean).join(' ') || '지역 미설정',
        joinDate: products.length ? toDate(products[products.length - 1].createdAt) : null,
        isVerified: (safeStats.reviewCount || 0) >= 5
      };
      if (currentUser?.uid) {
        try {
          const userSnap = await getDoc(doc(db, 'users', userId));
          if (userSnap.exists()) {
            const u = userSnap.data();
            // 후기가 아직 없으면 사용자 문서에 저장된 매너점수를 표시
            if (typeof u.mannerScore === 'number' && !(stats && stats.reviewCount)) {
              setTrustStats({ ...safeStats, mannerScore: u.mannerScore });
            }
            profile = {
              ...profile,
              nickname: u.nickname || profile.nickname,
              profileImage: u.profileImage || u.photoURL || profile.profileImage,
              location: [u.region, u.district].filter(Boolean).join(' ') || profile.location,
              joinDate: toDate(u.createdAt) || profile.joinDate
            };
          }
        } catch (e) {
          console.warn('사용자 문서 조회 실패(공개 정보로 표시):', e.code);
        }
      }
      setUserProfile(profile);
      
    } catch (error) {
      console.error('사용자 프로필 로드 실패:', error);
      showError('사용자 정보를 불러올 수 없습니다.');
    } finally {
      setLoading(false);
    }
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      index < Math.floor(rating) ? 
        <FaStar key={index} color="#ffc107" size={14} /> : 
        <FaRegStar key={index} color="#e0e0e0" size={14} />
    ));
  };

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <Container>
        <Inner>
          <Header>
            <BackButton onClick={() => navigate(-1)}>
              <FaArrowLeft />
            </BackButton>
            <HeaderTitle>사용자 프로필</HeaderTitle>
            <div></div>
          </Header>
          <LoadingState>
            <div>프로필을 불러오는 중...</div>
          </LoadingState>
        </Inner>
      </Container>
    );
  }

  if (!userProfile || !trustStats) {
    return null;
  }

  const mannerGrade = reviewService.getMannerGrade(trustStats.mannerScore);
  const totalReviews = trustStats.totalReviews;

  return (
    <PageErrorBoundary>
      <Container>
      <Inner>
        <Header>
          <BackButton onClick={() => navigate(-1)}>
            <FaArrowLeft />
          </BackButton>
          <HeaderTitle>사용자 프로필</HeaderTitle>
          <div></div>
        </Header>

        <Content>
          {/* 프로필 카드 */}
          <ProfileCard>
            <ProfileAvatar imageUrl={userProfile.profileImage}>
              {!userProfile.profileImage && (userProfile.nickname?.[0] || 'U')}
            </ProfileAvatar>
            
            <ProfileName>
              {userProfile.nickname}
              {userProfile.isVerified && (
                <VerifiedBadge>
                  <FaCheckCircle />
                </VerifiedBadge>
              )}
            </ProfileName>
            
            <ProfileInfo>
              <FaMapMarkerAlt />
              {userProfile.location}
              {userProfile.joinDate && (
                <>
                  <span style={{ margin: '0 8px' }}>•</span>
                  <FaCalendar />
                  {formatDate(userProfile.joinDate)} 가입
                </>
              )}
            </ProfileInfo>

            {/* 매너점수 */}
            <MannerSection>
              <MannerTemp color={mannerGrade.color}>
                <FaThermometerHalf />
                {trustStats.mannerScore}점
              </MannerTemp>
              <MannerGrade color={mannerGrade.color}>
                {mannerGrade.label}
              </MannerGrade>
            </MannerSection>

            {/* 통계 */}
            <StatsGrid>
              <StatItem>
                <StatNumber>{trustStats.reviewCount}</StatNumber>
                <StatLabel>받은 후기</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>{trustStats.recommendedReviews}</StatNumber>
                <StatLabel>추천 후기</StatLabel>
              </StatItem>
              <StatItem>
                <StatNumber>{Math.round((trustStats.recommendedReviews / Math.max(trustStats.totalReviews, 1)) * 100)}%</StatNumber>
                <StatLabel>추천율</StatLabel>
              </StatItem>
            </StatsGrid>
          </ProfileCard>

          {/* 평점 분석 */}
          <SectionCard>
            <SectionTitle>
              <FaChartBar />
              평점 분석
            </SectionTitle>
            
            {totalReviews > 0 ? (
              <>
                <RatingOverview>
                  <RatingDisplay>
                    <RatingNumber>{trustStats.rating.toFixed(1)}</RatingNumber>
                    <RatingStars>
                      {renderStars(trustStats.rating)}
                    </RatingStars>
                    <ReviewCount>총 {totalReviews}개 후기</ReviewCount>
                  </RatingDisplay>
                  
                  <RatingBars>
                    {[5, 4, 3, 2, 1].map(star => {
                      const count = trustStats.ratingDistribution[star] || 0;
                      const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
                      
                      return (
                        <RatingBar key={star}>
                          <RatingBarLabel>{star}점</RatingBarLabel>
                          <RatingBarTrack>
                            <RatingBarFill percentage={percentage} />
                          </RatingBarTrack>
                          <RatingBarCount>{count}</RatingBarCount>
                        </RatingBar>
                      );
                    })}
                  </RatingBars>
                </RatingOverview>

                {/* 인기 태그 */}
                {trustStats.popularTags.length > 0 && (
                  <TagsSection>
                    <SectionTitle style={{ fontSize: '16px', marginBottom: '12px' }}>
                      <FaTag />
                      받은 평가 태그
                    </SectionTitle>
                    <TagsGrid>
                      {trustStats.popularTags.map(({ tag, count }) => (
                        <PopularTag key={tag}>
                          {tag}
                          <TagCount>{count}</TagCount>
                        </PopularTag>
                      ))}
                    </TagsGrid>
                  </TagsSection>
                )}
              </>
            ) : (
              <EmptyState>
                <FaStar size={32} />
                <h4>아직 받은 후기가 없습니다</h4>
                <p>첫 번째 거래를 완료하고 후기를 받아보세요!</p>
              </EmptyState>
            )}
          </SectionCard>

          {/* 최근 후기 */}
          <SectionCard>
            <SectionTitle>
              <FaComments />
              최근 받은 후기
            </SectionTitle>
            
            {recentReviews.length > 0 ? (
              recentReviews.map((review) => (
                <ReviewItem key={review.id}>
                  <ReviewHeader>
                    <ReviewMeta>
                      <ReviewerName>{review.reviewerNickname || '익명'}</ReviewerName>
                      <ReviewDate>{formatDate(review.createdAt)}</ReviewDate>
                    </ReviewMeta>
                    <ReviewRating>
                      {renderStars(review.rating)}
                    </ReviewRating>
                  </ReviewHeader>
                  
                  {review.comment && (
                    <ReviewComment>{review.comment}</ReviewComment>
                  )}
                  
                  {review.tags && review.tags.length > 0 && (
                    <ReviewTags>
                      {review.tags.map((tag, index) => (
                        <ReviewTag key={index}>{tag}</ReviewTag>
                      ))}
                    </ReviewTags>
                  )}
                </ReviewItem>
              ))
            ) : (
              <EmptyState>
                <FaComments size={32} />
                <h4>아직 받은 후기가 없습니다</h4>
                <p>거래를 완료하면 상대방이 후기를 남길 수 있습니다.</p>
              </EmptyState>
            )}
          </SectionCard>

          {/* 판매 상품 */}
          <SectionCard>
            <SectionTitle>
              <FaTag />
              판매 상품 {sellerProducts.length > 0 && `(${sellerProducts.length})`}
            </SectionTitle>
            {sellerProducts.length > 0 ? (
              <SellerGrid>
                {sellerProducts.map((p) => (
                  <SellerItem key={p.id} onClick={() => navigate(`/product/${p.id}`)}>
                    <SellerThumb>
                      {p.images?.[0] ? <img src={p.images[0]} alt={p.title} loading="lazy" /> : <span>🎵</span>}
                      {p.status !== 'active' && (
                        <SellerBadge>{p.status === 'sold' ? '거래완료' : '예약중'}</SellerBadge>
                      )}
                    </SellerThumb>
                    <SellerTitle>{p.title}</SellerTitle>
                    <SellerPrice>{Number(p.price || 0).toLocaleString()}원</SellerPrice>
                  </SellerItem>
                ))}
              </SellerGrid>
            ) : (
              <EmptyState>
                <FaTag size={32} />
                <h4>판매 중인 상품이 없습니다</h4>
              </EmptyState>
            )}
          </SectionCard>
        </Content>
      </Inner>
      </Container>
    </PageErrorBoundary>
  );
}