/* eslint-env serviceworker */
/* global importScripts, firebase, clients */
// Firebase Cloud Messaging Service Worker
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

// Firebase 설정
const firebaseConfig = {
  apiKey: "AIzaSyDWRv_3hYr5LCSpXBqNMzJCLVfMr8QZbHs",
  authDomain: "echo-5385e.firebaseapp.com",
  projectId: "echo-5385e",
  storageBucket: "echo-5385e.firebasestorage.app",
  messagingSenderId: "1098536647050",
  appId: "1:1098536647050:web:bbc15c7f8c1b8e7d8e1a7a",
  measurementId: "G-7JJT8HM8SW"
};

// Firebase 초기화
firebase.initializeApp(firebaseConfig);

// Firebase Messaging 인스턴스 생성
const messaging = firebase.messaging();

// 백그라운드 메시지 처리
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message:', payload);
  
  const { title, body, icon, badge, data } = payload.notification || {};
  const notificationTitle = title || 'ECHO';
  const notificationOptions = {
    body: body || '새로운 알림이 있습니다.',
    icon: icon || '/icon-192x192.svg',
    badge: badge || '/icon-192x192.svg',
    tag: data?.tag || 'echo-notification',
    data: payload.data || {},
    actions: [],
    requireInteraction: false,
    silent: false,
    vibrate: [200, 100, 200],
    timestamp: Date.now()
  };

  // 알림 타입별 액션 설정
  if (data?.type) {
    switch (data.type) {
      case 'chat_message':
        notificationOptions.actions = [
          { action: 'reply', title: '답장', icon: '/icons/reply.png' },
          { action: 'view', title: '보기', icon: '/icons/view.png' }
        ];
        notificationOptions.tag = `chat_${data.chatRoomId}`;
        break;
        
      case 'payment_success':
        notificationOptions.actions = [
          { action: 'view_order', title: '주문 보기', icon: '/icons/order.png' },
          { action: 'contact_seller', title: '판매자 연락', icon: '/icons/chat.png' }
        ];
        notificationOptions.tag = `payment_${data.orderId}`;
        break;
        
      case 'product_interest':
        notificationOptions.actions = [
          { action: 'view_product', title: '상품 보기', icon: '/icons/product.png' },
          { action: 'dismiss', title: '닫기', icon: '/icons/close.png' }
        ];
        notificationOptions.tag = `product_${data.productId}`;
        break;
        
      case 'price_drop':
        notificationOptions.actions = [
          { action: 'view_product', title: '상품 보기', icon: '/icons/product.png' },
          { action: 'buy_now', title: '구매하기', icon: '/icons/buy.png' }
        ];
        notificationOptions.tag = `price_drop_${data.productId}`;
        break;
        
      default:
        notificationOptions.actions = [
          { action: 'view', title: '보기', icon: '/icons/view.png' }
        ];
    }
  }

  // 알림 표시
  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// 알림 클릭 처리
self.addEventListener('notificationclick', (event) => {
  console.log('[firebase-messaging-sw.js] Notification click received:', event);
  
  const notification = event.notification;
  const action = event.action;
  const data = notification.data;
  
  notification.close();

  let urlToOpen = '/';

  // 액션별 URL 결정
  if (action) {
    switch (action) {
      case 'reply':
      case 'view':
        if (data.chatRoomId) {
          urlToOpen = `/chat/${data.chatRoomId}`;
        } else {
          urlToOpen = '/chat';
        }
        break;
        
      case 'view_order':
        if (data.orderId) {
          urlToOpen = `/orders/${data.orderId}`;
        } else {
          urlToOpen = '/orders';
        }
        break;
        
      case 'contact_seller':
        if (data.chatRoomId) {
          urlToOpen = `/chat/${data.chatRoomId}`;
        } else if (data.productId) {
          urlToOpen = `/product/${data.productId}`;
        }
        break;
        
      case 'view_product':
        if (data.productId) {
          urlToOpen = `/product/${data.productId}`;
        }
        break;
        
      case 'buy_now':
        if (data.productId) {
          urlToOpen = `/product/${data.productId}?action=buy`;
        }
        break;
        
      case 'dismiss':
        return; // 알림만 닫고 아무것도 하지 않음
        
      default:
        urlToOpen = data.url || '/';
    }
  } else {
    // 기본 클릭 (액션 없음)
    if (data.type === 'chat_message' && data.chatRoomId) {
      urlToOpen = `/chat/${data.chatRoomId}`;
    } else if (data.type === 'payment_success' && data.orderId) {
      urlToOpen = `/orders/${data.orderId}`;
    } else if (data.productId) {
      urlToOpen = `/product/${data.productId}`;
    } else {
      urlToOpen = data.url || '/';
    }
  }

  // 기존 창 찾기 또는 새 창 열기
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      // 이미 열린 ECHO 페이지가 있는지 확인
      for (const client of clientList) {
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          client.focus();
          // 기존 페이지에 메시지 전송하여 URL 변경
          client.postMessage({
            type: 'NAVIGATE_TO',
            url: urlToOpen,
            notificationData: data
          });
          return;
        }
      }
      
      // 열린 페이지가 없으면 새 창 열기
      if (clients.openWindow) {
        return clients.openWindow(self.location.origin + urlToOpen);
      }
    })
  );
});

// 알림 닫기 처리
self.addEventListener('notificationclose', (event) => {
  console.log('[firebase-messaging-sw.js] Notification closed:', event.notification.data);
  
  // 알림 닫기 통계 (선택적)
  const data = event.notification.data;
  if (data?.analyticsId) {
    // TODO: 분석 서버에 알림 닫기 이벤트 전송
  }
});

// 푸시 이벤트 처리 (추가 보안)
self.addEventListener('push', (event) => {
  console.log('[firebase-messaging-sw.js] Push event received:', event);
  
  if (!event.data) {
    console.log('Push event has no data');
    return;
  }

  try {
    const payload = event.data.json();
    console.log('Push payload:', payload);
    
    // Firebase Messaging이 자동으로 처리하지만,
    // 추가 검증이나 커스텀 로직이 필요한 경우 여기서 처리
    
    // 예: 알림 권한 확인
    if (Notification.permission === 'denied') {
      console.log('Notification permission denied');
      return;
    }
    
    // 예: 사용자별 알림 설정 확인 (localStorage에서)
    // 실제로는 IndexedDB나 다른 스토리지 사용 권장
    
  } catch (error) {
    console.error('Error parsing push payload:', error);
  }
});

// Service Worker 업데이트 처리
self.addEventListener('message', (event) => {
  console.log('[firebase-messaging-sw.js] Message received:', event.data);
  
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// 백그라운드 동기화 (선택적)
self.addEventListener('sync', (event) => {
  console.log('[firebase-messaging-sw.js] Background sync:', event.tag);
  
  if (event.tag === 'notification-click-tracking') {
    event.waitUntil(
      // TODO: 오프라인 상태에서 클릭한 알림 정보를 서버에 동기화
      Promise.resolve()
    );
  }
});

// 에러 처리
self.addEventListener('error', (event) => {
  console.error('[firebase-messaging-sw.js] Service Worker error:', event.error);
});

self.addEventListener('unhandledrejection', (event) => {
  console.error('[firebase-messaging-sw.js] Unhandled promise rejection:', event.reason);
});

console.log('[firebase-messaging-sw.js] Service Worker loaded successfully');