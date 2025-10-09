// 브라우저 알림 서비스
export const notificationService = {
  // 알림 권한 상태 확인
  checkPermission() {
    if (!("Notification" in window)) {
      console.log("이 브라우저는 알림을 지원하지 않습니다.");
      return "unsupported";
    }
    
    return Notification.permission;
  },

  // 알림 권한 요청
  async requestPermission() {
    if (!("Notification" in window)) {
      console.log("이 브라우저는 알림을 지원하지 않습니다.");
      return "unsupported";
    }

    if (Notification.permission === "granted") {
      return "granted";
    } else if (Notification.permission !== "denied") {
      const permission = await Notification.requestPermission();
      return permission;
    }
    
    return Notification.permission;
  },

  // 알림 표시
  showNotification(title, options = {}) {
    const permission = this.checkPermission();
    
    if (permission === "unsupported") {
      console.log("브라우저가 알림을 지원하지 않습니다.");
      return null;
    }
    
    if (permission !== "granted") {
      console.log("알림 권한이 없습니다.");
      return null;
    }

    const defaultOptions = {
      icon: '/logo192.png', // PWA 아이콘 사용
      badge: '/logo192.png',
      tag: 'echo-notification',
      renotify: true,
      requireInteraction: false,
      silent: false,
      timestamp: Date.now(),
      ...options
    };

    const notification = new Notification(title, defaultOptions);

    // 알림 클릭 이벤트
    notification.onclick = function(event) {
      event.preventDefault();
      window.focus();
      
      // 특정 페이지로 이동
      if (options.url) {
        window.location.href = options.url;
      }
      
      notification.close();
    };

    // 자동 닫기 (5초 후)
    setTimeout(() => {
      notification.close();
    }, options.duration || 5000);

    return notification;
  },

  // 채팅 알림
  showChatNotification(message, senderName, chatId) {
    return this.showNotification(`💬 ${senderName}`, {
      body: message,
      icon: '/logo192.png',
      tag: `chat-${chatId}`,
      url: `/chat/${chatId}`,
      actions: [
        {
          action: 'reply',
          title: '답장하기'
        },
        {
          action: 'view',
          title: '채팅 보기'
        }
      ]
    });
  },

  // 관심물건 알림
  showLikeNotification(productTitle, userName) {
    return this.showNotification(`❤️ 새로운 관심물건`, {
      body: `${userName}님이 "${productTitle}"를 관심물건으로 추가했습니다`,
      icon: '/logo192.png',
      tag: 'like-notification',
    });
  },

  // 상품 등록 성공 알림
  showProductRegisteredNotification(productTitle) {
    return this.showNotification(`✅ 상품 등록 완료`, {
      body: `"${productTitle}" 상품이 성공적으로 등록되었습니다`,
      icon: '/logo192.png',
      tag: 'product-registered',
    });
  },

  // 거래 완료 알림
  showTransactionCompleteNotification(productTitle) {
    return this.showNotification(`🎉 거래 완료`, {
      body: `"${productTitle}" 거래가 완료되었습니다`,
      icon: '/logo192.png',
      tag: 'transaction-complete',
    });
  },

  // 새 댓글 알림 (음악생활)
  showCommentNotification(postTitle, commenterName) {
    return this.showNotification(`💭 새 댓글`, {
      body: `${commenterName}님이 "${postTitle}"에 댓글을 남겼습니다`,
      icon: '/logo192.png',
      tag: 'new-comment',
    });
  },

  // 키워드 알림
  showKeywordAlertNotification(keyword, productTitle) {
    return this.showNotification(`🔔 키워드 알림`, {
      body: `"${keyword}" 키워드와 일치하는 "${productTitle}" 상품이 등록되었습니다`,
      icon: '/logo192.png',
      tag: 'keyword-alert',
    });
  },

  // 일반 알림
  showGeneralNotification(title, message, type = 'info') {
    const icons = {
      success: '✅',
      error: '❌', 
      warning: '⚠️',
      info: 'ℹ️'
    };

    return this.showNotification(`${icons[type]} ${title}`, {
      body: message,
      icon: '/logo192.png',
      tag: `general-${type}`,
    });
  }
};

// 알림 권한을 자동으로 요청하는 유틸리티
export const initializeNotifications = async () => {
  const permission = await notificationService.requestPermission();
  
  if (permission === "granted") {
    console.log("✅ 브라우저 알림이 활성화되었습니다.");
    
    // 환영 알림 (선택사항)
    // notificationService.showGeneralNotification(
    //   "ECHO 알림 활성화", 
    //   "새로운 메시지와 알림을 받을 수 있습니다", 
    //   "success"
    // );
  } else {
    console.log("❌ 브라우저 알림이 거부되었습니다.");
  }
  
  return permission;
};

export default notificationService;