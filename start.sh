#!/bin/bash

echo "🚀 ECHO 완전 자동화 시스템 시작..."

# 기존 프로세스 정리
kill-port 5173 2>/dev/null || echo "포트 5173 정리 완료"

# 서버 시작
cd /Users/ose-ung/ECHO-clone
npm run dev:clean &

# 잠시 대기
sleep 5

# 무한 루프로 서버 상태 감시
while true; do
    STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:5173/ 2>/dev/null)
    
    if [ "$STATUS" = "200" ]; then
        echo "✅ $(date '+%H:%M:%S') - 서버 정상 (http://localhost:5173/)"
        sleep 10
    else
        echo "🚨 $(date '+%H:%M:%S') - 서버 문제 감지! 즉시 재시작..."
        
        # 모든 프로세스 종료
        pkill -f "vite" 2>/dev/null || true
        kill-port 5173 2>/dev/null || true
        
        # 잠시 대기
        sleep 2
        
        # 서버 재시작
        npm run dev:clean &
        
        # 재시작 후 안정화 대기
        sleep 5
    fi
done