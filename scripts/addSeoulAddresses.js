// 기존 게시글에 서울 내 주소를 부여하는 스크립트
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, updateDoc, doc } from "firebase/firestore";

// Firebase 설정
const firebaseConfig = {
  apiKey: "AIzaSyBqQqQqQqQqQqQqQqQqQqQqQqQqQqQqQqQ",
  authDomain: "echo-5385e.firebaseapp.com",
  projectId: "echo-5385e",
  storageBucket: "echo-5385e.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdefghijklmnopqrstuv"
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 서울 내 랜덤 주소 생성 함수
const generateSeoulAddress = () => {
  const seoulDistricts = [
    '강남구', '강동구', '강북구', '강서구', '관악구', '광진구', '구로구', '금천구',
    '노원구', '도봉구', '동대문구', '동작구', '마포구', '서대문구', '서초구', '성동구',
    '성북구', '송파구', '양천구', '영등포구', '용산구', '은평구', '종로구', '중구', '중랑구'
  ];
  
  const dongs = [
    '역삼동', '삼성동', '청담동', '압구정동', '신사동', '논현동', '대치동', '도곡동',
    '개포동', '일원동', '수서동', '세곡동', '자곡동', '율현동', '상일동', '고덕동',
    '명일동', '암사동', '성내동', '천호동', '길동', '둔촌동', '올림픽동', '방이동',
    '오금동', '석촌동', '송파동', '문정동', '장지동', '위례동', '가락동', '거여동',
    '마천동', '잠실동', '신천동', '풍납동', '삼전동', '가락동', '문정동', '장지동',
    '신정동', '목동', '양평동', '여의도동', '대림동', '신길동', '영등포동', '당산동',
    '도림동', '문래동', '신풍동', '신도림동', '구로동', '가리봉동', '개봉동', '고척동',
    '오류동', '천왕동', '항동', '시흥동', '독산동', '가산동', '철산동', '광명동',
    '서초동', '방배동', '잠원동', '반포동', '내곡동', '양재동', '원지동', '세곡동',
    '자곡동', '율현동', '상일동', '고덕동', '명일동', '암사동', '성내동', '천호동',
    '길동', '둔촌동', '올림픽동', '방이동', '오금동', '석촌동', '송파동', '문정동',
    '장지동', '위례동', '가락동', '거여동', '마천동', '잠실동', '신천동', '풍납동',
    '삼전동', '가락동', '문정동', '장지동', '위례동', '가락동', '거여동', '마천동'
  ];
  
  const district = seoulDistricts[Math.floor(Math.random() * seoulDistricts.length)];
  const dong = dongs[Math.floor(Math.random() * dongs.length)];
  
  return `서울 ${district} ${dong}`;
};

// 주소를 좌표로 변환하는 함수 (Kakao Maps API 사용)
const geocodeAddress = async (address) => {
  try {
    // 실제 환경에서는 Kakao Maps API를 사용해야 하지만, 
    // 스크립트에서는 대략적인 서울 중심 좌표를 반환
    const seoulCenter = {
      lat: 37.5665 + (Math.random() - 0.5) * 0.1, // 서울 중심에서 ±0.05도 범위
      lng: 126.9780 + (Math.random() - 0.5) * 0.1,
      address: address,
      roadAddress: address
    };
    
    return seoulCenter;
  } catch (error) {
    console.error('주소 변환 오류:', error);
    throw error;
  }
};

// 기존 게시글에 주소 추가
const addAddressesToProducts = async () => {
  try {
    console.log('🔍 기존 게시글 조회 중...');
    
    const productsRef = collection(db, 'products');
    const snapshot = await getDocs(productsRef);
    
    console.log(`📊 총 ${snapshot.size}개의 게시글 발견`);
    
    let updatedCount = 0;
    let skippedCount = 0;
    
    for (const docSnapshot of snapshot.docs) {
      const productData = docSnapshot.data();
      const productId = docSnapshot.id;
      
      // 이미 주소가 있는 경우 건너뛰기
      if (productData.address && productData.coordinates) {
        console.log(`⏭️  ${productId}: 이미 주소가 있음`);
        skippedCount++;
        continue;
      }
      
      // 서울 내 랜덤 주소 생성
      const address = generateSeoulAddress();
      console.log(`📍 ${productId}: ${address} 주소 생성`);
      
      // 주소를 좌표로 변환
      const coordinates = await geocodeAddress(address);
      
      // 게시글 업데이트
      const productRef = doc(db, 'products', productId);
      await updateDoc(productRef, {
        address: address,
        coordinates: coordinates,
        region: '서울특별시',
        district: address.split(' ')[1] // 구/군 추출
      });
      
      console.log(`✅ ${productId}: 주소 추가 완료`);
      updatedCount++;
      
      // API 호출 제한을 위한 딜레이
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    
    console.log(`\n🎉 작업 완료!`);
    console.log(`📊 업데이트된 게시글: ${updatedCount}개`);
    console.log(`⏭️  건너뛴 게시글: ${skippedCount}개`);
    
  } catch (error) {
    console.error('❌ 오류 발생:', error);
  }
};

// 스크립트 실행
console.log('🚀 서울 주소 추가 스크립트 시작...');
addAddressesToProducts();
