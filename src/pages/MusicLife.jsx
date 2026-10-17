import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { musiclifeService } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../store/UserContext";
import TopBar from "../components/TopBar";
import UserDisplay from "../components/UserDisplay";
import { FiSearch, FiEdit3, FiEye, FiMessageCircle, FiCalendar, FiUser } from "react-icons/fi";

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

export default function MusicLife() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("latest"); // latest, popular, views
  const navigate = useNavigate();

  useEffect(() => {
    loadPosts();
  }, [selectedCategory, sortBy]);

  const loadPosts = async () => {
    setLoading(true);
    try {
      console.log('🔄 음악생활 게시글 로딩 시작...');
      const allPosts = await musiclifeService.getPosts();
      console.log('📝 받아온 게시글 수:', allPosts.length);
      console.log('📝 게시글 목록:', allPosts.map(p => p.title));
      
      
      let filteredPosts = allPosts;

      // 카테고리 필터링
      if (selectedCategory !== "all") {
        console.log('🔍 카테고리 필터링:', selectedCategory);
        console.log('📝 필터링 전 게시글 카테고리들:', filteredPosts.map(p => ({ title: p.title, category: p.category })));
        filteredPosts = filteredPosts.filter(post => {
          // 카테고리가 없는 글은 자유게시판으로 취급
          return (post.category || "free") === selectedCategory;
        });
        console.log('📝 필터링 후 게시글 수:', filteredPosts.length);
      }

      // 검색어 필터링
      if (searchTerm) {
        console.log('🔍 검색어 필터링:', searchTerm);
        filteredPosts = filteredPosts.filter(post => 
          post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          post.content.toLowerCase().includes(searchTerm.toLowerCase())
        );
        console.log('📝 검색 필터링 후 게시글 수:', filteredPosts.length);
      }

      // 정렬
      if (sortBy === "latest") {
        filteredPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      } else if (sortBy === "popular") {
        filteredPosts.sort((a, b) => (b.commentCount || 0) - (a.commentCount || 0));
      } else if (sortBy === "views") {
        filteredPosts.sort((a, b) => (b.viewCount || 0) - (a.viewCount || 0));
      }

      console.log('✅ 최종 게시글 수:', filteredPosts.length);
      setPosts(filteredPosts);
    } catch (error) {
      console.error("❌ 게시글 로딩 실패:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    loadPosts();
  };


  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diffInHours = (now - date) / (1000 * 60 * 60);
    
    if (diffInHours < 1 / 60) {
      return "방금 전";
    } else if (diffInHours < 1) {
      return `${Math.floor(diffInHours * 60)}분 전`;
    } else if (diffInHours < 24) {
      return `${Math.floor(diffInHours)}시간 전`;
    } else if (diffInHours < 24 * 7) {
      return `${Math.floor(diffInHours / 24)}일 전`;
    } else {
      return date.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' });
    }
  };

  const getCategoryLabel = (value) => {
    const category = categories.find(cat => cat.value === value);
    return category ? category.label : "자유게시판";
  };

  return (
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
        {loading ? (
          <LoadingMessage>게시글을 불러오는 중...</LoadingMessage>
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
                    <span>{post.authorNickname || post.authorName || "작성자"}</span>
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
  );
}

// Styled Components
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
  }
`;

const WriteButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  background: #2ed8b6;
  color: #06302a;
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
  color: #06302a;
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
  color: #6b7280;
  font-size: 13px;
`;

const LoadingMessage = styled.div`
  text-align: center;
  color: #666;
  padding: 40px;
`;


const LoadMoreButton = styled.button`
  display: block;
  margin: 20px auto;
  background: transparent;
  color: #0b7a68;
  border: 2px solid #2ed8b6;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #2ed8b6;
    color: #06302a;
  }
`;

