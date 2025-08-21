// 음악생활 게시판 테스트 데이터 생성 스크립트
import { initializeApp } from "firebase/app";
import { 
  getFirestore, 
  collection, 
  addDoc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY || "AIzaSyDXyRjJxBD0-8X4YHYoHzYQMqz6xYKJwl8",
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN || "echo-5385e.firebaseapp.com",
  projectId: process.env.VITE_FIREBASE_PROJECT_ID || "echo-5385e",
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET || "echo-5385e.appspot.com",
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: process.env.VITE_FIREBASE_APP_ID || "1:123456789:web:abcdef"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 테스트 사용자 데이터
const testUsers = [
  { name: "김기타", uid: "test_user_1", avatar: "🎸" },
  { name: "박드럼", uid: "test_user_2", avatar: "🥁" },
  { name: "이피아노", uid: "test_user_3", avatar: "🎹" },
  { name: "최바이올린", uid: "test_user_4", avatar: "🎻" }
];

// 카테고리별 게시글 데이터
const musicLifePosts = [
  {
    title: "Fender Stratocaster 사용 후기",
    content: "오랫동안 써보고 싶었던 Fender Stratocaster를 드디어 구매했습니다. 클린 톤과 오버드라이브 모두 정말 만족스럽네요. 특히 픽업의 다양한 조합으로 여러 장르를 소화할 수 있어서 좋습니다. 넥의 감촉도 부드럽고 연주감이 훌륭해요. 초보자부터 프로까지 추천할 만한 기타입니다.",
    category: "gear-review",
    authorName: "김기타",
    authorUid: "test_user_1"
  },
  {
    title: "작은 공연장에서의 첫 공연 후기",
    content: "지난 주말 홍대의 작은 라이브 클럽에서 첫 공연을 했습니다. 떨리긴 했지만 관객들의 반응이 좋아서 정말 기뻤어요. 특히 마지막 곡에서 모두 함께 따라 부를 때는 정말 감동적이었습니다. 무대 위에서 느끼는 그 에너지는 연습실에서는 절대 느낄 수 없는 특별한 경험이었네요.",
    category: "performance",
    authorName: "김기타",
    authorUid: "test_user_1"
  },
  {
    title: "드럼 초보자를 위한 기본 리듬 연습법",
    content: "드럼을 시작한 지 1년 된 제가 정말 도움이 되었던 연습법을 공유합니다. 첫째, 메트로놈과 함께 기본 4비트부터 천천히 시작하세요. 둘째, 킥과 스네어의 정확한 타이밍을 익히는 것이 중요해요. 셋째, 하이햇으로 8비트 리듬을 안정적으로 칠 수 있을 때까지 반복 연습하세요. 처음엔 어렵지만 꾸준히 하면 분명 늘어요!",
    category: "tips",
    authorName: "박드럼",
    authorUid: "test_user_2"
  },
  {
    title: "온라인 피아노 레슨 추천",
    content: "코로나 이후 온라인 레슨을 받고 있는데, 생각보다 효과적이에요. 특히 Simply Piano나 Flowkey 같은 앱들이 정말 잘 만들어졌더라고요. 실시간 피드백도 받을 수 있고, 자신의 페이스에 맞춰 진도를 나갈 수 있어서 좋습니다. 초보자분들께 추천드려요.",
    category: "lesson",
    authorName: "이피아노",
    authorUid: "test_user_3"
  },
  {
    title: "같이 합주할 기타리스트 구해요",
    content: "안녕하세요! 현재 베이스와 드럼으로 구성된 팀인데, 기타리스트 한 분을 찾고 있습니다. 장르는 주로 록/팝 위주이고, 연습은 주말에 홍대 근처에서 하고 있어요. 실력은 중급 정도면 됩니다. 관심 있으신 분은 댓글 남겨주세요!",
    category: "collaboration",
    authorName: "박드럼",
    authorUid: "test_user_2"
  },
  {
    title: "클래식 바이올린 연주 - 비발디 사계 중 봄",
    content: "오랜 연습 끝에 비발디의 사계 중 '봄'을 완주했습니다! 처음 이 곡을 들었을 때의 감동을 직접 연주로 표현할 수 있게 되어 정말 기뻐요. 특히 1악장의 경쾌한 멜로디 부분에서 봄의 생동감이 느껴지는 것 같아요. 바이올린을 배우는 모든 분들께 도전해보시길 추천합니다.",
    category: "performance",
    authorName: "최바이올린",
    authorUid: "test_user_4"
  },
  {
    title: "효과적인 피아노 연습 스케줄",
    content: "하루 2시간 연습으로 실력을 늘리는 제만의 방법을 공유해요. 첫 30분은 스케일과 아르페지오, 다음 30분은 에튀드, 그 다음 1시간은 메인 곡 연습에 집중합니다. 마지막 30분은 이전에 배운 곡들을 복습하며 마무리해요. 이렇게 하니까 체계적으로 실력이 늘더라고요.",
    category: "tips",
    authorName: "이피아노",
    authorUid: "test_user_3"
  },
  {
    title: "Yamaha P-125 디지털 피아노 리뷰",
    content: "집에서 연습용으로 구매한 Yamaha P-125 후기입니다. 88개 건반 모두 가중이 잘 되어 있고, 터치감이 어쿠스틱 피아노와 비슷해요. 소리도 깔끔하고 다양한 음색을 지원해서 만족스럽습니다. 가격 대비 성능이 뛰어나다고 생각해요. 입문용으로 강력 추천!",
    category: "gear-review",
    authorName: "이피아노",
    authorUid: "test_user_3"
  },
  {
    title: "바이올린 활 관리 팁",
    content: "바이올린 연주에서 활 관리는 정말 중요해요. 매번 연주 후에는 활의 송진을 부드러운 천으로 닦아주세요. 그리고 보관할 때는 반드시 활의 장력을 풀어서 보관해야 활이 휘지 않아요. 또한 송진은 너무 많이 발라도, 너무 적게 발라도 소리에 영향을 주니 적당량을 유지하는 게 포인트입니다.",
    category: "tips",
    authorName: "최바이올린",
    authorUid: "test_user_4"
  },
  {
    title: "재즈 드럼 워크샵 참가 후기",
    content: "지난 주에 참가한 재즈 드럼 워크샵이 정말 유익했어요. 스윙 리듬의 기본부터 복잡한 폴리리듬까지 체계적으로 배울 수 있었습니다. 특히 브러시 테크닉은 처음 접해봤는데 완전히 새로운 세계더라고요. 재즈에 관심 있으신 드러머분들께 추천드립니다!",
    category: "lesson",
    authorName: "박드럼",
    authorUid: "test_user_2"
  }
];

async function seedMusicLifeData() {
  console.log("음악생활 게시판 테스트 데이터 생성 시작...");
  
  try {
    const musiclifeCollection = collection(db, "musiclife_posts");
    
    for (let i = 0; i < musicLifePosts.length; i++) {
      const post = musicLifePosts[i];
      
      // 랜덤한 조회수와 댓글 수 생성
      const viewCount = Math.floor(Math.random() * 100) + 10;
      const commentCount = Math.floor(Math.random() * 15);
      
      // 게시글 생성일을 최근 30일 내로 랜덤 설정
      const daysAgo = Math.floor(Math.random() * 30);
      const createdAt = new Date();
      createdAt.setDate(createdAt.getDate() - daysAgo);
      
      const docData = {
        ...post,
        viewCount,
        commentCount,
        createdAt: createdAt,
        updatedAt: createdAt
      };
      
      await addDoc(musiclifeCollection, docData);
      console.log(`✅ 게시글 ${i + 1}/10 생성 완료: "${post.title}"`);
      
      // API 호출 제한을 피하기 위한 잠시 대기
      await new Promise(resolve => setTimeout(resolve, 200));
    }
    
    console.log("🎉 모든 테스트 데이터 생성 완료!");
    console.log(`📊 생성된 데이터:
    - 사용자: ${testUsers.length}명
    - 게시글: ${musicLifePosts.length}개
    - 카테고리: 장비 리뷰, 연주/공연, 강습/레슨, 합주/콜라보, 연주 팁`);
    
  } catch (error) {
    console.error("❌ 데이터 생성 중 오류:", error);
  }
}

// 스크립트 실행
seedMusicLifeData().then(() => {
  console.log("스크립트 실행 완료");
  process.exit(0);
}).catch((error) => {
  console.error("스크립트 실행 실패:", error);
  process.exit(1);
});