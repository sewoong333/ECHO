#!/bin/bash

# ECHO 개발 서버 안정적 재시작 스크립트

echo "🎯 ECHO 서버 재시작 스크립트"
echo "=============================="

# 현재 서버 상태 체크
echo "📋 현재 서버 상태 확인 중..."
SERVER_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:5173/ 2>/dev/null || echo "000")

if [ "$SERVER_STATUS" = "200" ]; then
    echo "✅ 서버가 현재 실행 중입니다 (응답 코드: $SERVER_STATUS)"
else
    echo "❌ 서버가 응답하지 않습니다 (응답 코드: $SERVER_STATUS)"
fi

# 기존 프로세스 정리
echo ""
echo "🧹 기존 프로세스 정리 중..."
kill-port 5173 2>/dev/null || echo "ℹ️  포트 5173에 실행 중인 프로세스 없음"

# 잠시 대기
echo "⏳ 2초 대기 중..."
sleep 2

# 새 서버 시작
echo ""
echo "🚀 새 서버 시작 중..."
echo "   - 포트: 5173"
echo "   - 호스트: 모든 인터페이스"
echo ""

# npm run dev:clean 실행
npm run dev:clean

echo ""
echo "✅ 서버 재시작 완료!"
echo "🌐 브라우저에서 http://localhost:5173/ 접속하세요"