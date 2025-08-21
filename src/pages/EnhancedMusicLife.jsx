import React, { useContext, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../store/UserContext";
import PageErrorBoundary from "../components/PageErrorBoundary";
import { useToast } from "../store/ToastContext";
import {
  FaPlus,
  FaGuitar,
  FaPiano,
  FaDrum,
  FaSaxophone,
  FaMicrophone,
  FaHeadphones,
  FaHeart,
  FaRegHeart,
  FaComment,
  FaShare,
  FaPlay,
  FaPause,
  FaEye,
  FaCalendar,
  FaMapMarkerAlt,
  FaUsers,
  FaMusic,
  FaTrophy,
  FaFire,
  FaClock,
  FaFilter,
  FaSearch
} from "react-icons/fa";

const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: var(--color-bg-secondary);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

const Inner = styled.div`
  width: 100%;
  max-width: 500px;
  background: var(--color-bg-primary);
  min-height: 100vh;
  position: relative;
  box-shadow: var(--shadow-lg);
  
  @media (max-width: 500px) {
    box-shadow: none;
  }
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 56px;
  padding: 0 20px;
  border-bottom: 1px solid #f0f0f0;
  position: sticky;
  top: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  z-index: 100;
`;

const HeaderTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: #333;
  margin: 0;
  background: linear-gradient(135deg, #2ed8b6, #25b89a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const AddButton = styled.button`
  background: linear-gradient(135deg, #2ed8b6, #25b89a);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(46, 216, 182, 0.3);
  transition: all 0.2s ease;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 16px rgba(46, 216, 182, 0.4);
  }
`;

const TabsContainer = styled.div`
  display: flex;
  background: white;
  border-bottom: 1px solid #f0f0f0;
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Tab = styled.button`
  padding: 12px 20px;
  border: none;
  background: none;
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.active ? '#2ed8b6' : '#666'};
  cursor: pointer;
  white-space: nowrap;
  position: relative;
  transition: all 0.2s ease;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: #2ed8b6;
    transform: scaleX(${props => props.active ? 1 : 0});
    transition: transform 0.2s ease;
  }
  
  &:hover {
    color: #2ed8b6;
  }
`;

const FilterSection = styled.div`
  padding: 16px 20px;
  background: white;
  border-bottom: 1px solid #f0f0f0;
`;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  background: #f8f9fa;
  border-radius: 20px;
  padding: 8px 16px;
  margin-bottom: 12px;
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  background: none;
  font-size: 14px;
  padding: 4px 8px;
  
  &:focus {
    outline: none;
  }
  
  &::placeholder {
    color: #999;
  }
`;

const FilterChips = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const FilterChip = styled.button`
  padding: 6px 12px;
  border: 1px solid ${props => props.active ? '#2ed8b6' : '#e0e0e0'};
  border-radius: 16px;
  background: ${props => props.active ? '#2ed8b6' : 'white'};
  color: ${props => props.active ? 'white' : '#666'};
  font-size: 12px;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &:hover {
    border-color: #2ed8b6;
    color: ${props => props.active ? 'white' : '#2ed8b6'};
  }
`;

const Content = styled.div`
  padding: 16px 20px;
  padding-bottom: 100px;
`;

const PostCard = styled.div`
  background: white;
  border-radius: 16px;
  margin-bottom: 16px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #f0f0f0;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
  }
`;

const PostHeader = styled.div`
  padding: 16px;
  border-bottom: 1px solid #f0f0f0;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`;

const UserAvatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${props => props.imageUrl ? `url(${props.imageUrl})` : '#2ed8b6'};
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
  font-size: 14px;
`;

const UserDetails = styled.div`
  flex: 1;
`;

const UserName = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 2px;
`;

const PostMeta = styled.div`
  font-size: 12px;
  color: #999;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CategoryBadge = styled.div`
  background: ${props => getCategoryColor(props.category)};
  color: white;
  padding: 4px 8px;
  border-radius: 8px;
  font-size: 11px;
  font-weight: 600;
  margin-left: auto;
`;

const PostTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin: 0 0 8px 0;
  line-height: 1.4;
`;

const PostContent = styled.div`
  font-size: 14px;
  color: #666;
  line-height: 1.5;
  margin-bottom: 12px;
`;

const PostMedia = styled.div`
  margin: 12px 0;
`;

const PostImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

const VideoThumbnail = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  background: ${props => props.thumbnail ? `url(${props.thumbnail})` : '#f0f0f0'};
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  
  &:hover .play-button {
    transform: scale(1.1);
  }
`;

const PlayButton = styled.div`
  width: 60px;
  height: 60px;
  background: rgba(46, 216, 182, 0.9);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 24px;
  transition: all 0.2s ease;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
`;

const PostTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 12px;
`;

const Tag = styled.span`
  background: #e8f5e8;
  color: #2e7d32;
  padding: 2px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 500;
`;

const PostActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  border-top: 1px solid #f0f0f0;
  background: #fafafa;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 6px;
  color: ${props => props.active ? '#2ed8b6' : '#666'};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    color: #2ed8b6;
  }
