#!/bin/bash
# Vite 개발 서버를 nodemon과 caffeinate로 자동 재시작 및 슬립 방지
cd "$(dirname "$0")"
caffeinate -i nodemon --exec "npm run dev" --watch . 