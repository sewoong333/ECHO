// 거래 상태 추적 서비스
import { 
  collection, 
  addDoc, 
  updateDoc, 
  doc, 
  getDoc, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  serverTimestamp,
  onSnapshot 
} from "firebase/firestore";
import { db } from "./firebase";

// 거래 상태 열거형
export const TRANSACTION_STATUS = {
  PENDING: 'pending',           // 거래 대기
  PAYMENT_PENDING: 'payment_pending', // 결제 대기
  PAID: 'paid',                // 결제 완료
  SHIPPED: 'shipped',          // 배송 시작
  DELIVERED: 'delivered',      // 배송 완료
  COMPLETED: 'completed',      // 거래 완료
  CANCELLED: 'cancelled',      // 거래 취소
  REFUNDED: 'refunded',        // 환불 완료
  DISPUTED: 'disputed'         // 분쟁 상태
};

// 거래 단계별 라벨
export const TRANSACTION_STATUS_LABELS = {
  [TRANSACTION_STATUS.PENDING]: '거래 대기',
  [TRANSACTION_STATUS.PAYMENT_PENDING]: '결제 대기',
  [TRANSACTION_STATUS.PAID]: '결제 완료',
  [TRANSACTION_STATUS.SHIPPED]: '배송 중',
  [TRANSACTION_STATUS.DELIVERED]: '배송 완료',
  [TRANSACTION_STATUS.COMPLETED]: '거래 완료',
  [TRANSACTION_STATUS.CANCELLED]: '거래 취소',
  [TRANSACTION_STATUS.REFUNDED]: '환불 완료',
  [TRANSACTION_STATUS.DISPUTED]: '분쟁 처리'
};

