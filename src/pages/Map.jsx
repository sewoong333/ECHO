import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";
import { ProductContext } from "../store/ProductContext";
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
  console.log("🎯 MapPage 컴포넌트 렌더링 시작!");
  
  const mapRef = useRef(null);
  const map = useRef(null);
  const markers = useRef([]); // 마커들을 저장할 ref 추가
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [filter, setFilter] = useState("all"); // all, products, musiclife
  const navigate = useNavigate();

  // Firebase에서 좌표가 있는 게시글들 가져오기
  const fetchPostsWithLocation = async () => {
    try {
      setLoading(true);
      const allPosts = [];

      // 상품 게시글 가져오기
      if (filter === "all" || filter === "products") {
        try {
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
        } catch (error) {
          console.log("상품 데이터 로딩 실패, 데모 데이터 사용");
          // 데모 데이터 추가
          allPosts.push({
            id: "demo1",
            type: "product",
            title: "어쿠스틱 기타 판매",
            category: "guitar",
            latitude: 37.5665,
            longitude: 126.9780,
            price: 150000
          });
        }
      }

      // 음악생활 게시글 가져오기
      if (filter === "all" || filter === "musiclife") {
        try {
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
        } catch (error) {
          console.log("음악생활 데이터 로딩 실패, 데모 데이터 사용");
          // 데모 데이터 추가
          allPosts.push({
            id: "demo2", 
            type: "musiclife",
            title: "밴드 멤버 구합니다",
            category: "collaboration",
            latitude: 37.5600,
            longitude: 126.9800
          });
        }
      }

      console.log("📍 로드된 게시글:", allPosts.length, "개");
      setPosts(allPosts);
    } catch (error) {
      console.error("위치 기반 게시글 로딩 실패:", error);
      // 데모 데이터라도 보여주기
      setPosts([{
        id: "demo1",
        type: "product", 
        title: "데모 상품",
        category: "guitar",
        latitude: 37.5665,
        longitude: 126.9780
      }]);
    } finally {
      setLoading(false);
    }
  };

  // 카카오맵 초기화
  const initializeMap = () => {
    console.log("🗺️ 지도 초기화 시작...");
    console.log("window.kakao:", !!window.kakao);
    console.log("window.kakao.maps:", !!window.kakao?.maps);
    console.log("mapRef.current:", !!mapRef.current);
    console.log("posts 개수:", posts.length);

    if (!window.kakao || !window.kakao.maps) {
      console.error("❌ 카카오맵 API가 로드되지 않았습니다.");
      setLoading(false);
      return;
    }

    if (!mapRef.current) {
      console.error("❌ 지도 컨테이너가 준비되지 않았습니다.");
      setLoading(false);
      return;
    }

    try {
      console.log("🗺️ 지도 생성 중...");
      const container = mapRef.current;
      const options = {
        center: new window.kakao.maps.LatLng(37.5665, 126.9780), // 서울시청 기본 위치
        level: 3
      };

      const kakaoMap = new window.kakao.maps.Map(container, options);
      map.current = kakaoMap;
      
      console.log("✅ 지도 생성 완료");
      setLoading(false);

      // 게시글이 있으면 마커 추가
      if (posts.length > 0) {
        console.log('🎯 초기화 시 마커 추가:', posts.length, '개');
        addMarkersToMap();
      }
    } catch (error) {
      console.error("❌ 지도 초기화 실패:", error);
      setLoading(false);
    }
  };

  // 지도에 마커 추가
  const addMarkersToMap = () => {
    if (!map.current) {
      console.log('❌ 지도가 준비되지 않음');
      return;
    }
    
    // 기존 마커들 제거
    markers.current.forEach(marker => {
      marker.setMap(null);
    });
    markers.current = [];
    
    if (posts.length === 0) {
      console.log('📍 표시할 게시글 없음');
      return;
    }

    console.log('🎯 마커 추가 시작:', posts.length, '개');
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
      
      // 마커 배열에 추가
      markers.current.push(customOverlay);

      // 마커 클릭 이벤트
      const markerElement = customOverlay.getContent();
      markerElement.addEventListener('click', () => {
        setSelectedPost(post);
      });
    });
    
    console.log('✅ 마커 추가 완료:', markers.current.length, '개');
  };

  useEffect(() => {
    fetchPostsWithLocation();
  }, [filter]);

  useEffect(() => {
    console.log("🚀 Map 컴포넌트 useEffect 실행됨");
    
    // 지도 초기화 - 카카오 API 로딩 완료까지 기다리기
    const loadMap = async () => {
      try {
        console.log("📍 loadMap 함수 시작");
        
        // 카카오 SDK가 로드될 때까지 기다리기
        let attempts = 0;
        while (attempts < 10 && !window.kakao) {
          console.log(`⏳ 카카오 SDK 대기 중... (${attempts + 1}/10) - window.kakao:`, !!window.kakao);
          await new Promise(resolve => setTimeout(resolve, 500));
          attempts++;
        }
        
        if (!window.kakao) {
          console.error("❌ 카카오 SDK 로딩 실패 - DOM에서 카카오 스크립트 확인 필요");
          console.log("HTML head에서 카카오 스크립트를 확인하세요:", document.head.innerHTML.includes('dapi.kakao.com'));
          setLoading(false);
          return;
        }
        
        console.log("✅ 카카오 SDK 로딩 성공");
        
        // 카카오 맵 API 수동 로드
        if (!window.kakao.maps) {
          console.log("🔄 카카오 맵 API 수동 로드 중...");
          await new Promise((resolve, reject) => {
            window.kakao.maps.load(() => {
              console.log("✅ 카카오 맵 API 로드 완료");
              resolve();
            });
            
            // 타임아웃 설정
            setTimeout(() => {
              if (!window.kakao.maps.Map) {
                reject(new Error("카카오 맵 API 로드 타임아웃"));
              }
            }, 10000);
          });
        }
        
        console.log("🗺️ initializeMap 호출");
        initializeMap();
      } catch (error) {
        console.error("❌ loadMap 에러:", error);
        setLoading(false);
      }
    };
    
    loadMap();
  }, []); // 빈 의존성 배열로 한 번만 실행

  useEffect(() => {
    // posts가 로드되면 마커만 추가
    if (posts.length > 0 && map.current) {
      console.log('🎯 포스트 로드됨, 마커 추가:', posts.length);
      addMarkersToMap();
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

  console.log("📦 MapPage return 실행, loading:", loading, "posts:", posts.length);
  
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