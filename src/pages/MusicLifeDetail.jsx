import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { musiclifeService } from "../utils/firebase";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../store/UserContext";
import TopBar from "../components/TopBar";
import {
  FaArrowLeft,
  FaEye,
  FaClock,
  FaUser,
  FaComment,
  FaTrash,
  FaEdit,
  FaHeart,
  FaRegHeart,
  FaShare,
  FaFlag,
} from "react-icons/fa";

// Styled Components
const Container = styled.div`
  width: 100vw;
  max-width: 100vw;
  min-width: 0;
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e0f7fa 100%);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  contain: layout style paint;
`;

const ContentWrapper = styled.div`
  flex: 1;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  padding: 0 16px 100px 16px;
  box-sizing: border-box;
`;

const BackButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(46, 216, 182, 0.2);
  border-radius: 12px;
  padding: 12px 16px;
  color: #2ed8b6;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  &:hover {
    background: rgba(46, 216, 182, 0.1);
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
  }
`;

const PostCard = styled.article`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 32px;
  margin-bottom: 24px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.8);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #2ed8b6, #26c4a8);
  }
`;

const PostTitle = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  color: #1a202c;
  margin-bottom: 20px;
  line-height: 1.3;
  word-break: keep-all;
`;

const PostMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  margin-bottom: 24px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(46, 216, 182, 0.1);
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #6b7280;
  font-size: 0.9rem;
  font-weight: 500;

  svg {
    color: #2ed8b6;
  }
`;

const PostContent = styled.div`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #374151;
  white-space: pre-wrap;
  word-break: break-word;
  margin-bottom: 24px;
`;

const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid rgba(46, 216, 182, 0.1);
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 12px;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 16px;
  border-radius: 12px;
  border: 1px solid ${props => props.variant === 'danger' ? '#ef4444' : 'rgba(46, 216, 182, 0.3)'};
  background: ${props => props.variant === 'danger' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(46, 216, 182, 0.1)'};
  color: ${props => props.variant === 'danger' ? '#ef4444' : '#2ed8b6'};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.9rem;

  &:hover {
    background: ${props => props.variant === 'danger' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(46, 216, 182, 0.2)'};
    transform: translateY(-1px);
  }
`;

const CommentsSection = styled.section`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 8px 40px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.8);
`;

const CommentsTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a202c;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    color: #2ed8b6;
  }
