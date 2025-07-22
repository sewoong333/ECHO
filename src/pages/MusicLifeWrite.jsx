import React, { useState, useContext } from "react";
import { musiclifeService } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../store/UserContext";

export default function MusicLifeWrite() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await musiclifeService.createPost({
      title,
      content,
      authorId: user.uid,
      authorName: user.nickname,
    });
    navigate("/musiclife");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="제목" required />
      <textarea value={content} onChange={e => setContent(e.target.value)} placeholder="내용" required />
      <button type="submit">등록</button>
    </form>
  );
} 