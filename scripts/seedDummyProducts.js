const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json'); // 서비스 계정 키 파일 필요

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const dummyProducts = [
  {
    title: '야마하 FG800 통기타',
    model: 'FG800',
    description: '2021년 구매, 집에서만 연습용으로 사용했습니다. 생활기스 약간 있지만 소리 깨끗합니다. 오리지널 소프트케이스 포함, 직거래만 원해요.',
    price: 230000,
    location: '서울 마포구',
    images: [
      'https://m.media-amazon.com/images/I/41fGV5DxOcL._AC_.jpg',
      'https://peacemusic.kr/web/product/big/202104/3875_shop1_161845.jpg'
    ]
  },
  {
    title: '롤랜드 TD-1K 전자드럼',
    model: 'TD-1K',
    description: '2020년 구매, 연습용으로만 사용. 패드 반응 좋고 소음 적음. 스틱/의자 포함, 직거래만.',
    price: 410000,
    location: '서울 구로구',
    images: [
      'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80'
    ]
  },
  {
    title: '롤랜드 TD-1KV 전자드럼 세트',
    model: 'TD-1KV',
    description: '2021년 구매, 집에서 연습용으로만 사용한 롤랜드 TD-1KV 전자드럼입니다. 모든 패드 정상 작동, 킥 페달 부드럽게 잘 됩니다. 드럼 스틱, 헤드폰 포함. 인천 부평역 근처 직거래.',
    price: 420000,
    location: '인천 부평구',
    images: [
      'https://static.roland.com/assets/images/products/gallery/td-1kv_angle_gal.jpg'
    ]
  },
  {
    title: '펜더 Player 텔레캐스터 일렉기타',
    model: 'Player Telecaster',
    description: '2020년 구매, 펜더 Player 텔레캐스터 일렉기타입니다. 바디에 미세한 스크래치 있으나 연주에는 문제 없습니다. 오리지널 소프트케이스 포함, 부산 서면 직거래.',
    price: 750000,
    location: '부산 부산진구',
    images: [
      'https://www.fmicassets.com/Damroot/ZoomJpg/10001/0145212500_gtr_frt_001_rr.jpg'
    ]
  },
  {
    title: '커즈와일 SP6-7 스테이지 피아노',
    model: 'SP6-7',
    description: '2022년 구매, 전문 연주용 스테이지 피아노입니다. 건반 터치감이 뛰어나고 내장 스피커 음질이 좋습니다. 스탠드, 페달, 케이블 포함. 서울 강남 직거래.',
    price: 1200000,
    location: '서울 강남구',
    images: [
      'https://kurzweil.com/wp-content/uploads/2021/03/SP6-7_Black_Angle_1.jpg'
    ]
  },
  {
    title: '프리소너스 오디오 인터페이스',
    model: 'Studio 24c',
    description: '2021년 구매, 프리소너스 Studio 24c 오디오 인터페이스입니다. 24비트/192kHz 고음질 녹음 가능, USB-C 연결. 원박스, 케이블 포함. 서울 홍대 직거래.',
    price: 280000,
    location: '서울 마포구',
    images: [
      'https://www.presonus.com/uploads/products/1/images/Studio-24c_angle_1.jpg'
    ]
  }
];

async function seed() {
  for (const base of dummyProducts) {
    const productData = {
      ...base,
      image: base.images[0],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      author: '관리자',
      time: '방금 전',
      views: Math.floor(Math.random()*100),
    };
    await db.collection('products').add(productData);
    console.log(`등록 완료: ${productData.title}`);
  }
  console.log('모든 더미 상품 등록 완료!');
  process.exit(0);
}

seed().catch(err => {
  console.error('더미 상품 등록 실패:', err);
  process.exit(1);
}); 