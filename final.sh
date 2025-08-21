#!/bin/bash

echo "🚀 ECHO 최종 안정 서버 - 새로고침 문제 완전 해결!"

# 현재 디렉토리로 이동
cd /Users/ose-ung/ECHO-clone

# 완전 정리
pkill -9 -f "vite" 2>/dev/null || true
pkill -9 -f "node" 2>/dev/null || true
kill-port 5174 2>/dev/null || true

echo "🧹 완전 정리 완료"
sleep 2

# 환경 변수 설정으로 더 안정적인 서버
export NODE_ENV=development
export VITE_HMR_TIMEOUT=60000

echo "⚡ 최종 안정 서버 시작..."
exec npx vite --host 0.0.0.0 --port 5174 --no-open --clearScreen false