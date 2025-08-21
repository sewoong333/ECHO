import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../store/UserContext";
import TopBar from "../components/TopBar";
import SafePageWrapper from "../components/SafePageWrapper";
import { FiSearch, FiEdit3, FiEye, FiMessageCircle, FiCalendar, FiUser } from "react-icons/fi";

// 안전한 임시 서비스 (절대 실패하지 않음)
const safeMusiclifeService = {
  getPosts: async () => {
    try {
      // 약간의 지연으로 실제 로딩 시뮬레이션
      await new Promise(resolve => setTimeout(resolve, 500));
      
      return [
        {
          id: '1',
          title: '🎸 새로 산 Martin D-28 리뷰',
          content: '오랫동안 고민하다가 드디어 Martin D-28을 구매했습니다! 소리가 정말 깊고 풍부해요.',
          category: 'gear-review',
          authorName: '기타맨',
          authorId: 'guitar_man',
          createdAt: new Date().toISOString(),
          viewCount: 45,
          commentCount: 12,
          likes: 8
        },
        {
          id: '2',
          title: '🎹 재즈 피아노 독학 후기',
          content: '6개월간 재즈 피아노를 독학한 경험을 공유해봅니다. 처음에는 어려웠지만...',
          category: 'tips',
          authorName: '피아노러버',
          authorId: 'piano_lover',
          createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(),
          viewCount: 72,
          commentCount: 18,
          likes: 15
        },
        {
          id: '3',
          title: '🥁 드럼 합주 멤버 구해요!',
          content: '홍대 지역에서 활동할 드럼 합주팀 멤버를 모집합니다. 장르는 록/메탈 위주입니다.',
          category: 'collaboration',
          authorName: '드러머김',
          authorId: 'drummer_kim',
          createdAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
          viewCount: 89,
          commentCount: 25,
          likes: 20
        },
        {
          id: '4',
          title: '🎺 트럼펫 연주 팁 공유',
          content: '10년차 트럼펫 연주자가 알려주는 연주 팁들을 정리해봤습니다.',
          category: 'tips',
          authorName: '트럼펫마스터',
          authorId: 'trumpet_master',
          createdAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
          viewCount: 156,
          commentCount: 34,
          likes: 42
        },
        {
          id: '5',
          title: '🎻 바이올린 입문자를 위한 가이드',
          content: '바이올린을 처음 시작하는 분들을 위한 완전 가이드입니다.',
          category: 'lesson',
          authorName: '바이올리니스트',
          authorId: 'violinist',
          createdAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
          viewCount: 203,
          commentCount: 67,
          likes: 89
        }
      ];
    } catch (error) {
      console.warn('데이터 로딩 실패, 기본 데이터 반환:', error);
      // 에러가 발생해도 기본 데이터는 반환
      return [{
        id: 'default',
        title: '🎵 음악생활 커뮤니티에 오신 것을 환영합니다!',
        content: '뮤지션들의 소통 공간입니다. 자유롭게 글을 작성해보세요.',
        category: 'free',
        authorName: 'ECHO',
        authorId: 'system',
        createdAt: new Date().toISOString(),
        viewCount: 1,
        commentCount: 0,
        likes: 0
      }];
    }
  }
};

const categories = [
  { value: "all", label: "전체" },
  { value: "gear-review", label: "장비 리뷰" },
  { value: "performance", label: "연주/공연" },
  { value: "lesson", label: "강습/레슨" },
  { value: "collaboration", label: "합주/콜라보" },
  { value: "tips", label: "연주 팁" },
  { value: "music-share", label: "음악 공유" },
  { value: "free", label: "자유게시판" }
];

