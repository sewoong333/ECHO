#!/bin/bash

# 파일 변경 감지 및 자동 서버 재시작 시스템
echo "🚀 ECHO 자동 재시작 시스템 시작..."

# 서버 시작 함수
start_server() {
    echo "🔄 서버 재시작 중..."
    kill-port 5173 2>/dev/null || true
    sleep 1
    cd /Users/ose-ung/ECHO-clone
    npm run dev:clean &
    SERVER_PID=$!
    echo "✅ 서버 시작됨 (PID: $SERVER_PID)"
    sleep 3
}

# 서버 상태 확인 함수
check_server() {
    STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:5173/ 2>/dev/null)
    if [ "$STATUS" = "200" ]; then
        return 0
    else
        return 1
    fi
}

# 초기 서버 시작
start_server

# 무한 루프로 감시
while true; do
    # 10초마다 서버 상태 체크
    if ! check_server; then
        echo "🚨 $(date '+%H:%M:%S') - 서버 연결 실패! 자동 재시작..."
        start_server
    else
        echo "✅ $(date '+%H:%M:%S') - 서버 정상 동작"
    fi
    
    sleep 10
done