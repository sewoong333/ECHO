const { spawn, exec } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 ECHO 파일 감시 및 자동 재시작 시스템 시작...');

let serverProcess = null;
let isRestarting = false;

// 서버 시작 함수
function startServer() {
  if (isRestarting) return;
  isRestarting = true;
  
  console.log('🔄 서버 재시작 중...');
  
  // 기존 프로세스 종료
  if (serverProcess) {
    serverProcess.kill('SIGTERM');
  }
  
  // 포트 정리
  exec('kill-port 5173', (error) => {
    setTimeout(() => {
      // 새 서버 시작
      serverProcess = spawn('npm', ['run', 'dev:clean'], {
        stdio: 'inherit',
        shell: true,
        cwd: '/Users/ose-ung/ECHO-clone'
      });
      
      serverProcess.on('error', (err) => {
        console.error('❌ 서버 시작 실패:', err);
        setTimeout(startServer, 3000);
      });
      
      console.log('✅ 서버 재시작 완료');
      isRestarting = false;
    }, 2000);
  });
}

// 서버 상태 확인 함수
function checkServer() {
  return new Promise((resolve) => {
    const { spawn } = require('child_process');
    const curl = spawn('curl', ['-s', '-o', '/dev/null', '-w', '%{http_code}', 'http://localhost:5173/']);
    
    let output = '';
    curl.stdout.on('data', (data) => {
      output += data.toString();
    });
    
    curl.on('close', (code) => {
      resolve(output.trim() === '200');
    });
    
    curl.on('error', () => {
      resolve(false);
    });
  });
}

// 파일 변경 감지 (특정 파일들만)
const watchPaths = [
  '/Users/ose-ung/ECHO-clone/src',
  '/Users/ose-ung/ECHO-clone/package.json',
  '/Users/ose-ung/ECHO-clone/vite.config.js'
];

watchPaths.forEach(watchPath => {
  if (fs.existsSync(watchPath)) {
    fs.watch(watchPath, { recursive: true }, (eventType, filename) => {
      if (filename && (filename.endsWith('.jsx') || filename.endsWith('.js') || filename.endsWith('.json'))) {
        console.log(`📁 파일 변경 감지: ${filename} - 서버 재시작 예약`);
        setTimeout(startServer, 1000); // 1초 지연 후 재시작
      }
    });
  }
});

// 초기 서버 시작
startServer();

// 10초마다 서버 상태 체크
setInterval(async () => {
  const isRunning = await checkServer();
  if (!isRunning && !isRestarting) {
    console.log('🚨 서버 연결 실패 감지 - 자동 재시작...');
    startServer();
  } else if (isRunning) {
    console.log('✅ 서버 정상 동작 중');
  }
}, 10000);

// 프로세스 종료 시 정리
process.on('SIGINT', () => {
  console.log('\n🛑 자동 재시작 시스템 종료...');
  if (serverProcess) {
    serverProcess.kill('SIGTERM');
  }
  exec('kill-port 5173', () => {
    process.exit(0);
  });
});

console.log('👀 파일 변경 감시 중... (Ctrl+C로 종료)');