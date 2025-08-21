import { db } from './firebase';
import { 
  collection, 
  addDoc, 
  updateDoc, 
  doc, 
  query, 
  where, 
  getDocs,
  orderBy,
  serverTimestamp 
} from 'firebase/firestore';

export const tradingService = {
  // 거래 시작
  initiateTransaction: async (buyerId, sellerId, productId, transactionData) => {
    try {
      const transaction = {
        buyerId,
        sellerId,
        productId,
        status: 'initiated', // initiated -> confirmed -> shipped -> delivered -> completed
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        ...transactionData
      };
      
      const docRef = await addDoc(collection(db, 'transactions'), transaction);
      return { success: true, transactionId: docRef.id };
    } catch (error) {
      console.error('거래 시작 실패:', error);
      return { success: false, error: error.message };
    }
  },

  // 거래 상태 업데이트
  updateTransactionStatus: async (transactionId, status, updates = {}) => {
    try {
      const transactionRef = doc(db, 'transactions', transactionId);
      await updateDoc(transactionRef, {
        status,
        updatedAt: serverTimestamp(),
        ...updates
      });
      
      return { success: true };
    } catch (error) {
      console.error('거래 상태 업데이트 실패:', error);
      return { success: false, error: error.message };
    }
  },

  // 사용자별 거래 내역 조회
  getUserTransactions: async (userId, type = 'all') => {
    try {
      let q;
      if (type === 'buyer') {
        q = query(
          collection(db, 'transactions'),
          where('buyerId', '==', userId),
          orderBy('createdAt', 'desc')
        );
      } else if (type === 'seller') {
        q = query(
          collection(db, 'transactions'),
          where('sellerId', '==', userId),
          orderBy('createdAt', 'desc')
        );
      } else {
        // 구매자 또는 판매자로 참여한 모든 거래
        const buyerQuery = query(
          collection(db, 'transactions'),
          where('buyerId', '==', userId)
        );
        const sellerQuery = query(
          collection(db, 'transactions'),
          where('sellerId', '==', userId)
        );
        
        const [buyerDocs, sellerDocs] = await Promise.all([
          getDocs(buyerQuery),
          getDocs(sellerQuery)
        ]);
        
        const transactions = [...buyerDocs.docs, ...sellerDocs.docs]
          .map(doc => ({ id: doc.id, ...doc.data() }))
          .sort((a, b) => b.createdAt?.toDate() - a.createdAt?.toDate());
          
        return { success: true, transactions };
      }
      
      const querySnapshot = await getDocs(q);
      const transactions = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      
      return { success: true, transactions };
    } catch (error) {
      console.error('거래 내역 조회 실패:', error);
      return { success: false, error: error.message };
    }
  },

  // 거래 상태별 카운트
  getTransactionStats: async (userId) => {
    try {
      const transactions = await this.getUserTransactions(userId);
      if (!transactions.success) throw new Error(transactions.error);
      
      const stats = transactions.transactions.reduce((acc, transaction) => {
        acc[transaction.status] = (acc[transaction.status] || 0) + 1;
        acc.total = (acc.total || 0) + 1;
        return acc;
      }, {});
      
      return { success: true, stats };
    } catch (error) {
      console.error('거래 통계 조회 실패:', error);
      return { success: false, error: error.message };
    }
  }
};

export default tradingService;