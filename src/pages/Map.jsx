import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import TopBar from "../components/TopBar";
import { ProductContext } from "../store/ProductContext";
import { collection, query, getDocs, orderBy } from "firebase/firestore";
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

// 주소 표시용 함수 (마커 오버레이와 팝업 카드에서 공통 사용)
const getDisplayAddress = (post) => {
  // 우선순위 1: region과 district 조합
  if (post.region && post.district) {
    const regionShort = post.region.replace('특별시', '').replace('광역시', '').replace('특별자치시', '').replace('도', '').replace('특별자치도', '');
    return `${regionShort} ${post.district}`;
  }
  
  // 우선순위 2: fullLocation 사용
  if (post.fullLocation) {
    const parts = post.fullLocation.split(' ');
    if (parts.length >= 2) {
      const regionShort = parts[0].replace('특별시', '').replace('광역시', '').replace('특별자치시', '').replace('도', '').replace('특별자치도', '');
      return `${regionShort} ${parts[1]}`;
    }
    return post.fullLocation;
  }
  
  // 우선순위 3: detailAddress 사용
  if (post.detailAddress) {
    const parts = post.detailAddress.split(' ');
    if (parts.length >= 2) {
        return parts.slice(1).join(' ');
    }
    return post.detailAddress;
  }
  
  // 우선순위 4: location 사용 (레거시)
  if (post.location) {
    const parts = post.location.split(' ');
    if (parts.length >= 2) {
      return parts[1];
    }
    return post.location;
  }
  
  // 기본값
  return "위치 정보 없음";
};

