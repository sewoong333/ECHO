import { productService } from './firebase';

const dummyProducts = [
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
    isPriceNegotiable: true,
    sellerNickname: '기타러버'
  },
  {
    title: '롤랜드 TD-1KV 전자드럼 세트',
    description: '2020년에 구매한 롤랜드 TD-1KV 전자드럼입니다. 집에서 연습용으로만 사용해서 상태 좋습니다. 모든 패드 정상 작동하고, 킥 페달도 부드럽게 잘 됩니다. 드럼 스틱, 헤드폰 포함해서 드려요. 부평역 근처에서 직거래만 가능합니다.',
    price: 420000,
    category: 'drums',
    condition: 'like-new',
    region: '인천',
    district: '부평구',
    images: [
      'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?auto=format&fit=crop&w=500&q=80'
    ],
    tags: ['롤랜드', '전자드럼', 'TD-1KV', '드럼세트'],
    brand: '롤랜드',
    model: 'TD-1KV',
    isPriceNegotiable: false,
    sellerNickname: '드러머'
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
    isPriceNegotiable: true,
    sellerNickname: '록커'
  },
  {
    title: '카시오 CT-X700 전자키보드',
    description: '거의 사용하지 않은 카시오 CT-X700 전자키보드입니다. 61건반, 600가지 음색, 195가지 리듬 지원됩니다. 어댑터, 보면대 포함하고 박스도 있어요. 대구 동구에서 직거래만 가능합니다.',
    price: 180000,
    category: 'keyboard',
    condition: 'like-new',
    region: '대구',
    district: '동구',
    images: [
      'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&q=80'
    ],
    tags: ['카시오', '키보드', 'CT-X700', '전자피아노'],
    brand: '카시오',
    model: 'CT-X700',
    isPriceNegotiable: true,
    sellerNickname: '피아니스트'
  },
  {
    title: '알토 색소폰 야나기사와 A-WO1',
    description: '야나기사와 A-WO1 알토 색소폰입니다. 2018년 구매, 동호회에서 가끔 사용했습니다. 정기적으로 수리점에서 점검받았고 상태 매우 양호합니다. 하드케이스, 마우스피스, 리드, 스트랩 모두 포함. 광주 서구 직거래.',
    price: 1200000,
    category: 'wind',
    condition: 'good',
    region: '광주',
    district: '서구',
    images: [
      'https://images.unsplash.com/photo-1465821185615-20b3c2fbf41b?auto=format&fit=crop&w=500&q=80'
    ],
    tags: ['야나기사와', '색소폰', '알토색소폰', 'A-WO1'],
    brand: '야나기사와',
    model: 'A-WO1',
    isPriceNegotiable: true,
    sellerNickname: '재즈러버'
  },
  {
    title: '마샬 DSL40CR 기타 앰프',
    description: '마샬 DSL40CR 40W 진공관 앰프입니다. 2020년 구매, 집에서 연습용으로 사용했습니다. 클린톤과 드라이브톤 모두 훌륭하고 리버브도 좋습니다. 풋스위치 포함. 서울 강남구에서 직거래만 가능해요.',
    price: 520000,
    category: 'audio',
    condition: 'good',
    region: '서울',
    district: '강남구',
    images: [
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80'
    ],
    tags: ['마샬', '앰프', 'DSL40CR', '진공관앰프'],
    brand: '마샬',
    model: 'DSL40CR',
    isPriceNegotiable: false,
    sellerNickname: '앰프매니아'
  },
  {
    title: '바이올린 4/4 독일제 수제품',
    description: '독일에서 직접 가져온 4/4 바이올린입니다. 수제품으로 소리가 정말 좋습니다. 활, 케이스, 턱받침 모두 포함되어 있고 상태 매우 좋아요. 서울 종로구에서 직거래 희망합니다.',
    price: 680000,
    category: 'string',
    condition: 'like-new',
    region: '서울',
    district: '종로구',
    images: [
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80'
    ],
    tags: ['바이올린', '독일제', '수제품', '4/4'],
    brand: '독일 수제품',
    model: '4/4 바이올린',
    isPriceNegotiable: true,
    sellerNickname: '바이올리니스트'
  },
  {
    title: '우쿨렐레 카마카 HF-1 하와이안 코아',
    description: '정품 카마카 HF-1 콘서트 우쿨렐레입니다. 하와이안 코아 원목으로 만들어진 프리미엄 모델입니다. 2019년 구매, 케이스 포함해서 드려요. 톤이 정말 좋고 상태도 완벽합니다. 대전 유성구 직거래만.',
    price: 320000,
    category: 'string',
    condition: 'like-new',
    region: '대전',
    district: '유성구',
    images: [
      'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=500&q=80'
    ],
    tags: ['카마카', '우쿨렐레', 'HF-1', '하와이안코아'],
    brand: '카마카',
    model: 'HF-1',
    isPriceNegotiable: false,
    sellerNickname: '우쿨러버'
  }
];