`;

const CommunitySection = styled.div`
  background: white;
  border-radius: 16px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const EventCard = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #2ed8b6;
    box-shadow: 0 2px 8px rgba(46, 216, 182, 0.1);
  }
`;

const EventTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

const EventInfo = styled.div`
  font-size: 13px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
`;

const EventParticipants = styled.div`
  font-size: 12px;
  color: #2ed8b6;
  font-weight: 500;
`;

const FAB = styled.button`
  position: fixed;
  bottom: 80px;
  right: calc(50vw - 250px + 20px);
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #2ed8b6, #25b89a);
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(46, 216, 182, 0.4);
  transition: all 0.2s ease;
  z-index: 1000;
  
  &:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 12px 32px rgba(46, 216, 182, 0.5);
  }
  
  @media (max-width: 500px) {
    right: 20px;
  }
`;

// 카테고리별 색상
const getCategoryColor = (category) => {
  const colors = {
    guitar: '#ff6b35',
    piano: '#9c27b0',
    drums: '#f44336',
    wind: '#2196f3',
    vocal: '#4caf50',
    audio: '#ff9800',
    performance: '#e91e63',
    collaboration: '#3f51b5',
    default: '#2ed8b6'
  };
  return colors[category] || colors.default;
};

// 카테고리별 아이콘
const getCategoryIcon = (category) => {
  const icons = {
    guitar: <FaGuitar />,
    piano: <FaPiano />,
    drums: <FaDrum />,
    wind: <FaSaxophone />,
    vocal: <FaMicrophone />,
    audio: <FaHeadphones />,
    performance: <FaMusic />,
    collaboration: <FaUsers />
  };
  return icons[category] || <FaMusic />;
};

// 더미 데이터
const dummyPosts = [
  {
    id: 1,
    type: 'video',
    category: 'guitar',
    title: '새로 산 Gibson Les Paul로 연주해봤어요!',
    content: '오늘 새로 산 Gibson Les Paul Studio로 첫 연주를 해봤습니다. 음색이 정말 깔끔하고 좋네요!',
    mediaUrl: '/api/placeholder/400/200',
    thumbnail: '/api/placeholder/400/200',
    tags: ['gibson', 'lespaul', '일렉기타', '연주'],
    author: {
      id: 'user1',
      name: '기타리스트김',
      avatar: null
    },
    stats: {
      likes: 24,
      comments: 8,
      views: 156
    },
    createdAt: '2시간 전',
    isLiked: false
  },
  {
    id: 2,
    type: 'image',
    category: 'piano',
    title: '집에서 피아노 연습 환경 꾸미기',
    content: '드디어 집에 피아노 코너를 완성했어요! 야마하 디지털 피아노와 함께 연습하기 좋은 환경이 만들어졌습니다.',
    mediaUrl: '/api/placeholder/400/200',
    tags: ['피아노', '연습실', '야마하', '셋업'],
    author: {
      id: 'user2',
      name: '피아노사랑',
      avatar: null
    },
    stats: {
      likes: 18,
      comments: 12,
      views: 89
    },
    createdAt: '4시간 전',
    isLiked: true
  },
  {
    id: 3,
    type: 'text',
    category: 'collaboration',
    title: '홍대에서 밴드 멤버 구해요!',
    content: '록밴드 베이시스트와 드러머를 구하고 있습니다. 매주 토요일 오후에 연습할 예정이고, 공연 목표로 하고 있어요. 관심 있으시면 연락주세요!',
    tags: ['밴드', '베이시스트', '드러머', '홍대', '록음악'],
    author: {
      id: 'user3',
      name: '록스타워너비',
      avatar: null
    },
    stats: {
      likes: 31,
      comments: 15,
      views: 203
    },
    createdAt: '6시간 전',
    isLiked: false
  }
];

const dummyEvents = [
  {
    id: 1,
    title: '신촌 어쿠스틱 세션',
    date: '2024.01.15',
    location: '신촌 카페 뮤직',
    participants: 8,
    maxParticipants: 12,
    type: 'acoustic'
  },
  {
    id: 2,
    title: '재즈 잼 세션',
    date: '2024.01.18',
    location: '이태원 재즈바',
    participants: 5,
    maxParticipants: 8,
    type: 'jazz'
  },
  {
    id: 3,
    title: '클래식 앙상블 모임',
    date: '2024.01.20',
    location: '성북구 문화센터',
    participants: 12,
    maxParticipants: 15,
    type: 'classical'
  }
];

export default function EnhancedMusicLife() {
  const navigate = useNavigate();
  const { showSuccess } = useToast();
  
  // Context 에러 처리
  try {
    const context = useContext(UserContext);
    const _user = context?.user || { isLoggedIn: false, loading: false };
  } catch (error) {
    console.error('UserContext 연결 실패:', error);
    const _user = { isLoggedIn: false, loading: false };
  }
  
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [posts, setPosts] = useState(dummyPosts);
  const [events] = useState(dummyEvents);

  const tabs = [
    { id: 'all', label: '전체', icon: <FaMusic /> },
    { id: 'video', label: '연주영상', icon: <FaPlay /> },
    { id: 'collaboration', label: '협업', icon: <FaUsers /> },
    { id: 'performance', label: '공연', icon: <FaTrophy /> },
    { id: 'tip', label: '팁', icon: <FaFire /> }
  ];

  const categories = [
    { id: 'all', label: '전체', icon: <FaMusic /> },
    { id: 'guitar', label: '기타', icon: <FaGuitar /> },
    { id: 'piano', label: '피아노', icon: <FaPiano /> },
    { id: 'drums', label: '드럼', icon: <FaDrum /> },
    { id: 'wind', label: '관악기', icon: <FaSaxophone /> },
    { id: 'vocal', label: '보컬', icon: <FaMicrophone /> },
    { id: 'audio', label: '오디오', icon: <FaHeadphones /> }
  ];

  const handleLike = (postId) => {
    setPosts(prev => prev.map(post => 
      post.id === postId 
        ? { 
            ...post, 
            isLiked: !post.isLiked,
            stats: {
              ...post.stats,
              likes: post.isLiked ? post.stats.likes - 1 : post.stats.likes + 1
            }
          }
        : post
    ));
    
    showSuccess(posts.find(p => p.id === postId)?.isLiked ? '좋아요가 취소되었습니다' : '좋아요!');
  };

  const filteredPosts = posts.filter(post => {
    const matchesTab = activeTab === 'all' || post.type === activeTab || post.category === activeTab;
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesSearch = !searchQuery || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesTab && matchesCategory && matchesSearch;
  });

  return (
    <PageErrorBoundary>
      <Container>
      <Inner>
        <Header>
          <HeaderTitle>음악생활</HeaderTitle>
          <AddButton onClick={() => navigate('/musiclife/write')}>
            <FaPlus />
          </AddButton>
        </Header>

        {/* 탭 메뉴 */}
        <TabsContainer>
          {tabs.map(tab => (
            <Tab
              key={tab.id}
              active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.icon}
              {tab.label}
            </Tab>
          ))}
        </TabsContainer>

        {/* 검색 및 필터 */}
        <FilterSection>
          <SearchBar>
            <FaSearch color="#999" />
            <SearchInput
              placeholder="검색어를 입력하세요"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </SearchBar>
          
          <FilterChips>
            {categories.map(category => (
              <FilterChip
                key={category.id}
                active={selectedCategory === category.id}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.icon}
                {category.label}
              </FilterChip>
            ))}
          </FilterChips>
        </FilterSection>

        <Content>
          {/* 이벤트 섹션 */}
          <CommunitySection>
            <SectionTitle>
              <FaCalendar />
              다가오는 음악 모임
            </SectionTitle>
            {events.map(event => (
              <EventCard key={event.id}>
                <EventTitle>{event.title}</EventTitle>
                <EventInfo>
                  <span>
                    <FaCalendar />
                    {event.date}
                  </span>
                  <span>
                    <FaMapMarkerAlt />
                    {event.location}
                  </span>
                </EventInfo>
                <EventParticipants>
                  <FaUsers />
                  {event.participants}/{event.maxParticipants}명 참여
                </EventParticipants>
              </EventCard>
            ))}
          </CommunitySection>

          {/* 포스트 목록 */}
          {filteredPosts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', color: '#666' }}>
              <FaSearch size={48} style={{ marginBottom: '16px', opacity: 0.5 }} />
              <h3>검색 결과가 없습니다</h3>
              <p>다른 검색어나 필터를 시도해보세요.</p>
            </div>
          ) : (
            filteredPosts.map(post => (
              <PostCard key={post.id}>
                <PostHeader>
                  <UserInfo>
                    <UserAvatar imageUrl={post.author.avatar}>
                      {!post.author.avatar && post.author.name.charAt(0)}
                    </UserAvatar>
                    <UserDetails>
                      <UserName>{post.author.name}</UserName>
                      <PostMeta>
                        <FaClock />
                        {post.createdAt}
                        <span>•</span>
                        <FaEye />
                        {post.stats.views}
                      </PostMeta>
                    </UserDetails>
                    <CategoryBadge category={post.category}>
                      {getCategoryIcon(post.category)}
                      {categories.find(c => c.id === post.category)?.label}
                    </CategoryBadge>
                  </UserInfo>
                  
                  <PostTitle>{post.title}</PostTitle>
                  <PostContent>{post.content}</PostContent>
                  
                  {post.tags && (
                    <PostTags>
                      {post.tags.map((tag, index) => (
                        <Tag key={index}>#{tag}</Tag>
                      ))}
                    </PostTags>
                  )}
                </PostHeader>

                {/* 미디어 콘텐츠 */}
                {post.mediaUrl && (
                  <PostMedia>
                    {post.type === 'video' ? (
                      <VideoThumbnail thumbnail={post.thumbnail}>
                        <PlayButton className="play-button">
                          <FaPlay />
                        </PlayButton>
                      </VideoThumbnail>
                    ) : (
                      <PostImage src={post.mediaUrl} alt={post.title} />
                    )}
                  </PostMedia>
                )}

                <PostActions>
                  <ActionButton
                    active={post.isLiked}
                    onClick={() => handleLike(post.id)}
                  >
                    {post.isLiked ? <FaHeart /> : <FaRegHeart />}
                    {post.stats.likes}
                  </ActionButton>
                  
                  <ActionButton>
                    <FaComment />
                    {post.stats.comments}
                  </ActionButton>
                  
                  <ActionButton>
                    <FaShare />
                    공유
                  </ActionButton>
                </PostActions>
              </PostCard>
            ))
          )}
        </Content>

        {/* 플로팅 액션 버튼 */}
        <FAB onClick={() => navigate('/musiclife/write')}>
          <FaPlus />
        </FAB>
      </Inner>
      </Container>
    </PageErrorBoundary>
  );
}