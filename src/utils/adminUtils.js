/**
 * 관리자 권한 관련 유틸리티 함수들
 */

// 관리자 이메일 목록 (실제 운영 시에는 환경변수나 별도 설정 파일에서 관리)
const ADMIN_EMAILS = [
  'ose-ung@gmail.com', // 당신의 이메일
  'sewoong333@gmail.com', // 추가 관리자
  'admin@echo-web.com',
  'developer@echo-web.com'
];

// 관리자 UID 목록 (추가 보안을 위해)
const ADMIN_UIDS = [
  // 여기에 관리자 UID들을 추가할 수 있습니다
];

/**
 * 현재 사용자가 관리자인지 확인
 * @param {Object} user - 사용자 객체
 * @returns {boolean} 관리자 여부
 */
export function isAdmin(user) {
  if (!user || !user.uid) {
    return false;
  }

  // 개발 환경에서는 모든 로그인 사용자를 관리자로 처리
  if (process.env.NODE_ENV === 'development') {
    return true;
  }

  // 이메일로 관리자 확인
  if (user.email && ADMIN_EMAILS.includes(user.email.toLowerCase())) {
    return true;
  }

  // UID로 관리자 확인
  if (user.uid && ADMIN_UIDS.includes(user.uid)) {
    return true;
  }

  // 추가 관리자 확인 로직 (예: Firestore에서 관리자 권한 확인)
  // 실제 운영에서는 Firestore의 admin_users 컬렉션에서 확인할 수 있습니다
  
  return false;
}

/**
 * 관리자 전용 기능 접근 권한 확인
 * @param {Object} user - 사용자 객체
 * @param {string} feature - 기능명
 * @returns {boolean} 접근 권한 여부
 */
// eslint-disable-next-line no-unused-vars
export function hasAdminAccess(user, feature = 'general') {
  return isAdmin(user);
}

/**
 * 관리자 권한 확인 및 에러 메시지 반환
 * @param {Object} user - 사용자 객체
 * @param {string} feature - 기능명
 * @returns {string|null} 접근 불가 시 에러 메시지, 접근 가능 시 null
 */
export function getAdminAccessMessage(user, feature = 'general') {
  if (!hasAdminAccess(user, feature)) {
    return '이 기능은 관리자만 사용할 수 있습니다.';
  }
  return null;
}

/**
 * 관리자 권한 확인 및 에러 처리
 * @param {Object} user - 사용자 객체
 * @param {string} action - 수행하려는 작업
 * @throws {Error} 관리자가 아닌 경우 에러 발생
 */
export function requireAdmin(user, action = '이 작업을') {
  if (!isAdmin(user)) {
    throw new Error(`${action} 수행하려면 관리자 권한이 필요합니다.`);
  }
}

/**
 * 개발 환경에서만 관리자 권한을 부여하는 함수
 * @param {Object} user - 사용자 객체
 * @returns {boolean} 개발자 권한 여부
 */
export function isDeveloper(user) {
  if (process.env.NODE_ENV === 'development') {
    // 개발 환경에서는 특정 조건으로 개발자 권한 부여
    return user?.email?.includes('@') || user?.uid;
  }
  return isAdmin(user);
}
