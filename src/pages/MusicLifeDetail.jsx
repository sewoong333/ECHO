import React, { useState } from "react";
import TopBar from "../components/TopBar";
import { useParams, useNavigate } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "세션 구합니다 (기타)",
    author: "홍길동",
    time: "1시간 전",
    content: "밴드에서 기타 세션을 구합니다! 연습실은 구로동, 주 1회 모임.",
    comments: 3,
  },
  {
    id: 2,
    title: "밴드 멤버 모집 (드럼)",
    author: "이순신",
    time: "2시간 전",
    content:
      "신나는 락밴드에서 드러머를 찾고 있습니다. 관심 있으신 분 연락주세요!",
    comments: 1,
  },
  {
    id: 3,
    title: "공연 정보 공유",
    author: "김철수",
    time: "3시간 전",
    content: "이번 주말 구로아트밸리에서 무료 공연이 있습니다. 함께 가실 분?",
    comments: 2,
  },
];

const dummyComments = {
  1: [
    {
      id: 1,
      author: "세션러버",
      content: "어디서 모임하나요?",
      time: "30분 전",
    },
    {
      id: 2,
      author: "기타치는사람",
      content: "장르가 궁금해요!",
      time: "20분 전",
    },
    { id: 3, author: "음악인", content: "참여하고 싶어요!", time: "10분 전" },
  ],
  2: [
    {
      id: 1,
      author: "드럼짱",
      content: "연습실 위치가 어디인가요?",
      time: "1시간 전",
    },
    { id: 2, author: "락커", content: "장비 제공되나요?", time: "50분 전" },
  ],
  3: [
    { id: 1, author: "공연러", content: "같이 가요!", time: "2시간 전" },
    {
      id: 2,
      author: "음악사랑",
      content: "정보 감사합니다!",
      time: "1시간 전",
    },
  ],
};

export default function MusicLifeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = posts.find((p) => String(p.id) === String(id));
  const [comments, setComments] = useState(dummyComments[id] || []);
  const [input, setInput] = useState("");
  if (!post)
    return <div style={{ padding: 32 }}>게시글을 찾을 수 없습니다.</div>;
  const handleAddComment = () => {
    if (!input.trim()) return;
    setComments((prev) => [
      ...prev,
      { id: prev.length + 1, author: "나", content: input, time: "방금 전" },
    ]);
    setInput("");
  };
  return (
    <div
      style={{
        width: "100vw",
        minHeight: "100vh",
        background: "#f8f9fa",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <TopBar />
      <div
        style={{
          width: "100%",
          maxWidth: 480,
          margin: "0 auto",
          padding: 0,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: "100%",
            background: "#fff",
            borderRadius: 14,
            boxShadow: "0 2px 12px rgba(46,216,182,0.08)",
            padding: 0,
            overflow: "hidden",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
            margin: "32px 0",
            boxSizing: "border-box",
          }}
        >
          <button
            onClick={() => navigate(-1)}
            style={{
              position: "absolute",
              top: 16,
              left: 16,
              background: "rgba(255,255,255,0.85)",
              border: "1.5px solid #b2f0e6",
              borderRadius: 20,
              width: 36,
              height: 36,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 20,
              color: "#2ed8b6",
              zIndex: 102,
              boxShadow: "0 1px 4px #b2f0e6",
              padding: 0,
            }}
          >
            ←
          </button>
          <div
            style={{
              width: "100%",
              padding: "32px 20px 24px 56px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              boxSizing: "border-box",
            }}
          >
            <h1
              style={{
                fontSize: 22,
                fontWeight: 700,
                color: "#1a4740",
                margin: 0,
                marginBottom: 8,
              }}
            >
              {post.title}
            </h1>
            <div style={{ fontSize: 14, color: "#888", marginBottom: 6 }}>
              {post.author} · {post.time}
            </div>
            <div
              style={{
                color: "#1a4740",
                fontSize: 16,
                lineHeight: 1.7,
                margin: "18px 0 12px 0",
              }}
            >
              {post.content}
            </div>
            <div style={{ fontSize: 13, color: "#bbb", marginBottom: 10 }}>
              댓글 {comments.length}
            </div>
            <div style={{ width: "100%", marginBottom: 16 }}>
              {comments.length === 0 && (
                <div style={{ color: "#bbb", fontSize: 15 }}>
                  아직 댓글이 없습니다.
                </div>
              )}
              {comments.map((c) => (
                <div
                  key={c.id}
                  style={{
                    marginBottom: 10,
                    background: "#f8f9fa",
                    borderRadius: 8,
                    padding: "8px 12px",
                    boxShadow: "0 1px 4px #b2f0e6",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{ fontWeight: 600, color: "#2ed8b6", fontSize: 14 }}
                  >
                    {c.author}
                  </span>
                  <span
                    style={{
                      color: "#222",
                      fontSize: 15,
                      margin: "2px 0 2px 0",
                    }}
                  >
                    {c.content}
                  </span>
                  <span style={{ color: "#bbb", fontSize: 12 }}>{c.time}</span>
                </div>
              ))}
            </div>
            <div style={{ width: "100%", display: "flex", gap: 8 }}>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="댓글을 입력하세요"
                style={{
                  flex: 1,
                  padding: "10px 12px",
                  borderRadius: 8,
                  border: "1.5px solid #b2f0e6",
                  fontSize: 15,
                  outline: "none",
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleAddComment();
                }}
              />
              <button
                onClick={handleAddComment}
                style={{
                  padding: "0 18px",
                  background: "#2ed8b6",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  fontWeight: 600,
                  fontSize: 15,
                  cursor: "pointer",
                }}
              >
                등록
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
