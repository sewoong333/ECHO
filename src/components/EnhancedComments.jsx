import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../store/UserContext';
import commentService from '../utils/commentService';
import { 
  FaHeart, 
  FaRegHeart, 
  FaReply, 
  FaEdit, 
  FaTrash, 
  FaFlag,
  FaEllipsisV,
  FaTimes,
  FaCheck
} from 'react-icons/fa';
import { toast } from 'react-hot-toast';

const CommentsContainer = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  margin-top: 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
`;

const CommentsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding-bottom: 12px;
  border-bottom: 1px solid #f0f0f0;
`;

const CommentsTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin: 0;
`;

const CommentCount = styled.span`
  color: #0b7a68;
  font-weight: 500;
`;

const CommentForm = styled.form`
  margin-bottom: 24px;
`;

const CommentTextarea = styled.textarea`
  width: 100%;
  min-height: 80px;
  padding: 12px 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 14px;
  font-family: inherit;
  resize: vertical;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #2ed8b6;
    box-shadow: 0 0 0 3px rgba(46, 216, 182, 0.1);
  }

  &::placeholder {
    color: #6b7280;
  }
`;

const CommentSubmitArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
`;

const CharCount = styled.span`
  font-size: 12px;
  color: ${props => props.exceeded ? '#e74c3c' : '#6b7280'};
`;

const SubmitButton = styled.button`
  background: ${props => props.disabled ? '#ccc' : '#2ed8b6'};
  color: #06302a;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: background 0.2s;

  &:hover:not(:disabled) {
    background: #26c4a8;
  }
`;

const CommentsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const CommentItem = styled.div`
  position: relative;
  ${props => props.isReply && `
    margin-left: 40px;
    padding-left: 16px;
    border-left: 2px solid #f0f0f0;
  `}
`;

const CommentHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

const CommentAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const AuthorAvatar = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  font-weight: bold;
`;

const AuthorInfo = styled.div``;

const AuthorName = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: #333;
`;

const CommentTime = styled.span`
  font-size: 12px;
  color: #6b7280;
  margin-left: 8px;
`;

const EditedBadge = styled.span`
  font-size: 11px;
  color: #6b7280;
  background: #f0f0f0;
  padding: 2px 6px;
  border-radius: 4px;
  margin-left: 4px;
`;

const CommentActions = styled.div`
  position: relative;
`;

const ActionButton = styled.button`
  background: none;
  border: none;
  color: #6b7280;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: color 0.2s;

  &:hover {
    color: #333;
  }
`;

const ActionsMenu = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  z-index: 10;
  min-width: 120px;
`;

const MenuItem = styled.button`
  width: 100%;
  padding: 8px 12px;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  font-size: 13px;
  color: ${props => props.danger ? '#e74c3c' : '#333'};

  &:hover {
    background: #f8f9fa;
  }

  &:first-child {
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
  }

  &:last-child {
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }
`;

const CommentContent = styled.div`
  font-size: 14px;
  line-height: 1.5;
  color: #333;
  margin-bottom: 12px;
  white-space: pre-wrap;
`;

const CommentFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const LikeButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  color: ${props => props.liked ? '#e74c3c' : '#6b7280'};
  font-size: 12px;
  padding: 4px 0;
  transition: color 0.2s;

  &:hover {
    color: ${props => props.liked ? '#c0392b' : '#e74c3c'};
  }
`;

const ReplyButton = styled.button`
  background: none;
  border: none;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  color: #6b7280;
  font-size: 12px;
  padding: 4px 0;
  transition: color 0.2s;

  &:hover {
    color: #0b7a68;
  }
`;

const EditForm = styled.form`
  margin-top: 8px;
`;

const EditTextarea = styled.textarea`
  width: 100%;
  min-height: 60px;
  padding: 8px 12px;
  border: 1px solid #2ed8b6;
  border-radius: 6px;
  font-size: 13px;
  font-family: inherit;
  resize: vertical;
  margin-bottom: 8px;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(46, 216, 182, 0.1);
  }
`;

const EditButtons = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`;

const EditButton = styled.button`
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  transition: background 0.2s;
`;

const SaveButton = styled(EditButton)`
  background: #2ed8b6;
  color: #06302a;

  &:hover {
    background: #26c4a8;
  }
`;

const CancelButton = styled(EditButton)`
  background: #f8f9fa;
  color: #666;

  &:hover {
    background: #e9ecef;
  }
`;

const ReplyForm = styled.div`
  margin-top: 12px;
  padding: 12px;
  background: #f8f9fa;
  border-radius: 8px;
