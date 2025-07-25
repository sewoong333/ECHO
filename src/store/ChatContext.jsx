import React, { createContext, useState, useEffect, useContext } from "react";
import { db, productService } from "../utils/firebase";
import { UserContext } from "./UserContext";
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
  const { user, getUserInfo } = useContext(UserContext);
  const [chatRooms, setChatRooms] = useState([]);
  const [messages, setMessages] = useState({});
  const [currentChat, setCurrentChat] = useState(null);
  const [loading, setLoading] = useState(false);
  const [unreadCount, setUnreadCount] = useState(0);

  // 채팅방 목록 실시간 구독
  useEffect(() => {
    if (!user.isLoggedIn || !user.uid) {
      setChatRooms([]);
      setMessages({});
      setCurrentChat(null);
      setUnreadCount(0);
      return;
    }

    const q = query(
      collection(db, "chatRooms"),
      where("participants", "array-contains", user.uid),
      orderBy("lastMessageAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const rooms = [];
      snapshot.forEach((doc) => {
        rooms.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      
      setChatRooms(rooms);
      
      // 읽지 않은 메시지 수 계산
      const totalUnread = rooms.reduce((total, room) => {
        const unread = room.unreadCount?.[user.uid] || 0;
        return total + unread;
      }, 0);
      setUnreadCount(totalUnread);
    });

    return () => unsubscribe();
  }, [user.isLoggedIn, user.uid]);

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

      // 기존 채팅방 확인
      const existingRoomQuery = query(
        collection(db, "chatRooms"),
        where("productId", "==", productId),
        where("participants", "==", [sellerId, buyerId].sort())
      );

      const existingRooms = await getDocs(existingRoomQuery);
      
      if (!existingRooms.empty) {
        const existingRoom = existingRooms.docs[0];
        return existingRoom.id;
      }

      // 참여자 정보 수집
      const [sellerInfo, buyerInfo] = await Promise.all([
        getUserInfo(sellerId),
        getUserInfo(buyerId)
      ]);

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
    createOrGetChatRoom,
    sendMessage,
    markMessagesAsRead,
    leaveChatRoom,
    blockChatRoom,
    setActiveChat,
    getChatRoomInfo,
    subscribeToMessages,
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
}