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
  const navigate = useNavigate();

  // Firebase에서 좌표가 있는 게시글들 가져오기
  const fetchPostsWithLocation = async () => {
    try {
      setLoading(true);
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
          const products = productsSnapshot.docs.map(doc => {
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
              type: "product",
              ...data
            };
          });
          allPosts.push(...products);
        } catch (error) {
          console.log("상품 데이터 로딩 실패, 데모 데이터 사용");
          // 데모 데이터 추가 (더 많은 마커)
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
              location: "서울특별시 중구"
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
              location: "서울특별시 종로구"
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
              location: "서울특별시 용산구"
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
              location: "서울특별시 서대문구"
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
              location: "서울특별시 강남구"
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
              location: "서울특별시 마포구"
            }
          ];
          allPosts.push(...demoProducts);
        }
      }

      // 음악생활 게시글 가져오기
      if (filter === "all" || filter === "musiclife") {
        try {
          // 모든 음악생활 글 가져오기 (주소가 없는 것도 포함)
          const musiclifeQuery = query(
            collection(db, "musiclife"),
            orderBy("createdAt", "desc")
          );
          const musiclifeSnapshot = await getDocs(musiclifeQuery);
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
        } catch (error) {
          console.log("음악생활 데이터 로딩 실패, 데모 데이터 사용");
          // 데모 데이터 추가
          const demoMusiclife = [
            {
              id: "demo5", 
              type: "musiclife",
              title: "밴드 멤버 구합니다",
              category: "collaboration",
              latitude: 37.5600,
              longitude: 126.9800,
              authorName: "록밴드리더"
            },
            {
              id: "demo6",
              type: "musiclife", 
              title: "기타 레슨 해드려요",
              category: "lesson",
              latitude: 37.5680,
              longitude: 126.9850,
              authorName: "기타강사"
            },
            {
              id: "demo7",
              type: "musiclife",
              title: "버스킹 같이 하실분",
              category: "performance", 
              latitude: 37.5620,
              longitude: 126.9720,
              authorName: "버스킹러버"
            }
          ];
          allPosts.push(...demoMusiclife);
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

      // 게시글이 있으면 마커 추가 (지도 초기화 완료 후)
      setTimeout(() => {
        if (posts.length > 0) {
          console.log('🎯 지도 초기화 후 마커 표시:', posts.length);
          addMarkersToMap();
        }
      }, 500);
    } catch (error) {
      console.error("❌ 지도 생성 실패:", error);
      setLoading(false);
    }
  };

  // 지도에 마커 추가 (공식 가이드 방식)
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

      // 마커 위치 설정 (공식 가이드 방식)
      var markerPosition = new kakao.maps.LatLng(post.latitude, post.longitude);
      
      // 기본 마커 생성
      var marker = new kakao.maps.Marker({
        position: markerPosition
      });

      // 지도에 마커 표시
      marker.setMap(map.current);
      markers.current.push(marker);

      // 인포윈도우 내용 생성
      const icon = CATEGORY_ICONS[post.category] || "📍";
      var infowindow = new kakao.maps.InfoWindow({
        content: `<div style="
          padding: 8px 12px;
          font-size: 12px;
          background: white;
          border-radius: 8px;
          border: 1px solid #ddd;
          min-width: 150px;
        ">
          <div style="font-weight: 600; color: #333; margin-bottom: 4px;">
            ${icon} ${post.title?.substring(0, 20)}${post.title?.length > 20 ? '...' : ''}
          </div>
          <div style="color: #666; font-size: 11px;">
            ${post.type === 'product' ? '💰 악기거래' : '🎵 음악생활'}
            ${post.price ? ` · ${Number(post.price).toLocaleString()}원` : ''}
          </div>
        </div>`
      });

      // 마커 클릭시 인포윈도우 표시
      kakao.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map.current, marker);
        setSelectedPost(post);
      });
    });
    
    console.log('✅ 마커 추가 완료:', markers.current.length, '개');
  };

  useEffect(() => {
    // 필터가 변경될 때마다 게시글 다시 로드
    fetchPostsWithLocation();
  }, [filter]);

  // 지도와 게시글이 모두 준비되면 마커 표시
  useEffect(() => {
    if (map.current && posts.length > 0) {
      console.log('🎯 지도와 게시글 준비됨, 마커 자동 표시:', posts.length);
      addMarkersToMap();
    }
  }, [map.current, posts, filter]);

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