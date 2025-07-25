import React, { useContext, useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { ChatContext } from "../store/ChatContext";
import { UserContext } from "../store/UserContext";
import { ProductContext } from "../store/ProductContext";
import {
  FaArrowLeft,
  FaEllipsisV,
  FaPaperPlane,
  FaImage,
  FaPlus,
  FaTimes,
  FaExclamationTriangle,
  FaCamera,
  FaPhone,
  FaMapMarkerAlt,
  FaUser,
  FaShoppingCart,
  FaClock,
  FaCheckCircle,
  FaInfo,
} from "react-icons/fa";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  padding-top: 60px; /* 헤더 높이만큼 패딩 추가 */
`;

const Header = styled.div`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 500px;
  height: 60px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  z-index: 100;
  border-bottom: 1px solid #e0e0e0;
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 20px;
  color: #333;
  cursor: pointer;
  padding: 8px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${props => props.imageUrl 
    ? `url(${props.imageUrl})` 
    : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  };
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 14px;
`;

const UserDetails = styled.div``;

const UserName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
`;

const OnlineStatus = styled.div`
  font-size: 12px;
  color: #4CAF50;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  color: #333;
  cursor: pointer;
  padding: 8px;
`;

const ProductCard = styled.div`
  margin: 70px 20px 12px;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  border: 1px solid #e0e0e0;
`;

const ProductInfo = styled.div`
  display: flex;
  padding: 12px;
  gap: 12px;
`;

const ProductImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  object-fit: cover;
`;

const ProductDetails = styled.div`
  flex: 1;
`;

const ProductTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const ProductPrice = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #2ed8b6;
  margin-bottom: 4px;
`;

const ProductStatus = styled.div`
  font-size: 12px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const MessagesContainer = styled.div`
  flex: 1;
  padding: 0 20px 160px; /* 하단바(90px) + 입력창(70px) 여유 공간 */
  overflow-y: auto;
  padding-top: 20px;
`;

const MessageGroup = styled.div`
  margin-bottom: 16px;
`;

const DateDivider = styled.div`
  text-align: center;
  margin: 20px 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: #e0e0e0;
  }
`;

const DateText = styled.span`
  background: #f8f9fa;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 12px;
  color: #666;
  position: relative;
  z-index: 1;
`;

const Message = styled.div`
  display: flex;
  margin-bottom: 8px;
  flex-direction: ${props => props.isOwn ? 'row-reverse' : 'row'};
  align-items: flex-end;
  gap: 8px;
`;

const MessageAvatar = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${props => props.imageUrl 
    ? `url(${props.imageUrl})` 
    : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
  };
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 10px;
  margin-bottom: 4px;
`;

const MessageBubble = styled.div`
  max-width: 70%;
  padding: 10px 14px;
  border-radius: 18px;
  background: ${props => props.isOwn ? '#2ed8b6' : 'white'};
  color: ${props => props.isOwn ? 'white' : '#333'};
  border: ${props => props.isOwn ? 'none' : '1px solid #e0e0e0'};
  word-wrap: break-word;
  position: relative;
  
  ${props => props.isOwn ? `
    border-bottom-right-radius: 4px;
  ` : `
    border-bottom-left-radius: 4px;
  `}
`;

const SystemMessage = styled.div`
  text-align: center;
  padding: 8px 16px;
  margin: 16px 0;
  background: #f0f0f0;
  border-radius: 16px;
  font-size: 12px;
  color: #666;
`;

const MessageTime = styled.div`
  font-size: 10px;
  color: #999;
  margin: 0 4px;
`;

const MessageStatus = styled.div`
  font-size: 10px;
  color: ${props => props.read ? '#4CAF50' : '#999'};
  margin: 0 4px;
`;

const InputContainer = styled.div`
  position: fixed;
  bottom: 90px; /* 하단바 위에 위치 */
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 500px;
  background: white;
  border-top: 1px solid #e0e0e0;
  padding: 12px 16px;
  z-index: 100;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
`;

const InputWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 8px;
`;

const InputActions = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 8px;
`;

const ActionButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #f8f9fa;
  border: 1px solid #e0e0e0;
  color: #666;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #f0f0f0;
  }
`;

const MessageInput = styled.textarea`
  flex: 1;
  min-height: 36px;
  max-height: 120px;
  padding: 8px 12px;
  border: 1px solid #e0e0e0;
  border-radius: 18px;
  font-size: 14px;
  resize: none;
  outline: none;
  background: #f8f9fa;
  
  &:focus {
    border-color: #2ed8b6;
    background: white;
  }
  
  &::placeholder {
    color: #999;
  }