`;

// 시간 포맷 함수
const formatTime = (timestamp) => {
  if (!timestamp) return '';
  
  const date = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);
  const now = new Date();
  const diff = now - date;
  
  const minutes = Math.floor(diff / (1000 * 60));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  
  if (minutes < 1) return '방금 전';
  if (minutes < 60) return `${minutes}분 전`;
  if (hours < 24) return `${hours}시간 전`;
  if (days < 7) return `${days}일 전`;
  
  return date.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

// 개별 댓글 컴포넌트
const Comment = ({ 
  comment, 
  user, 
  onLike, 
  onReply, 
  onEdit, 
  onDelete, 
  onReport,
  isReply = false 
}) => {
  const [showActions, setShowActions] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(comment.content);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [replyContent, setReplyContent] = useState('');

  const isAuthor = user.isLoggedIn && user.uid === comment.authorId;
  const isLiked = user.isLoggedIn && comment.likes?.includes(user.uid);

  const handleEdit = async () => {
    if (editContent.trim().length < 1) {
      toast.error('댓글을 입력해주세요');
      return;
    }

    try {
      await onEdit(comment.id, editContent);
      setIsEditing(false);
      toast.success('댓글이 수정되었습니다');
    } catch (error) {
      toast.error('댓글 수정에 실패했습니다');
    }
  };

  const handleReply = async () => {
    if (replyContent.trim().length < 1) {
      toast.error('답글을 입력해주세요');
      return;
    }

    try {
      await onReply(comment.id, replyContent);
      setReplyContent('');
      setShowReplyForm(false);
      toast.success('답글이 등록되었습니다');
    } catch (error) {
      toast.error('답글 등록에 실패했습니다');
    }
  };

  return (
    <CommentItem isReply={isReply}>
      <CommentHeader>
        <CommentAuthor>
          <AuthorAvatar>
            {comment.authorName?.[0]?.toUpperCase() || 'U'}
          </AuthorAvatar>
          <AuthorInfo>
            <AuthorName>{comment.authorName || '익명'}</AuthorName>
            <CommentTime>{formatTime(comment.createdAt)}</CommentTime>
            {comment.isEdited && <EditedBadge>수정됨</EditedBadge>}
          </AuthorInfo>
        </CommentAuthor>
        
        <CommentActions>
          <ActionButton onClick={() => setShowActions(!showActions)}>
            <FaEllipsisV />
          </ActionButton>
          
          {showActions && (
            <ActionsMenu>
              {isAuthor && (
                <>
                  <MenuItem onClick={() => {
                    setIsEditing(true);
                    setShowActions(false);
                  }}>
                    <FaEdit style={{ marginRight: '8px' }} />
                    수정
                  </MenuItem>
                  <MenuItem danger onClick={() => {
                    onDelete(comment.id);
                    setShowActions(false);
                  }}>
                    <FaTrash style={{ marginRight: '8px' }} />
                    삭제
                  </MenuItem>
                </>
              )}
              {!isAuthor && (
                <MenuItem onClick={() => {
                  onReport(comment.id);
                  setShowActions(false);
                }}>
                  <FaFlag style={{ marginRight: '8px' }} />
                  신고
                </MenuItem>
              )}
            </ActionsMenu>
          )}
        </CommentActions>
      </CommentHeader>

      {isEditing ? (
        <EditForm onSubmit={(e) => {
          e.preventDefault();
          handleEdit();
        }}>
          <EditTextarea
            value={editContent}
            onChange={(e) => setEditContent(e.target.value)}
            maxLength={500}
          />
          <EditButtons>
            <CancelButton type="button" onClick={() => setIsEditing(false)}>
              <FaTimes style={{ marginRight: '4px' }} />
              취소
            </CancelButton>
            <SaveButton type="submit">
              <FaCheck style={{ marginRight: '4px' }} />
              저장
            </SaveButton>
          </EditButtons>
        </EditForm>
      ) : (
        <>
          <CommentContent>{comment.content}</CommentContent>
          
          <CommentFooter>
            <LikeButton
              liked={isLiked}
              onClick={() => onLike(comment.id)}
              disabled={!user.isLoggedIn}
            >
              {isLiked ? <FaHeart /> : <FaRegHeart />}
              {comment.likeCount > 0 && comment.likeCount}
            </LikeButton>
            
            {!isReply && (
              <ReplyButton onClick={() => setShowReplyForm(!showReplyForm)}>
                <FaReply />
                답글
              </ReplyButton>
            )}
          </CommentFooter>

          {showReplyForm && (
            <ReplyForm>
              <CommentTextarea
                value={replyContent}
                onChange={(e) => setReplyContent(e.target.value)}
                placeholder="답글을 입력하세요..."
                maxLength={500}
                rows={3}
              />
              <CommentSubmitArea>
                <CharCount exceeded={replyContent.length > 500}>
                  {replyContent.length}/500
                </CharCount>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <CancelButton onClick={() => setShowReplyForm(false)}>
                    취소
                  </CancelButton>
                  <SubmitButton
                    onClick={handleReply}
                    disabled={!replyContent.trim()}
                  >
                    답글 등록
                  </SubmitButton>
                </div>
              </CommentSubmitArea>
            </ReplyForm>
          )}
        </>
      )}

      {/* 대댓글 표시 */}
      {comment.replies && comment.replies.length > 0 && (
        <div style={{ marginTop: '16px' }}>
          {comment.replies.map(reply => (
            <Comment
              key={reply.id}
              comment={reply}
              user={user}
              onLike={onLike}
              onReply={onReply}
              onEdit={onEdit}
              onDelete={onDelete}
              onReport={onReport}
              isReply={true}
            />
          ))}
        </div>
      )}
    </CommentItem>
  );
};

// 메인 댓글 컴포넌트
const EnhancedComments = ({ postId, initialComments = [] }) => {
  const { user } = useContext(UserContext);
  const [comments, setComments] = useState(initialComments);
  const [newComment, setNewComment] = useState('');
  const [loading, setLoading] = useState(false);

  // 실시간 댓글 구독
  useEffect(() => {
    if (!postId) return;

    const unsubscribe = commentService.subscribeToComments(postId, (updatedComments) => {
      setComments(updatedComments);
    });

    return () => unsubscribe();
  }, [postId]);

  // 댓글 추가
  const handleAddComment = async (e) => {
    e.preventDefault();
    
    if (!user.isLoggedIn) {
      toast.error('로그인이 필요합니다');
      return;
    }

    if (!newComment.trim()) {
      toast.error('댓글을 입력해주세요');
      return;
    }

    try {
      setLoading(true);
      await commentService.addComment(postId, {
        content: newComment.trim(),
        authorId: user.uid,
        authorName: user.nickname || user.email
      });
      
      setNewComment('');
      toast.success('댓글이 등록되었습니다');
    } catch (error) {
      toast.error('댓글 등록에 실패했습니다');
    } finally {
      setLoading(false);
    }
  };

  // 댓글 좋아요
  const handleLikeComment = async (commentId) => {
    if (!user.isLoggedIn) {
      toast.error('로그인이 필요합니다');
      return;
    }

    try {
      await commentService.toggleCommentLike(commentId, user.uid);
    } catch (error) {
      toast.error('좋아요 처리에 실패했습니다');
    }
  };

  // 대댓글 추가
  const handleReplyToComment = async (parentCommentId, replyContent) => {
    if (!user.isLoggedIn) {
      toast.error('로그인이 필요합니다');
      return;
    }

    await commentService.addComment(postId, {
      content: replyContent.trim(),
      authorId: user.uid,
      authorName: user.nickname || user.email
    }, parentCommentId);
  };

  // 댓글 수정
  const handleEditComment = async (commentId, content) => {
    await commentService.updateComment(commentId, content, user.uid);
  };

  // 댓글 삭제
  const handleDeleteComment = async (commentId) => {
    if (!window.confirm('댓글을 삭제하시겠습니까?')) return;
    
    try {
      await commentService.deleteComment(commentId, user.uid);
      toast.success('댓글이 삭제되었습니다');
    } catch (error) {
      toast.error('댓글 삭제에 실패했습니다');
    }
  };

  // 댓글 신고
  const handleReportComment = async (commentId) => {
    const reason = window.prompt('신고 사유를 입력해주세요:');
    if (!reason) return;

    try {
      await commentService.reportComment(commentId, user.uid, reason);
      toast.success('신고가 접수되었습니다');
    } catch (error) {
      toast.error('신고 처리에 실패했습니다');
    }
  };

  const totalComments = comments.reduce((total, comment) => 
    total + 1 + (comment.replies?.length || 0), 0
  );

  return (
    <CommentsContainer>
      <CommentsHeader>
        <CommentsTitle>
          댓글 <CommentCount>{totalComments}</CommentCount>
        </CommentsTitle>
      </CommentsHeader>

      {user.isLoggedIn && (
        <CommentForm onSubmit={handleAddComment}>
          <CommentTextarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="댓글을 입력하세요..."
            maxLength={500}
          />
          <CommentSubmitArea>
            <CharCount exceeded={newComment.length > 500}>
              {newComment.length}/500
            </CharCount>
            <SubmitButton
              type="submit"
              disabled={loading || !newComment.trim() || newComment.length > 500}
            >
              {loading ? '등록 중...' : '댓글 등록'}
            </SubmitButton>
          </CommentSubmitArea>
        </CommentForm>
      )}

      <CommentsList>
        {comments.map(comment => (
          <Comment
            key={comment.id}
            comment={comment}
            user={user}
            onLike={handleLikeComment}
            onReply={handleReplyToComment}
            onEdit={handleEditComment}
            onDelete={handleDeleteComment}
            onReport={handleReportComment}
          />
        ))}
        
        {comments.length === 0 && (
          <div style={{ 
            textAlign: 'center', 
            padding: '40px 0', 
            color: '#6b7280',
            fontSize: '14px'
          }}>
            아직 댓글이 없습니다. 첫 댓글을 작성해보세요! 💭
          </div>
        )}
      </CommentsList>
    </CommentsContainer>
  );
};

export default EnhancedComments;