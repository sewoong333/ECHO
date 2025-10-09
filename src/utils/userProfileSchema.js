/**
 * 통일된 사용자 프로필 스키마
 * 
 * 모든 사용자 프로필 데이터는 이 스키마를 따라야 합니다.
 * 데이터베이스, 컴포넌트, Context에서 일관되게 사용됩니다.
 */

export const USER_PROFILE_SCHEMA = {
  // 기본 정보
  uid: '',                    // Firebase Auth UID (문서 ID와 동일)
  email: '',                  // 이메일
  nickname: '',               // 닉네임 (필수)
  profileImage: '',           // 프로필 이미지 URL
  bio: '',                    // 자기소개

  // 위치 정보
  region: '',                 // 시/도 (예: "서울특별시")
  district: '',               // 구/군 (예: "강남구")
  fullLocation: '',           // 전체 주소 (region + district)
  
  // 인증 및 상태
  isVerified: false,          // 본인 인증 여부
  isBusiness: false,          // 비즈니스 계정 여부
  isActive: true,             // 계정 활성화 여부
  
  // 신뢰도 및 통계
  mannerScore: 100,           // 매너 점수 (0-200)
  rating: 0,                  // 평균 평점 (0-5)
  totalRating: 0,             // 누적 평점 합계
  reviewCount: 0,             // 받은 리뷰 수
  
  // 거래 통계
  transactionCount: 0,        // 총 거래 횟수
  totalSales: 0,              // 판매 완료 횟수
  totalPurchases: 0,          // 구매 완료 횟수
  productCount: 0,            // 등록한 상품 수
  likeCount: 0,               // 받은 관심물건 수
  favoriteCount: 0,           // 찜한 상품 수
  
  // 소셜
  followerCount: 0,           // 팔로워 수
  followingCount: 0,          // 팔로잉 수
  
  // 알림 설정
  isEmailNotificationEnabled: true,    // 이메일 알림
  isPushNotificationEnabled: true,     // 푸시 알림
  isLocationPublic: true,              // 위치 공개 여부
  
  // 전화번호 (선택)
  phoneNumber: '',            // 전화번호
  isPhoneVerified: false,     // 전화번호 인증 여부
  
  // 시간 정보
  createdAt: null,            // 가입일
  updatedAt: null,            // 최종 수정일
  lastActiveAt: null,         // 마지막 활동일
  lastLoginAt: null,          // 마지막 로그인
};

/**
 * 사용자 데이터 정규화 함수
 * 다양한 형태의 사용자 데이터를 통일된 스키마로 변환
 */
export const normalizeUserData = (userData) => {
  if (!userData) return null;

  return {
    // 기본 정보
    uid: userData.uid || userData.id || '',
    email: userData.email || '',
    nickname: userData.nickname || userData.displayName || userData.name || '사용자',
    profileImage: userData.profileImage || userData.photoURL || userData.avatar || '',
    bio: userData.bio || userData.description || userData.about || userData.introduction || '',

    // 위치 정보
    region: userData.region || '',
    district: userData.district || '',
    fullLocation: userData.fullLocation || 
                  (userData.region && userData.district 
                    ? `${userData.region} ${userData.district}` 
                    : userData.location || ''),
    
    // 인증 및 상태
    isVerified: userData.isVerified || userData.verified || false,
    isBusiness: userData.isBusiness || false,
    isActive: userData.isActive !== undefined ? userData.isActive : true,
    
    // 신뢰도 및 통계
    mannerScore: userData.mannerScore || 100,
    rating: userData.rating || (userData.totalRating && userData.reviewCount 
      ? userData.totalRating / userData.reviewCount 
      : 0),
    totalRating: userData.totalRating || 0,
    reviewCount: userData.reviewCount || 0,
    
    // 거래 통계
    transactionCount: userData.transactionCount || 
                     (userData.totalSales || 0) + (userData.totalPurchases || 0),
    totalSales: userData.totalSales || 0,
    totalPurchases: userData.totalPurchases || 0,
    productCount: userData.productCount || 0,
    likeCount: userData.likeCount || 0,
    favoriteCount: userData.favoriteCount || 0,
    
    // 소셜
    followerCount: userData.followerCount || 0,
    followingCount: userData.followingCount || 0,
    
    // 알림 설정
    isEmailNotificationEnabled: userData.isEmailNotificationEnabled !== undefined 
      ? userData.isEmailNotificationEnabled : true,
    isPushNotificationEnabled: userData.isPushNotificationEnabled !== undefined 
      ? userData.isPushNotificationEnabled : true,
    isLocationPublic: userData.isLocationPublic !== undefined 
      ? userData.isLocationPublic : true,
    
    // 전화번호
    phoneNumber: userData.phoneNumber || userData.phone || '',
    isPhoneVerified: userData.isPhoneVerified || false,
    
    // 시간 정보
    createdAt: userData.createdAt || null,
    updatedAt: userData.updatedAt || null,
    lastActiveAt: userData.lastActiveAt || null,
    lastLoginAt: userData.lastLoginAt || null,
  };
};

/**
 * 사용자 데이터 유효성 검사
 */
export const validateUserProfile = (userData) => {
  const errors = [];

  if (!userData.nickname || userData.nickname.trim().length < 2) {
    errors.push('닉네임은 최소 2자 이상이어야 합니다.');
  }

  if (userData.nickname && userData.nickname.length > 20) {
    errors.push('닉네임은 최대 20자까지 가능합니다.');
  }

  if (userData.bio && userData.bio.length > 500) {
    errors.push('자기소개는 최대 500자까지 가능합니다.');
  }

  if (userData.phoneNumber && !/^[0-9]{10,11}$/.test(userData.phoneNumber.replace(/-/g, ''))) {
    errors.push('올바른 전화번호 형식이 아닙니다.');
  }

  return {
    isValid: errors.length === 0,
    errors
  };
};

/**
 * 프로필 완성도 계산
 */
export const calculateProfileCompleteness = (userData) => {
  const fields = [
    userData.nickname,
    userData.profileImage,
    userData.bio,
    userData.region,
    userData.district,
    userData.phoneNumber,
  ];

  const filledFields = fields.filter(field => field && field.trim !== '' && field !== '').length;
  return Math.round((filledFields / fields.length) * 100);
};

/**
 * 매너 등급 계산
 */
export const getMannerGrade = (mannerScore) => {
  if (mannerScore >= 180) return { label: '최고 매너', color: '#4CAF50', emoji: '🌟' };
  if (mannerScore >= 150) return { label: '훌륭한 매너', color: '#8BC34A', emoji: '😊' };
  if (mannerScore >= 100) return { label: '좋은 매너', color: '#FFC107', emoji: '👍' };
  if (mannerScore >= 50) return { label: '보통 매너', color: '#FF9800', emoji: '😐' };
  return { label: '주의 필요', color: '#F44336', emoji: '⚠️' };
};

export default {
  USER_PROFILE_SCHEMA,
  normalizeUserData,
  validateUserProfile,
  calculateProfileCompleteness,
  getMannerGrade,
};

