// 더미 중고 거래글. 사진은 Unsplash 무료 라이선스(photo-ID만 저장, URL은 시드 스크립트에서 생성)
// hoursAgo: 실행 시점 기준 몇 시간 전에 올린 글인지 (실행할 때마다 '최근 글'처럼 보이도록)
export const products = [
  {
    seller: "weekend_gt", hoursAgo: 2, category: "guitar", subcategory: "일렉트릭 기타",
    title: "펜더 플레이어2 스트랫 아쿠아톤블루 팝니다",
    brand: "Fender", model: "Player II Stratocaster",
    price: 820000, condition: "like-new", negotiable: false, delivery: false,
    images: ["1607560105214-0aaa5f8fcba4", "1508186736123-44a5fcb36f9f"],
    description: `작년 11월에 낙원에서 새로 산 펜더 멕시코 플레이어2 스트랫이에요.
집에서만 쳐서 상태 좋고 찍힘 없습니다. 프렛 마모도 거의 없어요.

구성: 본체, 정품 긱백, 트레몰로암, 렌치
현은 지난주에 다다리오 10-46으로 갈았습니다.

관악구 서울대입구역 근처 직거래 원하고 택배는 안 해요 (기타 택배는 좀 불안해서요)
가격은 거의 바닥이라 네고는 어렵습니다`,
    views: 37, likes: 6, chats: 2,
  },
  {
    seller: "haeundae_lp", hoursAgo: 5, category: "guitar", subcategory: "일렉트릭 기타",
    title: "에피폰 레스폴 스탠다드 플레임탑",
    brand: "Epiphone", model: "Les Paul Standard 60s",
    price: 480000, condition: "good", negotiable: true, delivery: true,
    images: ["1516924962500-2b4b3b99ea02", "1550291652-6ea9114a47b1"],
    description: `에피폰 인스파이어드 바이 깁슨 레스폴 스탠다드 60s 입니다. 탑 무늬 예뻐요
2년 정도 썼고 바디 뒷면에 벨트버클 자국 조금 있어요 (사진 확인해주세요)
넥 휨 없고 트러스로드 여유 있습니다. 픽업 출력 좋아요

하드케이스는 없고 소프트케이스 같이 드려요
부산 해운대 센텀 근처 직거래 / 택배 가능 (착불, 꼼꼼히 포장해드립니다)
가격 조금은 조정 가능해요`,
    views: 58, likes: 4, chats: 3,
  },
  {
    seller: "rockdad", hoursAgo: 9, category: "guitar", subcategory: "일렉트릭 기타",
    title: "스콰이어 클래식바이브 50s 텔레 화이트블론드",
    brand: "Squier", model: "Classic Vibe 50s Telecaster",
    price: 420000, condition: "good", negotiable: true, delivery: false,
    images: ["1706356104839-5d3a4e8eb35f"],
    description: `아빠밴드에서 메인으로 쓰던 텔레인데 레스폴 넘어가면서 정리합니다.
클바 텔레 소리 진짜 좋아요. 스콰이어라고 무시 못함..

사용감 있고 바디 모서리 찍힘 2군데 있어요
셋업은 낮게 해놨습니다 (1.6mm 정도)
일산 대화역 직거래만 합니다. 저녁 8시 이후 가능`,
    views: 24, likes: 3, chats: 1,
  },
  {
    seller: "gt_salaryman", hoursAgo: 14, category: "guitar", subcategory: "어쿠스틱 기타",
    title: "야마하 FG800 통기타 입문용 (거의 안 침)",
    brand: "Yamaha", model: "FG800",
    price: 160000, condition: "like-new", negotiable: false, delivery: true,
    images: ["1778154904340-1e99b32d0ac7", "1630110330918-ced8a801add8"],
    description: `올해 초에 기타 배워보겠다고 샀는데 3개월 치고 방치했네요 ㅠ
거의 새거나 다름없습니다. 기스 없어요

카포, 피크 몇 개, 기타 스탠드 같이 드립니다
영등포구청역 직거래 또는 택배 (택배비 별도 5천원)`,
    views: 41, likes: 7, chats: 4,
  },
  {
    seller: "hongdae_band", hoursAgo: 20, category: "guitar", subcategory: "어쿠스틱 기타",
    title: "테일러 114ce 픽업 장착 통기타",
    brand: "Taylor", model: "114ce",
    price: 950000, condition: "good", negotiable: true, delivery: false,
    images: ["1567771736315-133752f63a69", "1610620146780-26908fab50ec"],
    description: `버스킹이랑 카페 공연에서 쓰던 테일러 114ce입니다.
ES2 픽업 잡음 없이 잘 되고, 라인 꽂으면 소리 깔끔해요.

상판 피크가드 주변에 피크 자국 좀 있어요. 연주에는 문제 없습니다.
정품 긱백 포함

망원/합정 직거래. 쳐보고 결정하셔도 됩니다`,
    views: 63, likes: 9, chats: 2,
  },
  {
    seller: "mangwon_bass", hoursAgo: 26, category: "guitar", subcategory: "베이스 기타",
    title: "펜더 재즈베이스 멕시코 내추럴 + 하드케이스",
    brand: "Fender", model: "Player Jazz Bass",
    price: 780000, condition: "good", negotiable: false, delivery: false,
    images: ["1569692880247-0b15adbf7504", "1543060749-aa3f115aad09"],
    description: `5현으로 넘어가서 4현 재즈베이스 정리합니다.
멕펜 재베 내추럴 피니쉬고 하드케이스(SKB) 포함이에요.

픽업 노이즈 없고 볼륨/톤 팟 다 깨끗합니다.
줄은 엘릭서 45-105 감겨있어요.

망원역 근처 직거래만 합니다. 하드케이스 때문에 택배는 어려워요`,
    views: 33, likes: 5, chats: 1,
  },
  {
    seller: "gt_salaryman", hoursAgo: 31, category: "guitar", subcategory: "베이스 기타",
    title: "스콰이어 소닉 프레시전베이스 화이트",
    brand: "Squier", model: "Sonic Precision Bass",
    price: 210000, condition: "fair", negotiable: true, delivery: true,
    images: ["1485278537138-4e8911a13c02"],
    description: `베이스 입문용으로 산 소닉 프베입니다. 넥 얇아서 손 작은 분들 치기 편해요
사용감 꽤 있어요. 헤드 쪽 찍힘 하나, 바디 잔기스 있습니다.
소리는 문제 없어요

택배 가능하고 직거래는 영등포/여의도 쪽
에눌 조금은 해드릴게요`,
    views: 19, likes: 2, chats: 1,
  },
  {
    seller: "ukuler", hoursAgo: 40, category: "string", subcategory: "우쿨렐레",
    title: "칼라 KA-15S 소프라노 우쿨렐레",
    brand: "Kala", model: "KA-15S",
    price: 45000, condition: "good", negotiable: false, delivery: true,
    images: ["1556449895-a33c9dba33dd"],
    description: `여행 갈 때 들고 다니던 우쿨렐레에요. 가볍고 소리 귀여움
줄 갈아줘야 할 때 됐어요 (아퀼라 줄 추천)
긱백 포함, 반값택배 가능합니다`,
    views: 15, likes: 3, chats: 2,
  },
  {
    seller: "piano_ssam", hoursAgo: 4, category: "piano", subcategory: "전자피아노",
    title: "야마하 P-145 디지털피아노 + 스탠드 + 의자",
    brand: "Yamaha", model: "P-145",
    price: 420000, condition: "like-new", negotiable: true, delivery: false,
    images: ["1599494009395-5b43c783a2d5", "1632008341003-5c6767c7d237"],
    description: `레슨실 보조용으로 1년 정도 썼어요. 건반 소리 안 나는 거 없고 터치감 그대로입니다.
L-100 스탠드 아니고 X자 스탠드랑 높이조절 의자 같이 드려요.
페달은 기본 풋스위치예요.

노원역 근처 직거래, 차 가져오셔야 해요 (박스는 없습니다)
현장에서 쳐보시고 결정하세요`,
    views: 52, likes: 8, chats: 3,
  },
  {
    seller: "jazzkeys", hoursAgo: 11, category: "piano", subcategory: "신디사이저",
    title: "노드 스테이지3 88 (하드케이스 포함)",
    brand: "Nord", model: "Stage 3 88",
    price: 2700000, condition: "good", negotiable: true, delivery: false,
    images: ["1570698824041-22cbab696486"],
    description: `공연용으로 쓰던 노드 스테이지3 88건반입니다.
OS 최신 업데이트 해뒀고 피아노 라이브러리 몇 개 추가해놨어요.
건반 불량 없고 노브, 드로우바 다 정상입니다.

구석에 공연 다니면서 생긴 생활기스 있어요.
하드케이스 + 서스테인 페달 + 익스프레션 페달 포함

신촌 직거래만 가능합니다. 무거워서 2인 오시는 거 추천해요`,
    views: 88, likes: 14, chats: 5,
  },
  {
    seller: "yongsan_synth", hoursAgo: 17, category: "piano", subcategory: "신디사이저",
    title: "코르그 미니로그 XD 팝니다",
    brand: "Korg", model: "minilogue xd",
    price: 540000, condition: "like-new", negotiable: false, delivery: true,
    images: ["1634286050107-567499885ff9", "1642784358017-eb2d397b5099"],
    description: `기변으로 판매합니다. 작업실에서만 사용했어요
박스, 어댑터 다 있습니다

용산역/신용산역 직거래 or 택배 (택배비 포함 가격 +5천)
교환은 안 받아요~`,
    views: 46, likes: 6, chats: 2,
  },
  {
    seller: "jazzkeys", hoursAgo: 60, category: "piano", subcategory: "전자피아노",
    title: "롤랜드 FP-30X 블랙 (블루투스 됨)",
    brand: "Roland", model: "FP-30X",
    price: 570000, condition: "good", negotiable: true, delivery: false,
    images: ["1655366055088-bb61a5eb50c4"],
    description: `집에서 연습용으로 쓰던 FP-30X 입니다. 이사 가면서 둘 데가 없어서 내놓아요
블루투스로 아이패드 연결해서 쓰면 편합니다
스탠드 없이 본체+페달+어댑터만 판매해요

서대문구 직거래`,
    views: 29, likes: 4, chats: 1,
  },
  {
    seller: "seohyeon_drum", hoursAgo: 7, category: "drums", subcategory: "전자드럼",
    title: "롤랜드 TD-07KV 전자드럼 + 매트 + 의자",
    brand: "Roland", model: "TD-07KV",
    price: 730000, condition: "good", negotiable: true, delivery: false,
    images: ["1457523054379-8d03ab9fc2aa", "1605438581693-6fd027bb190e"],
    description: `아파트에서 쓰던 전자드럼이에요. 소음 때문에 방진매트 깔고 썼습니다.
메쉬헤드라 타격감 괜찮고 모듈 블루투스 됩니다.

구성: 모듈, 킥타워, 스네어 메쉬, 탐3, 하이햇, 크래시, 라이드, 매트, 의자, 페달
스틱이랑 헤드폰은 빼고 드려요

분해해서 드릴 수 있어요. 서현역 근처, 차 필수입니다`,
    views: 71, likes: 10, chats: 4,
  },
  {
    seller: "seohyeon_drum", hoursAgo: 52, category: "drums", subcategory: "심벌",
    title: "질드젼 A커스텀 14인치 하이햇",
    brand: "Zildjian", model: "A Custom 14\" Hi-Hats",
    price: 290000, condition: "good", negotiable: false, delivery: true,
    images: ["1786729950772-b1b16803793e"],
    description: `A커스텀 하이햇 14인치 페어입니다. 크랙 없어요 (사진 보시면 키홀 깨끗)
광택은 좀 죽어있습니다. 닦으면 돌아와요

택배 가능 (심벌 박스 있어요)`,
    views: 22, likes: 3, chats: 1,
  },
  {
    seller: "hongdae_band", hoursAgo: 75, category: "drums", subcategory: "어쿠스틱 드럼",
    title: "펄 익스포트 드럼 셸팩 (합주실 정리)",
    brand: "Pearl", model: "Export",
    price: 450000, condition: "fair", negotiable: true, delivery: false,
    images: ["1543443258-92b04ad5ec6b", "1563845104282-efeedd2b75d8"],
    description: `합주실 정리하면서 내놓습니다. 펄 익스포트 5기통 셸팩이에요.
킥 22, 탐 10/12, 플로어 16, 스네어 14
하드웨어(스탠드류) 일부 포함, 심벌은 없어요

헤드는 갈 때 됐고 랩 일부 들뜬 곳 있어요. 그래서 싸게 내놓습니다
홍대 합주실에서 직접 가져가셔야 해요. 화물 불러드릴 수는 있어요`,
    views: 44, likes: 5, chats: 2,
  },
  {
    seller: "rockdad", hoursAgo: 120, category: "drums", subcategory: "전자드럼",
    title: "야마하 스테이지커스텀 버치 드럼세트 (심벌 미포함)",
    brand: "Yamaha", model: "Stage Custom Birch",
    price: 580000, condition: "fair", negotiable: true, delivery: false,
    images: ["1602939444907-6e688c594a66", "1608663003920-757dd225d6c5"],
    description: `연습실 빼면서 판매합니다. 스테이지커스텀 버치 5기통이에요.
킥 22 / 탐 10, 12 / 플로어 16 / 스네어 14
하드웨어(심벌스탠드 2, 하이햇스탠드, 킥페달) 포함, 심벌은 따로 팔았어요

헤드 상태 보통, 쉘 외관은 깨끗한 편입니다
고양시 일산서구 직거래. 분해해서 SUV면 실려요`,
    views: 31, likes: 2, chats: 1,
  },
  {
    seller: "sax_3yr", hoursAgo: 12, category: "wind", subcategory: "색소폰",
    title: "야마하 YAS-280 알토색소폰 (오버홀 완료)",
    brand: "Yamaha", model: "YAS-280",
    price: 720000, condition: "good", negotiable: true, delivery: false,
    images: ["1774238482780-91c64a257c71", "1631980710169-c63795a384d6"],
    description: `입문용으로 많이들 쓰시는 YAS-280입니다.
테너로 넘어가면서 정리해요. 9월에 수원 공방에서 탐포 교체+조정 받았습니다.

마우스피스 기본 + 반도린 V16 같이 드리고, 리드 몇 장 남은 거 드려요
케이스, 넥스트랩 포함

수원역 or 광교 직거래. 불어보고 가셔도 돼요`,
    views: 39, likes: 6, chats: 2,
  },
  {
    seller: "morning_tp", hoursAgo: 33, category: "wind", subcategory: "트럼펫",
    title: "바흐 TR300H2 트럼펫",
    brand: "Bach", model: "TR300H2",
    price: 430000, condition: "good", negotiable: false, delivery: true,
    images: ["1573871666457-7c7329118cf9", "1595026063555-01883e4ec8ee"],
    description: `관악합주단에서 쓰던 트럼펫인데 은도금으로 바꿔서 판매합니다.
밸브 상태 좋고 슬라이드 다 잘 빠져요. 찍힘 없음
케이스, 7C 마우스피스 포함

택배 가능합니다 (안전하게 포장해서 보내요)
인천 송도 직거래도 가능`,
    views: 18, likes: 2, chats: 0,
  },
  {
    seller: "suwon_flute", hoursAgo: 48, category: "wind", subcategory: "플룻",
    title: "야마하 플룻 YFL-222 학생용",
    brand: "Yamaha", model: "YFL-222",
    price: 300000, condition: "good", negotiable: true, delivery: true,
    images: ["1771923654511-b192b1e08d39"],
    description: `중학생 때부터 쓰던 플룻이에요. 대학 와서 새 악기 사서 판매합니다.
작년에 패드 점검 받았고 소리 잘 나요.
케이스, 청소봉, 융 포함

수원 영통 직거래 또는 택배`,
    views: 27, likes: 4, chats: 1,
  },
  {
    seller: "cello_mom", hoursAgo: 6, category: "string", subcategory: "바이올린",
    title: "바이올린 1/2 사이즈 (초등 저학년용) 활 케이스 포함",
    brand: "", model: "1/2 사이즈",
    price: 90000, condition: "good", negotiable: false, delivery: true,
    images: ["1764590544621-3fab73b1a78c", "1526142684086-7ebd69df27a5"],
    description: `아이가 커서 3/4로 바꾸면서 1/2 사이즈 내놓습니다.
학원 선생님 추천으로 산 거고 1년 반 정도 썼어요.
활 털 상태 괜찮고 송진, 어깨받침 같이 드립니다.

잠실역 근처 직거래 or 택배 (택배비 별도)`,
    views: 26, likes: 5, chats: 3,
  },
  {
    seller: "violin_daddy", hoursAgo: 28, category: "string", subcategory: "바이올린",
    title: "스텐터 그래듀에이트 바이올린 4/4 (거의 새것)",
    brand: "Stentor", model: "Graduate",
    price: 220000, condition: "like-new", negotiable: true, delivery: true,
    images: ["1612225330812-01a9c6b355ec", "1600537599107-1c1fc449c238"],
    description: `성인 취미로 시작하려고 샀다가 거의 못 했습니다...
6개월 됐는데 실제로 켠 건 열 번 남짓이에요.
케이스, 활, 송진 다 있고 현은 기본 현입니다.

화성 동탄 직거래 / 택배 가능`,
    views: 34, likes: 3, chats: 1,
  },
  {
    seller: "cello_mom", hoursAgo: 96, category: "string", subcategory: "첼로",
    title: "첼로 4/4 (입시 전 연습용) 하드케이스 포함",
    brand: "", model: "4/4",
    price: 1200000, condition: "good", negotiable: true, delivery: false,
    images: ["1787074191801-b4d40146bf06", "1775143565332-98194669f0b1"],
    description: `큰아이 중학교 때 쓰던 첼로입니다. 입시 준비하면서 더 좋은 악기로 바꿨어요.
공방에서 브릿지/줄 정리 받은 상태예요.
하드케이스(바퀴 달림), 활 1개 포함

송파 잠실 직거래만 가능합니다. 와서 켜보세요`,
    views: 40, likes: 6, chats: 2,
  },
  {
    seller: "rockdad", hoursAgo: 3, category: "audio", subcategory: "앰프",
    title: "펜더 블루스주니어4 진공관 앰프",
    brand: "Fender", model: "Blues Junior IV",
    price: 640000, condition: "good", negotiable: false, delivery: false,
    images: ["1557855684-8aa6f40997df"],
    description: `블루스주니어4 15와트 진공관 앰프입니다. 집에서 쓰기엔 소리가 너무 커서...
관 교체 없이 순정이에요. 잡음 없고 리버브 좋습니다.
커버 씌워서 보관해서 외관 깨끗해요

고양 일산 직거래만 (무게 있어요)`,
    views: 28, likes: 4, chats: 1,
  },
  {
    seller: "gt_salaryman", hoursAgo: 44, category: "audio", subcategory: "앰프",
    title: "보스 카타나50 MK2 기타앰프",
    brand: "Boss", model: "Katana-50 MkII",
    price: 230000, condition: "good", negotiable: true, delivery: true,
    images: ["1642758875471-d10fdc6b119a"],
    description: `카타나 50 mk2 입니다. (사진에 베이스는 제 거라 판매 안 해요 ㅎㅎ)
0.5W 모드 있어서 집에서 쓰기 좋아요
툴 프로그램으로 톤 만들어 쓰시면 됩니다
작동 문제 없어요. 모서리 살짝 까짐

택배 가능 (박스 없어서 뽁뽁이 칭칭 감아서 보내드림)`,
    views: 36, likes: 5, chats: 2,
  },
  {
    seller: "haeundae_lp", hoursAgo: 140, category: "audio", subcategory: "앰프",
    title: "마샬 MS-2 미니앰프 (건전지용)",
    brand: "Marshall", model: "MS-2",
    price: 35000, condition: "good", negotiable: false, delivery: true,
    images: ["1516575869513-3f418f8902ca", "1510104183447-b598400bb62c"],
    description: `책상 위에 두고 장식 겸 쓰던 마샬 미니앰프에요. 9V 배터리로 돌아가고 헤드폰 잭 있습니다
소리는 장난감 수준이지만 디스토션 생각보다 그럴싸해요 ㅋㅋ
반값택배 가능`,
    views: 21, likes: 3, chats: 0,
  },
  {
    seller: "sori_gongbang", hoursAgo: 8, category: "audio", subcategory: "이펙터",
    title: "라인6 HX 스톰프 (부품박스 포함)",
    brand: "Line 6", model: "HX Stomp",
    price: 700000, condition: "like-new", negotiable: false, delivery: true,
    images: ["1760050516412-b371a1eabb52"],
    description: `페달보드 정리하면서 HX 스톰프 내놓습니다.
외관 S급이고 펌웨어 최신입니다. 박스, 어댑터, 설명서 다 있어요

택배 가능하고 용인 수지 직거래도 됩니다
교환은 안 받고 네고도 어렵습니다 죄송해요`,
    views: 49, likes: 8, chats: 3,
  },
  {
    seller: "sori_gongbang", hoursAgo: 22, category: "audio", subcategory: "이펙터",
    title: "보스 BD-2 블루스드라이버 / TU-3 튜너 일괄",
    brand: "Boss", model: "BD-2, TU-3",
    price: 150000, condition: "good", negotiable: true, delivery: true,
    images: ["1550602003-c89e9c05f972"],
    description: `BD-2 블드, TU-3 튜너 같이 팝니다.
개별로는 BD-2 7만, TU-3 9만에 드려요
둘 다 벨크로 붙어있던 자국 있고 작동 정상

택배 반값택배 or 일반택배 가능`,
    views: 30, likes: 3, chats: 2,
  },
  {
    seller: "hongdae_band", hoursAgo: 85, category: "audio", subcategory: "이펙터",
    title: "페달보드 통째로 팝니다 (보드+파워+페달5개)",
    brand: "", model: "",
    price: 520000, condition: "good", negotiable: true, delivery: false,
    images: ["1788022051221-b51a44897c85"],
    description: `기타 장비 정리합니다. 보드째로 가져가실 분 우선이에요.
구성: 페달트레인 미니, 파워서플라이, 튜너, 오버드라이브, 디스토션, 딜레이, 리버브
(모델명은 채팅 주시면 다 알려드려요)

패치케이블까지 다 연결된 상태라 바로 쓰시면 됩니다
홍대입구역 직거래`,
    views: 55, likes: 7, chats: 3,
  },
  {
    seller: "recording_junior", hoursAgo: 1, category: "audio", subcategory: "오디오 인터페이스",
    title: "포커스라이트 스칼렛 2i2 4세대",
    brand: "Focusrite", model: "Scarlett 2i2 4th Gen",
    price: 170000, condition: "like-new", negotiable: false, delivery: true,
    images: ["1549822531-d99bcfebc360"],
    description: `오인페 업그레이드해서 판매해요. 4세대 2i2 입니다
작동 이상 없고 C타입 케이블 포함, 박스 있어요
등록 해제해둘게요

성수역 직거래 or 택배`,
    views: 12, likes: 2, chats: 1,
  },
  {
    seller: "recording_junior", hoursAgo: 30, category: "audio", subcategory: "마이크",
    title: "오디오테크니카 AT2020 콘덴서 마이크 + 팝필터 + 스탠드",
    brand: "Audio-Technica", model: "AT2020",
    price: 110000, condition: "good", negotiable: true, delivery: true,
    images: ["1531651008558-ed1740375b39", "1590602847861-f357a9332bbc"],
    description: `홈레코딩 입문 세트로 쓰던 거예요.
AT2020 + 팝필터 + 데스크 붐암 + XLR 케이블 3m
마이크만 따로는 7만원에 드려요

성동구 직거래 / 택배 가능`,
    views: 25, likes: 4, chats: 2,
  },
  {
    seller: "recording_junior", hoursAgo: 66, category: "audio", subcategory: "스피커",
    title: "야마하 HS5 모니터스피커 한 조",
    brand: "Yamaha", model: "HS5",
    price: 330000, condition: "good", negotiable: true, delivery: false,
    images: ["1625803056683-4dc2a3e92258"],
    description: `HS5 화이트 아니고 블랙 한 조입니다.
작업실 이전하면서 HS7로 바꿨어요. 우퍼 눌림 없고 화이트노이즈 거의 없습니다
전원선 포함, XLR-TRS 케이블은 따로 구매하셔야 해요

성수 직거래`,
    views: 33, likes: 5, chats: 1,
  },
  {
    seller: "hongdae_band", hoursAgo: 16, category: "audio", subcategory: "마이크",
    title: "슈어 SM58 정품 (보컬마이크)",
    brand: "Shure", model: "SM58",
    price: 80000, condition: "good", negotiable: false, delivery: true,
    images: ["1580493783887-8c874c534e93"],
    description: `국내 정품 SM58 입니다 (정품 스티커 있어요)
합주실에서 쓰던 거라 그릴 살짝 눌린 데 있는데 소리는 멀쩡해요
파우치, 마이크 홀더 포함`,
    views: 20, likes: 2, chats: 1,
  },
  {
    seller: "yongsan_synth", hoursAgo: 100, category: "piano", subcategory: "신디사이저",
    title: "틴에이지엔지니어링 EP-133 KO II 샘플러",
    brand: "teenage engineering", model: "EP-133 K.O. II",
    price: 330000, condition: "like-new", negotiable: false, delivery: true,
    images: ["1781120199765-5d6918843338", "1781120199721-a90882777d6a"],
    description: `KO2 판매합니다. 한 달 정도 갖고 놀다가 손이 안 가네요
박스 포함 풀구성이고 생활기스도 없어요

용산 직거래 or 택배`,
    views: 47, likes: 9, chats: 2,
  },
  {
    seller: "ukuler", hoursAgo: 150, category: "guitar", subcategory: "클래식 기타",
    title: "클래식 기타 (나일론줄) 연습용",
    brand: "", model: "",
    price: 60000, condition: "fair", negotiable: true, delivery: false,
    images: ["1787074191751-78c2044f2fb7"],
    description: `학교 수업용으로 쓰던 클래식기타입니다. 브랜드는 국산 무명이에요
사용감 있지만 소리 잘 나요. 줄은 교체 권장
은평구 연신내역 직거래`,
    views: 14, likes: 1, chats: 0,
  },
  // ---- 예약중/판매완료 (프로필·판매내역에서 보이도록) ----
  {
    seller: "mangwon_bass", hoursAgo: 90, category: "audio", subcategory: "앰프",
    title: "복스 AC10 기타앰프", status: "reserved",
    brand: "Vox", model: "AC10C1",
    price: 380000, condition: "good", negotiable: false, delivery: false,
    images: ["1588599376442-3cbf9c67449e"],
    description: `친구한테 받은 AC10인데 베이스 하느라 안 써서 내놓습니다.
진공관 소리 예쁘고 작아서 집에서 쓰기 좋아요. 망원 직거래`,
    views: 42, likes: 6, chats: 3,
  },
  {
    seller: "violin_daddy", hoursAgo: 200, category: "string", subcategory: "바이올린",
    title: "바이올린 3/4 사이즈 + 케이스", status: "sold",
    brand: "", model: "3/4",
    price: 130000, condition: "good", negotiable: false, delivery: true,
    images: ["1460036521480-ff49c08c2781"],
    description: `초등 고학년 아이가 쓰던 3/4 바이올린입니다. 공방 점검 완료.
케이스, 활, 송진 포함`,
    views: 37, likes: 4, chats: 4,
  },
  {
    seller: "morning_tp", hoursAgo: 170, category: "wind", subcategory: "트럼펫",
    title: "트럼펫 약음기 2종 (스트레이트/컵)", status: "sold",
    brand: "Denis Wick", model: "",
    price: 60000, condition: "good", negotiable: false, delivery: true,
    images: ["1627411187044-cc7a4daaca7d"],
    description: `데니스윅 스트레이트, 컵 뮤트 일괄 판매합니다. 택배 가능`,
    views: 15, likes: 1, chats: 2,
  },
  {
    seller: "piano_ssam", hoursAgo: 230, category: "piano", subcategory: "전자피아노",
    title: "카와이 CA49 디지털피아노 로즈우드", status: "reserved",
    brand: "Kawai", model: "CA49",
    price: 1050000, condition: "like-new", negotiable: true, delivery: false,
    images: ["1512733596533-7b00ccf8ebaf"],
    description: `목건반 디지털피아노 CA49입니다. 레슨용 그랜드피아노 들이면서 정리해요.
건반 소음 없고 외관 깨끗합니다. 노원 직거래, 용달은 따로 불러주셔야 해요`,
    views: 61, likes: 11, chats: 3,
  },
];
