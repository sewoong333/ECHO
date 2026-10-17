import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import TopBar from "../components/TopBar";
import { ChatContext } from "../store/ChatContext";
import { UserContext } from "../store/UserContext";
import {
  FaUser,
  FaCircle,
  FaEllipsisV,
  FaImage,
  FaExclamationTriangle,
  FaComments,
  FaSearch,
} from "react-icons/fa";

const Container = styled.div`
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  background: var(--color-bg-primary, #1a1a1a);
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const Content = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  background: white;
  min-height: calc(100vh - 56px);
  padding-bottom: 80px;
`;

const ChatItem = styled.div`
  display: flex;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 1px solid var(--color-border, #333);
  cursor: pointer;
  transition: background-color 0.2s;
  
  &:hover {
    background: var(--color-wood-glass, rgba(139, 114, 89, 0.1));
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const AvatarContainer = styled.div`
  position: relative;
  margin-right: 12px;
`;

const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${props => props.imageUrl 
    ? `url(${props.imageUrl})` 
    : 'linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%)'
  };
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  font-weight: bold;
  font-size: 16px;
  border: 1px solid #f0f0f0;
`;

const OnlineIndicator = styled.div`
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #4CAF50;
  border: 2px solid white;
`;

const ChatInfo = styled.div`
  flex: 1;
  min-width: 0;
`;

const ChatHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const UserName = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: var(--color-wood-light, #d2b896);
`;

const UserAvatar = styled.div`
  width: 20px;
  height: 20px;
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
  border: 1px solid #e0e0e0;
`;

const ProductInfo = styled.div`
  font-size: 12px;
  color: var(--color-wood-medium, #b89e7e);
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
`;

const LastMessage = styled.div`
  font-size: 14px;
  color: var(--color-text-secondary, #6b7280);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 2px;
`;

const ChatMeta = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 12px;
  color: #6b7280;
`;

const TimeStamp = styled.div`
  font-size: 12px;
  color: #6b7280;
`;

const UnreadBadge = styled.div`
  background: #2ed8b6;
  color: #06302a;
  border-radius: 10px;
  padding: 2px 6px;
  font-size: 11px;
  font-weight: 600;
  min-width: 18px;
  text-align: center;
  margin-left: 8px;
`;

const ProductImage = styled.img`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  object-fit: cover;
`;

const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 20px;
  text-align: center;
  color: #666;
`;

const EmptyIcon = styled.div`
  font-size: 48px;
  color: #ddd;
  margin-bottom: 16px;
`;

const EmptyTitle = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 8px;
`;

const EmptyDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
`;

const SearchSection = styled.div`
  padding: 16px 20px;
  border-bottom: 1px solid #f0f0f0;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: #f8f9fa;
  border-radius: 20px;
  padding: 8px 16px;
  gap: 8px;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  background: none;
  outline: none;
  font-size: 14px;
  
  &::placeholder {
    color: #6b7280;
  }
`;

const LoadingSpinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid #f0f0f0;
  border-top: 4px solid #2ed8b6;
  border-radius: 50%;
  animation: spin 1s linear infinite;
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const LoadingContainer = styled.div`
  padding: 60px 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const LoadingText = styled.div`
  color: #666;
  font-size: 16px;
`;

export default function ChatList() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { chatRooms, loading, unreadCount, initialized, refreshChatRooms } = useContext(ChatContext);

  useEffect(() => {
    if (!user.loading && !user.isLoggedIn) {
      navigate('/login');
    }
  }, [user.loading, user.isLoggedIn, navigate]);
  
  // 수동 새로고침을 위한 함수 (자동 새로고침 제거)
  const handleManualRefresh = () => {
    console.log('🔄 사용자 수동 새로고침 요청');
    refreshChatRooms();
  };

  const formatTime = (timestamp) => {
    if (!timestamp) return '';
    
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    
    if (minutes < 1) return '방금 전';
    if (minutes < 60) return `${minutes}분 전`;
    if (hours < 24) return `${hours}시간 전`;
    if (days === 1) return '어제';
    if (days < 7) return `${days}일 전`;
    
    // 일주일 이상은 정확한 날짜 표시
    return date.toLocaleDateString('ko-KR', { 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getOtherParticipant = (participants) => {
    return participants.find(id => id !== user.uid);
  };

  const getOtherParticipantInfo = (chatRoom) => {
    const otherUserId = getOtherParticipant(chatRoom.participants);
    return chatRoom.participantInfo?.[otherUserId] || {};
  };

  const handleChatClick = (chatRoom) => {
    navigate(`/chat/${chatRoom.id}`);
  };

  const getLastMessageDisplay = (message, type) => {
    if (type === 'image') return '📷 사진';
    if (type === 'system') return message;
    return message;
  };

  // 사용자 정보 로딩 중이거나 채팅 데이터 첫 로딩 중일 때만 로딩 화면
  if (user.loading || (loading && !initialized)) {
    return (
      <Container>
        <TopBar 
          title="채팅" 
          badge={unreadCount > 0 ? unreadCount : null}
        />
        <Content>
          <LoadingContainer>
            <LoadingSpinner />
            <LoadingText>
              {user.loading ? '로그인 정보를 확인하는 중...' : '채팅 목록을 불러오는 중...'}
            </LoadingText>
          </LoadingContainer>
        </Content>
      </Container>
    );
  }

  return (
    <Container>
      <TopBar 
        title="채팅" 
        badge={unreadCount > 0 ? unreadCount : null}
      />
      
      <Content>
        <SearchSection>
          <SearchBar>
            <FaSearch color="#999" />
            <SearchInput 
              placeholder="사용자명 또는 상품명으로 검색"
            />
          </SearchBar>
        </SearchSection>

        {chatRooms.length === 0 ? (
          <EmptyState>
            <EmptyIcon>
              <FaComments />
            </EmptyIcon>
            <EmptyTitle>아직 채팅이 없어요</EmptyTitle>
            <EmptyDescription>
              관심 있는 상품의 '채팅하기' 버튼을 눌러<br />
              판매자와 대화를 시작해보세요!
            </EmptyDescription>
            {!loading && (
              <button 
                onClick={handleManualRefresh}
                style={{
                  marginTop: '16px',
                  padding: '12px 24px',
                  background: '#2ed8b6',
                  color: '#06302a',
                  border: 'none',
                  borderRadius: '12px',
                  cursor: 'pointer',
                  fontSize: '14px',
                  fontWeight: '600',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  margin: '16px auto 0',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 8px rgba(46, 216, 182, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = '#26c4a8';
                  e.target.style.transform = 'translateY(-1px)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = '#2ed8b6';
                  e.target.style.transform = 'translateY(0)';
                }}
              >
                🔄 새로고침
              </button>
            )}
          </EmptyState>
        ) : (
          chatRooms.map((chatRoom) => {
            const otherParticipant = getOtherParticipantInfo(chatRoom);
            const unreadCount = chatRoom.unreadCount?.[user.uid] || 0;
            
            return (
              <ChatItem 
                key={chatRoom.id}
                onClick={() => handleChatClick(chatRoom)}
              >
                <AvatarContainer>
                  <Avatar imageUrl={chatRoom.productInfo?.images?.[0]}>
                    {!chatRoom.productInfo?.images?.[0] && 
                     <FaImage />}
                  </Avatar>
                </AvatarContainer>
                
                <ChatInfo>
                  <ChatHeader>
                    <UserInfo>
                      <UserName>
                        {otherParticipant.nickname || '익명 사용자'}
                      </UserName>
                      <UserAvatar imageUrl={otherParticipant.profileImage}>
                        {!otherParticipant.profileImage && 
                         (otherParticipant.nickname?.[0] || '?')}
                      </UserAvatar>
                    </UserInfo>
                    <TimeStamp>
                      {formatTime(chatRoom.lastMessageAt)}
                    </TimeStamp>
                  </ChatHeader>
                  
                  {chatRoom.productInfo && (
                    <ProductInfo>
                      {chatRoom.productInfo.title}
                    </ProductInfo>
                  )}
                  
                  <LastMessage>
                    {getLastMessageDisplay(chatRoom.lastMessage, chatRoom.lastMessageType)}
                  </LastMessage>
                  
                  <ChatMeta>
                    <div></div>
                    {unreadCount > 0 && (
                      <UnreadBadge>
                        {unreadCount > 99 ? '99+' : unreadCount}
                      </UnreadBadge>
                    )}
                  </ChatMeta>
                </ChatInfo>
              </ChatItem>
            );
          })
        )}
      </Content>
    </Container>
  );
}