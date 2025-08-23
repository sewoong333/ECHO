// 거래 후기 및 평점 시스템
import { 
  collection, 
  addDoc, 
  updateDoc, 
  doc, 
  getDoc, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  serverTimestamp,
  increment,
  limit
} from "firebase/firestore";
import { db } from "./firebase";

// 평점 타입
export const REVIEW_TYPES = {
  TRANSACTION: 'transaction',  // 거래 후기
  SELLER: 'seller',           // 판매자 평가
  BUYER: 'buyer',             // 구매자 평가
  PRODUCT: 'product'          // 상품 평가
};

// 평가 항목
export const REVIEW_CRITERIA = {
  TRANSACTION: {
    communication: '소통',      // 소통이 원활했는지
    punctuality: '시간약속',    // 시간을 잘 지켰는지
    condition: '상품상태',      // 설명과 일치했는지
    manner: '매너',            // 예의바른 태도
    overall: '전체만족도'       // 전반적 만족도
  },
  SELLER: {
    description: '상품설명',    // 상품 설명의 정확성
    packaging: '포장상태',      // 포장 및 배송 상태
    response: '응답속도',       // 문의 응답 속도
    reliability: '신뢰성',     // 믿을 만한 판매자
    overall: '전체만족도'
  },
  BUYER: {
    payment: '결제',           // 결제의 신속성
    communication: '소통',      // 소통의 원활함
    manner: '매너',            // 예의바른 태도
    pickup: '수령',            // 약속된 장소/시간 준수
    overall: '전체만족도'
  }
};

// 매너 점수 계산 가중치
export const MANNER_WEIGHTS = {
  rating: 0.4,        // 평점 (40%)
  reviews: 0.3,       // 후기 수 (30%)
  transactions: 0.2,  // 거래 횟수 (20%)
  complaints: 0.1     // 신고 횟수 (10%, 마이너스)
};

