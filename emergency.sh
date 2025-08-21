#!/bin/bash

echo "🚨 긴급 안정 서버 - HMR 없이 절대 안정"

cd /Users/ose-ung/ECHO-clone

# 완전 정리
sudo pkill -9 -f "vite" 2>/dev/null || true
sudo pkill -9 -f "node" 2>/dev/null || true

# 포트 3000으로 단순하게
npx vite --host --port 3000