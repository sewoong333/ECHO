#!/bin/bash

echo "🚀 ECHO 초안정 서버 시스템 - 새로고침해도 절대 안 끊어집니다!"

cd /Users/ose-ung/ECHO-clone

# 모든 기존 프로세스 완전 정리
pkill -9 -f "vite" 2>/dev/null || true
pkill -9 -f "node.*vite" 2>/dev/null || true
kill-port 5174 2>/dev/null || true
kill-port 5173 2>/dev/null || true

echo "🧹 기존 프로세스 완전 정리 완료"
sleep 3

# 서버 시작 (더 안정적인 옵션들 추가)
echo "⚡ 초안정 서버 시작 중..."

# PM2 스타일로 무한 재시작 보장
while true; do
    echo "🔄 $(date '+%H:%M:%S') 서버 시작 시도..."
    
    # Vite 서버 시작 (더 많은 안정화 옵션)
    npx vite --host 0.0.0.0 --port 5174 --clearScreen false --logLevel info &
    SERVER_PID=$!
    
    echo "✅ 서버 시작됨 (PID: $SERVER_PID) - http://localhost:5174/"
    
    # 서버가 죽을 때까지 대기
    wait $SERVER_PID
    
    echo "🚨 서버가 종료됨! 3초 후 자동 재시작..."
    sleep 3
done