import React, { useState, useRef, useEffect } from "react";
import TopBar from "../components/TopBar";
import { useNavigate } from "react-router-dom";

const dummyPosts = [
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
  {
    id: 4,
    title: "중고 악기 팁 공유",
    author: "박지민",
    time: "4시간 전",
    content: "중고 악기 거래 시 꼭 확인해야 할 점들 정리해봤어요.",
    comments: 4,
  },
  {
    id: 5,
    title: "음악 추천해요",
    author: "최유리",
    time: "5시간 전",
    content: "요즘 듣기 좋은 재즈 앨범 추천 부탁드려요!",
    comments: 2,
  },
  {
    id: 6,
    title: "합주실 추천",
    author: "정우성",
    time: "6시간 전",
    content: "구로/신도림 근처 저렴한 합주실 아시는 분?",
    comments: 1,
  },
  {
    id: 7,
    title: "공연 후기",
    author: "이민호",
    time: "7시간 전",
    content: "어제 공연 너무 즐거웠어요! 사진 공유합니다.",
    comments: 5,
  },
  {
    id: 8,
    title: "악기 레슨 구해요 (베이스)",
    author: "김하늘",
    time: "8시간 전",
    content: "베이스 기타 레슨해주실 분 구합니다. 평일 저녁 가능.",
    comments: 0,
  },
  {
    id: 9,
    title: "음향장비 질문",
    author: "박서준",
    time: "9시간 전",
    content: "소형 믹서 추천 부탁드려요. 홈레코딩용입니다.",
    comments: 3,
  },
  {
    id: 10,
    title: "밴드 합주 멤버 구인 (보컬)",
    author: "한지민",
    time: "10시간 전",
    content: "보컬 멤버가 급히 필요합니다! 장르는 인디락.",
    comments: 2,
  },
  {
    id: 11,
    title: "음악 동호회 모집",
    author: "이정은",
    time: "11시간 전",
    content: "취미로 음악하는 분들 모여요! 매주 토요일 정모.",
    comments: 6,
  },
  {
    id: 12,
    title: "악기 자랑해요",
    author: "최민수",
    time: "12시간 전",
    content: "최근에 산 일렉기타 자랑합니다! 사진 봐주세요~",
    comments: 1,
  },
];

export default function MusicLife() {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([...dummyPosts]);
  const [visibleCount, setVisibleCount] = useState(5);
  const loaderRef = useRef(null);
  const visiblePosts = posts.slice(0, visibleCount);

  // 글쓰기 모달 상태
  const [writeOpen, setWriteOpen] = useState(false);
  const [form, setForm] = useState({ title: "", content: "" });

  useEffect(() => {
    if (!loaderRef.current) return;
    const observer = new window.IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < posts.length) {
          setVisibleCount((v) => Math.min(v + 5, posts.length));
        }
      },
      { threshold: 1 },
    );
    observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [visibleCount, posts.length]);

  // 글 등록 핸들러
  const handleWrite = (e) => {
    e.preventDefault();
    if (!form.title.trim() || !form.content.trim()) return;
    setPosts((prev) => [
      {
        id: Date.now(),
        title: form.title,
        author: "나",
        time: "방금 전",
        content: form.content,
        comments: 0,
      },
      ...prev,
    ]);
    setForm({ title: "", content: "" });
    setWriteOpen(false);
    setVisibleCount((v) => v + 1); // 새 글 바로 보이게
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
        position: "relative",
        overflowX: "hidden",
      }}
    >
      <TopBar />
      <div style={{ width: "100vw", padding: 0 }}>
        <h1
          style={{
            fontSize: 24,
            fontWeight: 700,
            padding: "24px 0 12px 20px",
            color: "#2ed8b6",
          }}
        >
          음악생활
        </h1>
        <div
          style={{
            padding: "0 12px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {visiblePosts.map((post) => (
            <div
              key={post.id}
              onClick={() => navigate(`/musiclife/${post.id}`)}
              style={{
                width: "100%",
                background: "#fff",
                borderRadius: 10,
                boxShadow: "0 1px 4px rgba(46,216,182,0.06)",
                marginBottom: 16,
                padding: "18px 16px",
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                cursor: "pointer",
                transition: "box-shadow 0.15s",
                boxSizing: "border-box",
              }}
            >
              <div
                style={{
                  fontSize: 17,
                  fontWeight: 700,
                  marginBottom: 6,
                  color: "#1a4740",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {post.title}
              </div>
              <div style={{ fontSize: 13, color: "#888", marginBottom: 4 }}>
                {post.author} · {post.time}
              </div>
              <div
                style={{
                  fontSize: 15,
                  color: "#222",
                  marginBottom: 8,
                  width: "100%",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  boxSizing: "border-box",
                }}
              >
                {post.content}
              </div>
              <div style={{ fontSize: 13, color: "#bbb" }}>
                댓글 {post.comments}
              </div>
            </div>
          ))}
          <div ref={loaderRef} style={{ height: 30 }} />
        </div>
      </div>
      {/* 플로팅 글쓰기 버튼 */}
      <button
        onClick={() => setWriteOpen(true)}
        style={{
          position: "fixed",
          right: 16,
          bottom: 80,
          zIndex: 100,
          background: "#2ed8b6",
          color: "#fff",
          border: "none",
          borderRadius: "50%",
          width: 52,
          height: 52,
          padding: 0,
          boxShadow: "0 4px 16px rgba(46,216,182,0.18)",
          fontSize: 28,
          fontWeight: 900,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          aspectRatio: "1/1", // 강제 정사각형
        }}
        aria-label="글쓰기"
      >
        +
      </button>
      {/* 글쓰기 모달 */}
      {writeOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 200,
            background: "rgba(0,0,0,0.18)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <form
            onSubmit={handleWrite}
            style={{
              background: "#fff",
              borderRadius: 18,
              padding: 28,
              minWidth: 320,
              maxWidth: "95vw",
              boxShadow: "0 4px 24px rgba(46,216,182,0.10)",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: 19,
                marginBottom: 8,
                color: "#2ed8b6",
              }}
            >
              글쓰기
            </div>
            <input
              type="text"
              placeholder="제목을 입력하세요"
              value={form.title}
              onChange={(e) =>
                setForm((f) => ({ ...f, title: e.target.value }))
              }
              style={{
                padding: 10,
                fontSize: 16,
                borderRadius: 8,
                border: "1.5px solid #b2f0e6",
                marginBottom: 8,
              }}
              maxLength={40}
              required
            />
            <textarea
              placeholder="내용을 입력하세요"
              value={form.content}
              onChange={(e) =>
                setForm((f) => ({ ...f, content: e.target.value }))
              }
              style={{
                padding: 10,
                fontSize: 15,
                borderRadius: 8,
                border: "1.5px solid #b2f0e6",
                minHeight: 90,
                resize: "vertical",
              }}
              maxLength={1000}
              required
            />
            <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
              <button
                type="button"
                onClick={() => setWriteOpen(false)}
                style={{
                  flex: 1,
                  padding: "10px 0",
                  background: "#eee",
                  color: "#222",
                  border: "none",
                  borderRadius: 8,
                  fontWeight: 600,
                  fontSize: 16,
                  cursor: "pointer",
                }}
              >
                취소
              </button>
              <button
                type="submit"
                style={{
                  flex: 1,
                  padding: "10px 0",
                  background: "#2ed8b6",
                  color: "#fff",
                  border: "none",
                  borderRadius: 8,
                  fontWeight: 700,
                  fontSize: 16,
                  cursor: "pointer",
                }}
              >
                등록
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