export default function MusicLifeSafe() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("latest");
  const navigate = useNavigate();

  // Context 안전 처리
  let _user = { isLoggedIn: false, loading: false };
  try {
    const userContext = useContext(UserContext);
    _user = userContext?.user || { isLoggedIn: false, loading: false };
  } catch (err) {
    console.warn('UserContext 에러:', err);
  }

  useEffect(() => {
    loadPosts();
  }, [selectedCategory, sortBy]);

  const loadPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const allPosts = await safeMusiclifeService.getPosts();
      let filteredPosts = [...allPosts];

      // 카테고리 필터링
      if (selectedCategory !== "all") {
        filteredPosts = filteredPosts.filter(post => post.category === selectedCategory);
      }

      // 검색어 필터링
      if (searchTerm) {
        filteredPosts = filteredPosts.filter(post => 
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.content.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }

      // 정렬
      if (sortBy === "latest") {
        filteredPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      } else if (sortBy === "popular") {
        filteredPosts.sort((a, b) => (b.commentCount || 0) - (a.commentCount || 0));
      } else if (sortBy === "views") {
        filteredPosts.sort((a, b) => (b.viewCount || 0) - (a.viewCount || 0));
      }

      setPosts(filteredPosts);
    } catch (err) {
      console.error("게시글 로딩 실패:", err);
      setError(err);
      // 에러가 발생해도 기본 데이터라도 보여주기
      setPosts([{
        id: 'error',
        title: '⚠️ 일시적인 오류가 발생했습니다',
        content: '게시글을 불러올 수 없습니다. 잠시 후 다시 시도해주세요.',
        category: 'free',
        authorName: 'ECHO',
        authorId: 'system',
        createdAt: new Date().toISOString(),
        viewCount: 0,
        commentCount: 0,
        likes: 0
      }]);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    loadPosts();
  };

  const formatDate = (timestamp) => {
    try {
      const date = new Date(timestamp);
      const now = new Date();
      const diffInHours = (now - date) / (1000 * 60 * 60);
      
      if (diffInHours < 24) {
        return `${Math.floor(diffInHours)}시간 전`;
      } else if (diffInHours < 24 * 7) {
        return `${Math.floor(diffInHours / 24)}일 전`;
      } else {
        return date.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' });
      }
    } catch (error) {
      return '방금 전';
    }
  };

  const getCategoryLabel = (value) => {
    try {
      const category = categories.find(cat => cat.value === value);
      return category ? category.label : "자유게시판";
    } catch (error) {
      return "자유게시판";
    }
  };

  // 안전한 폴백 컴포넌트
  const FallbackContent = () => (
    <Container>
      <TopBar />
      
      <Header>
        <HeaderTop>
          <h1>🎵 음악생활</h1>
          <WriteButton onClick={() => navigate("/musiclife/write")}>
            <FiEdit3 size={16} />
            <span>글쓰기</span>
          </WriteButton>
        </HeaderTop>
        <p>뮤지션들의 소통 공간입니다</p>
      </Header>

      <EmptyMessage>
        <p>게시글을 불러오는 중 문제가 발생했습니다.</p>
        <EmptyButton onClick={() => window.location.reload()}>
          새로고침
        </EmptyButton>
      </EmptyMessage>
    </Container>
  );

  return (
    <SafePageWrapper 
      title="음악생활" 
      loading={loading} 
      error={error}
      fallbackComponent={<FallbackContent />}
      showTopBar={true}
    >
      <Container>
        <TopBar />
        
        <Header>
          <HeaderTop>
            <h1>🎵 음악생활</h1>
            <WriteButton onClick={() => navigate("/musiclife/write")}>
              <FiEdit3 size={16} />
              <span>글쓰기</span>
            </WriteButton>
          </HeaderTop>
          <p>뮤지션들의 소통 공간입니다</p>
        </Header>

        <FilterSection>
          <SearchContainer>
            <SearchInput
              type="text"
              placeholder="제목, 내용으로 검색..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <SearchButton onClick={handleSearch}>
              <FiSearch size={18} />
            </SearchButton>
          </SearchContainer>

          <FilterControls>
            <CategorySelect value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
              {categories.map(cat => (
                <option key={cat.value} value={cat.value}>{cat.label}</option>
              ))}
            </CategorySelect>
            
            <SortSelect value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="latest">최신순</option>
              <option value="popular">댓글순</option>
              <option value="views">조회순</option>
            </SortSelect>
          </FilterControls>
        </FilterSection>

        <PostList>
          {posts.length === 0 ? (
            <EmptyMessage>
              <p>게시글이 없습니다.</p>
              <EmptyButton onClick={() => navigate("/musiclife/write")}>
                첫 게시글 작성하기
              </EmptyButton>
            </EmptyMessage>
          ) : (
            posts.map(post => (
              <PostCard key={post.id} onClick={() => navigate(`/musiclife/${post.id}`)}>
                <PostHeader>
                  <CategoryBadge category={post.category}>
                    {getCategoryLabel(post.category)}
                  </CategoryBadge>
                  <PostMeta>
                    <MetaItem>
                      <FiUser size={12} />
                      <span>{post.authorName}</span>
                    </MetaItem>
                    <MetaItem>
                      <FiCalendar size={12} />
                      <span>{formatDate(post.createdAt)}</span>
                    </MetaItem>
                  </PostMeta>
                </PostHeader>
                
                <PostTitle>{post.title}</PostTitle>
                
                <PostPreview>
                  {post.content?.length > 100 
                    ? `${post.content.substring(0, 100)}...` 
                    : post.content
                  }
                </PostPreview>
                
                <PostFooter>
                  <PostStats>
                    <StatItem>
                      <FiEye size={14} />
                      <span>{post.viewCount || 0}</span>
                    </StatItem>
                    <StatItem>
                      <FiMessageCircle size={14} />
                      <span>{post.commentCount || 0}</span>
                    </StatItem>
                  </PostStats>
                </PostFooter>
              </PostCard>
            ))
          )}
        </PostList>
        
        {posts.length > 0 && (
          <LoadMoreButton onClick={loadPosts}>
            더 보기
          </LoadMoreButton>
        )}
      </Container>
    </SafePageWrapper>
  );
}

