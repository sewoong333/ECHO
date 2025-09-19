# 🔍 데이터베이스 구조 점검 보고서

## 📊 현재 Firestore 컬렉션 구조

### 1. **사용자 관리 (users)**
```
/users/{userId}
├── /likes/{likeId}          # 사용자 찜 목록
└── /transactions/{transactionId}  # 거래 이력
```

**필드 구조**:
- `uid`: Firebase Auth UID
- `nickname`: 사용자 닉네임
- `email`: 이메일
- `profileImage`: 프로필 이미지
- `bio`: 자기소개
- `phoneNumber`: 전화번호
- `address`, `region`, `district`: 주소 정보
- `mannerScore`: 매너 점수
- `transactionCount`: 거래 횟수
- `reviewCount`: 리뷰 수
- `favoriteCount`: 찜 수
- `isVerified`: 인증 여부
- `isBusiness`: 사업자 여부
- `businessInfo`: 사업자 정보
- `preferences`: 알림 설정
- `blockedUsers`: 차단된 사용자
- `following`, `followers`: 팔로우 관계
- `createdAt`, `lastLoginAt`, `updatedAt`: 타임스탬프

### 2. **상품 관리 (products)**
```
/products/{productId}
```

**필드 구조**:
- `title`: 상품명
- `description`: 상품 설명
- `price`: 가격
- `images`: 이미지 배열
- `category`: 카테고리
- `condition`: 상품 상태
- `negotiable`: 가격 협상 가능 여부
- `delivery`: 택배 거래 가능 여부
- `sellerId`: 판매자 ID
- `sellerNickname`: 판매자 닉네임 (캐시)
- `sellerProfileImage`: 판매자 프로필 이미지 (캐시)
- `sellerBio`: 판매자 자기소개 (캐시)
- `sellerEmail`: 판매자 이메일 (캐시)
- `sellerVerified`: 판매자 인증 여부 (캐시)
- `sellerMannerScore`: 판매자 매너 점수 (캐시)
- `region`, `district`: 지역 정보
- `viewCount`: 조회수
- `likeCount`: 찜 수
- `chatCount`: 채팅 수
- `sold`: 판매 완료 여부
- `createdAt`, `updatedAt`: 타임스탬프

### 3. **채팅 시스템 (chatRooms)**
```
/chatRooms/{chatRoomId}
└── /messages/{messageId}
```

**필드 구조**:
- `productId`: 상품 ID
- `sellerId`: 판매자 ID
- `buyerId`: 구매자 ID
- `sellerInfo`: 판매자 정보
- `buyerInfo`: 구매자 정보
- `productInfo`: 상품 정보
- `lastMessage`: 마지막 메시지
- `lastMessageAt`: 마지막 메시지 시간
- `createdAt`, `updatedAt`: 타임스탬프

**메시지 필드**:
- `senderId`: 발신자 ID
- `content`: 메시지 내용
- `type`: 메시지 타입 (text, image, system)
- `read`: 읽음 여부
- `createdAt`: 전송 시간

### 4. **음악생활 게시판 (musiclife_posts)**
```
/musiclife_posts/{postId}
└── /comments/{commentId}
```

**필드 구조**:
- `title`: 게시글 제목
- `content`: 게시글 내용
- `category`: 카테고리
- `authorId`: 작성자 ID
- `authorNickname`: 작성자 닉네임 (캐시)
- `authorProfileImage`: 작성자 프로필 이미지 (캐시)
- `authorBio`: 작성자 자기소개 (캐시)
- `authorEmail`: 작성자 이메일 (캐시)
- `authorVerified`: 작성자 인증 여부 (캐시)
- `authorMannerScore`: 작성자 매너 점수 (캐시)
- `viewCount`: 조회수
- `commentCount`: 댓글 수
- `likeCount`: 좋아요 수
- `createdAt`, `updatedAt`: 타임스탬프

### 5. **리뷰 시스템 (reviews)**
```
/reviews/{reviewId}
```

**필드 구조**:
- `productId`: 상품 ID
- `sellerId`: 판매자 ID
- `buyerId`: 구매자 ID
- `rating`: 평점 (1-5)
- `content`: 리뷰 내용
- `images`: 리뷰 이미지
- `createdAt`: 작성 시간

### 6. **신고 시스템 (reports)**
```
/reports/{reportId}
```

**필드 구조**:
- `reporterId`: 신고자 ID
- `targetType`: 신고 대상 타입 (user, product, post)
- `targetId`: 신고 대상 ID
- `reason`: 신고 사유
- `description`: 상세 설명
- `status`: 처리 상태
- `createdAt`: 신고 시간

### 7. **알림 시스템 (notifications)**
```
/notifications/{notificationId}
```

**필드 구조**:
- `userId`: 수신자 ID
- `type`: 알림 타입
- `title`: 알림 제목
- `content`: 알림 내용
- `data`: 추가 데이터
- `read`: 읽음 여부
- `createdAt`: 생성 시간

### 8. **관리자 시스템 (admin)**
```
/admin/{document=**}
```

### 9. **분석 데이터 (analytics)**
```
/analytics/{document=**}
```

## 🚨 발견된 문제점

### 1. **데이터 중복 및 캐싱 문제**
- 상품과 음악생활 게시글에 판매자/작성자 정보가 중복 저장됨
- 닉네임, 프로필 이미지 등이 여러 곳에 캐시되어 일관성 문제 발생

### 2. **인덱스 부족**
- 복합 쿼리를 위한 인덱스가 부족할 수 있음
- 성능 최적화를 위한 인덱스 필요

### 3. **데이터 검증 부족**
- 클라이언트 사이드 검증만 있고 서버 사이드 검증 부족
- Firestore 보안 규칙의 데이터 검증이 제한적

### 4. **관계형 데이터 처리**
- 사용자 간 팔로우 관계가 배열로 저장되어 확장성 문제
- 대용량 데이터 처리 시 성능 이슈 가능

## 🔧 개선 방안

### 1. **데이터 정규화**
- 사용자 정보는 users 컬렉션에서만 관리
- 다른 컬렉션에서는 userId만 참조
- 실시간 조회를 통한 일관성 보장

### 2. **인덱스 최적화**
- 자주 사용되는 쿼리 패턴에 맞는 복합 인덱스 생성
- 성능 모니터링 및 최적화

### 3. **데이터 검증 강화**
- Firestore 보안 규칙 강화
- 서버 사이드 검증 로직 추가

### 4. **확장성 개선**
- 대용량 데이터 처리를 위한 페이지네이션
- 캐싱 전략 개선




