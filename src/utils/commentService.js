import { 
  collection, 
  doc, 
  addDoc, 
  deleteDoc, 
  updateDoc, 
  query, 
  where, 
  orderBy, 
  getDocs,
  getDoc,
  serverTimestamp,
  increment,
  onSnapshot
} from 'firebase/firestore';
import { db } from './firebase';

class CommentService {
  constructor() {
    this.listeners = new Map(); // 실시간 구독 관리
  }

  // 댓글 추가 (대댓글 지원)
  async addComment(postId, commentData, parentCommentId = null) {
    try {
      const comment = {
        ...commentData,
        postId,
        parentCommentId, // 대댓글인 경우 부모 댓글 ID
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        likeCount: 0,
        likes: [],
        isDeleted: false,
        reportCount: 0
      };

      // 댓글 추가
      const docRef = await addDoc(collection(db, 'comments'), comment);
      
      // 게시글의 댓글 수 증가
      const postRef = doc(db, 'musiclife_posts', postId);
      await updateDoc(postRef, {
        commentCount: increment(1),
        lastCommentAt: serverTimestamp()
      });

      // 대댓글인 경우 부모 댓글의 대댓글 수 증가
      if (parentCommentId) {
        const parentCommentRef = doc(db, 'comments', parentCommentId);
        await updateDoc(parentCommentRef, {
          replyCount: increment(1)
        });
      }

      console.log('✅ 댓글 추가 완료:', docRef.id);
      return docRef.id;
    } catch (error) {
      console.error('❌ 댓글 추가 실패:', error);
      throw error;
    }
  }

  // 댓글 목록 가져오기
  async getComments(postId) {
    try {
      const q = query(
        collection(db, 'comments'),
        where('postId', '==', postId),
        where('isDeleted', '==', false),
        orderBy('createdAt', 'desc')
      );

      const querySnapshot = await getDocs(q);
      const comments = [];
      
      querySnapshot.forEach((doc) => {
        comments.push({
          id: doc.id,
          ...doc.data()
        });
      });

      // 댓글과 대댓글 구조화
      return this.structureComments(comments);
    } catch (error) {
      console.error('❌ 댓글 가져오기 실패:', error);
      return [];
    }
  }

  // 댓글 구조화 (댓글과 대댓글 분리)
  structureComments(comments) {
    const commentsMap = new Map();
    const rootComments = [];

    // 모든 댓글을 맵에 저장
    comments.forEach(comment => {
      comment.replies = [];
      commentsMap.set(comment.id, comment);
    });

    // 댓글과 대댓글 구조화
    comments.forEach(comment => {
      if (comment.parentCommentId) {
        // 대댓글인 경우
        const parentComment = commentsMap.get(comment.parentCommentId);
        if (parentComment) {
          parentComment.replies.push(comment);
        }
      } else {
        // 루트 댓글인 경우
        rootComments.push(comment);
      }
    });

    // 대댓글을 생성 시간순으로 정렬
    rootComments.forEach(comment => {
      comment.replies.sort((a, b) => 
        new Date(a.createdAt?.toDate()) - new Date(b.createdAt?.toDate())
      );
    });

    return rootComments;
  }

  // 실시간 댓글 구독
  subscribeToComments(postId, callback) {
    const q = query(
      collection(db, 'comments'),
      where('postId', '==', postId),
      where('isDeleted', '==', false),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const comments = [];
      querySnapshot.forEach((doc) => {
        comments.push({
          id: doc.id,
          ...doc.data()
        });
      });

      const structuredComments = this.structureComments(comments);
      callback(structuredComments);
    });