`;

const SendButton = styled.button`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${props => props.disabled ? '#e0e0e0' : '#2ed8b6'};
  border: none;
  color: white;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: ${props => props.disabled ? '#e0e0e0' : '#26c4a8'};
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  font-size: 14px;
  color: #666;
`;

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  color: #666;
  text-align: center;
  padding: 20px;
`;

export default function ChatRoom() {
  const navigate = useNavigate();
  const { chatRoomId } = useParams();
  const { user } = useContext(UserContext);
  const { products: _products } = useContext(ProductContext);
  const { 
    messages, 
    currentChat: _currentChat, 
    sendMessage, 
    getChatRoomInfo, 
    setActiveChat, 
    subscribeToMessages,
    markMessagesAsRead 
  } = useContext(ChatContext);

  const [chatRoom, setChatRoom] = useState(null);
  const [messageText, setMessageText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sending, setSending] = useState(false);
  const [purchaseIntentSent, setPurchaseIntentSent] = useState(false);
  const messagesEndRef = useRef(null);
  const messageInputRef = useRef(null);

  // URL에서 구매 의도 파라미터 확인
  const urlParams = new URLSearchParams(window.location.search);
  const purchaseIntent = urlParams.get('intent') === 'purchase';

  // 채팅방 정보 로드 및 메시지 구독
  useEffect(() => {
    const loadChatRoom = async () => {
      try {
        setLoading(true);
        setError(null);

        const roomInfo = await getChatRoomInfo(chatRoomId);
        if (!roomInfo) {
          setError("채팅방을 찾을 수 없습니다.");
          return;
        }

        setChatRoom(roomInfo);
        setActiveChat(chatRoomId);

        // 메시지 구독
        const unsubscribe = subscribeToMessages(chatRoomId);
        
        return () => {
          if (unsubscribe) unsubscribe();
        };
      } catch (err) {
        console.error("채팅방 로드 실패:", err);
        setError("채팅방을 불러오는데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    };

    if (chatRoomId && user.isLoggedIn) {
      loadChatRoom();
    } else if (!user.isLoggedIn) {
      navigate('/login');
    }
  }, [chatRoomId, user.isLoggedIn]);

  // 스크롤을 맨 아래로
  useEffect(() => {
    scrollToBottom();
  }, [messages[chatRoomId]]);

  // 메시지 읽음 처리
  useEffect(() => {
    if (chatRoomId && user.isLoggedIn) {
      markMessagesAsRead(chatRoomId);
    }
  }, [chatRoomId, user.isLoggedIn]);

  // 구매 의도 메시지 자동 전송
  useEffect(() => {
    const sendPurchaseIntentMessage = async () => {
      if (purchaseIntent && chatRoom && !purchaseIntentSent && user.isLoggedIn) {
        try {
          setPurchaseIntentSent(true);
          const productInfo = chatRoom.productInfo;
          const intentMessage = `${productInfo?.title || '상품'} 구매를 희망합니다. 거래 가능하신가요?`;
          
          await sendMessage(chatRoomId, intentMessage);
          
          // URL에서 intent 파라미터 제거
          const newUrl = window.location.pathname;
          window.history.replaceState({}, '', newUrl);
          
          console.log('✅ 구매 의도 메시지 전송 완료');
        } catch (error) {
          console.error('구매 의도 메시지 전송 실패:', error);
          setPurchaseIntentSent(false);
        }
      }
    };

    sendPurchaseIntentMessage();
  }, [purchaseIntent, chatRoom, purchaseIntentSent, user.isLoggedIn, chatRoomId]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSendMessage = async () => {
    if (!messageText.trim() || !chatRoomId || sending) return;
    
    // 메시지 길이 검증
    if (messageText.length > 1000) {
      setError("메시지는 1000자를 초과할 수 없습니다.");
      return;
    }

    setSending(true);
    setError(null);
    
    try {
      await sendMessage(chatRoomId, messageText);
      setMessageText("");
      
      // 포커스 유지
      messageInputRef.current?.focus();
    } catch (error) {
      console.error("메시지 전송 실패:", error);
      setError("메시지 전송에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setSending(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatMessageTime = (timestamp) => {
    if (!timestamp) return '';
    
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    return date.toLocaleTimeString('ko-KR', { 
      hour: 'numeric', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return '';
    
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (date.toDateString() === today.toDateString()) {
      return "오늘";
    } else if (date.toDateString() === yesterday.toDateString()) {
      return "어제";
    } else {
      return date.toLocaleDateString('ko-KR', { 
        month: 'long', 
        day: 'numeric' 
      });
    }
  };

  const getOtherParticipant = () => {
    if (!chatRoom) return null;
    const otherUserId = chatRoom.participants.find(id => id !== user.uid);
    return chatRoom.participantInfo?.[otherUserId] || {};
  };

  const getProductInfo = () => {
    if (!chatRoom?.productInfo) return null;
    return chatRoom.productInfo;
  };

  if (loading) {
    return (
      <Container>
        <LoadingContainer>
          채팅을 불러오는 중...
        </LoadingContainer>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <ErrorContainer>
          <FaExclamationTriangle size={48} color="#ddd" />
          <h3>{error}</h3>
          <button 
            onClick={() => navigate('/chat')}
            style={{
              padding: '8px 16px',
              background: '#2ed8b6',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              marginTop: '16px'
            }}
          >
            채팅 목록으로 돌아가기
          </button>
        </ErrorContainer>
      </Container>
    );
  }

  const otherParticipant = getOtherParticipant();
  const productInfo = getProductInfo();
  const roomMessages = messages[chatRoomId] || [];

  return (
    <Container>
      <Header>
        <HeaderLeft>
          <BackButton onClick={() => navigate('/chat')}>
            <FaArrowLeft />
          </BackButton>
          <UserInfo>
            <Avatar imageUrl={otherParticipant.profileImage}>
              {!otherParticipant.profileImage && 
               (otherParticipant.nickname?.[0] || '?')}
            </Avatar>
            <UserDetails>
              <UserName>{otherParticipant.nickname || '익명 사용자'}</UserName>
              <OnlineStatus>온라인</OnlineStatus>
            </UserDetails>
          </UserInfo>
        </HeaderLeft>
        <HeaderRight>
          <IconButton>
            <FaPhone />
          </IconButton>
          <IconButton>
            <FaEllipsisV />
          </IconButton>
        </HeaderRight>
      </Header>

      {productInfo && (
        <ProductCard onClick={() => navigate(`/product/${productInfo.id}`)}>
          <ProductInfo>
            {productInfo.images?.[0] && (
              <ProductImage 
                src={productInfo.images[0]} 
                alt={productInfo.title}
              />
            )}
            <ProductDetails>
              <ProductTitle>{productInfo.title}</ProductTitle>
              <ProductPrice>
                {productInfo.price?.toLocaleString()}원
              </ProductPrice>
              <ProductStatus>
                <FaMapMarkerAlt />
                {productInfo.status === 'active' ? '판매중' : '판매완료'}
              </ProductStatus>
            </ProductDetails>
          </ProductInfo>
        </ProductCard>
      )}

      <MessagesContainer>
        {roomMessages.map((message, index) => {
          const isOwn = message.senderId === user.uid;
          const showDate = index === 0 || 
            formatDate(message.createdAt) !== formatDate(roomMessages[index - 1]?.createdAt);
          
          return (
            <div key={message.id}>
              {showDate && (
                <DateDivider>
                  <DateText>{formatDate(message.createdAt)}</DateText>
                </DateDivider>
              )}
              
              {message.type === 'system' ? (
                <SystemMessage>{message.content}</SystemMessage>
              ) : (
                <Message isOwn={isOwn}>
                  {!isOwn && (
                    <MessageAvatar imageUrl={message.senderInfo?.profileImage}>
                      {!message.senderInfo?.profileImage && 
                       (message.senderInfo?.nickname?.[0] || '?')}
                    </MessageAvatar>
                  )}
                  <MessageBubble isOwn={isOwn}>
                    {message.content}
                  </MessageBubble>
                  <div>
                    <MessageTime>{formatMessageTime(message.createdAt)}</MessageTime>
                    {isOwn && (
                      <MessageStatus read={message.isRead}>
                        {message.isRead ? <FaCheckCircle /> : <FaClock />}
                      </MessageStatus>
                    )}
                  </div>
                </Message>
              )}
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </MessagesContainer>

      <InputContainer>
        {error && (
          <div style={{
            padding: '8px 16px',
            background: '#fff5f5',
            borderLeft: '4px solid #f56565',
            marginBottom: '8px',
            fontSize: '14px',
            color: '#c53030'
          }}>
            {error}
          </div>
        )}
        <InputActions>
          <ActionButton>
            <FaCamera />
          </ActionButton>
          <ActionButton>
            <FaImage />
          </ActionButton>
          <ActionButton>
            <FaPlus />
          </ActionButton>
        </InputActions>
        <InputWrapper>
          <MessageInput
            ref={messageInputRef}
            value={messageText}
            onChange={(e) => setMessageText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="메시지를 입력하세요..."
            rows={1}
          />
          <SendButton 
            disabled={!messageText.trim() || sending}
            onClick={handleSendMessage}
          >
            {sending ? "•••" : <FaPaperPlane />}
          </SendButton>
        </InputWrapper>
      </InputContainer>
    </Container>
  );
}