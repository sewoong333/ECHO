import React, { createContext, useState, useEffect, useContext } from "react";
import { db, productService } from "../utils/firebase";
import { UserContext } from "./UserContext";
import notificationService from "../utils/notificationService";
import {
  collection,
  query,
  where,
  orderBy,
  limit,
  onSnapshot,
  addDoc,
  updateDoc,
  doc,
  serverTimestamp,
  getDocs,
  getDoc,
} from "firebase/firestore";

export const ChatContext = createContext();

export function ChatProvider({ children }) {
  // UserContext가 undefined일 수 있으므로 안전하게 처리
  const userContext = useContext(UserContext);
  const user = userContext?.user || { uid: null, isLoggedIn: false };
  const getUserInfo = userContext?.getUserInfo || (() => Promise.resolve(null));
  
  const [chatRooms, setChatRooms] = useState([]);
  const [messages, setMessages] = useState({});
  const [currentChat, setCurrentChat] = useState(null);
  const [loading, setLoading] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);
  const [initialized, setInitialized] = useState(false);
  
  // 채팅방 데이터 새로고침 함수
  const refreshChatRooms = async () => {
    if (!user.uid) return;
    
    try {
      console.log('🔄 채팅방 데이터 새로고침');
      setLoading(true);
      
      const q = query(
        collection(db, "chatRooms"),
        where("participants", "array-contains", user.uid)
      );
      
      const snapshot = await getDocs(q);
      const rooms = [];
      snapshot.forEach((doc) => {
        rooms.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      
      // 참가자 정보 보완 (임시로 기본값 사용)
      const roomsWithParticipantInfo = rooms.map(room => {
        if (!room.participantInfo) {
          const participantInfo = {};
          room.participants?.forEach(pid => {
            if (pid !== user.uid) {
              participantInfo[pid] = {
                nickname: '사용자',
                profileImage: ''
              };
            }
          });
          return { ...room, participantInfo };
        }
        return room;
      });
      
      // 클라이언트 사이드에서 시간 순으로 정렬
      const sortedRooms = roomsWithParticipantInfo.sort((a, b) => {
        const aTime = a.lastMessageAt?.toMillis?.() || 0;
        const bTime = b.lastMessageAt?.toMillis?.() || 0;
        return bTime - aTime; // 최신순
      });
      
      setChatRooms(sortedRooms);
      console.log('✅ 채팅방 데이터 새로고침 완료:', sortedRooms.length, '개');
    } catch (error) {
      console.error('❌ 채팅방 새로고침 실패:', error);
    } finally {
      setLoading(false);
    }
  };

  // 채팅방 목록 실시간 구독 (깜빡거림 방지)
  useEffect(() => {
    let unsubscribe = null;
    
    // 사용자 정보 로딩 중일 때는 아무것도 하지 않음
    if (user.loading) {
      console.log('👤 사용자 정보 로딩 중 - 대기');
      return;
    }

    // 로그인되지 않은 경우 데이터 초기화
    if (!user.isLoggedIn || !user.uid) {
      console.log('❌ 로그인되지 않음 - 데이터 초기화');
      setChatRooms([]);
      setMessages({});
      setCurrentChat(null);
      setUnreadCount(0);
      setLoading(false);
      setInitialized(true);
      return;
    }

    // 이미 초기화된 상태에서는 로딩을 다시 켜지 않음
    if (!initialized) {
      console.log('🔄 첫 번째 채팅방 목록 로드 시작:', user.uid);
      setLoading(true);
    }

    // 인덱스가 생성될 때까지 orderBy 없이 쿼리
    const q = query(
      collection(db, "chatRooms"),
      where("participants", "array-contains", user.uid)
    );

    try {
      unsubscribe = onSnapshot(q, 
        (snapshot) => {
          console.log('📥 채팅방 데이터 수신:', snapshot.size, '개');
          const rooms = [];
          snapshot.forEach((doc) => {
            rooms.push({
              id: doc.id,
              ...doc.data(),
            });
          });
          
          // 참가자 정보 보완 (임시로 기본값 사용)
          const roomsWithParticipantInfo = rooms.map(room => {
            if (!room.participantInfo) {
              const participantInfo = {};
              room.participants?.forEach(pid => {
                if (pid !== user.uid) {
                  participantInfo[pid] = {
                    nickname: '사용자',
                    profileImage: ''
                  };
                }
              });
              return { ...room, participantInfo };
            }
            return room;
          });
          
          // 클라이언트 사이드에서 시간 순으로 정렬
          const sortedRooms = roomsWithParticipantInfo.sort((a, b) => {
            const aTime = a.lastMessageAt?.toMillis?.() || 0;
            const bTime = b.lastMessageAt?.toMillis?.() || 0;
            return bTime - aTime; // 최신순
          });
          
          setChatRooms(sortedRooms);
          
          // 읽지 않은 메시지 수 계산
          const totalUnread = sortedRooms.reduce((total, room) => {
            const unread = room.unreadCount?.[user.uid] || 0;
            return total + unread;
          }, 0);
          setUnreadCount(totalUnread);
          
          // 초기 로딩 완료
          if (!initialized) {
            setInitialized(true);
          }
          setLoading(false);
          
          console.log('✅ 채팅방 목록 업데이트 완료:', sortedRooms.length, '개');
        },
        (error) => {
          console.error('❌ 채팅방 목록 구독 오류:', error);
          console.error('❌ 에러 코드:', error.code);
          console.error('❌ 에러 메시지:', error.message);
          setLoading(false);
          setInitialized(true);
          
          // 에러 타입별 처리
          if (error.code === 'permission-denied') {
            console.log('🚫 권한 거부됨 - Firestore 규칙 확인 필요');
            setChatRooms([]);
          } else if (error.code === 'failed-precondition') {
            console.log('📋 인덱스 없음 - Firebase Console에서 인덱스 생성 중');
            setChatRooms([]);
          } else {
            console.log('🔄 기타 오류 - 빈 배열로 초기화');
            setChatRooms([]);
          }
        }
      );
    } catch (error) {
      console.error('❌ 구독 시작 실패:', error);
      setLoading(false);
      setInitialized(true);
      setChatRooms([]);
    }

    return () => {
      if (unsubscribe) {
        console.log('🔌 채팅방 목록 구독 해제');
        unsubscribe();
      }
    };
  }, [user.isLoggedIn, user.uid, user.loading]); // initialized는 의존성에서 제외

  // 특정 채팅방의 메시지 실시간 구독
  const subscribeToMessages = (chatRoomId) => {
    if (!chatRoomId) return null;

    const q = query(
      collection(db, "chatRooms", chatRoomId, "messages"),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    return onSnapshot(q, (snapshot) => {
      const roomMessages = [];
      snapshot.forEach((doc) => {
        roomMessages.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      
      setMessages(prev => ({
        ...prev,
        [chatRoomId]: roomMessages.reverse(), // 시간순 정렬
      }));
    });
  };

  // 채팅방 생성 또는 기존 채팅방 찾기
  const createOrGetChatRoom = async (productId, sellerId, buyerId, productInfo) => {
    try {
      setLoading(true);
      console.log('🔄 채팅방 생성/조회 시작:', { productId, sellerId, buyerId });

      // 필수 값 검증
      if (!productId || !sellerId || !buyerId) {
        throw new Error(`필수 값이 누락되었습니다: productId=${productId}, sellerId=${sellerId}, buyerId=${buyerId}`);
      }

      // 기존 채팅방 확인 (더 안전한 방식)
      const existingRoomQuery = query(
        collection(db, "chatRooms"),
        where("productId", "==", productId),
        where("participants", "array-contains", sellerId)
      );

      const existingRooms = await getDocs(existingRoomQuery);
      
      // 정확한 참여자 매칭 확인
      let existingRoom = null;
      existingRooms.forEach(doc => {
        const roomData = doc.data();
        if (roomData.participants && 
            roomData.participants.length === 2 && 
            roomData.participants.includes(sellerId) && 
            roomData.participants.includes(buyerId)) {
          existingRoom = doc;
        }
      });
      
      if (existingRoom) {
        console.log('✅ 기존 채팅방 발견:', existingRoom.id);
        return existingRoom.id;
      }

      // 참여자 정보 수집 (더 안전한 방식)
      let sellerInfo, buyerInfo;
      try {
        [sellerInfo, buyerInfo] = await Promise.all([
          getUserInfo(sellerId),
          getUserInfo(buyerId)
        ]);
      } catch (userInfoError) {
        console.warn('⚠️ 사용자 정보 조회 실패, 기본값 사용:', userInfoError);
        sellerInfo = { nickname: "판매자", profileImage: "" };
        buyerInfo = { nickname: "구매자", profileImage: "" };
      }

      console.log('📋 채팅방 생성 정보:', {
        productId,
        sellerId,
        buyerId,
        sellerInfo: sellerInfo?.nickname,
        buyerInfo: buyerInfo?.nickname,
        sellerProfileImage: sellerInfo?.profileImage,
        buyerProfileImage: buyerInfo?.profileImage
      });

      // 새 채팅방 생성
      const chatRoomData = {
        productId,
        participants: [sellerId, buyerId].sort(),
        participantInfo: {
          [sellerId]: {
            userId: sellerId,
            role: "seller",
            nickname: sellerInfo?.nickname || "판매자",
            profileImage: sellerInfo?.profileImage || "",
          },
          [buyerId]: {
            userId: buyerId,
            role: "buyer", 
            nickname: buyerInfo?.nickname || "구매자",
            profileImage: buyerInfo?.profileImage || "",
          },
        },
        productInfo: {
          id: productId,
          title: productInfo.title,
          price: productInfo.price,
          images: productInfo.images || [],
          status: productInfo.status || "active",
        },
        lastMessage: "",
        lastMessageAt: serverTimestamp(),
        unreadCount: {
          [sellerId]: 0,
          [buyerId]: 0,
        },
        isActive: true,
        createdAt: serverTimestamp(),
      };

      const chatRoomRef = await addDoc(collection(db, "chatRooms"), chatRoomData);
      console.log('✅ 새 채팅방 생성 완료:', chatRoomRef.id);
      
      // 환영 메시지 추가
      await addDoc(collection(db, "chatRooms", chatRoomRef.id, "messages"), {
        type: "system",
        content: "채팅이 시작되었습니다. 안전한 거래를 위해 서로 예의를 지켜주세요.",
        createdAt: serverTimestamp(),
        isRead: false,
      });

      // 상품의 채팅 수 증가
      try {
        await productService.incrementChatCount(productId);
        console.log('✅ 새 채팅방 생성으로 인한 채팅 수 증가:', productId);
      } catch (error) {
        console.error('❌ 채팅 수 증가 실패:', error);
        // 채팅방은 이미 생성되었으므로 에러가 발생해도 진행
      }

      console.log('🎉 채팅방 생성 프로세스 완료:', chatRoomRef.id);
      return chatRoomRef.id;
    } catch (error) {
      console.error("채팅방 생성 실패:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // 메시지 전송
  const sendMessage = async (chatRoomId, content, messageType = "text") => {
    try {
      if (!content.trim() || !chatRoomId || !user.uid) return;

      const otherParticipant = chatRooms
        .find(room => room.id === chatRoomId)
        ?.participants.find(id => id !== user.uid);

      // 메시지 추가
      const messageData = {
        senderId: user.uid,
        senderInfo: {
          nickname: user.nickname,
          profileImage: user.profileImage,
        },
        content: content.trim(),
        type: messageType,
        createdAt: serverTimestamp(),
        isRead: false,
      };

      await addDoc(collection(db, "chatRooms", chatRoomId, "messages"), messageData);

      // 채팅방 정보 업데이트
      const chatRoomRef = doc(db, "chatRooms", chatRoomId);
      await updateDoc(chatRoomRef, {
        lastMessage: messageType === "image" ? "사진" : content.trim(),
        lastMessageAt: serverTimestamp(),
        [`unreadCount.${otherParticipant}`]: (
          chatRooms.find(room => room.id === chatRoomId)?.unreadCount?.[otherParticipant] || 0
        ) + 1,
      });

      // 상대방에게 알림 전송 (본인 메시지는 알림 제외)
      if (otherParticipant && otherParticipant !== user.uid) {
        try {
          // 상대방 정보 가져오기
          const participantInfo = participantInfo || {};
          const receiverNickname = participantInfo[otherParticipant]?.nickname || '사용자';
          
          // 메시지 내용에 따른 알림 표시
          let notificationBody = content.trim();
          if (messageType === "image") {
            notificationBody = "사진을 보냈습니다";
          } else if (content.length > 30) {
            notificationBody = content.substring(0, 30) + "...";
          }
          
          // 브라우저 알림 전송
          notificationService.showChatNotification(
            notificationBody,
            user.nickname || '익명',
            chatRoomId
          );
          
          console.log("📢 채팅 알림 전송:", {
            to: receiverNickname,
            message: notificationBody
          });
        } catch (notificationError) {
          console.warn("알림 전송 실패:", notificationError);
        }
      }

      console.log("✅ 메시지 전송 완료");
    } catch (error) {
      console.error("❌ 메시지 전송 실패:", error);
      throw error;
    }
  };

  // 메시지 읽음 처리
  const markMessagesAsRead = async (chatRoomId) => {
    try {
      if (!chatRoomId || !user.uid) return;

      const chatRoomRef = doc(db, "chatRooms", chatRoomId);
      await updateDoc(chatRoomRef, {
        [`unreadCount.${user.uid}`]: 0,
      });

      console.log("✅ 메시지 읽음 처리 완료");
    } catch (error) {
      console.error("❌ 메시지 읽음 처리 실패:", error);
    }
  };

  // 채팅방 나가기
  const leaveChatRoom = async (chatRoomId) => {
    try {
      if (!chatRoomId || !user.uid) return;

      const chatRoomRef = doc(db, "chatRooms", chatRoomId);
      await updateDoc(chatRoomRef, {
        [`participantInfo.${user.uid}.isActive`]: false,
        [`participantInfo.${user.uid}.leftAt`]: serverTimestamp(),
      });

      // 시스템 메시지 추가
      await addDoc(collection(db, "chatRooms", chatRoomId, "messages"), {
        type: "system",
        content: `${user.nickname}님이 채팅방을 나갔습니다.`,
        createdAt: serverTimestamp(),
        isRead: false,
      });

      console.log("✅ 채팅방 나가기 완료");
    } catch (error) {
      console.error("❌ 채팅방 나가기 실패:", error);
      throw error;
    }
  };

  // 채팅방 차단
  const blockChatRoom = async (chatRoomId, reason = "") => {
    try {
      if (!chatRoomId || !user.uid) return;

      const chatRoomRef = doc(db, "chatRooms", chatRoomId);
      await updateDoc(chatRoomRef, {
        [`participantInfo.${user.uid}.isBlocked`]: true,
        [`participantInfo.${user.uid}.blockReason`]: reason,
        [`participantInfo.${user.uid}.blockedAt`]: serverTimestamp(),
        isActive: false,
      });

      console.log("✅ 채팅방 차단 완료");
    } catch (error) {
      console.error("❌ 채팅방 차단 실패:", error);
      throw error;
    }
  };

  // 현재 채팅 설정
  const setActiveChat = (chatRoomId) => {
    setCurrentChat(chatRoomId);
    if (chatRoomId) {
      markMessagesAsRead(chatRoomId);
    }
  };

  // 채팅방 정보 가져오기
  const getChatRoomInfo = async (chatRoomId) => {
    try {
      const chatRoomDoc = await getDoc(doc(db, "chatRooms", chatRoomId));
      if (chatRoomDoc.exists()) {
        return { id: chatRoomId, ...chatRoomDoc.data() };
      }
      return null;
    } catch (error) {
      console.error("❌ 채팅방 정보 조회 실패:", error);
      return null;
    }
  };

  const value = {
    chatRooms,
    messages,
    currentChat,
    loading,
    unreadCount,
    initialized,
    createOrGetChatRoom,
    sendMessage,
    markMessagesAsRead,
    leaveChatRoom,
    blockChatRoom,
    setActiveChat,
    getChatRoomInfo,
    subscribeToMessages,
    refreshChatRooms,
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
}