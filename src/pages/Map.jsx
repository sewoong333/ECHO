import React, { useEffect, useRef, useState, useContext } from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";
import { ProductContext } from "../store/ProductContext";
import { UserContext } from "../store/UserContext";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "../utils/firebase";
import { useNavigate } from "react-router-dom";

const CATEGORY_ICONS = {
  // 상품 카테고리
  guitar: "🎸",
  bass: "🎸",
  drums: "🥁",
  keyboard: "🎹",
  violin: "🎻",
  saxophone: "🎷",
  amplifier: "🔊",
  effects: "⚡",
  accessories: "🎵",
  other: "🎶",
  
  // 음악생활 카테고리
  "gear-review": "⭐",
  performance: "🎤",
  lesson: "📚",
  collaboration: "🤝",
  tips: "💡",
  "music-share": "🎵",
  free: "💬"
};

export default function MapPage() {
  const mapRef = useRef(null);
  const map = useRef(null);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [filter, setFilter] = useState("all"); // all, products, musiclife
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  // Firebase에서 좌표가 있는 게시글들 가져오기
  const fetchPostsWithLocation = async () => {
    try {
      setLoading(true);
      const allPosts = [];

      // 상품 게시글 가져오기
      if (filter === "all" || filter === "products") {
        const productsQuery = query(
          collection(db, "products"),
          where("latitude", "!=", null),
          orderBy("latitude", "desc")
        );
        const productsSnapshot = await getDocs(productsQuery);
        const products = productsSnapshot.docs.map(doc => ({
          id: doc.id,
          type: "product",
          ...doc.data()
        }));
        allPosts.push(...products);
      }

      // 음악생활 게시글 가져오기
      if (filter === "all" || filter === "musiclife") {
        const musiclifeQuery = query(
          collection(db, "musiclife"),
          where("latitude", "!=", null),
          orderBy("latitude", "desc")
        );
        const musiclifeSnapshot = await getDocs(musiclifeQuery);
        const musiclife = musiclifeSnapshot.docs.map(doc => ({
          id: doc.id,
          type: "musiclife",
          ...doc.data()
        }));
        allPosts.push(...musiclife);
      }

      setPosts(allPosts);
    } catch (error) {
      console.error("위치 기반 게시글 로딩 실패:", error);
    } finally {
      setLoading(false);
    }
  };

  // 카카오맵 초기화
  const initializeMap = () => {
    if (!window.kakao || !window.kakao.maps) {
      console.error("카카오맵 API가 로드되지 않았습니다.");
      return;
    }

    window.kakao.maps.load(() => {
      const container = mapRef.current;
      const options = {
        center: new window.kakao.maps.LatLng(37.5665, 126.9780), // 서울시청 기본 위치
        level: 3
      };

      const kakaoMap = new window.kakao.maps.Map(container, options);
      map.current = kakaoMap;

      // 게시글 마커 추가
      addMarkersToMap();
    });
  };

  // 지도에 마커 추가
  const addMarkersToMap = () => {
    if (!map.current || posts.length === 0) return;

    posts.forEach(post => {
      if (!post.latitude || !post.longitude) return;

      const position = new window.kakao.maps.LatLng(post.latitude, post.longitude);
      const icon = CATEGORY_ICONS[post.category] || "📍";
      
      // 커스텀 마커 생성
      const markerContent = `
        <div style="
          background: white;
          border: 2px solid #2ed8b6;
          border-radius: 20px;
          padding: 8px 12px;
          font-size: 16px;
          box-shadow: 0 2px 8px rgba(0,0,0,0.2);
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 4px;
          max-width: 150px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        ">
          <span>${icon}</span>
          <span style="font-size: 12px; font-weight: 500; color: #333;">
            ${post.title?.substring(0, 15)}${post.title?.length > 15 ? '...' : ''}
          </span>
        </div>
      `;

      const customOverlay = new window.kakao.maps.CustomOverlay({
        content: markerContent,
        position: position,
        yAnchor: 1
      });

      customOverlay.setMap(map.current);

      // 마커 클릭 이벤트
      const markerElement = customOverlay.getContent();
      markerElement.addEventListener('click', () => {
        setSelectedPost(post);
      });
    });
  };

  useEffect(() => {
    fetchPostsWithLocation();
  }, [filter]);

  useEffect(() => {
    if (posts.length > 0) {
      initializeMap();
    }
  }, [posts]);

  // 게시글 상세보기
  const handlePostClick = (post) => {
    if (post.type === "product") {
      navigate(`/product/${post.id}`);
    } else {
      navigate(`/musiclife/${post.id}`);
    }
  };

  return (
    <Container>
      <TopBar title="동네지도" />
      
      {/* 필터 버튼 */}
      <FilterContainer>
        <FilterButton 
          active={filter === "all"} 
          onClick={() => setFilter("all")}
        >
          전체
        </FilterButton>
        <FilterButton 
          active={filter === "products"} 
          onClick={() => setFilter("products")}
        >
          악기거래
        </FilterButton>
        <FilterButton 
          active={filter === "musiclife"} 
          onClick={() => setFilter("musiclife")}
        >
          음악생활
        </FilterButton>
      </FilterContainer>

      {/* 지도 */}
      <MapContainer>
        <div 
          ref={mapRef} 
          style={{ 
            width: '100%', 
            height: '100%',
            borderRadius: '12px',
            // 지도 스크롤 처리
            touchAction: 'pan-x pan-y',
            overflow: 'hidden'
          }} 
        />
        {loading && (
          <LoadingOverlay>
            <div>지도를 불러오는 중...</div>
          </LoadingOverlay>
        )}
      </MapContainer>

      {/* 게시글 상세 정보 팝업 */}
      {selectedPost && (
        <PostPopup>
          <PopupContent>
            <PopupHeader>
              <PostType type={selectedPost.type}>
                {selectedPost.type === "product" ? "💰 악기거래" : "🎵 음악생활"}
              </PostType>
              <CloseButton onClick={() => setSelectedPost(null)}>×</CloseButton>
            </PopupHeader>
            
            <PostTitle>{selectedPost.title}</PostTitle>
            
            <PostMeta>
              <span>📍 {selectedPost.detailAddress || selectedPost.location}</span>
              <span>👤 {selectedPost.sellerNickname || selectedPost.authorName}</span>
              {selectedPost.price && (
                <span>💰 {Number(selectedPost.price).toLocaleString()}원</span>
              )}
            </PostMeta>

            <ViewButton onClick={() => handlePostClick(selectedPost)}>
              상세보기
            </ViewButton>
          </PopupContent>
        </PostPopup>
      )}

      {/* 범례 */}
      <Legend>
        <LegendTitle>🗺️ 지도 가이드</LegendTitle>
        <LegendItem>📍 마커를 클릭하면 상세정보를 볼 수 있어요</LegendItem>
        <LegendItem>🎸 악기거래  🎵 음악생활</LegendItem>
      </Legend>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  padding-bottom: 100px; /* 하단 여백으로 전체 스크롤 가능하게 */
`;

const FilterContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 16px 20px;
  background: white;
  border-bottom: 1px solid #e9ecef;
`;

const FilterButton = styled.button`
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid ${props => props.active ? '#2ed8b6' : '#ddd'};
  background: ${props => props.active ? '#2ed8b6' : 'white'};
  color: ${props => props.active ? 'white' : '#666'};
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: #2ed8b6;
    color: ${props => props.active ? 'white' : '#2ed8b6'};
  }
`;

const MapContainer = styled.div`
  position: relative;
  margin: 20px;
  margin-bottom: 30px; /* 지도 아래 추가 여백 */
  height: 60vh; /* 고정 높이로 설정 */
  min-height: 400px; /* 최소 높이 보장 */
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  
  /* 지도 터치/스크롤 이벤트 격리 */
  touch-action: pan-x pan-y;
`;

const LoadingOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255,255,255,0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: #666;
`;

const PostPopup = styled.div`
  position: fixed;
  bottom: 120px; /* 탭바와 충분한 간격 */
  left: 20px;
  right: 20px;
  z-index: 1000;
  max-width: 400px;
  margin: 0 auto;
  
  /* 모바일에서 범례와 겹치지 않도록 */
  @media (max-height: 700px) {
    bottom: 140px;
  }
`;

const PopupContent = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  border: 1px solid #e9ecef;
`;

const PopupHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`;

const PostType = styled.div`
  background: ${props => props.type === "product" ? "#28a745" : "#6f42c1"};
  color: white;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #999;
  
  &:hover {
    color: #333;
  }
`;

const PostTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
  line-height: 1.3;
`;

const PostMeta = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 16px;
  
  span {
    font-size: 13px;
    color: #666;
  }
`;

const ViewButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #2ed8b6;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  
  &:hover {
    background: #26c4a8;
  }
`;

const Legend = styled.div`
  margin: 20px;
  margin-bottom: 40px; /* 범례 아래 추가 여백 */
  padding: 16px;
  background: white;
  border-radius: 12px;
  border: 1px solid #e9ecef;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
`;

const LegendTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #333;
  margin-bottom: 8px;
`;

const LegendItem = styled.div`
  font-size: 12px;
  color: #666;
  margin-bottom: 4px;

  &:last-child {
    margin-bottom: 0;
  }
`;