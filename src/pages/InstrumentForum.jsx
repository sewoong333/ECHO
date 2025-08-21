import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`;

const CategoryTabs = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 24px;
  overflow-x: auto;
  padding-bottom: 10px;
`;

const CategoryTab = styled.button`
  padding: 12px 20px;
  border: none;
  border-radius: 25px;
  background: ${props => props.active ? '#4CAF50' : '#f5f5f5'};
  color: ${props => props.active ? 'white' : '#666'};
  font-weight: 600;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.2s;
  
  &:hover {
    background: ${props => props.active ? '#45a049' : '#ebebeb'};
  }
`;

const PostCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.2s;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const PostTitle = styled.h3`
  margin: 0 0 8px 0;
  font-size: 1.1rem;
  color: #333;
`;

const PostMeta = styled.div`
  display: flex;
  justify-content: between;
  align-items: center;
  font-size: 0.85rem;
  color: #666;
  margin-top: 12px;
`;

const PostStats = styled.div`
  display: flex;
  gap: 16px;
`;

const categories = [
  { id: 'all', name: '전체', icon: '🎵' },
  { id: 'guitar', name: '기타', icon: '🎸' },
  { id: 'piano', name: '피아노', icon: '🎹' },
  { id: 'drum', name: '드럼', icon: '🥁' },
  { id: 'bass', name: '베이스', icon: '🎸' },
  { id: 'violin', name: '바이올린', icon: '🎻' },
  { id: 'saxophone', name: '색소폰', icon: '🎷' },
  { id: 'tips', name: '연주 팁', icon: '💡' },
  { id: 'review', name: '장비 리뷰', icon: '⭐' }
];

export const InstrumentForum = () => {
  const { category } = useParams();
  const [activeCategory, setActiveCategory] = useState(category || 'all');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPosts();
  }, [activeCategory]);

  const loadPosts = async () => {
    setLoading(true);
    // 실제 구현에서는 Firebase에서 포스트 로드
    setTimeout(() => {
      setPosts([
        {
          id: 1,
          title: '기타 초보자를 위한 코드 연습법',
          author: '기타마스터',
          createdAt: new Date(),
          views: 234,
          likes: 15,
          comments: 8
        },
        {
          id: 2,
          title: 'Fender vs Gibson 어떤게 더 좋을까요?',
          author: '음악애호가',
          createdAt: new Date(),
          views: 156,
          likes: 22,
          comments: 12
        }
      ]);
      setLoading(false);
    }, 500);
  };

  return (
    <Container>
      <CategoryTabs>
        {categories.map(cat => (
          <CategoryTab
            key={cat.id}
            active={activeCategory === cat.id}
            onClick={() => setActiveCategory(cat.id)}
          >
            {cat.icon} {cat.name}
          </CategoryTab>
        ))}
      </CategoryTabs>

      {loading ? (
        <div>로딩 중...</div>
      ) : (
        posts.map(post => (
          <PostCard key={post.id}>
            <PostTitle>{post.title}</PostTitle>
            <PostMeta>
              <span>by {post.author}</span>
              <PostStats>
                <span>👁️ {post.views}</span>
                <span>❤️ {post.likes}</span>
                <span>💬 {post.comments}</span>
              </PostStats>
            </PostMeta>
          </PostCard>
        ))
      )}
    </Container>
  );
};

export default InstrumentForum;