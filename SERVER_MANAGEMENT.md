# 🚀 ECHO 서버 관리 가이드

## 🎯 빠른 시작

### 서버 연결이 끊어졌을 때
```bash
# 1순위: 자동 재시작
npm run dev:auto

# 2순위: 안정적 시작
npm run dev:stable
```

## 📋 전체 명령어 목록

### 🤖 자동화 명령어 (추천)
| 명령어 | 설명 | 사용 시기 |
|--------|------|-----------|
| `npm run dev:stable` | 서버 상태 체크 후 안전한 시작 | 평상시 서버 시작 |
| `npm run dev:auto` | 완전 자동화된 재시작 | 서버 연결 끊김 시 |
| `npm run server:monitor` | 30초마다 자동 모니터링 | 장시간 개발 시 |

### 🔧 수동 제어 명령어
| 명령어 | 설명 |
|--------|------|
| `npm run server:check` | 현재 서버 상태 확인 |
| `npm run server:restart` | 수동 재시작 |
| `npm run server:stop` | 서버 중지 |
| `npm run server:start` | 서버 시작 |

## 🚨 긴급 복구 프로토콜

### 1단계: 자동 재시작
```bash
npm run dev:auto
```

### 2단계: 스마트 재시작 (1단계 실패 시)
```bash
npm run dev:stable
```

### 3단계: 완전 수동 재시작 (2단계 실패 시)
```bash
npm run server:stop
sleep 3
npm run server:start
```

### 4단계: 시스템 스크립트 (3단계 실패 시)
```bash
./scripts/restart-server.sh
```

## 🤖 자동 모니터링 시스템

### 모니터링 시작
```bash
npm run server:monitor
```

### 모니터 기능
- ✅ 30초마다 서버 상태 자동 체크
- 🔄 서버 다운 감지 시 자동 재시작
- 🔁 최대 3회 재시작 시도
- 📊 실시간 상태 로깅
- 🛑 Ctrl+C로 안전한 종료

### 모니터 출력 예시
```
🎯 ECHO 서버 모니터 시작
📋 설정:
   - 포트: 5173
   - 체크 간격: 30초
   - 최대 재시작 시도: 3회

✅ 서버가 성공적으로 시작되었습니다!
🌐 Local: http://localhost:5173/
👀 서버 모니터링 시작 (30초마다 체크)
✅ 서버 정상 작동 중 (14:30:15)
✅ 서버 정상 작동 중 (14:30:45)
```

## 📁 스크립트 파일 구조

```
ECHO-clone/
├── scripts/
│   ├── server-monitor.js    # 지능형 서버 모니터링
│   └── restart-server.sh    # 안전한 재시작 스크립트
└── package.json            # 모든 npm 명령어 정의
```

## ⚡ Claude 사용 규칙

### 서버 연결 끊김 감지 시 즉시 실행할 명령어:
1. `npm run dev:auto` (1순위)
2. `npm run dev:stable` (2순위)
3. `npm run server:restart` (3순위)

### 금지 사항:
- ❌ `npm run dev` 사용 금지 (포트 충돌)
- ❌ 수동 포트 킬링 후 시간 간격 없이 재시작
- ❌ 서버 상태 미확인 후 재시작

## 🔍 트러블슈팅

### 문제 1: 포트 5173이 사용 중
```bash
npm run server:stop
npm run server:start
```

### 문제 2: 서버 응답 없음
```bash
npm run server:check
# 000 응답 시:
npm run dev:auto
```

### 문제 3: 반복적인 서버 다운
```bash
# 장기 모니터링 활성화
npm run server:monitor
```

### 문제 4: 모든 자동화 실패
```bash
# 수동 스크립트 실행
./scripts/restart-server.sh
```

## 📈 성능 최적화

### 개발 중 권장 워크플로우:
1. **개발 시작**: `npm run dev:stable`
2. **장시간 개발**: `npm run server:monitor` (별도 터미널)
3. **서버 문제 시**: `npm run dev:auto`
4. **개발 종료**: `Ctrl+C` (모니터 종료)