import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    open: true
  },
  build: {
    // 청크 사이즈 최적화
    rollupOptions: {
      external: ['@tosspayments/payment-sdk'],
      output: {
        manualChunks: {
          // Firebase 관련 청크
          firebase: ['firebase/app', 'firebase/auth', 'firebase/firestore', 'firebase/storage'],
          // React 관련 청크
          react: ['react', 'react-dom', 'react-router-dom'],
          // UI 라이브러리 청크
          ui: ['styled-components', '@mui/material', '@emotion/react', '@emotion/styled'],
          // 아이콘 청크
          icons: ['react-icons'],
          // 유틸리티 청크
          utils: ['crypto-js', 'cheerio', 'node-fetch']
        }
      }
    },
    // gzip 압축을 위한 최적화
    target: 'es2015',
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // 소스맵 비활성화로 빌드 크기 감소
    sourcemap: false,
    // 청크 크기 경고 한도 증가
    chunkSizeWarningLimit: 1000
  },
  // 개발 서버 최적화
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'styled-components',
      'firebase/app',
      'firebase/auth',
      'firebase/firestore',
      'firebase/storage'
    ]
  }
})
