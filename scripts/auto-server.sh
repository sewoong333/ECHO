#!/bin/bash

# ECHO 자동 서버 관리 스크립트
echo "🚀 ECHO 자동 서버 시스템 시작..."

# 무한 루프로 서버 상태 모니터링
while true; do
    # 서버 상태 체크
    STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:5173/ 2>/dev/null)
    
    if [ "$STATUS" = "200" ]; then
        echo "✅ $(date '+%H:%M:%S') - 서버 정상 동작 중"
        sleep 10  # 10초마다 체크
    else
        echo "🚨 $(date '+%H:%M:%S') - 서버 연결 실패! 자동 재시작 중..."
        
        # 포트 정리
        kill-port 5173 2>/dev/null || echo "포트 5173 정리 완료"
        
        # 잠시 대기
        sleep 2
        
        # 서버 재시작
        echo "🔄 서버 재시작 중..."
        cd /Users/ose-ung/ECHO-clone
        npm run dev:clean &
        
        # 서버 시작 대기
        sleep 5
        
        # 재시작 후 상태 확인
        NEW_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:5173/ 2>/dev/null)
        if [ "$NEW_STATUS" = "200" ]; then
            echo "✅ 서버 재시작 성공!"
        else
            echo "❌ 서버 재시작 실패, 5초 후 다시 시도..."
            sleep 5
        fi
    fi
done