export const reviewService = {
  // 거래 후기 작성
  async createTransactionReview(reviewData) {
    try {
      const review = {
        // 기본 정보
        transactionId: reviewData.transactionId,
        reviewerId: reviewData.reviewerId,
        revieweeId: reviewData.revieweeId,
        productId: reviewData.productId,
        
        // 리뷰 내용
        type: reviewData.type, // 'seller' or 'buyer'
        rating: reviewData.rating, // 1-5점
        criteria: reviewData.criteria, // 세부 평가 항목
        comment: reviewData.comment || '',
        tags: reviewData.tags || [], // 추천 태그들
        
        // 상품 정보 스냅샷
        productSnapshot: {
          title: reviewData.productTitle,
          price: reviewData.productPrice,
          images: reviewData.productImages || []
        },
        
        // 메타데이터
        isPublic: reviewData.isPublic !== false, // 기본값 true
        isRecommended: reviewData.rating >= 4,
        helpfulCount: 0,
        reportCount: 0,
        
        // 타임스탬프
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      };
      
      const docRef = await addDoc(collection(db, 'reviews'), review);
      console.log('거래 후기 작성 완료:', docRef.id);
      
      // 사용자의 평점 업데이트
      await this.updateUserRating(reviewData.revieweeId);
      
      return {
        id: docRef.id,
        ...review
      };
    } catch (error) {
      console.error('거래 후기 작성 실패:', error);
      throw error;
    }
  },
  
  // 사용자 평점 업데이트 (매너점수 계산)
  async updateUserRating(userId) {
    try {
      // 사용자가 받은 모든 리뷰 조회
      const reviewsQuery = query(
        collection(db, 'reviews'),
        where('revieweeId', '==', userId),
        where('isPublic', '==', true)
      );
      
      const reviewsSnapshot = await getDocs(reviewsQuery);
      const reviews = reviewsSnapshot.docs.map(doc => doc.data());
      
      if (reviews.length === 0) {
        return; // 리뷰가 없으면 업데이트하지 않음
      }
      
      // 평균 평점 계산
      const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
      const averageRating = totalRating / reviews.length;
      
      // 매너점수 계산 (100점 기준, 0-100점 범위)
      const baseScore = 100;
      const ratingBonus = (averageRating - 3) * 10; // 3점 기준으로 ±10점
      const reviewCountBonus = Math.min(reviews.length * 0.5, 10); // 리뷰 수 보너스 (최대 10점)
      const recommendedRatio = reviews.filter(r => r.isRecommended).length / reviews.length;
      const recommendBonus = recommendedRatio * 5; // 추천 비율 보너스 (최대 5점)
      
      let mannerScore = baseScore + ratingBonus + reviewCountBonus + recommendBonus;
      
      // 점수 범위 제한 (0-100점)
      mannerScore = Math.max(0, Math.min(100, mannerScore));
      
      // 사용자 문서 업데이트
      const userRef = doc(db, 'users', userId);
      await updateDoc(userRef, {
        rating: parseFloat(averageRating.toFixed(1)),
        reviewCount: reviews.length,
        mannerScore: parseFloat(mannerScore.toFixed(1)),
        ratingUpdatedAt: serverTimestamp()
      });
      
      console.log('사용자 평점 업데이트 완료:', userId, {
        rating: averageRating,
        reviewCount: reviews.length,
        mannerScore
      });
      
    } catch (error) {
      console.error('사용자 평점 업데이트 실패:', error);
      throw error;
    }
  },
  
  // 사용자 리뷰 목록 조회
  async getUserReviews(userId, type = 'received', pageSize = 20) {
    try {
      const field = type === 'received' ? 'revieweeId' : 'reviewerId';
      
      const q = query(
        collection(db, 'reviews'),
        where(field, '==', userId),
        where('isPublic', '==', true),
        orderBy('createdAt', 'desc'),
        limit(pageSize)
      );
      
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('사용자 리뷰 조회 실패:', error);
      throw error;
    }
  },
  
  // 거래별 리뷰 조회
  async getTransactionReviews(transactionId) {
    try {
      const q = query(
        collection(db, 'reviews'),
        where('transactionId', '==', transactionId)
      );
      
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('거래 리뷰 조회 실패:', error);
      throw error;
    }
  },
  
  // 리뷰 도움이 됨 표시
  async markReviewHelpful(reviewId, userId) {
    try {
      // 이미 도움이 됨을 표시했는지 확인
      const helpfulRef = collection(db, 'reviews', reviewId, 'helpful');
      const helpfulQuery = query(helpfulRef, where('userId', '==', userId));
      const helpfulSnapshot = await getDocs(helpfulQuery);
      
      if (!helpfulSnapshot.empty) {
        throw new Error('이미 도움이 됨을 표시한 리뷰입니다.');
      }
      
      // 도움이 됨 기록 추가
      await addDoc(helpfulRef, {
        userId,
        createdAt: serverTimestamp()
      });
      
      // 리뷰의 도움이 됨 카운트 증가
      const reviewRef = doc(db, 'reviews', reviewId);
      await updateDoc(reviewRef, {
        helpfulCount: increment(1)
      });
      
      return true;
    } catch (error) {
      console.error('리뷰 도움이 됨 표시 실패:', error);
      throw error;
    }
  },
  
  // 리뷰 신고
  async reportReview(reviewId, reportData) {
    try {
      const report = {
        reviewId,
        reporterId: reportData.reporterId,
        reason: reportData.reason,
        description: reportData.description || '',
        createdAt: serverTimestamp()
      };
      
      await addDoc(collection(db, 'review_reports'), report);
      
      // 리뷰의 신고 카운트 증가
      const reviewRef = doc(db, 'reviews', reviewId);
      await updateDoc(reviewRef, {
        reportCount: increment(1)
      });
      
      console.log('리뷰 신고 완료:', reviewId);
      return true;
    } catch (error) {
      console.error('리뷰 신고 실패:', error);
      throw error;
    }
  },
  
  // 사용자 신뢰도 통계 조회
  async getUserTrustStats(userId) {
    try {
      // 기본 사용자 정보
      const userRef = doc(db, 'users', userId);
      const userSnap = await getDoc(userRef);
      
      if (!userSnap.exists()) {
        throw new Error('사용자를 찾을 수 없습니다.');
      }
      
      const userData = userSnap.data();
      
      // 받은 리뷰들
      const receivedReviews = await this.getUserReviews(userId, 'received', 100);
      
      // 평점별 분포
      const ratingDistribution = {
        5: receivedReviews.filter(r => r.rating === 5).length,
        4: receivedReviews.filter(r => r.rating === 4).length,
        3: receivedReviews.filter(r => r.rating === 3).length,
        2: receivedReviews.filter(r => r.rating === 2).length,
        1: receivedReviews.filter(r => r.rating === 1).length
      };
      
      // 최근 리뷰들의 태그 분석
      const recentReviews = receivedReviews.slice(0, 10);
      const tags = {};
      recentReviews.forEach(review => {
        if (review.tags) {
          review.tags.forEach(tag => {
            tags[tag] = (tags[tag] || 0) + 1;
          });
        }
      });
      
      // 인기 태그 순으로 정렬
      const popularTags = Object.entries(tags)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 5)
        .map(([tag, count]) => ({ tag, count }));
      
      return {
        // 기본 정보
        rating: userData.rating || 0,
        reviewCount: userData.reviewCount || 0,
        mannerScore: userData.mannerScore || 100,
        
        // 상세 통계
        ratingDistribution,
        recommendedReviews: receivedReviews.filter(r => r.isRecommended).length,
        totalReviews: receivedReviews.length,
        popularTags,
        
        // 최근 활동
        recentReviews: recentReviews.slice(0, 5),
        lastReviewDate: receivedReviews[0]?.createdAt || null
      };
    } catch (error) {
      console.error('사용자 신뢰도 통계 조회 실패:', error);
      throw error;
    }
  },
  
  // 리뷰 작성 가능 여부 확인
  async canWriteReview(transactionId, reviewerId) {
    try {
      // 이미 리뷰를 작성했는지 확인
      const q = query(
        collection(db, 'reviews'),
        where('transactionId', '==', transactionId),
        where('reviewerId', '==', reviewerId)
      );
      
      const querySnapshot = await getDocs(q);
      return querySnapshot.empty;
    } catch (error) {
      console.error('리뷰 작성 가능 여부 확인 실패:', error);
      return false;
    }
  },
  
  // 추천 태그 목록 조회
  getRecommendedTags(type = 'seller') {
    const sellerTags = [
      '친절해요', '빠른응답', '상품상태좋음', '설명과일치', 
      '포장꼼꼼', '시간약속잘지켜요', '믿을만해요', '좋은가격',
      '깨끗한상품', '신속한배송'
    ];
    
    const buyerTags = [
      '빠른결제', '친절해요', '시간약속잘지켜요', '소통좋아요',
      '매너좋아요', '신뢰할만해요', '거래진행빨라요', '또거래하고싶어요'
    ];
    
    return type === 'seller' ? sellerTags : buyerTags;
  },
  
  // 매너점수 등급 계산
  getMannerGrade(score) {
    if (score >= 90) return { grade: 'S', color: '#ff6b00', label: '최고 매너' };
    if (score >= 80) return { grade: 'A', color: '#2ed8b6', label: '좋은 매너' };
    if (score >= 70) return { grade: 'B', color: '#4caf50', label: '보통 매너' };
    if (score >= 60) return { grade: 'C', color: '#ffc107', label: '주의 필요' };
    return { grade: 'D', color: '#f44336', label: '개선 필요' };
  }
};

export default reviewService;