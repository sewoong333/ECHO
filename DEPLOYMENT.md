# 배포 가이드

## 🚀 프로덕션 배포 준비

### 1. 환경 설정 확인
```bash
# .env 파일 설정 확인
cp .env.example .env
# 실제 API 키 값으로 수정 필요
```

### 2. 빌드 및 테스트
```bash
# 의존성 설치
npm install

# 린트 및 테스트
npm run build:test

# 로컬 프리뷰
npm run preview
```

## 🔧 Vercel 배포

### 자동 배포 (권장)
1. GitHub 저장소에 Push
2. Vercel에서 자동 빌드 & 배포
3. 환경변수는 Vercel 대시보드에서 설정

### 수동 배포
```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel --prod
```

## 🔥 Firebase 배포

### Firebase 설정
```bash
# Firebase CLI 설치
npm install -g firebase-tools

# 로그인
firebase login

# 프로젝트 초기화 (이미 완료됨)
firebase init hosting

# 배포
npm run deploy:firebase
```

### Firestore 규칙 배포
```bash
firebase deploy --only firestore:rules
firebase deploy --only storage
```

## 📊 배포 후 확인사항

### 1. 기능 테스트
- [ ] 사용자 로그인/회원가입
- [ ] 상품 등록/수정/삭제
- [ ] 이미지 업로드
- [ ] 채팅 기능
- [ ] 찜하기 기능
- [ ] 결제 시스템 (테스트 모드)

### 2. 성능 확인
- [ ] Lighthouse 점수 90+ 달성
- [ ] 페이지 로딩 속도 < 3초
- [ ] PWA 설치 가능
- [ ] 서비스 워커 동작

### 3. 보안 점검
- [ ] HTTPS 강제 적용
- [ ] Firebase 보안 규칙 적용
- [ ] XSS/SQL Injection 방어
- [ ] 환경변수 보안

## 🌍 도메인 설정

### Vercel 커스텀 도메인
1. Vercel 대시보드 > Domains
2. 도메인 추가
3. DNS 설정 (A 레코드 또는 CNAME)

### Firebase 커스텀 도메인
```bash
firebase hosting:sites:create your-domain-name
firebase target:apply hosting your-domain-name your-domain-name
firebase deploy --only hosting:your-domain-name
```

## 📈 모니터링 설정

### 1. 성능 모니터링
- Google Analytics 4
- Firebase Performance
- Vercel Analytics

### 2. 에러 모니터링
- Sentry 연동
- Firebase Crashlytics
- 콘솔 에러 추적

## 🔄 CI/CD 파이프라인

GitHub Actions가 자동으로:
1. 코드 품질 검사
2. 테스트 실행
3. 보안 스캔
4. 빌드 및 배포

### 필요한 GitHub Secrets
```
VITE_FIREBASE_API_KEY
VITE_FIREBASE_AUTH_DOMAIN
VITE_FIREBASE_PROJECT_ID
VITE_FIREBASE_STORAGE_BUCKET
VITE_FIREBASE_MESSAGING_SENDER_ID
VITE_FIREBASE_APP_ID
VITE_TOSS_CLIENT_KEY
VITE_TOSS_SECRET_KEY
VERCEL_TOKEN
VERCEL_ORG_ID
VERCEL_PROJECT_ID
```

## 🚨 긴급 복구

### 롤백 절차
```bash
# 이전 버전으로 롤백
vercel rollback

# 또는 Firebase
firebase hosting:clone SOURCE_SITE_ID:SOURCE_VERSION_ID TARGET_SITE_ID
```

### 긴급 패치
```bash
# 핫픽스 브랜치 생성
git checkout -b hotfix/critical-fix

# 수정 후 즉시 배포
npm run deploy:safe
```

## 📞 배포 후 점검 체크리스트

### ✅ 필수 확인사항
- [ ] 메인 페이지 로딩
- [ ] 로그인 기능 
- [ ] 상품 등록/조회
- [ ] 이미지 업로드
- [ ] 반응형 디자인
- [ ] PWA 설치
- [ ] 에러 페이지

### 📱 모바일 테스트
- [ ] iOS Safari
- [ ] Android Chrome
- [ ] 터치 반응성
- [ ] 스와이프 제스처

### 🌐 브라우저 호환성
- [ ] Chrome (최신)
- [ ] Safari (최신)
- [ ] Firefox (최신)
- [ ] Edge (최신)

## 🎯 성공 지표

### 성능 목표
- Lighthouse 성능 점수: 90+
- First Contentful Paint: < 2초
- Time to Interactive: < 3초
- 번들 크기: < 1MB

### 사용자 경험
- 오류율: < 1%
- 페이지 이탈률: < 50%
- 평균 세션 시간: > 3분

---

## 🔧 문제 해결

### 자주 발생하는 문제들

#### 빌드 실패
```bash
# 캐시 정리
npm run clean
npm install

# 의존성 문제 해결
rm -rf node_modules package-lock.json
npm install
```

#### 이미지 업로드 오류
- Firebase Storage 규칙 확인
- CORS 설정 확인
- 파일 크기 제한 확인

#### PWA 설치 불가
- Manifest 파일 확인
- Service Worker 등록 상태 확인
- HTTPS 적용 확인

---

**최종 업데이트**: 2025-08-06  
**배포 준비 완료**: ✅