// 주소별 실제 좌표 매핑
const getAddressCoordinates = (address) => {
  const addressMap = {
    // 서울특별시
    "서울특별시": { lat: 37.5665, lng: 126.9780 },
    "서울특별시 강남구": { lat: 37.5172, lng: 127.0473 },
    "서울특별시 서초구": { lat: 37.4837, lng: 127.0324 },
    "서울특별시 송파구": { lat: 37.5145, lng: 127.1058 },
    "서울특별시 강동구": { lat: 37.5301, lng: 127.1238 },
    "서울특별시 중구": { lat: 37.5640, lng: 126.9970 },
    "서울특별시 종로구": { lat: 37.5735, lng: 126.9788 },
    "서울특별시 용산구": { lat: 37.5384, lng: 126.9654 },
    "서울특별시 성동구": { lat: 37.5633, lng: 127.0366 },
    "서울특별시 광진구": { lat: 37.5385, lng: 127.0823 },
    "서울특별시 동대문구": { lat: 37.5838, lng: 127.0507 },
    "서울특별시 중랑구": { lat: 37.6066, lng: 127.0926 },
    "서울특별시 성북구": { lat: 37.5894, lng: 127.0167 },
    "서울특별시 강북구": { lat: 37.6398, lng: 127.0253 },
    "서울특별시 도봉구": { lat: 37.6688, lng: 127.0472 },
    "서울특별시 노원구": { lat: 37.6542, lng: 127.0568 },
    "서울특별시 은평구": { lat: 37.6028, lng: 126.9292 },
    "서울특별시 서대문구": { lat: 37.5791, lng: 126.9368 },
    "서울특별시 마포구": { lat: 37.5663, lng: 126.9019 },
    "서울특별시 양천구": { lat: 37.5172, lng: 126.8663 },
    "서울특별시 강서구": { lat: 37.5509, lng: 126.8495 },
    "서울특별시 구로구": { lat: 37.4954, lng: 126.8874 },
    "서울특별시 금천구": { lat: 37.4665, lng: 126.8892 },
    "서울특별시 영등포구": { lat: 37.5264, lng: 126.8962 },
    "서울특별시 동작구": { lat: 37.5125, lng: 126.9395 },
    "서울특별시 관악구": { lat: 37.4877, lng: 126.9154 },
    
    // 경기도
    "경기도": { lat: 37.4138, lng: 127.5183 },
    "경기도 수원시": { lat: 37.2636, lng: 127.0286 },
    "경기도 성남시": { lat: 37.4201, lng: 127.1268 },
    "경기도 의정부시": { lat: 37.7381, lng: 127.0472 },
    "경기도 안양시": { lat: 37.3943, lng: 126.9568 },
    "경기도 부천시": { lat: 37.5036, lng: 126.7660 },
    "경기 부천시": { lat: 37.5036, lng: 126.7660 },
    "부천시": { lat: 37.5036, lng: 126.7660 },
    "경기도 광명시": { lat: 37.4772, lng: 126.8663 },
    "경기도 평택시": { lat: 36.9909, lng: 127.0856 },
    "경기도 과천시": { lat: 37.4292, lng: 126.9882 },
    "경기도 오산시": { lat: 37.1498, lng: 127.0772 },
    "경기도 시흥시": { lat: 37.3796, lng: 126.8030 },
    "경기도 군포시": { lat: 37.3616, lng: 126.9352 },
    "경기도 의왕시": { lat: 37.3450, lng: 126.9758 },
    "경기도 하남시": { lat: 37.5392, lng: 127.2148 },
    "경기도 용인시": { lat: 37.2411, lng: 127.1776 },
    "경기도 파주시": { lat: 37.7599, lng: 126.7802 },
    "경기도 이천시": { lat: 37.2792, lng: 127.4425 },
    "경기도 안성시": { lat: 37.0100, lng: 127.2701 },
    "경기도 김포시": { lat: 37.6153, lng: 126.7155 },
    "경기도 화성시": { lat: 37.1996, lng: 126.8311 },
    "경기도 광주시": { lat: 37.4292, lng: 127.2550 },
    "경기도 여주시": { lat: 37.2979, lng: 127.6371 },
    "경기도 양평군": { lat: 37.4914, lng: 127.4874 },
    "경기도 가평군": { lat: 37.8315, lng: 127.5102 },
    "경기도 연천군": { lat: 38.0966, lng: 127.0746 },
    
    // 인천광역시
    "인천광역시": { lat: 37.4563, lng: 126.7052 },
    "인천광역시 중구": { lat: 37.4760, lng: 126.6169 },
    "인천광역시 동구": { lat: 37.4751, lng: 126.6322 },
    "인천광역시 미추홀구": { lat: 37.4636, lng: 126.6500 },
    "인천광역시 연수구": { lat: 37.4106, lng: 126.6788 },
    "인천광역시 남동구": { lat: 37.4480, lng: 126.7319 },
    "인천광역시 부평구": { lat: 37.4890, lng: 126.7245 },
    "인천광역시 계양구": { lat: 37.5356, lng: 126.7370 },
    "인천광역시 서구": { lat: 37.5437, lng: 126.6756 },
    
    // 부산광역시
    "부산광역시": { lat: 35.1796, lng: 129.0756 },
    "부산광역시 중구": { lat: 35.1028, lng: 129.0332 },
    "부산광역시 서구": { lat: 35.1047, lng: 129.0203 },
    "부산광역시 동구": { lat: 35.1294, lng: 129.0454 },
    "부산광역시 영도구": { lat: 35.0912, lng: 129.0677 },
    "부산광역시 부산진구": { lat: 35.1629, lng: 129.0530 },
    "부산광역시 동래구": { lat: 35.1965, lng: 129.1038 },
    "부산광역시 남구": { lat: 35.1366, lng: 129.0854 },
    "부산광역시 북구": { lat: 35.1972, lng: 128.9904 },
    "부산광역시 해운대구": { lat: 35.1796, lng: 129.1756 },
    "부산광역시 사하구": { lat: 35.1047, lng: 128.9753 },
    "부산광역시 금정구": { lat: 35.2428, lng: 129.0925 },
    "부산광역시 강서구": { lat: 35.1796, lng: 128.8206 },
    "부산광역시 연제구": { lat: 35.1763, lng: 129.0799 },
    "부산광역시 수영구": { lat: 35.1455, lng: 129.1130 },
    "부산광역시 사상구": { lat: 35.1528, lng: 128.9911 },
    "부산광역시 기장군": { lat: 35.2444, lng: 129.2222 },
    
    // 대구광역시
    "대구광역시": { lat: 35.8714, lng: 128.6014 },
    "대구광역시 중구": { lat: 35.8703, lng: 128.5911 },
    "대구광역시 동구": { lat: 35.8864, lng: 128.6263 },
    "대구광역시 서구": { lat: 35.8719, lng: 128.5591 },
    "대구광역시 남구": { lat: 35.8456, lng: 128.5911 },
    "대구광역시 북구": { lat: 35.8856, lng: 128.5825 },
    "대구광역시 수성구": { lat: 35.8581, lng: 128.6311 },
    "대구광역시 달서구": { lat: 35.8294, lng: 128.5291 },
    "대구광역시 달성군": { lat: 35.7747, lng: 128.4311 },
    
    // 광주광역시
    "광주광역시": { lat: 35.1595, lng: 126.8526 },
    "광주광역시 동구": { lat: 35.1464, lng: 126.9233 },
    "광주광역시 서구": { lat: 35.1522, lng: 126.8886 },
    "광주광역시 남구": { lat: 35.1336, lng: 126.9011 },
    "광주광역시 북구": { lat: 35.1719, lng: 126.9103 },
    "광주광역시 광산구": { lat: 35.1403, lng: 126.7928 },
    
    // 대전광역시
    "대전광역시": { lat: 36.3504, lng: 127.3845 },
    "대전광역시 동구": { lat: 36.3256, lng: 127.4342 },
    "대전광역시 중구": { lat: 36.3256, lng: 127.4225 },
    "대전광역시 서구": { lat: 36.3556, lng: 127.3845 },
    "대전광역시 유성구": { lat: 36.3625, lng: 127.3447 },
    "대전광역시 대덕구": { lat: 36.3522, lng: 127.4311 },
    
    // 울산광역시
    "울산광역시": { lat: 35.5384, lng: 129.3114 },
    "울산광역시 중구": { lat: 35.5681, lng: 129.3325 },
    "울산광역시 남구": { lat: 35.5384, lng: 129.3114 },
    "울산광역시 동구": { lat: 35.5047, lng: 129.4181 },
    "울산광역시 북구": { lat: 35.5828, lng: 129.3653 },
    "울산광역시 울주군": { lat: 35.5384, lng: 129.3114 },
    
    // 세종특별자치시
    "세종특별자치시": { lat: 36.4800, lng: 127.2890 },
    
    // 충청남도
    "충청남도": { lat: 36.5184, lng: 126.8000 },
    "충청남도 천안시": { lat: 36.8151, lng: 127.1139 },
    "충청남도 공주시": { lat: 36.4464, lng: 127.1197 },
    "충청남도 보령시": { lat: 36.3336, lng: 126.6125 },
    "충청남도 아산시": { lat: 36.7847, lng: 127.0000 },
    "충청남도 서산시": { lat: 36.7847, lng: 126.4503 },
    "충청남도 논산시": { lat: 36.1864, lng: 127.0997 },
    "충청남도 계룡시": { lat: 36.2747, lng: 127.2497 },
    "충청남도 당진시": { lat: 36.8947, lng: 126.6303 },
    "충청남도 금산군": { lat: 36.1086, lng: 127.4881 },
    "충청남도 부여군": { lat: 36.2756, lng: 126.9103 },
    "충청남도 서천군": { lat: 36.0803, lng: 126.6919 },
    "충청남도 청양군": { lat: 36.4581, lng: 126.8025 },
    "충청남도 홍성군": { lat: 36.6011, lng: 126.6619 },
    "충청남도 예산군": { lat: 36.6803, lng: 126.8453 },
    "충청남도 태안군": { lat: 36.7456, lng: 126.2975 },
    
    // 충청북도
    "충청북도": { lat: 36.8, lng: 127.7 },
    "충청북도 청주시": { lat: 36.6424, lng: 127.4890 },
    "충청북도 충주시": { lat: 36.9914, lng: 127.9264 },
    "충청북도 제천시": { lat: 37.1325, lng: 128.2111 },
    "충청북도 보은군": { lat: 36.4897, lng: 127.7303 },
    "충청북도 옥천군": { lat: 36.3064, lng: 127.5719 },
    "충청북도 영동군": { lat: 36.1756, lng: 127.7764 },
    "충청북도 증평군": { lat: 36.7847, lng: 127.5819 },
    "충청북도 진천군": { lat: 36.8556, lng: 127.4431 },
    "충청북도 괴산군": { lat: 36.8156, lng: 127.7897 },
    "충청북도 음성군": { lat: 36.9331, lng: 127.6903 },
    "충청북도 단양군": { lat: 36.9847, lng: 128.3653 },
    
    // 전라남도
    "전라남도": { lat: 34.8679, lng: 126.9910 },
    "전라남도 목포시": { lat: 34.8118, lng: 126.3922 },
    "전라남도 여수시": { lat: 34.7604, lng: 127.6622 },
    "전라남도 순천시": { lat: 34.9506, lng: 127.4875 },
    "전라남도 나주시": { lat: 35.0156, lng: 126.7108 },
    "전라남도 광양시": { lat: 34.9403, lng: 127.6958 },
    "전라남도 담양군": { lat: 35.3214, lng: 126.9881 },
    "전라남도 곡성군": { lat: 35.2778, lng: 127.2919 },
    "전라남도 구례군": { lat: 35.2025, lng: 127.4625 },
    "전라남도 고흥군": { lat: 34.6064, lng: 127.2847 },
    "전라남도 보성군": { lat: 34.7714, lng: 127.0803 },
    "전라남도 화순군": { lat: 35.0597, lng: 126.9864 },
    "전라남도 장흥군": { lat: 34.6814, lng: 126.9069 },
    "전라남도 강진군": { lat: 34.6414, lng: 126.7675 },
    "전라남도 해남군": { lat: 34.5736, lng: 126.5986 },
    "전라남도 영암군": { lat: 34.7997, lng: 126.6969 },
    "전라남도 무안군": { lat: 34.9903, lng: 126.4814 },
    "전라남도 함평군": { lat: 35.0653, lng: 126.5164 },
    "전라남도 영광군": { lat: 35.2753, lng: 126.5119 },
    "전라남도 장성군": { lat: 35.3019, lng: 126.7847 },
    "전라남도 완도군": { lat: 34.3114, lng: 126.7553 },
    "전라남도 진도군": { lat: 34.4864, lng: 126.2625 },
    "전라남도 신안군": { lat: 34.7897, lng: 126.3764 },
    
    // 전라북도
    "전라북도": { lat: 35.7175, lng: 127.1530 },
    "전라북도 전주시": { lat: 35.8242, lng: 127.1480 },
    "전라북도 군산시": { lat: 35.9678, lng: 126.7361 },
    "전라북도 익산시": { lat: 35.9481, lng: 126.9575 },
    "전라북도 정읍시": { lat: 35.5697, lng: 126.8564 },
    "전라북도 남원시": { lat: 35.4164, lng: 127.3903 },
    "전라북도 김제시": { lat: 35.8036, lng: 126.8808 },
    "전라북도 완주군": { lat: 35.8453, lng: 127.1475 },
    "전라북도 진안군": { lat: 35.7914, lng: 127.4253 },
    "전라북도 무주군": { lat: 35.8964, lng: 127.7303 },
    "전라북도 장수군": { lat: 35.6525, lng: 127.5214 },
    "전라북도 임실군": { lat: 35.6125, lng: 127.2797 },
    "전라북도 순창군": { lat: 35.3747, lng: 127.1375 },
    "전라북도 고창군": { lat: 35.4353, lng: 126.7019 },
    "전라북도 부안군": { lat: 35.7314, lng: 126.7325 },
    
    // 경상남도
    "경상남도": { lat: 35.4606, lng: 128.2132 },
    "경상남도 창원시": { lat: 35.2281, lng: 128.6811 },
    "경상남도 진주시": { lat: 35.1806, lng: 128.1075 },
    "경상남도 통영시": { lat: 34.8456, lng: 128.4331 },
    "경상남도 사천시": { lat: 35.0036, lng: 128.0647 },
    "경상남도 김해시": { lat: 35.2281, lng: 128.8811 },
    "경상남도 밀양시": { lat: 35.4936, lng: 128.7486 },
    "경상남도 거제시": { lat: 34.8803, lng: 128.6919 },
    "경상남도 양산시": { lat: 35.3381, lng: 129.0331 },
    "경상남도 의령군": { lat: 35.3219, lng: 128.2619 },
    "경상남도 함안군": { lat: 35.2725, lng: 128.4064 },
    "경상남도 창녕군": { lat: 35.5447, lng: 128.4925 },
    "경상남도 고성군": { lat: 34.9736, lng: 128.3236 },
    "경상남도 남해군": { lat: 34.8375, lng: 127.8753 },
    "경상남도 하동군": { lat: 35.0675, lng: 127.7514 },
    "경상남도 산청군": { lat: 35.4147, lng: 127.8736 },
    "경상남도 함양군": { lat: 35.5203, lng: 127.7253 },
    "경상남도 거창군": { lat: 35.6864, lng: 127.9097 },
    "경상남도 합천군": { lat: 35.5664, lng: 128.1653 },
    
    // 경상북도
    "경상북도": { lat: 36.4919, lng: 128.8889 },
    "경상북도 포항시": { lat: 36.0190, lng: 129.3435 },
    "경상북도 경주시": { lat: 35.8562, lng: 129.2248 },
    "경상북도 김천시": { lat: 36.1215, lng: 128.1198 },
    "경상북도 안동시": { lat: 36.5684, lng: 128.7295 },
    "경상북도 구미시": { lat: 36.1136, lng: 128.3360 },
    "경상북도 영주시": { lat: 36.8250, lng: 128.6305 },
    "경상북도 영천시": { lat: 35.9733, lng: 128.9387 },
    "경상북도 상주시": { lat: 36.4106, lng: 128.1592 },
    "경상북도 문경시": { lat: 36.5864, lng: 128.1864 },
    "경상북도 경산시": { lat: 35.8219, lng: 128.7381 },
    "경상북도 군위군": { lat: 36.2425, lng: 128.5725 },
    "경상북도 의성군": { lat: 36.3525, lng: 128.6975 },
    "경상북도 청송군": { lat: 36.4353, lng: 129.0564 },
    "경상북도 영양군": { lat: 36.6664, lng: 129.1125 },
    "경상북도 영덕군": { lat: 36.4153, lng: 129.3653 },
    "경상북도 청도군": { lat: 35.6475, lng: 128.7331 },
    "경상북도 고령군": { lat: 35.7253, lng: 128.2625 },
    "경상북도 성주군": { lat: 35.9181, lng: 128.2881 },
    "경상북도 칠곡군": { lat: 35.9953, lng: 128.4014 },
    "경상북도 예천군": { lat: 36.6586, lng: 128.4525 },
    "경상북도 봉화군": { lat: 36.8931, lng: 128.7325 },
    "경상북도 울진군": { lat: 36.9936, lng: 129.4003 },
    "경상북도 울릉군": { lat: 37.4847, lng: 130.9053 },
    
    // 제주특별자치도
    "제주특별자치도": { lat: 33.4996, lng: 126.5312 },
    "제주특별자치도 제주시": { lat: 33.4996, lng: 126.5312 },
    "제주특별자치도 서귀포시": { lat: 33.2541, lng: 126.5603 }
  };

  // 정확한 주소 매칭 시도
  if (addressMap[address]) {
    return addressMap[address];
  }

  // 부분 매칭 시도 (구/군 단위)
  for (const [key, coords] of Object.entries(addressMap)) {
    if (address.includes(key.split(' ')[1])) { // 구/군 이름만 매칭
      return coords;
    }
  }

  // 시/도 단위 매칭
  for (const [key, coords] of Object.entries(addressMap)) {
    if (address.includes(key.split(' ')[0])) { // 시/도 이름만 매칭
      return coords;
    }
  }

  // 매칭되지 않으면 서울 중심 반환
  console.log('📍 주소 매칭 실패, 서울 중심 반환:', address);
  return { lat: 37.5665, lng: 126.9780 };
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
  const [, setUserLocation] = useState(null);
  const [mapType, setMapType] = useState("ROADMAP"); // ROADMAP, SATELLITE, TRAFFIC
  const [, setLocationPermission] = useState(null); // null, granted, denied
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
            
            // 우선순위 1: 등록 시 저장된 좌표 사용
            if (data.latitude && data.longitude) {
              console.log('📍 등록된 좌표 사용:', data.title, data.latitude, data.longitude);
              // 주소는 detailAddress > fullLocation > region+district 순으로 사용
              data.address = data.detailAddress || data.fullLocation || (data.region && data.district ? `${data.region} ${data.district}` : "");
            } 
            // 우선순위 2: region과 district 정보로 좌표 변환
            else if (data.region && data.district) {
              // region과 district를 조합하여 정확한 주소 생성
              const fullAddress = `${data.region} ${data.district}`;
              console.log('📍 주소로 좌표 변환:', data.title, fullAddress);
              
              const addressCoordinates = getAddressCoordinates(fullAddress);
              data.latitude = addressCoordinates.lat;
              data.longitude = addressCoordinates.lng;
              data.address = data.detailAddress || fullAddress;
            }
            // 우선순위 3: detailAddress만 있는 경우
            else if (data.detailAddress) {
              console.log('📍 상세주소로 좌표 변환:', data.title, data.detailAddress);
              const addressCoordinates = getAddressCoordinates(data.detailAddress);
              data.latitude = addressCoordinates.lat;
              data.longitude = addressCoordinates.lng;
              data.address = data.detailAddress;
            }
            // 우선순위 4: 기존 주소 필드 사용 (레거시)
            else if (data.address || data.location) {
              const addressToSearch = data.address || data.location;
              console.log('📍 레거시 주소 사용:', data.title, addressToSearch);
              const addressCoordinates = getAddressCoordinates(addressToSearch);
              data.latitude = addressCoordinates.lat;
              data.longitude = addressCoordinates.lng;
              data.address = addressToSearch;
            }
            // 마지막: 주소 정보가 전혀 없으면 서울 중심에 배치
            else {
              console.log('⚠️ 주소 정보 없음, 기본 위치 사용:', data.title);
              data.latitude = 37.5665;
              data.longitude = 126.9780;
              data.address = "서울특별시";
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
          console.log("🎵 Firebase 음악생활 데이터:", musiclifeSnapshot.docs.length, "개");
          
          const musiclife = musiclifeSnapshot.docs.map(doc => {
            const data = doc.data();
            
            // 실제 주소 정보 활용
            if (data.coordinates && data.coordinates.lat && data.coordinates.lng) {
              // 이미 좌표가 있으면 사용
              data.latitude = data.coordinates.lat;
              data.longitude = data.coordinates.lng;
              data.address = data.coordinates.address || data.address;
            } else if (data.latitude && data.longitude) {
              // 기존 좌표 필드 사용
              console.log('📍 음악생활 기존 좌표 사용:', data.latitude, data.longitude);
            } else if (data.address || data.location || data.detailAddress) {
              // 주소 정보가 있으면 좌표 변환 시도
              const addressToSearch = data.detailAddress || data.address || data.location;
              console.log('📍 음악생활 주소 정보 발견:', addressToSearch);
              
              // 카카오맵 주소 검색 API를 사용하여 좌표 변환
              try {
                const geocoder = new kakao.maps.services.Geocoder();
                geocoder.addressSearch(addressToSearch, (result, status) => {
                  if (status === kakao.maps.services.Status.OK) {
                    data.latitude = parseFloat(result[0].y);
                    data.longitude = parseFloat(result[0].x);
                    console.log('✅ 음악생활 주소 좌표 변환 성공:', data.latitude, data.longitude);
                  } else {
                    console.log('❌ 음악생활 주소 좌표 변환 실패, 기본 위치 사용');
                    // 변환 실패시 서울 중심에서 약간씩 분산
                    const baseLat = 37.5665;
                    const baseLng = 126.9780;
                    const randomOffset = (Math.random() - 0.5) * 0.05;
                    data.latitude = baseLat + randomOffset;
                    data.longitude = baseLng + randomOffset;
                  }
                });
              } catch (error) {
                console.log('❌ 음악생활 주소 검색 API 오류:', error);
                // API 오류시 서울 중심에서 약간씩 분산
                const baseLat = 37.5665;
                const baseLng = 126.9780;
                const randomOffset = (Math.random() - 0.5) * 0.05;
                data.latitude = baseLat + randomOffset;
                data.longitude = baseLng + randomOffset;
              }
            } else {
              // 주소 정보가 전혀 없으면 서울 중심에 배치
              console.log('📍 음악생활 주소 정보 없음, 서울 중심에 배치');
              data.latitude = 37.5665;
              data.longitude = 126.9780;
              data.location = "서울특별시";
              data.detailAddress = "서울특별시 중구";
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
      setPosts([]);
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
      
      // 지역 정보 추출 (공통 함수 사용)
      const locationText = getDisplayAddress(post);
      
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
              <span>📍 {getDisplayAddress(selectedPost)}</span>
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