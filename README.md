# ECHO - 악기 공유 플랫폼

악기를 판매, 구매, 임대할 수 있는 중고 악기 거래 플랫폼입니다.

## 🚀 주요 기능

### ✅ 완료된 기능
- **상품 등록**: 다중 이미지 업로드, 상세 정보 입력
- **상품 목록**: 검색, 정렬, 무한 스크롤
- **Firebase 연동**: 실시간 데이터베이스, 이미지 스토리지
- **사용자 인증**: Google 로그인
- **반응형 디자인**: 모바일 최적화

### 🔄 개발 중인 기능
- 상품 상세 페이지
- 채팅 기능
- 찜하기 기능
- 사용자 프로필
- 결제 시스템

## 🛠️ 기술 스택

- **Frontend**: React, Vite, Styled Components
- **Backend**: Firebase (Firestore, Storage, Auth)
- **Deployment**: Vercel

## 📦 설치 및 실행

### 1. 프로젝트 클론
```bash
git clone <repository-url>
cd echo-web
```

### 2. 의존성 설치
```bash
npm install
# 또는
yarn install
```

### 3. Firebase 설정

#### 3-1. Firebase 프로젝트 생성
1. [Firebase Console](https://console.firebase.google.com/)에서 새 프로젝트 생성
2. Authentication > Sign-in method에서 Google 로그인 활성화
3. Firestore Database 생성 (테스트 모드로 시작)
4. Storage 생성 (테스트 모드로 시작)

#### 3-2. 환경 변수 설정
1. `firebase-config-example.txt`를 `.env.local`로 복사
2. Firebase Console > 프로젝트 설정 > 일반 > 내 앱에서 설정 값 복사
3. `.env.local` 파일에 실제 값 입력

```bash
cp firebase-config-example.txt .env.local
```

`.env.local` 예시:
```env
VITE_FIREBASE_API_KEY=AIzaSyC...
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=1:123456789:web:abc123
```

### 4. 개발 서버 실행
```bash
npm run dev
# 또는
yarn dev
```

### 5. 빌드 및 배포
```bash
npm run build
# 또는
yarn build
```

## 📁 프로젝트 구조

```
echo-web/
├── src/
│   ├── components/          # 재사용 가능한 컴포넌트
│   ├── pages/              # 페이지 컴포넌트
│   ├── store/              # Context API 상태 관리
│   ├── utils/              # 유틸리티 함수
│   └── routes/             # 라우팅 설정
├── public/                 # 정적 파일
├── api/                    # API 엔드포인트
└── scripts/                # 빌드 및 배포 스크립트
```

## 🔧 주요 컴포넌트

### ProductContext
- 상품 데이터 관리
- Firebase Firestore 연동
- 실시간 데이터 동기화

### ProductRegister
- 상품 등록 폼
- 다중 이미지 업로드
- Firebase Storage 연동

### Home
- 상품 목록 표시
- 검색 및 정렬
- 무한 스크롤

## 🔐 보안 설정

### Firestore 보안 규칙
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /products/{productId} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

### Storage 보안 규칙
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /products/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## 🚀 배포

### Vercel 배포
1. GitHub에 코드 푸시
2. Vercel에서 프로젝트 연결
3. 환경 변수 설정
4. 자동 배포 완료

## 📝 개발 가이드

### 새 기능 추가 시
1. 기능 브랜치 생성
2. 개발 및 테스트
3. PR 생성
4. 코드 리뷰 후 머지

### 코드 스타일
- ESLint 규칙 준수
- Prettier 포맷팅
- 컴포넌트별 파일 분리

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 📞 문의

프로젝트에 대한 문의사항이 있으시면 이슈를 생성해주세요.
