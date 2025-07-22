import React, { useEffect, useState, useContext } from "react";
import { musiclifeService } from "../utils/firebase";
import { useParams, useNavigate } from "react-router-dom";
import { UserContext } from "../store/UserContext";

export default function MusicLifeDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    musiclifeService.getPost(id).then(setPost);
    musiclifeService.getComments(id).then(setComments);
  }, [id]);

  const handleAddComment = async (e) => {
    e.preventDefault();
    await musiclifeService.addComment(id, {
      content: comment,
      authorId: user.uid,
      authorName: user.nickname,
    });
    setComment("");
    setComments(await musiclifeService.getComments(id));
  };

  const handleDelete = async () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      await musiclifeService.deletePost(id);
      navigate("/musiclife");
    }
  };

  return post ? (
    <div>
      <h2>{post.title}</h2>
      <div>{post.content}</div>
      <div>작성자: {post.authorName} | 조회수: {post.viewCount}</div>
      {user.uid === post.authorId && (
        <button onClick={handleDelete}>삭제</button>
      )}
      <hr />
      <h3>댓글</h3>
      <form onSubmit={handleAddComment}>
        <input value={comment} onChange={e => setComment(e.target.value)} required />
        <button type="submit">댓글 등록</button>
      </form>
      <ul>
        {comments.map(c => (
          <li key={c.id}>
            <b>{c.authorName}</b>: {c.content}
            {user.uid === c.authorId && (
              <button onClick={async () => {
                await musiclifeService.deleteComment(id, c.id);
                setComments(await musiclifeService.getComments(id));
              }}>삭제</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  ) : <div>로딩 중...</div>;
}
