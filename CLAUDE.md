# CLAUDE 개발 규칙 및 메모리

## 🚨 개발 서버 안정성 규칙 - 절대 위반 금지!

### ⚡ 필수 행동 규칙
1. **서버 연결이 끊어진 것을 확인하면 즉시 `npm run dev:clean` 실행**
2. **어떤 작업을 하더라도 서버 상태를 우선 확인**
3. **사용자가 서버 끊김을 언급하면 변명하지 말고 바로 재시작**

### 1. 서버 실행 명령어
- **항상 사용할 명령어**: `npm run dev:clean`
- **절대 사용하지 말 것**: `npm run dev` (포트 충돌 가능)
- **이유**: `dev:clean`은 포트를 먼저 정리한 후 실행하여 안정성 보장

### 2. 서버 상태 확인 방법
```bash
# 포트 사용 확인
lsof -ti:5173

# 프로세스 확인  
ps aux | grep vite | grep -v grep

# 서버 응답 확인
curl -s -o /dev/null -w "%{http_code}" http://localhost:5173/
```

### 3. 서버 재시작 프로토콜
1. 먼저 기존 프로세스 종료: `kill-port 5173`
2. 안정적 재시작: `npm run dev:clean`
3. 실행 확인: 브라우저에서 http://localhost:5173/ 접속 테스트

## 📋 프로젝트 정보

### 기본 정보
- **프로젝트명**: ECHO 악기 공유 플랫폼
- **기술스택**: React + Vite + Firebase + Styled Components
- **로컬서버**: http://localhost:5173/
- **포트**: 5173

### Firebase 설정
- **프로젝트 ID**: echo-5385e
- **환경변수 파일**: `.env` (이미 설정 완료)
- **Firestore**: 설정 완료
- **Storage**: 규칙 설정 완료 (`storage.rules`)

## ✅ 완료된 기능들

### 1. 핵심 기능
- [x] 회원가입/로그인 (Google OAuth)
- [x] 상품등록 (이미지 업로드, 폼 검증)
- [x] 상품목록 (검색, 정렬, 무한스크롤)
- [x] 반응형 디자인 (모바일 최적화)
- [x] Firebase 실시간 연동

### 2. 개선 완료된 사항
- [x] 검색 debounce (300ms)
- [x] 폼 검증 (제목 2글자+, 설명 10글자+)
- [x] 에러 처리 및 폴백 로직
- [x] 모바일 터치 최적화
- [x] 성공 메시지 자동 표시

## 🔧 개발 명령어

### 필수 명령어
```bash
# 서버 실행 (포트 정리 후)
npm run dev:clean

# 빌드
npm run build

# Firebase 배포
firebase deploy --only firestore
firebase deploy --only hosting

# 린트 검사
npm run lint
```

### 파일 구조
```
src/
├── components/     # 재사용 컴포넌트
├── pages/         # 페이지 컴포넌트
├── store/         # Context API (ProductContext, UserContext)
├── utils/         # 유틸리티 (firebase.js 등)
└── routes/        # 라우팅 설정
```

## 🐛 문제 해결 가이드

### 서버 연결 끊김 문제
**증상**: "ERR_CONNECTION_REFUSED" 또는 서버 응답 없음
**해결방법**:
1. `npm run dev:clean` 실행
2. 포트 5173이 사용 중인지 확인
3. 필요시 터미널 재시작

### Firebase 에러
**Storage CORS 에러**: 
- 현재 폴백 로직으로 처리됨 (기본 이미지 사용)
- Firebase Console에서 Storage 활성화 시 해결

### 빌드 에러
**타입 에러**: `npm run lint`로 확인 후 수정

## 📝 주요 파일 경로

### 설정 파일
- `package.json` - 스크립트 및 의존성
- `vite.config.js` - Vite 설정
- `firebase.json` - Firebase 설정
- `.env` - 환경변수 (Firebase 키)

### 핵심 컴포넌트
- `src/pages/Home.jsx` - 메인 페이지 (완성도 높음)
- `src/pages/AddProduct.jsx` - 상품등록 (개선 완료)
- `src/store/ProductContext.jsx` - 상품 데이터 관리
- `src/utils/firebase.js` - Firebase 연동

## 🚀 배포 정보

### Vercel 설정
- `vercel.json` - SPA 리다이렉트 설정
- 환경변수는 Vercel 대시보드에서 설정 필요

### 현재 상태
- ✅ 개발 환경 완전 구축
- ✅ 모든 핵심 기능 구현 완료
- ✅ 실제 사용자 사용 가능한 수준
- ✅ 이미지 URL 입력 기능 추가 (Firebase Storage 대안)
- ⚠️ Firebase 유료 결제는 취소됨

## 🔥 중요 알림
- 사용자가 Firebase 유료 결제를 했다가 취소함
- 앞으로 절대 서버 연결 문제 발생하지 않도록 주의
- 서버 끊김 감지 즉시 npm run dev:clean 실행 필수

---

**마지막 업데이트**: 2025-01-02
**상태**: 프로덕션 준비 완료 ✅