// 거래 서비스
export const transactionService = {
  // 새 거래 생성
  async createTransaction(transactionData) {
    try {
      const transaction = {
        // 기본 정보
        productId: transactionData.productId,
        sellerId: transactionData.sellerId,
        buyerId: transactionData.buyerId,
        
        // 상품 정보 스냅샷
        productSnapshot: {
          title: transactionData.productTitle,
          price: transactionData.productPrice,
          images: transactionData.productImages || [],
          condition: transactionData.productCondition
        },
        
        // 거래 정보
        totalAmount: transactionData.totalAmount,
        shippingMethod: transactionData.shippingMethod || 'direct', // direct, delivery
        shippingAddress: transactionData.shippingAddress || null,
        
        // 상태 관리
        status: TRANSACTION_STATUS.PENDING,
        statusHistory: [{
          status: TRANSACTION_STATUS.PENDING,
          timestamp: serverTimestamp(),
          note: '거래가 시작되었습니다.'
        }],
        
        // 결제 정보
        paymentMethod: transactionData.paymentMethod || null,
        paymentId: null,
        escrowId: null,
        
        // 배송 정보
        trackingNumber: null,
        shippingCompany: null,
        estimatedDelivery: null,
        
        // 타임스탬프
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        
        // 메타데이터
        notes: transactionData.notes || '',
        isEscrow: transactionData.isEscrow || true
      };
      
      const docRef = await addDoc(collection(db, 'transactions'), transaction);
      console.log('거래 생성 완료:', docRef.id);
      
      return {
        id: docRef.id,
        ...transaction
      };
    } catch (error) {
      console.error('거래 생성 실패:', error);
      throw error;
    }
  },
  
  // 거래 상태 업데이트
  async updateTransactionStatus(transactionId, newStatus, note = '', additionalData = {}) {
    try {
      const transactionRef = doc(db, 'transactions', transactionId);
      const transactionSnap = await getDoc(transactionRef);
      
      if (!transactionSnap.exists()) {
        throw new Error('거래를 찾을 수 없습니다.');
      }
      
      const currentData = transactionSnap.data();
      const statusHistory = currentData.statusHistory || [];
      
      // 새로운 상태 히스토리 추가
      statusHistory.push({
        status: newStatus,
        timestamp: serverTimestamp(),
        note: note || `상태가 ${TRANSACTION_STATUS_LABELS[newStatus]}(으)로 변경되었습니다.`
      });
      
      const updateData = {
        status: newStatus,
        statusHistory,
        updatedAt: serverTimestamp(),
        ...additionalData
      };
      
      // 상태별 특별 처리
      switch (newStatus) {
        case TRANSACTION_STATUS.PAID:
          updateData.paidAt = serverTimestamp();
          break;
        case TRANSACTION_STATUS.SHIPPED:
          updateData.shippedAt = serverTimestamp();
          break;
        case TRANSACTION_STATUS.DELIVERED:
          updateData.deliveredAt = serverTimestamp();
          break;
        case TRANSACTION_STATUS.COMPLETED:
          updateData.completedAt = serverTimestamp();
          break;
        case TRANSACTION_STATUS.CANCELLED:
          updateData.cancelledAt = serverTimestamp();
          break;
        case TRANSACTION_STATUS.REFUNDED:
          updateData.refundedAt = serverTimestamp();
          break;
      }
      
      await updateDoc(transactionRef, updateData);
      console.log('거래 상태 업데이트 완료:', transactionId, newStatus);
      
      return updateData;
    } catch (error) {
      console.error('거래 상태 업데이트 실패:', error);
      throw error;
    }
  },
  
  // 결제 정보 업데이트
  async updatePaymentInfo(transactionId, paymentData) {
    try {
      const updateData = {
        paymentId: paymentData.paymentKey,
        paymentMethod: paymentData.method,
        paymentAmount: paymentData.totalAmount,
        paymentApprovedAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      };
      
      await updateDoc(doc(db, 'transactions', transactionId), updateData);
      
      // 결제 완료 상태로 자동 업데이트
      await this.updateTransactionStatus(
        transactionId, 
        TRANSACTION_STATUS.PAID, 
        `${paymentData.method}로 결제가 완료되었습니다.`
      );
      
      return updateData;
    } catch (error) {
      console.error('결제 정보 업데이트 실패:', error);
      throw error;
    }
  },
  
  // 배송 정보 업데이트
  async updateShippingInfo(transactionId, shippingData) {
    try {
      const updateData = {
        trackingNumber: shippingData.trackingNumber,
        shippingCompany: shippingData.company,
        estimatedDelivery: shippingData.estimatedDelivery,
        shippingStartedAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      };
      
      await updateDoc(doc(db, 'transactions', transactionId), updateData);
      
      // 배송 시작 상태로 자동 업데이트
      await this.updateTransactionStatus(
        transactionId, 
        TRANSACTION_STATUS.SHIPPED, 
        `${shippingData.company}를 통해 배송이 시작되었습니다. 운송장번호: ${shippingData.trackingNumber}`
      );
      
      return updateData;
    } catch (error) {
      console.error('배송 정보 업데이트 실패:', error);
      throw error;
    }
  },
  
  // 거래 상세 조회
  async getTransaction(transactionId) {
    try {
      const transactionSnap = await getDoc(doc(db, 'transactions', transactionId));
      
      if (!transactionSnap.exists()) {
        throw new Error('거래를 찾을 수 없습니다.');
      }
      
      return {
        id: transactionSnap.id,
        ...transactionSnap.data()
      };
    } catch (error) {
      console.error('거래 조회 실패:', error);
      throw error;
    }
  },
  
  // 사용자별 거래 목록 조회
  async getUserTransactions(userId, role = 'all') {
    try {
      let q;
      
      if (role === 'seller') {
        q = query(
          collection(db, 'transactions'),
          where('sellerId', '==', userId),
          orderBy('createdAt', 'desc')
        );
      } else if (role === 'buyer') {
        q = query(
          collection(db, 'transactions'),
          where('buyerId', '==', userId),
          orderBy('createdAt', 'desc')
        );
      } else {
        // 판매자 또는 구매자로 참여한 모든 거래
        const sellerQuery = query(
          collection(db, 'transactions'),
          where('sellerId', '==', userId),
          orderBy('createdAt', 'desc')
        );
        
        const buyerQuery = query(
          collection(db, 'transactions'),
          where('buyerId', '==', userId),
          orderBy('createdAt', 'desc')
        );
        
        const [sellerSnap, buyerSnap] = await Promise.all([
          getDocs(sellerQuery),
          getDocs(buyerQuery)
        ]);
        
        const transactions = [
          ...sellerSnap.docs.map(doc => ({ id: doc.id, ...doc.data(), userRole: 'seller' })),
          ...buyerSnap.docs.map(doc => ({ id: doc.id, ...doc.data(), userRole: 'buyer' }))
        ];
        
        // 생성 시간 기준으로 정렬
        return transactions.sort((a, b) => b.createdAt?.seconds - a.createdAt?.seconds);
      }
      
      const querySnapshot = await getDocs(q);
      const userRole = role === 'seller' ? 'seller' : 'buyer';
      
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        userRole
      }));
    } catch (error) {
      console.error('사용자 거래 목록 조회 실패:', error);
      throw error;
    }
  },
  
  // 상품별 거래 목록 조회
  async getProductTransactions(productId) {
    try {
      const q = query(
        collection(db, 'transactions'),
        where('productId', '==', productId),
        orderBy('createdAt', 'desc')
      );
      
      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      console.error('상품 거래 목록 조회 실패:', error);
      throw error;
    }
  },
  
  // 실시간 거래 상태 구독
  subscribeToTransaction(transactionId, callback) {
    const transactionRef = doc(db, 'transactions', transactionId);
    
    return onSnapshot(transactionRef, (doc) => {
      if (doc.exists()) {
        callback({
          id: doc.id,
          ...doc.data()
        });
      } else {
        callback(null);
      }
    }, (error) => {
      console.error('거래 구독 에러:', error);
      callback(null, error);
    });
  },
  
  // 거래 취소
  async cancelTransaction(transactionId, reason, userId) {
    try {
      const transaction = await this.getTransaction(transactionId);
      
      // 취소 가능한 상태인지 확인
      const cancellableStatuses = [
        TRANSACTION_STATUS.PENDING,
        TRANSACTION_STATUS.PAYMENT_PENDING
      ];
      
      if (!cancellableStatuses.includes(transaction.status)) {
        throw new Error('현재 상태에서는 거래를 취소할 수 없습니다.');
      }
      
      // 권한 확인 (판매자 또는 구매자만 취소 가능)
      if (transaction.sellerId !== userId && transaction.buyerId !== userId) {
        throw new Error('거래 취소 권한이 없습니다.');
      }
      
      await this.updateTransactionStatus(
        transactionId,
        TRANSACTION_STATUS.CANCELLED,
        `거래가 취소되었습니다. 사유: ${reason}`,
        {
          cancellationReason: reason,
          cancelledBy: userId
        }
      );
      
      return true;
    } catch (error) {
      console.error('거래 취소 실패:', error);
      throw error;
    }
  },
  
  // 거래 완료 확인
  async confirmTransaction(transactionId, userId) {
    try {
      const transaction = await this.getTransaction(transactionId);
      
      // 구매자만 거래 완료 확인 가능
      if (transaction.buyerId !== userId) {
        throw new Error('거래 완료 확인 권한이 없습니다.');
      }
      
      // 배송 완료 상태에서만 거래 완료 가능
      if (transaction.status !== TRANSACTION_STATUS.DELIVERED) {
        throw new Error('배송 완료 후에 거래를 완료할 수 있습니다.');
      }
      
      await this.updateTransactionStatus(
        transactionId,
        TRANSACTION_STATUS.COMPLETED,
        '구매자가 거래 완료를 확인했습니다.'
      );
      
      return true;
    } catch (error) {
      console.error('거래 완료 확인 실패:', error);
      throw error;
    }
  },
  
  // 거래 통계 조회
  async getTransactionStats(userId) {
    try {
      const transactions = await this.getUserTransactions(userId);
      
      const stats = {
        total: transactions.length,
        completed: transactions.filter(t => t.status === TRANSACTION_STATUS.COMPLETED).length,
        pending: transactions.filter(t => [
          TRANSACTION_STATUS.PENDING,
          TRANSACTION_STATUS.PAYMENT_PENDING,
          TRANSACTION_STATUS.PAID,
          TRANSACTION_STATUS.SHIPPED,
          TRANSACTION_STATUS.DELIVERED
        ].includes(t.status)).length,
        cancelled: transactions.filter(t => t.status === TRANSACTION_STATUS.CANCELLED).length,
        asSellerCount: transactions.filter(t => t.userRole === 'seller').length,
        asBuyerCount: transactions.filter(t => t.userRole === 'buyer').length,
        totalVolume: transactions
          .filter(t => t.status === TRANSACTION_STATUS.COMPLETED)
          .reduce((sum, t) => sum + (t.totalAmount || 0), 0)
      };
      
      return stats;
    } catch (error) {
      console.error('거래 통계 조회 실패:', error);
      throw error;
    }
  }
};

export default transactionService;