    // 구독 정보 저장
    this.listeners.set(postId, unsubscribe);
    return unsubscribe;
  }

  // 댓글 구독 해제
  unsubscribeFromComments(postId) {
    const unsubscribe = this.listeners.get(postId);
    if (unsubscribe) {
      unsubscribe();
      this.listeners.delete(postId);
    }
  }

  // 모든 구독 해제
  unsubscribeAll() {
    this.listeners.forEach((unsubscribe) => {
      unsubscribe();
    });
    this.listeners.clear();
  }

  // 댓글 좋아요/취소
  async toggleCommentLike(commentId, userId) {
    try {
      const commentRef = doc(db, 'comments', commentId);
      const commentSnap = await getDoc(commentRef);
      
      if (!commentSnap.exists()) {
        throw new Error('댓글을 찾을 수 없습니다');
      }

      const commentData = commentSnap.data();
      const likes = commentData.likes || [];
      const isLiked = likes.includes(userId);

      if (isLiked) {
        // 좋아요 취소
        await updateDoc(commentRef, {
          likes: likes.filter(id => id !== userId),
          likeCount: increment(-1)
        });
        return false;
      } else {
        // 좋아요 추가
        await updateDoc(commentRef, {
          likes: [...likes, userId],
          likeCount: increment(1)
        });
        return true;
      }
    } catch (error) {
      console.error('❌ 댓글 좋아요 실패:', error);
      throw error;
    }
  }

  // 댓글 수정
  async updateComment(commentId, content, userId) {
    try {
      const commentRef = doc(db, 'comments', commentId);
      const commentSnap = await getDoc(commentRef);
      
      if (!commentSnap.exists()) {
        throw new Error('댓글을 찾을 수 없습니다');
      }

      const commentData = commentSnap.data();
      
      // 작성자 확인
      if (commentData.authorId !== userId) {
        throw new Error('댓글 수정 권한이 없습니다');
      }

      await updateDoc(commentRef, {
        content,
        updatedAt: serverTimestamp(),
        isEdited: true
      });

      console.log('✅ 댓글 수정 완료:', commentId);
    } catch (error) {
      console.error('❌ 댓글 수정 실패:', error);
      throw error;
    }
  }

  // 댓글 삭제
  async deleteComment(commentId, userId) {
    try {
      const commentRef = doc(db, 'comments', commentId);
      const commentSnap = await getDoc(commentRef);
      
      if (!commentSnap.exists()) {
        throw new Error('댓글을 찾을 수 없습니다');
      }

      const commentData = commentSnap.data();
      
      // 작성자 확인
      if (commentData.authorId !== userId) {
        throw new Error('댓글 삭제 권한이 없습니다');
      }

      // 대댓글이 있는 경우 내용만 삭제
      const hasReplies = commentData.replyCount > 0;
      
      if (hasReplies) {
        await updateDoc(commentRef, {
          content: '삭제된 댓글입니다.',
          isDeleted: true,
          deletedAt: serverTimestamp()
        });
      } else {
        // 대댓글이 없으면 완전 삭제
        await deleteDoc(commentRef);
      }

      // 게시글의 댓글 수 감소
      const postRef = doc(db, 'musiclife_posts', commentData.postId);
      await updateDoc(postRef, {
        commentCount: increment(-1)
      });

      // 대댓글인 경우 부모 댓글의 대댓글 수 감소
      if (commentData.parentCommentId) {
        const parentCommentRef = doc(db, 'comments', commentData.parentCommentId);
        await updateDoc(parentCommentRef, {
          replyCount: increment(-1)
        });
      }

      console.log('✅ 댓글 삭제 완료:', commentId);
    } catch (error) {
      console.error('❌ 댓글 삭제 실패:', error);
      throw error;
    }
  }

  // 댓글 신고
  async reportComment(commentId, userId, reason) {
    try {
      const reportData = {
        commentId,
        reporterId: userId,
        reason,
        createdAt: serverTimestamp(),
        status: 'pending'
      };

      await addDoc(collection(db, 'reports'), reportData);

      // 댓글의 신고 수 증가
      const commentRef = doc(db, 'comments', commentId);
      await updateDoc(commentRef, {
        reportCount: increment(1)
      });

      console.log('✅ 댓글 신고 완료:', commentId);
    } catch (error) {
      console.error('❌ 댓글 신고 실패:', error);
      throw error;
    }
  }

  // 사용자의 댓글 목록 가져오기
  async getUserComments(userId, limit = 20) {
    try {
      const q = query(
        collection(db, 'comments'),
        where('authorId', '==', userId),
        where('isDeleted', '==', false),
        orderBy('createdAt', 'desc')
      );

      const querySnapshot = await getDocs(q);
      const comments = [];
      
      querySnapshot.forEach((doc) => {
        comments.push({
          id: doc.id,
          ...doc.data()
        });
      });

      return comments.slice(0, limit);
    } catch (error) {
      console.error('❌ 사용자 댓글 가져오기 실패:', error);
      return [];
    }
  }
}

// 싱글톤 인스턴스 생성
const commentService = new CommentService();

// 페이지 언로드 시 모든 구독 해제
window.addEventListener('beforeunload', () => {
  commentService.unsubscribeAll();
});

export default commentService;