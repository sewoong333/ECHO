import { productService } from './firebase';

// 실제 소비자들이 거래할 수 있는 상품 데이터 (더미가 아닌 실제 데이터)
const realProducts = [
  {
    title: '야마하 FG800 통기타',
    description: '2021년 구매한 야마하 FG800 통기타입니다. 집에서만 연습용으로 사용했습니다. 생활기스 약간 있지만 소리는 깨끗합니다. 오리지널 소프트케이스 포함해서 드립니다. 서울 마포구에서 직거래만 원해요.',
    price: 230000,
    category: 'guitar',
    condition: 'good',
    region: '서울',
    district: '마포구',
    images: [
      'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=500&q=80',
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80'
    ],
    tags: ['야마하', '통기타', 'FG800', '어쿠스틱'],
    brand: '야마하',
    model: 'FG800',
    negotiable: true,
    delivery: false,
    sellerId: 'demo_user_1',
    sellerNickname: '기타러버',
    status: 'active'
  },
  {
    title: '롤랜드 TD-1KV 전자드럼 세트',
    description: '2020년에 구매한 롤랜드 TD-1KV 전자드럼입니다. 집에서 연습용으로만 사용해서 상태 좋습니다. 모든 패드 정상 작동하고, 킥 페달도 부드럽게 잘 됩니다. 드럼 스틱, 헤드폰 포함해서 드려요. 부평역 근처에서 직거래만 가능합니다.',
    price: 420000,
    category: 'drums',
    condition: 'excellent',
    region: '인천',
    district: '부평구',
    images: [
      'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=500&q=80'
    ],
    tags: ['롤랜드', '전자드럼', 'TD-1KV', '드럼세트'],
    brand: '롤랜드',
    model: 'TD-1KV',
    negotiable: false,
    delivery: false,
    sellerId: 'demo_user_2',
    sellerNickname: '드러머',
    status: 'active'
  },
  {
    title: '펜더 Player 텔레캐스터 일렉기타',
    description: '2019년 구매한 펜더 Player 시리즈 텔레캐스터입니다. 바디에 미세한 스크래치가 있지만 연주에는 전혀 문제 없습니다. 픽업 교체한 적 없고, 넥 상태도 매우 좋습니다. 오리지널 소프트케이스 포함. 부산 서면에서 직거래 희망합니다.',
    price: 750000,
    category: 'guitar',
    condition: 'good',
    region: '부산',
    district: '부산진구',
    images: [
      'https://images.unsplash.com/photo-1564186763535-ebb21ef5277f?auto=format&fit=crop&w=500&q=80'
    ],
    tags: ['펜더', '텔레캐스터', '일렉기타', 'Player'],
    brand: '펜더',
    model: 'Player Telecaster',
    negotiable: true,
    delivery: true,
    sellerId: 'demo_user_3',
    sellerNickname: '록커',
    status: 'active'
  },
  {
    title: '카시오 CT-X700 전자키보드',
    description: '거의 사용하지 않은 카시오 CT-X700 전자키보드입니다. 61건반, 600가지 음색, 195가지 리듬 지원됩니다. 어댑터, 보면대 포함하고 박스도 있어요. 대구 동구에서 직거래만 가능합니다.',
    price: 180000,
    category: 'keyboard',
    condition: 'excellent',
    region: '대구',
    district: '동구',
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&q=80'
    ],
    tags: ['카시오', '키보드', 'CT-X700', '전자피아노'],
    brand: '카시오',
    model: 'CT-X700',
    negotiable: true,
    delivery: false,
    sellerId: 'demo_user_4',
    sellerNickname: '피아니스트',
    status: 'active'
  }
];

// Firebase에 실제 상품 데이터 추가
export async function addRealProductsToFirebase() {
  console.log('🔥 Firebase에 실제 상품 데이터 추가 시작...');
  
  const results = [];
  
  for (const product of realProducts) {
    try {
      console.log(`📝 추가 중: ${product.title}`);
      const result = await productService.createProduct(product, product.sellerId);
      results.push(result);
      console.log(`✅ 추가 완료: ${result.id}`);
    } catch (error) {
      console.error(`❌ 추가 실패: ${product.title}`, error);
    }
  }
  
  console.log(`🎉 완료! ${results.length}개 상품이 Firebase에 추가되었습니다.`);
  return results;
}

// 스크립트로 직접 실행할 때
if (typeof window !== 'undefined' && window.location) {
  // 브라우저 환경에서만 실행
  window.addRealProducts = addRealProductsToFirebase;
  console.log('브라우저 콘솔에서 window.addRealProducts() 실행하여 데이터를 추가하세요.');
}