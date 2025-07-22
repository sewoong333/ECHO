import React, { useEffect, useState } from "react";
import { musiclifeService } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

export default function MusicLife() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    musiclifeService.getPosts().then(setPosts);
  }, []);

  return (
    <div>
      <h2>음악생활 게시판</h2>
      <button onClick={() => navigate("/musiclife/write")}>글쓰기</button>
      <ul>
        {posts.map(post => (
          <li key={post.id} onClick={() => navigate(`/musiclife/${post.id}`)}>
            <strong>{post.title}</strong> - {post.authorName} ({post.viewCount} 조회, {post.commentCount} 댓글)
          </li>
        ))}
      </ul>
    </div>
  );
}
