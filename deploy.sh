#!/bin/bash

echo "🚀 ECHO 악기 플랫폼 배포 시작..."

# 1. 빌드
echo "📦 프로젝트 빌드 중..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ 빌드 실패!"
    exit 1
fi

echo "✅ 빌드 완료!"

# 2. Firebase 배포 (hosting과 firestore만)
echo "🔥 Firebase에 배포 중..."
firebase deploy --only hosting,firestore

if [ $? -ne 0 ]; then
    echo "❌ 배포 실패!"
    exit 1
fi

echo "🎉 배포 완료!"
echo "🌐 웹사이트가 Firebase Hosting에 배포되었습니다."
echo "📱 모바일에서도 접속 가능합니다." 