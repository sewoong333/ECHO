#!/bin/bash

echo "🚀 ECHO 영구 서버 시스템 시작 - 절대 꺼지지 않습니다!"

# 현재 디렉토리로 이동
cd /Users/ose-ung/ECHO-clone

# 백그라운드에서 서버 모니터링 무한 루프
(
  while true; do
    echo "🔄 $(date '+%H:%M:%S') - 서버 상태 확인 중..."
    
    # 서버가 실행 중인지 확인
    if ! pgrep -f "vite.*5174" > /dev/null; then
      echo "🚨 서버가 꺼져있음! 즉시 재시작..."
      
      # 포트 정리
      kill-port 5174 2>/dev/null || true
      pkill -f "vite" 2>/dev/null || true
      
      # 잠시 대기
      sleep 1
      
      # 서버 재시작 (백그라운드)
      nohup npx vite --host --port 5174 > /dev/null 2>&1 &
      
      echo "✅ 서버 재시작 완료!"
      sleep 3
    else
      echo "✅ 서버 정상 동작 중"
    fi
    
    # 5초마다 체크
    sleep 5
  done
) &

# 초기 서버 시작
echo "⚡ 초기 서버 시작..."
kill-port 5174 2>/dev/null || true
npx vite --host --port 5174