`;

const CommentForm = styled.form`
  margin-bottom: 32px;
  padding: 24px;
  background: rgba(46, 216, 182, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(46, 216, 182, 0.1);
`;

const CommentInput = styled.textarea`
  width: 100%;
  min-height: 100px;
  padding: 16px;
  border: 1px solid rgba(46, 216, 182, 0.3);
  border-radius: 12px;
  font-size: 1rem;
  line-height: 1.6;
  resize: vertical;
  background: rgba(255, 255, 255, 0.9);
  color: #374151;
  margin-bottom: 16px;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #2ed8b6;
    box-shadow: 0 0 0 3px rgba(46, 216, 182, 0.1);
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(135deg, #2ed8b6 0%, #26c4a8 100%);
  color: white;
  border: none;
  border-radius: 12px;
  padding: 12px 24px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(46, 216, 182, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px rgba(46, 216, 182, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const CommentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CommentItem = styled.div`
  padding: 20px;
  background: rgba(248, 250, 252, 0.8);
  border-radius: 16px;
  border: 1px solid rgba(46, 216, 182, 0.1);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(248, 250, 252, 1);
    transform: translateY(-1px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  }
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const CommentAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-weight: 600;
  color: #2ed8b6;

  svg {
    color: #6b7280;
  }
`;

const CommentTime = styled.span`
  font-size: 0.85rem;
  color: #9ca3af;
`;

const CommentContent = styled.p`
  color: #374151;
  line-height: 1.6;
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
`;

const LoadingSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 1.2rem;
  color: #6b7280;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 40px;
  color: #9ca3af;
  
  svg {
    font-size: 3rem;
    margin-bottom: 16px;
    color: #d1d5db;
  }
`;

export default function MusicLifeDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(true);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const [postData, commentsData] = await Promise.all([
          musiclifeService.getPost(id),
          musiclifeService.getComments(id)
        ]);
        setPost(postData);
        setComments(commentsData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
  }, [id]);

  // 시간 포맷팅 함수
  const formatTime = (timestamp) => {
    if (!timestamp) return '';
    const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / (1000 * 60));
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffMins < 1) return '방금 전';
    if (diffMins < 60) return `${diffMins}분 전`;
    if (diffHours < 24) return `${diffHours}시간 전`;
    if (diffDays < 7) return `${diffDays}일 전`;
    
    return date.toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleAddComment = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    
    try {
      await musiclifeService.addComment(id, {
        content: comment,
        authorId: user.uid,
        authorName: user.nickname,
      });
      setComment("");
      const updatedComments = await musiclifeService.getComments(id);
      setComments(updatedComments);
    } catch (error) {
      console.error('Failed to add comment:', error);
      alert('댓글 등록에 실패했습니다.');
    }
  };

  const handleDelete = async () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      try {
        await musiclifeService.deletePost(id);
        navigate("/musiclife");
      } catch (error) {
        console.error('Failed to delete post:', error);
        alert('게시글 삭제에 실패했습니다.');
      }
    }
  };

  const handleDeleteComment = async (commentId) => {
    if (window.confirm("댓글을 삭제하시겠습니까?")) {
      try {
        await musiclifeService.deleteComment(id, commentId);
        const updatedComments = await musiclifeService.getComments(id);
        setComments(updatedComments);
      } catch (error) {
        console.error('Failed to delete comment:', error);
        alert('댓글 삭제에 실패했습니다.');
      }
    }
  };

  if (loading) {
    return (
      <Container>
        <TopBar />
        <ContentWrapper>
          <LoadingSpinner>
            로딩 중...
          </LoadingSpinner>
        </ContentWrapper>
      </Container>
    );
  }

  if (!post) {
    return (
      <Container>
        <TopBar />
        <ContentWrapper>
          <BackButton onClick={() => navigate('/musiclife')}>
            <FaArrowLeft /> 목록으로
          </BackButton>
          <EmptyState>
            <FaComment />
            <div>게시글을 찾을 수 없습니다.</div>
          </EmptyState>
        </ContentWrapper>
      </Container>
    );
  }

  return (
    <Container>
      <TopBar />
      <ContentWrapper>
        <BackButton onClick={() => navigate('/musiclife')}>
          <FaArrowLeft /> 목록으로
        </BackButton>

        <PostCard>
          <PostTitle>{post.title}</PostTitle>
          
          <PostMeta>
            <MetaItem>
              <FaUser /> {post.authorName}
            </MetaItem>
            <MetaItem>
              <FaClock /> {formatTime(post.createdAt)}
            </MetaItem>
            <MetaItem>
              <FaEye /> {post.viewCount || 0}회
            </MetaItem>
          </PostMeta>

          <PostContent>{post.content}</PostContent>

          <ActionBar>
            <ActionGroup>
              <ActionButton>
                <FaHeart /> 좋아요
              </ActionButton>
              <ActionButton>
                <FaShare /> 공유
              </ActionButton>
              <ActionButton>
                <FaFlag /> 신고
              </ActionButton>
            </ActionGroup>
            
            {user && user.uid === post.authorId && (
              <ActionGroup>
                <ActionButton>
                  <FaEdit /> 수정
                </ActionButton>
                <ActionButton variant="danger" onClick={handleDelete}>
                  <FaTrash /> 삭제
                </ActionButton>
              </ActionGroup>
            )}
          </ActionBar>
        </PostCard>

        <CommentsSection>
          <CommentsTitle>
            <FaComment /> 댓글 {comments.length}개
          </CommentsTitle>
          
          {user ? (
            <CommentForm onSubmit={handleAddComment}>
              <CommentInput
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="댓글을 입력하세요..."
                required
              />
              <SubmitButton type="submit" disabled={!comment.trim()}>
                댓글 등록
              </SubmitButton>
            </CommentForm>
          ) : (
            <EmptyState>
              로그인 후 댓글을 작성할 수 있습니다.
            </EmptyState>
          )}

          <CommentsList>
            {comments.length > 0 ? (
              comments.map((c) => (
                <CommentItem key={c.id}>
                  <CommentHeader>
                    <CommentAuthor>
                      <FaUser /> {c.authorName}
                    </CommentAuthor>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <CommentTime>{formatTime(c.createdAt)}</CommentTime>
                      {user && user.uid === c.authorId && (
                        <ActionButton 
                          variant="danger" 
                          onClick={() => handleDeleteComment(c.id)}
                          style={{ padding: '6px 12px', fontSize: '0.8rem' }}
                        >
                          <FaTrash /> 삭제
                        </ActionButton>
                      )}
                    </div>
                  </CommentHeader>
                  <CommentContent>{c.content}</CommentContent>
                </CommentItem>
              ))
            ) : (
              <EmptyState>
                <FaComment />
                <div>첫 번째 댓글을 작성해보세요!</div>
              </EmptyState>
            )}
          </CommentsList>
        </CommentsSection>
      </ContentWrapper>
    </Container>
  );
}