// Styled Components (기존과 동일하지만 안전성 강화)
const Container = styled.div`
  min-height: 100vh;
  background: #f8f9fa;
  padding-bottom: 80px;
`;

const Header = styled.div`
  background: white;
  padding: 24px;
  border-bottom: 1px solid #eee;
  text-align: center;
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
  
  h1 {
    font-size: 24px;
    font-weight: 700;
    color: #333;
    margin: 0;
  }
`;

const WriteButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: #2ed8b6;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 8px 16px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:hover {
    background: #26c4a8;
  }
`;

const FilterSection = styled.div`
  background: white;
  padding: 20px 24px;
  border-bottom: 1px solid #eee;
`;

const SearchContainer = styled.div`
  display: flex;
  margin-bottom: 16px;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
`;

const SearchInput = styled.input`
  flex: 1;
  padding: 12px 16px;
  border: 2px solid #e9ecef;
  border-right: none;
  border-radius: 8px 0 0 8px;
  font-size: 14px;
  
  &:focus {
    outline: none;
    border-color: #2ed8b6;
  }
`;

const SearchButton = styled.button`
  background: #2ed8b6;
  color: white;
  border: none;
  border-radius: 0 8px 8px 0;
  padding: 0 16px;
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:hover {
    background: #26c4a8;
  }
`;

const FilterControls = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

const CategorySelect = styled.select`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  background: white;
  
  &:focus {
    outline: none;
    border-color: #2ed8b6;
  }
`;

const SortSelect = styled.select`
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  background: white;
  
  &:focus {
    outline: none;
    border-color: #2ed8b6;
  }
`;

const PostList = styled.div`
  max-width: 768px;
  margin: 0 auto;
  padding: 20px;
`;

const PostCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  }
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const CategoryBadge = styled.span`
  background: ${props => {
    switch(props.category) {
      case 'gear-review': return '#2ed8b6';
      case 'performance': return '#4ecdc4';
      case 'lesson': return '#45b7d1';
      case 'collaboration': return '#96ceb4';
      case 'tips': return '#ffeaa7';
      case 'music-share': return '#dda0dd';
      default: return '#95a5a6';
    }
  }};
  color: white;
  font-size: 12px;
  padding: 4px 8px;
  border-radius: 12px;
  font-weight: 500;
`;

const PostMeta = styled.div`
  display: flex;
  gap: 12px;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #666;
  font-size: 12px;
`;

const PostTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  line-height: 1.3;
`;

const PostPreview = styled.p`
  color: #666;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 12px;
`;

const PostFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PostStats = styled.div`
  display: flex;
  gap: 16px;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: #999;
  font-size: 13px;
`;

const EmptyMessage = styled.div`
  text-align: center;
  padding: 40px;
  
  p {
    color: #666;
    margin-bottom: 16px;
  }
`;

const EmptyButton = styled.button`
  background: #2ed8b6;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px;
  cursor: pointer;
  transition: background 0.2s ease;
  
  &:hover {
    background: #26c4a8;
  }
`;

const LoadMoreButton = styled.button`
  display: block;
  margin: 20px auto;
  background: transparent;
  color: #2ed8b6;
  border: 2px solid #2ed8b6;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #2ed8b6;
    color: white;
  }
`;