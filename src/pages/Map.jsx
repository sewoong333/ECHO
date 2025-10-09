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
  console.log("🔍 window.kakao 상태:", typeof window !== 'undefined' ? !!window.kakao : 'window undefined');
  console.log("🔍 window.kakao.maps 상태:", typeof window !== 'undefined' ? !!window.kakao?.maps : 'window undefined');
  
  const mapRef = useRef(null);
  const map = useRef(null);
  const markers = useRef([]); // 마커들을 저장할 ref 추가
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [filter, setFilter] = useState("all"); // all, products, musiclife
  const [userLocation, setUserLocation] = useState(null);
  const [mapType, setMapType] = useState("ROADMAP"); // ROADMAP, SATELLITE, TRAFFIC
  const [locationPermission, setLocationPermission] = useState(null); // null, granted, denied
  const [isGettingLocation, setIsGettingLocation] = useState(false);
  const [isMapReady, setIsMapReady] = useState(false); // 지도 초기화 완료 상태
  const navigate = useNavigate();

  // Firebase에서 좌표가 있는 게시글들 가져오기
  const fetchPostsWithLocation = async () => {
    try {
      console.log("🔍 게시글 데이터 로딩 시작, 필터:", filter);
      const allPosts = [];

      // 상품 게시글 가져오기
      if (filter === "all" || filter === "products") {
        try {
          // 모든 악기거래 글 가져오기 (주소가 없는 것도 포함)
          const productsQuery = query(
            collection(db, "products"),
            orderBy("createdAt", "desc")
          );
          const productsSnapshot = await getDocs(productsQuery);
          console.log("📦 Firebase 상품 데이터:", productsSnapshot.docs.length, "개");
          
          const products = productsSnapshot.docs.map(doc => {
            const data = doc.data();
            
            // coordinates 필드가 있으면 사용, 없으면 기존 방식 사용
            if (data.coordinates && data.coordinates.lat && data.coordinates.lng) {
              data.latitude = data.coordinates.lat;
              data.longitude = data.coordinates.lng;
              data.address = data.coordinates.address || data.address;
            } else if (!data.latitude || !data.longitude) {
              // 좌표가 없으면 서울 주소 추가
              data.latitude = 37.5665 + (Math.random() - 0.5) * 0.1; // 서울 중심에서 약간씩 랜덤
              data.longitude = 126.9780 + (Math.random() - 0.5) * 0.1;
              data.location = data.location || "서울특별시";
              data.detailAddress = data.detailAddress || "서울특별시 중구";
            }
            
            return {
              id: doc.id,
              type: "product",
              ...data
            };
          });
          allPosts.push(...products);
          console.log("✅ 상품 데이터 처리 완료:", products.length, "개");
        } catch (error) {
          console.error("❌ 상품 데이터 로딩 실패:", error);
        }
        
        // Firebase에서 데이터가 없으면 데모 데이터 추가
        if (allPosts.length === 0) {
          console.log("📝 상품 데이터가 없어서 데모 데이터 추가");
          const demoProducts = [
            {
              id: "demo1",
              type: "product",
              title: "어쿠스틱 기타 판매",
              category: "guitar",
              latitude: 37.5665,
              longitude: 126.9780,
              price: 150000,
              sellerNickname: "기타마스터",
              location: "서울특별시 중구",
              detailAddress: "서울특별시 중구 명동"
            },
            {
              id: "demo2", 
              type: "product",
              title: "야마하 피아노",
              category: "keyboard",
              latitude: 37.5651,
              longitude: 126.9895,
              price: 800000,
              sellerNickname: "피아노선생",
              location: "서울특별시 종로구",
              detailAddress: "서울특별시 종로구 청계천"
            },
            {
              id: "demo3",
              type: "product", 
              title: "드럼세트 풀옵션",
              category: "drums",
              latitude: 37.5707,
              longitude: 126.9794,
              price: 1200000,
              sellerNickname: "드러머김",
              location: "서울특별시 용산구",
              detailAddress: "서울특별시 용산구 이태원동"
            },
            {
              id: "demo4",
              type: "product",
              title: "베이스 기타",
              category: "bass", 
              latitude: 37.5640,
              longitude: 126.9748,
              price: 300000,
              sellerNickname: "베이시스트",
              location: "서울특별시 서대문구",
              detailAddress: "서울특별시 서대문구 신촌동"
            },
            {
              id: "demo5",
              type: "product",
              title: "일렉기타 판매",
              category: "guitar",
              latitude: 37.5580,
              longitude: 126.9850,
              price: 450000,
              sellerNickname: "일렉기타리스트",
              location: "서울특별시 강남구",
              detailAddress: "서울특별시 강남구 역삼동"
            },
            {
              id: "demo6",
              type: "product",
              title: "바이올린",
              category: "violin",
              latitude: 37.5720,
              longitude: 126.9720,
              price: 600000,
              sellerNickname: "바이올리니스트",
              location: "서울특별시 마포구",
              detailAddress: "서울특별시 마포구 홍대동"
            }
          ];
          allPosts.push(...demoProducts);
        }
      }

      // 음악생활 게시글 가져오기
      if (filter === "all" || filter === "musiclife") {
        const musiclifeStartCount = allPosts.length;
        try {
          // 모든 음악생활 글 가져오기 (주소가 없는 것도 포함)
          const musiclifeQuery = query(
            collection(db, "musiclife"),
            orderBy("createdAt", "desc")
          );
          const musiclifeSnapshot = await getDocs(musiclifeQuery);
          console.log("🎵 Firebase 음악생활 데이터:", musiclifeSnapshot.docs.length, "개");
          
          const musiclife = musiclifeSnapshot.docs.map(doc => {
            const data = doc.data();
            // 주소가 없으면 서울 주소 추가
            if (!data.latitude || !data.longitude) {
              data.latitude = 37.5665 + (Math.random() - 0.5) * 0.1; // 서울 중심에서 약간씩 랜덤
              data.longitude = 126.9780 + (Math.random() - 0.5) * 0.1;
              data.location = data.location || "서울특별시";
              data.detailAddress = data.detailAddress || "서울특별시 중구";
            }
            return {
              id: doc.id,
              type: "musiclife",
              ...data
            };
          });
          allPosts.push(...musiclife);
          console.log("✅ 음악생활 데이터 처리 완료:", musiclife.length, "개");
        } catch (error) {
          console.error("❌ 음악생활 데이터 로딩 실패:", error);
        }
        
        // Firebase에서 음악생활 데이터가 없으면 데모 데이터 추가
        if (allPosts.length === musiclifeStartCount) {
          console.log("📝 음악생활 데이터가 없어서 데모 데이터 추가");
          const demoMusiclife = [
            {
              id: "demo_ml1", 
              type: "musiclife",
              title: "밴드 멤버 구합니다",
              category: "collaboration",
              latitude: 37.5600,
              longitude: 126.9800,
              authorName: "록밴드리더",
              location: "서울특별시 중구",
              detailAddress: "서울특별시 중구 을지로"
            },
            {
              id: "demo_ml2",
              type: "musiclife", 
              title: "기타 레슨 해드려요",
              category: "lesson",
              latitude: 37.5680,
              longitude: 126.9850,
              authorName: "기타강사",
              location: "서울특별시 종로구",
              detailAddress: "서울특별시 종로구 인사동"
            },
            {
              id: "demo_ml3",
              type: "musiclife",
              title: "버스킹 같이 하실분",
              category: "performance", 
              latitude: 37.5620,
              longitude: 126.9720,
              authorName: "버스킹러버",
              location: "서울특별시 서대문구",
              detailAddress: "서울특별시 서대문구 연세로"
            },
            {
              id: "demo_ml4",
              type: "musiclife",
              title: "홍대 재즈바 공연",
              category: "performance", 
              latitude: 37.5560,
              longitude: 126.9230,
              authorName: "재즈피아니스트",
              location: "서울특별시 마포구",
              detailAddress: "서울특별시 마포구 홍대동"
            }
          ];
          allPosts.push(...demoMusiclife);
        }
      }

      console.log("📍 최종 로드된 게시글:", allPosts.length, "개");
      console.log("📊 게시글 타입별 분류:", {
        products: allPosts.filter(p => p.type === 'product').length,
        musiclife: allPosts.filter(p => p.type === 'musiclife').length
      });
      setPosts(allPosts);
      
      // 데이터 로딩 후 지도가 준비되어 있으면 바로 마커 표시
      if (map.current && allPosts.length > 0) {
        console.log("🎯 데이터 로딩 완료, 마커 표시 시작");
        setTimeout(() => addMarkersToMap(), 100);
      }
    } catch (error) {
      console.error("❌ 위치 기반 게시글 로딩 실패:", error);
      // 전체 실패시 데모 데이터
      const fallbackData = [
        {
          id: "fallback1",
          type: "product", 
          title: "어쿠스틱 기타",
          category: "guitar",
          latitude: 37.5665,
          longitude: 126.9780,
          price: 150000
        },
        {
          id: "fallback2",
          type: "musiclife", 
          title: "밴드 멤버 모집",
          category: "collaboration",
          latitude: 37.5600,
          longitude: 126.9800
        }
      ];
      console.log("🚨 폴백 데이터 사용:", fallbackData.length, "개");
      setPosts(fallbackData);
    } finally {
      setLoading(false);
    }
  };

  // 현재 위치 가져오기 (GPS 중심)
  const getCurrentLocation = () => {
    console.log("📍 현재 위치 요청 시작");
    
    
    // 1. 기본 체크
    if (!navigator.geolocation) {
      console.error("❌ Geolocation API 미지원");
      alert("이 브라우저에서는 위치 서비스를 지원하지 않습니다.");
      return;
    }

    if (!map.current) {
      console.error("❌ 지도가 준비되지 않음");
      alert("지도가 아직 로드되지 않았습니다. 잠시 후 다시 시도해주세요.");
      return;
    }

    // 2. 중복 요청 방지
    if (isGettingLocation) {
      console.log("📍 이미 위치 요청 중...");
      return;
    }

    setIsGettingLocation(true);
    setLocationPermission(null);
    
    // 3. GPS 위치 요청 (macOS CoreLocation 대응)
    const options = {
      enableHighAccuracy: false,  // 일반 정밀도로 시도 (macOS에서 더 안정적)
      timeout: 10000,            // 10초 타임아웃
      maximumAge: 600000         // 10분 캐시 사용
    };
    
    console.log("📍 GPS 위치 요청 시작:", options);
    console.log("📍 현재 프로토콜:", window.location.protocol);
    console.log("📍 HTTPS 환경:", window.location.protocol === 'https:');
    
    // macOS에서 CoreLocation 오류 방지를 위한 재시도 로직
    let retryCount = 0;
    const maxRetries = 2;
    
    const attemptGetLocation = () => {
      navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const accuracy = position.coords.accuracy;
        
        console.log("✅ GPS 위치 정보 받음:", { lat, lng, accuracy });
        
        // 위치 정확도 확인
        if (accuracy > 100) {
          console.warn("⚠️ 위치 정확도가 낮음:", accuracy, "m");
        }
        
        setUserLocation({ lat, lng });
        setLocationPermission("granted");
        
        // 지도 중심을 현재 위치로 이동
        if (map.current) {
          try {
            const currentPosition = new kakao.maps.LatLng(lat, lng);
            map.current.setCenter(currentPosition);
            map.current.setLevel(3);
            
            // 현재 위치 마커 추가
            addCurrentLocationMarker(lat, lng);
            console.log("✅ 지도 중심을 현재 위치로 이동 완료");
          } catch (error) {
            console.error("❌ 지도 이동 실패:", error);
          }
        }
        
        setIsGettingLocation(false);
        console.log("✅ 현재 위치 설정 완료");
      },
      (error) => {
        console.error("❌ GPS 위치 정보 가져오기 실패:", error);
        
        // 재시도 로직
        if (retryCount < maxRetries && error.code === error.POSITION_UNAVAILABLE) {
          retryCount++;
          console.log(`🔄 재시도 ${retryCount}/${maxRetries} - 2초 후 다시 시도`);
          setTimeout(() => {
            attemptGetLocation();
          }, 2000);
          return;
        }
        
        // HTTP 환경에서 IP 기반 위치 서비스 시도
        if (window.location.protocol === 'http:' && error.code === error.POSITION_UNAVAILABLE) {
          console.log("🌐 HTTP 환경에서 IP 기반 위치 서비스 시도");
          tryIPBasedLocation();
          return;
        }
        
        handleLocationError(error);
      },
      options
    );
    };
    
    // 첫 번째 시도 시작
    attemptGetLocation();
  };

  // IP 기반 위치 서비스 (HTTP 환경용)
  const tryIPBasedLocation = async () => {
    try {
      console.log("🌐 IP 기반 위치 정보 요청 시작");
      
      const response = await fetch('https://ipapi.co/json/');
      const data = await response.json();
      
      if (data.latitude && data.longitude) {
        const lat = parseFloat(data.latitude);
        const lng = parseFloat(data.longitude);
        
        console.log("✅ IP 기반 위치 정보 받음:", { lat, lng, city: data.city });
        
        setUserLocation({ lat, lng });
        setLocationPermission("granted");
        
        // 지도 중심을 현재 위치로 이동
        if (map.current) {
          try {
            const currentPosition = new kakao.maps.LatLng(lat, lng);
            map.current.setCenter(currentPosition);
            map.current.setLevel(5); // IP 기반이므로 확대 레벨을 낮춤
            
            // 현재 위치 마커 추가
            addCurrentLocationMarker(lat, lng);
            console.log("✅ 지도 중심을 IP 기반 위치로 이동 완료");
          } catch (error) {
            console.error("❌ 지도 이동 실패:", error);
          }
        }
        
        setIsGettingLocation(false);
        console.log("✅ IP 기반 위치 설정 완료");
        
        // IP 기반 위치임을 알리는 알림
        alert(`IP 기반 위치 서비스를 사용합니다.\n\n위치: ${data.city}, ${data.country}\n정확도: 대략적 위치\n\n더 정확한 위치를 원하시면 HTTPS 환경에서 테스트해주세요.`);
      } else {
        throw new Error('IP 기반 위치 정보를 가져올 수 없습니다.');
      }
    } catch (error) {
      console.error("❌ IP 기반 위치 서비스 실패:", error);
      handleLocationError({ code: 2, message: 'Position update is unavailable' });
    }
  };

  // 오류 처리 함수
  const handleLocationError = (error) => {
    console.error("❌ GPS 위치 정보 가져오기 실패:", error);
    
    setLocationPermission("denied");
    setIsGettingLocation(false);
    
    let errorMessage = "";
    switch(error.code) {
      case error.PERMISSION_DENIED:
        errorMessage = "위치 접근이 거부되었습니다.\n\n브라우저 설정에서 위치 권한을 허용해주세요:\n\n• Chrome: 주소창 왼쪽 자물쇠 아이콘 → 위치 → 허용\n• Safari: Safari → 환경설정 → 웹사이트 → 위치 서비스 → 허용\n• Firefox: 주소창 왼쪽 자물쇠 아이콘 → 권한 → 위치 → 허용";
        break;
      case error.POSITION_UNAVAILABLE:
        errorMessage = "위치 정보를 사용할 수 없습니다.\n\n다음을 확인해주세요:\n\n• 시스템 환경설정 → 보안 및 개인정보보호 → 개인정보보호 → 위치 서비스가 켜져 있는지 확인\n• Chrome이 위치 서비스에 접근할 수 있도록 허용되어 있는지 확인\n• Wi-Fi가 켜져 있는지 확인\n• 잠시 후 다시 시도해주세요";
        break;
      case error.TIMEOUT:
        errorMessage = "위치 정보 요청 시간이 초과되었습니다.\n\n다시 시도해주세요.";
        break;
      default:
        errorMessage = "알 수 없는 오류가 발생했습니다.\n\n다시 시도해주세요.";
        break;
    }
    
    alert(errorMessage);
  };


  // 현재 위치 마커 추가 (강화된 버전)
  const addCurrentLocationMarker = (lat, lng) => {
    if (!map.current) {
      console.error("❌ 지도가 준비되지 않음");
      return;
    }
    
    console.log("📍 현재 위치 마커 추가:", lat, lng);
    
    try {
      // 기존 현재 위치 마커 제거
      if (markers.current.currentLocationMarker) {
        markers.current.currentLocationMarker.setMap(null);
        console.log("🗑️ 기존 현재 위치 마커 제거");
      }
      
      const currentPosition = new kakao.maps.LatLng(lat, lng);
      
      // 현재 위치 마커 생성 (파란색 원형 마커)
      const currentLocationMarker = new kakao.maps.Marker({
        position: currentPosition,
        image: new kakao.maps.MarkerImage(
          'data:image/svg+xml;base64,' + btoa(`
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="16" r="12" fill="#4285F4" stroke="white" stroke-width="3" opacity="0.9"/>
              <circle cx="16" cy="16" r="6" fill="white"/>
              <circle cx="16" cy="16" r="2" fill="#4285F4"/>
            </svg>
          `),
          new kakao.maps.Size(32, 32),
          new kakao.maps.Point(16, 16)
        ),
        zIndex: 1000 // 다른 마커보다 위에 표시
      });
      
      currentLocationMarker.setMap(map.current);
      markers.current.currentLocationMarker = currentLocationMarker;
      
      console.log("✅ 현재 위치 마커 추가 완료");
      
      // 현재 위치 인포윈도우
      const currentLocationInfo = new kakao.maps.InfoWindow({
        content: `
          <div style="
            padding: 10px 12px; 
            font-size: 13px; 
            text-align: center;
            background: white;
            border-radius: 8px;
            border: 1px solid #4285F4;
            box-shadow: 0 2px 8px rgba(0,0,0,0.15);
            min-width: 120px;
          ">
            <div style="color: #4285F4; font-weight: 600; margin-bottom: 4px;">
              📍 현재 위치
            </div>
            <div style="color: #666; font-size: 11px;">
              ${lat.toFixed(6)}, ${lng.toFixed(6)}
            </div>
          </div>
        `,
        removable: false
      });
      
      currentLocationInfo.open(map.current, currentLocationMarker);
      
      // 5초 후 인포윈도우 자동 닫기
      setTimeout(() => {
        try {
          currentLocationInfo.close();
        } catch (error) {
          console.log("인포윈도우 닫기 실패:", error);
        }
      }, 5000);
      
    } catch (error) {
      console.error("❌ 현재 위치 마커 추가 실패:", error);
    }
  };

  // 지도 확대/축소
  const zoomIn = () => {
    if (!map.current) return;
    const currentLevel = map.current.getLevel();
    if (currentLevel > 1) {
      map.current.setLevel(currentLevel - 1);
      console.log("🔍 지도 확대:", currentLevel - 1);
    }
  };

  const zoomOut = () => {
    if (!map.current) return;
    const currentLevel = map.current.getLevel();
    if (currentLevel < 14) {
      map.current.setLevel(currentLevel + 1);
      console.log("🔍 지도 축소:", currentLevel + 1);
    }
  };

  // 지도 타입 변경
  const changeMapType = (type) => {
    if (!map.current) {
      console.log("❌ 지도가 아직 준비되지 않음");
      return;
    }
    
    console.log("🗺️ 지도 타입 변경:", type);
    console.log("🔍 현재 지도 상태:", map.current.getMapTypeId());
    setMapType(type);
    
    try {
      // 기존 오버레이 제거
      map.current.removeOverlayMapTypeId(kakao.maps.MapTypeId.USE_DISTRICT);
      
      switch(type) {
        case "ROADMAP":
          map.current.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
          console.log("✅ 일반지도로 변경 완료");
          break;
        case "SATELLITE":
          try {
            // 방법 1: 기본 SATELLITE 타입
            map.current.setMapTypeId(kakao.maps.MapTypeId.SATELLITE);
            console.log("✅ 위성지도로 변경 완료 (SATELLITE 타입)");
            
            // 변경 확인
            setTimeout(() => {
              const currentType = map.current.getMapTypeId();
              console.log("🔍 변경 후 지도 타입:", currentType);
              if (currentType !== kakao.maps.MapTypeId.SATELLITE) {
                console.log("⚠️ SATELLITE 변경 실패, 다른 방법 시도");
                // 방법 2: 직접 숫자로 설정
                map.current.setMapTypeId(2); // SATELLITE는 보통 2
                console.log("✅ 위성지도로 변경 완료 (숫자 타입)");
              }
            }, 100);
          } catch (error) {
            console.error("❌ 위성지도 변경 실패:", error);
            // 방법 3: 강제로 위성지도 설정
            try {
              map.current.setMapTypeId(2);
              console.log("✅ 위성지도로 변경 완료 (강제 설정)");
            } catch (e) {
              console.error("❌ 모든 위성지도 변경 방법 실패:", e);
            }
          }
          break;
        case "TRAFFIC":
          // 지적도 구현 - 여러 방법 시도
          try {
            // 방법 1: USE_DISTRICT 오버레이 사용
            map.current.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
            map.current.addOverlayMapTypeId(kakao.maps.MapTypeId.USE_DISTRICT);
            console.log("✅ 지적도로 변경 완료 (USE_DISTRICT 오버레이 사용)");
          } catch (error) {
            console.log("⚠️ USE_DISTRICT 실패, HYBRID 타입으로 대체");
            // 방법 2: HYBRID 타입 사용 (위성지도 + 도로명)
            map.current.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
            console.log("✅ 지적도로 변경 완료 (HYBRID 타입 사용)");
          }
          break;
        default:
          map.current.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
          console.log("✅ 기본 일반지도로 변경 완료");
      }
      
      // 변경 후 지도 타입 확인
      setTimeout(() => {
        console.log("🔍 변경 후 지도 타입:", map.current.getMapTypeId());
        console.log("🔍 오버레이 타입:", map.current.getOverlayMapTypeId());
      }, 100);
      
    } catch (error) {
      console.error("❌ 지도 타입 변경 실패:", error);
    }
  };

  // 카카오맵 초기화 (공식 가이드 방식)
  const initializeMap = () => {
    console.log("🗺️ 카카오맵 초기화 시작 (공식 가이드 방식)");
    
    if (!mapRef.current) {
      console.error("❌ 지도 컨테이너가 없습니다");
      setLoading(false);
      return;
    }

    if (!window.kakao || !window.kakao.maps) {
      console.error("❌ 카카오맵 SDK가 로드되지 않았습니다");
      setLoading(false);
      return;
    }

    try {
      // 지도 컨테이너와 옵션 설정 (공식 가이드대로)
      var container = mapRef.current;
      var options = {
        center: new kakao.maps.LatLng(37.5665, 126.9780), // 서울시청
        level: 3, // 확대 레벨
        mapTypeId: kakao.maps.MapTypeId.ROADMAP // 기본 지도 타입 명시적 설정
      };

      // 지도 생성 (공식 가이드 방식)
      var kakaoMap = new kakao.maps.Map(container, options);
      map.current = kakaoMap;

      // 지도 컨트롤 추가 (커스텀 버튼 사용으로 기본 컨트롤 제거)
      // var zoomControl = new kakao.maps.ZoomControl();
      // kakaoMap.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
      
      // var mapTypeControl = new kakao.maps.MapTypeControl();
      // kakaoMap.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

      // 초기 지도 타입 설정
      setMapType("ROADMAP");
      console.log("✅ 카카오맵 생성 성공 (기본: 일반지도)");
      
      setLoading(false);
      setIsMapReady(true); // 지도 준비 완료 상태 설정

      console.log("✅ 지도 초기화 완료, isMapReady = true");
    } catch (error) {
      console.error("❌ 지도 생성 실패:", error);
      setLoading(false);
    }
  };

  // 지도에 마커 추가 (제목이 항상 표시되는 커스텀 오버레이 방식)
  const addMarkersToMap = () => {
    if (!map.current) {
      console.log('❌ 지도가 준비되지 않음');
      return;
    }
    
    // 기존 마커들과 오버레이 제거
    markers.current.forEach(item => {
      if (item.marker) item.marker.setMap(null);
      if (item.overlay) item.overlay.setMap(null);
    });
    markers.current = [];
    
    if (posts.length === 0) {
      console.log('📍 표시할 게시글 없음');
      return;
    }

    console.log('🎯 마커 추가 시작:', posts.length, '개');
    
    // 필터에 따라 마커 필터링
    const filteredPosts = posts.filter(post => {
      if (filter === "all") return true;
      if (filter === "products" && post.type === "product") return true;
      if (filter === "musiclife" && post.type === "musiclife") return true;
      return false;
    });
    
    console.log('🎯 필터링된 게시글:', filteredPosts.length, '개');
    
    filteredPosts.forEach(post => {
      if (!post.latitude || !post.longitude) return;

      // 마커 위치 설정
      var markerPosition = new kakao.maps.LatLng(post.latitude, post.longitude);
      
      // 기본 마커 생성 (작은 핀 아이콘)
      const icon = CATEGORY_ICONS[post.category] || "📍";
      var marker = new kakao.maps.Marker({
        position: markerPosition,
        zIndex: 1
      });

      // 지도에 마커 표시
      marker.setMap(map.current);

      // 마커 위에 항상 표시되는 제목 오버레이 생성
      const overlayContent = document.createElement('div');
      overlayContent.style.cssText = `
        padding: 8px 12px;
        background: white;
        border: 2px solid ${post.type === 'product' ? '#2ed8b6' : '#6f42c1'};
        border-radius: 20px;
        font-size: 12px;
        font-weight: 600;
        color: #333;
        white-space: nowrap;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
        cursor: pointer;
        transition: all 0.2s;
        user-select: none;
        min-width: 140px;
        text-align: center;
        max-width: 200px;
      `;
      
      const title = post.title?.substring(0, 12) + (post.title?.length > 12 ? '...' : '');
      
      // 지역 정보 추출 (00구00동 형태)
      let locationText = '';
      
      if (post.detailAddress) {
        // "서울특별시 중구 명동" -> "중구 명동"
        const parts = post.detailAddress.split(' ');
        if (parts.length >= 2) {
          locationText = parts.slice(1).join(' ').substring(0, 8);
        }
      } else if (post.location) {
        // "서울특별시 중구" -> "중구"
        const parts = post.location.split(' ');
        if (parts.length >= 2) {
          locationText = parts[1].substring(0, 6);
        }
      }
      
      overlayContent.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 4px; align-items: center;">
          <div style="display: flex; align-items: center; gap: 4px; justify-content: center;">
            <span style="font-size: 14px;">${icon}</span>
            <span style="font-weight: 600; font-size: 12px;">${title}</span>
          </div>
          ${locationText ? `<div style="font-size: 10px; color: #666; background: #f8f9fa; padding: 2px 8px; border-radius: 10px; border: 1px solid #e9ecef; font-weight: 500;">${locationText}</div>` : ''}
        </div>
      `;
      
      // 오버레이에 hover 효과
      overlayContent.addEventListener('mouseenter', function() {
        overlayContent.style.transform = 'scale(1.05)';
        overlayContent.style.borderWidth = '3px';
        overlayContent.style.zIndex = '1000';
      });
      
      overlayContent.addEventListener('mouseleave', function() {
        overlayContent.style.transform = 'scale(1)';
        overlayContent.style.borderWidth = '2px';
      });
      
      // 클릭 시 상세 정보 표시
      overlayContent.addEventListener('click', function() {
        setSelectedPost(post);
      });

      // 커스텀 오버레이 생성 (마커 바로 위에 붙여서 표시)
      var customOverlay = new kakao.maps.CustomOverlay({
        position: markerPosition,
        content: overlayContent,
        yAnchor: 0, // 마커 위쪽에 붙여서 표시
        xAnchor: 0.5, // 가운데 정렬
        zIndex: 2
      });

      customOverlay.setMap(map.current);
      
      // 마커와 오버레이를 함께 저장
      markers.current.push({
        marker: marker,
        overlay: customOverlay,
        post: post
      });
    });
    
    console.log('✅ 마커 + 제목 오버레이 추가 완료:', markers.current.length, '개');
  };

  useEffect(() => {
    // 필터가 변경될 때마다 게시글 다시 로드
    fetchPostsWithLocation();
  }, [filter]);

  // 지도와 게시글이 모두 준비되면 마커 표시
  useEffect(() => {
    console.log('🔄 마커 표시 체크:', { isMapReady, postsCount: posts.length, filter });
    if (isMapReady && posts.length > 0) {
      console.log('🎯 지도와 게시글 준비됨, 마커 자동 표시:', posts.length);
      // 약간의 지연을 두고 마커 표시 (DOM 렌더링 완료 대기)
      setTimeout(() => {
        addMarkersToMap();
      }, 100);
    }
  }, [isMapReady, posts, filter]);

  useEffect(() => {
    console.log("🚀 카카오맵 초기화 시작");
    
    // 게시글 데이터 먼저 로드
    fetchPostsWithLocation();
    
    // 단순한 로딩 체크 로직
    const initMap = () => {
      console.log("🔍 SDK 상태 체크:");
      console.log("  - window.kakao:", !!window.kakao);
      console.log("  - window.kakao.maps:", !!window.kakao?.maps);
      console.log("  - kakao.maps.Map:", !!window.kakao?.maps?.Map);
      
      if (window.kakao && window.kakao.maps && window.kakao.maps.Map) {
        console.log("✅ 카카오맵 SDK 준비됨");
        initializeMap();
      } else {
        console.log("❌ 카카오맵 SDK 미준비");
        setLoading(false);
      }
    };

    // 페이지 로드 후 잠시 대기
    const timer = setTimeout(initMap, 1000);
    return () => clearTimeout(timer);
  }, []);

  // 이 useEffect는 위의 새로운 useEffect로 대체됨

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

      {/* 지도 타입 선택 버튼 */}
      <MapTypeContainer>
        <MapTypeButton 
          active={mapType === "ROADMAP"} 
          onClick={() => {
            console.log("🗺️ 일반지도 버튼 클릭");
            changeMapType("ROADMAP");
          }}
        >
          🗺️ 일반지도
        </MapTypeButton>
        <MapTypeButton 
          active={mapType === "SATELLITE"} 
          onClick={() => {
            console.log("🛰️ 위성지도 버튼 클릭");
            changeMapType("SATELLITE");
          }}
        >
          🛰️ 위성지도
        </MapTypeButton>
        <MapTypeButton 
          active={mapType === "TRAFFIC"} 
          onClick={() => {
            console.log("🏘️ 지적도 버튼 클릭");
            changeMapType("TRAFFIC");
          }}
        >
          🏘️ 지적도
        </MapTypeButton>
      </MapTypeContainer>

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
        
        {/* 확대/축소 버튼 */}
        <ZoomControls>
          <ZoomButton onClick={zoomIn} title="확대">
            <span>+</span>
          </ZoomButton>
          <ZoomButton onClick={zoomOut} title="축소">
            <span>−</span>
          </ZoomButton>
        </ZoomControls>

        {/* 현재 위치 버튼 */}
        <LocationButton 
          onClick={getCurrentLocation}
          disabled={isGettingLocation}
        >
          {isGettingLocation ? (
            <span>⏳</span>
          ) : (
            <span>📍</span>
          )}
          {isGettingLocation ? "위치 확인 중..." : "내 위치"}
        </LocationButton>
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
        <LegendItem>📍 마커 위의 제목을 클릭하면 상세정보를 볼 수 있어요</LegendItem>
        <LegendItem>
          <span style={{ color: '#2ed8b6', fontWeight: '600' }}>녹색 태그</span> = 악기거래 · 
          <span style={{ color: '#6f42c1', fontWeight: '600', marginLeft: '6px' }}>보라색 태그</span> = 음악생활
        </LegendItem>
        <LegendItem>🎸 기타 · 🥁 드럼 · 🎹 키보드 · 🎤 공연 · 📚 레슨</LegendItem>
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

const MapTypeContainer = styled.div`
  display: flex;
  gap: 8px;
  padding: 12px 20px;
  background: white;
  border-bottom: 1px solid #e9ecef;
  overflow-x: auto;
  
  /* 스크롤바 숨기기 */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const MapTypeButton = styled.button`
  padding: 8px 12px;
  border-radius: 16px;
  border: 1px solid ${props => props.active ? '#4285F4' : '#ddd'};
  background: ${props => props.active ? '#4285F4' : 'white'};
  color: ${props => props.active ? 'white' : '#666'};
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  min-width: fit-content;

  &:hover {
    border-color: #4285F4;
    color: ${props => props.active ? 'white' : '#4285F4'};
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

const ZoomControls = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  z-index: 100;
`;

const ZoomButton = styled.button`
  width: 40px;
  height: 40px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;

  &:hover {
    background: #f8f9fa;
    border-color: #4285F4;
    color: #4285F4;
  }

  &:active {
    transform: scale(0.95);
  }

  span {
    font-size: 20px;
    line-height: 1;
  }
`;

const LocationButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 12px 16px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 25px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s;
  z-index: 100;

  &:hover {
    background: #f8f9fa;
    border-color: #4285F4;
    color: #4285F4;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  span {
    font-size: 16px;
  }
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