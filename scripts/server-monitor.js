#!/usr/bin/env node

import { spawn, exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

class ServerMonitor {
  constructor() {
    this.port = 5173;
    this.checkInterval = 30000; // 30초마다 체크
    this.maxRestartAttempts = 3;
    this.restartAttempts = 0;
    this.serverProcess = null;
    this.isRunning = false;
  }

  async checkServerHealth() {
    try {
      const { stdout } = await execAsync(`curl -s -o /dev/null -w "%{http_code}" http://localhost:${this.port}/`);
      const statusCode = stdout.trim();
      return statusCode === '200';
    } catch (error) {
      return false;
    }
  }

  async killExistingProcesses() {
    try {
      await execAsync(`kill-port ${this.port}`);
      console.log(`✅ 포트 ${this.port} 정리 완료`);
    } catch (error) {
      console.log(`ℹ️  포트 ${this.port}에 실행 중인 프로세스 없음`);
    }
  }

  async startServer() {
    try {
      console.log(`🚀 서버 시작 중... (포트: ${this.port})`);
      
      // 기존 프로세스 정리
      await this.killExistingProcesses();
      
      // 잠시 대기
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // 새 서버 프로세스 시작
      this.serverProcess = spawn('npx', ['vite', '--host', '--port', this.port.toString()], {
        stdio: 'pipe',
        detached: false
      });

      this.serverProcess.stdout.on('data', (data) => {
        const output = data.toString();
        if (output.includes('ready in')) {
          console.log(`✅ 서버가 성공적으로 시작되었습니다!`);
          console.log(`🌐 Local: http://localhost:${this.port}/`);
          this.isRunning = true;
          this.restartAttempts = 0;
        }
      });

      this.serverProcess.stderr.on('data', (data) => {
        console.error(`❌ 서버 에러: ${data}`);
      });

      this.serverProcess.on('close', (code) => {
        console.log(`⚠️  서버 프로세스 종료 (코드: ${code})`);
        this.isRunning = false;
        
        if (code !== 0 && this.restartAttempts < this.maxRestartAttempts) {
          console.log(`🔄 서버 재시작 시도 중... (${this.restartAttempts + 1}/${this.maxRestartAttempts})`);
          this.restartAttempts++;
          setTimeout(() => this.startServer(), 5000);
        }
      });

      return true;
    } catch (error) {
      console.error(`❌ 서버 시작 실패:`, error);
      return false;
    }
  }

  async stopServer() {
    if (this.serverProcess) {
      this.serverProcess.kill('SIGTERM');
      this.serverProcess = null;
    }
    this.isRunning = false;
    await this.killExistingProcesses();
  }

  async restartServer() {
    console.log(`🔄 서버 재시작 중...`);
    await this.stopServer();
    await new Promise(resolve => setTimeout(resolve, 3000));
    return await this.startServer();
  }

  startMonitoring() {
    console.log(`👀 서버 모니터링 시작 (${this.checkInterval/1000}초마다 체크)`);
    
    const monitorInterval = setInterval(async () => {
      const isHealthy = await this.checkServerHealth();
      
      if (!isHealthy && this.isRunning) {
        console.log(`❌ 서버 응답 없음 - 재시작 중...`);
        await this.restartServer();
      } else if (isHealthy) {
        console.log(`✅ 서버 정상 작동 중 (${new Date().toLocaleTimeString()})`);
      }
    }, this.checkInterval);

    // 프로세스 종료 시 정리
    process.on('SIGINT', async () => {
      console.log(`\n🛑 모니터링 중단 중...`);
      clearInterval(monitorInterval);
      await this.stopServer();
      process.exit(0);
    });
  }

  async init() {
    console.log(`🎯 ECHO 서버 모니터 시작`);
    console.log(`📋 설정:`);
    console.log(`   - 포트: ${this.port}`);
    console.log(`   - 체크 간격: ${this.checkInterval/1000}초`);
    console.log(`   - 최대 재시작 시도: ${this.maxRestartAttempts}회`);
    console.log(`\n`);

    // 초기 서버 시작
    const started = await this.startServer();
    
    if (started) {
      // 서버가 완전히 시작될 때까지 대기
      let attempts = 0;
      while (attempts < 10) {
        await new Promise(resolve => setTimeout(resolve, 2000));
        const isHealthy = await this.checkServerHealth();
        if (isHealthy) {
          console.log(`🎉 서버 준비 완료!`);
          break;
        }
        attempts++;
      }
      
      // 모니터링 시작
      this.startMonitoring();
    } else {
      console.error(`❌ 서버 시작 실패`);
      process.exit(1);
    }
  }
}

// 스크립트 실행
const monitor = new ServerMonitor();
monitor.init().catch(console.error);