// 더미 사용자 닉네임들
const dummyNicknames = [
  '기타러버', '드러머', '록커', '피아니스트', '재즈러버', '앰프매니아', 
  '바이올리니스트', '우쿨러버', '음악매니아', '연주자', '뮤지션', 
  '하모니', '멜로디', '리듬', '비트', '코드', '소울', '블루스', '클래식러버'
];

// 더미 데이터 생성 함수
export const createDummyProducts = async () => {
  try {
    console.log('🎭 더미 상품 데이터 생성 시작...');
    
    const results = [];
    
    for (let i = 0; i < dummyProducts.length; i++) {
      const product = dummyProducts[i];
      
      // 랜덤 시간 지연으로 생성 시간을 다르게 만듦
      const delay = Math.random() * 1000 * 60 * 60 * 24 * 7; // 최대 7일 전
      const createdAt = new Date(Date.now() - delay);
      
      const productData = {
        ...product,
        // 랜덤 통계 추가
        viewCount: Math.floor(Math.random() * 100) + 1,
        likeCount: Math.floor(Math.random() * 20) + 1,
        chatCount: Math.floor(Math.random() * 10) + 1,
        
        // 기본값 설정
        status: 'active',
        createdAt,
        updatedAt: createdAt,
        lastBumpedAt: createdAt,
        
        // 더미 판매자 ID (실제로는 현재 로그인한 사용자의 ID를 사용)
        sellerId: `dummy_seller_${i}`,
        sellerNickname: dummyNicknames[i % dummyNicknames.length],
        
        // 추가 필드
        isDeliveryAvailable: Math.random() > 0.5,
        deliveryFee: Math.random() > 0.5 ? Math.floor(Math.random() * 10000) + 3000 : 0,
        preferredTransactionType: Math.random() > 0.5 ? 'direct' : 'delivery',
        isUrgent: Math.random() > 0.8,
        
        // 검색 키워드 생성
        searchKeywords: [
          product.title.toLowerCase(),
          product.brand?.toLowerCase(),
          product.model?.toLowerCase(),
          ...product.tags.map(tag => tag.toLowerCase())
        ].filter(Boolean)
      };
      
      try {
        // Firebase에 저장하지 않고 로컬 배열로만 반환 (실제 사용시에는 productService.createProduct 사용)
        results.push({
          id: `dummy_${Date.now()}_${i}`,
          ...productData
        });
        
        console.log(`✅ 더미 상품 ${i + 1}/${dummyProducts.length} 생성: ${product.title}`);
      } catch (error) {
        console.error(`❌ 더미 상품 생성 실패: ${product.title}`, error);
      }
    }
    
    console.log(`🎉 더미 상품 데이터 생성 완료! 총 ${results.length}개`);
    return results;
    
  } catch (error) {
    console.error('❌ 더미 데이터 생성 중 오류:', error);
    throw error;
  }
};

// 개발용 더미 데이터 로드 함수
export const loadDummyProductsForDev = () => {
  return dummyProducts.map((product, i) => ({
    id: `dummy_${i}`,
    ...product,
    viewCount: Math.floor(Math.random() * 100) + 1,
    likeCount: Math.floor(Math.random() * 20) + 1,
    chatCount: Math.floor(Math.random() * 10) + 1,
    status: 'active',
    createdAt: new Date(Date.now() - Math.random() * 1000 * 60 * 60 * 24 * 7),
    sellerId: `dummy_seller_${i}`,
    sellerNickname: dummyNicknames[i % dummyNicknames.length],
    isDeliveryAvailable: Math.random() > 0.5,
    deliveryFee: Math.random() > 0.5 ? Math.floor(Math.random() * 10000) + 3000 : 0,
  }));
};