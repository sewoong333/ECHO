#!/bin/bash

echo "🚀 ECHO 서버 즉시 시작..."

# 모든 기존 프로세스 완전 정리
pkill -f "vite" 2>/dev/null || true
pkill -f "npm" 2>/dev/null || true  
kill-port 5173 2>/dev/null || true
killall node 2>/dev/null || true

echo "🧹 기존 프로세스 정리 완료"

# 2초 대기
sleep 2

# 디렉토리 이동
cd /Users/ose-ung/ECHO-clone

# 서버 시작
echo "⚡ 서버 시작 중..."
vite --host --port 5173

echo "✅ 서버 시작 완료: http://localhost:5173/"