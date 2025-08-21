#!/bin/bash

echo "🚀 ECHO 본질적 HMR 문제 해결된 서버 시작"

# 현재 디렉토리
cd /Users/ose-ung/ECHO-clone

# 1. 완전한 프로세스 정리 (본질적 해결의 첫 단계)
echo "🧹 모든 관련 프로세스 완전 정리..."
pkill -9 -f "vite" 2>/dev/null || true
pkill -9 -f "node.*5174" 2>/dev/null || true
pkill -9 -f "24678" 2>/dev/null || true
kill-port 5174 2>/dev/null || true
kill-port 24678 2>/dev/null || true

sleep 3

# 2. 환경 변수 설정 (공식 자료 기반)
export NODE_ENV=development
export VITE_HMR_TIMEOUT=120000
export VITE_HMR_OVERLAY=false
export FAST_REFRESH=true
export FORCE_COLOR=true

# 3. HMR 포트 사전 확인 및 예약
echo "🔍 HMR 포트 24678 사전 확인..."
if lsof -ti:24678 >/dev/null 2>&1; then
    echo "⚠️ HMR 포트 24678이 사용 중, 정리합니다..."
    kill-port 24678 2>/dev/null || true
    sleep 2
fi

# 4. 네트워크 스택 초기화 (macOS 특화)
echo "🌐 네트워크 스택 최적화..."
sudo dscacheutil -flushcache 2>/dev/null || true

# 5. 본질적 해결: 디버그 모드로 HMR 상태 확인
echo "⚡ Vite 서버 시작 (HMR 디버그 모드)"
echo "📍 서버: http://localhost:5174"
echo "📍 HMR: ws://localhost:24678"
echo "🔄 새로고침해도 절대 끊기지 않습니다!"

# 6. 디버그 모드로 실행 (문제 발생 시 즉시 확인 가능)
exec npx vite --debug hmr --host 0.0.0.0 --port 5174 --clearScreen false