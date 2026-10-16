// 더미 판매자/작성자 프로필 (Firebase Auth 계정은 만들지 않음 → 로그인 불가, 표시용)
// manner: 앱의 매너점수는 0~100 (80 이상 '좋은 매너'). uid는 모두 seed_ 접두어. isSeedData: true 로 표시해서 나중에 일괄 삭제 가능.
export const users = [
  { key: "mangwon_bass", nickname: "망원동베이시스트", region: "서울", district: "마포구", bio: "주말 합주 다니는 직장인 베이시스트", manner: 87.4, joinedDaysAgo: 420 },
  { key: "weekend_gt", nickname: "주말기타", region: "서울", district: "관악구", bio: "평일엔 회사, 주말엔 기타", manner: 82.4, joinedDaysAgo: 210 },
  { key: "seohyeon_drum", nickname: "서현동드러머", region: "경기", district: "성남시", bio: "", manner: 93.0, joinedDaysAgo: 530 },
  { key: "cello_mom", nickname: "첼로엄마", region: "서울", district: "송파구", bio: "아이 악기 사이즈 바뀔 때마다 올려요", manner: 84.0, joinedDaysAgo: 300 },
  { key: "sax_3yr", nickname: "색소폰3년차", region: "경기", district: "수원시", bio: "취미 알토 색소폰", manner: 79.2, joinedDaysAgo: 150 },
  { key: "rockdad", nickname: "rockdad", region: "경기", district: "고양시", bio: "아빠밴드 기타 담당", manner: 89.6, joinedDaysAgo: 610 },
  { key: "recording_junior", nickname: "녹음실막내", region: "서울", district: "성동구", bio: "홈레코딩 장비 정리 중", manner: 78.8, joinedDaysAgo: 95 },
  { key: "piano_ssam", nickname: "피아노쌤", region: "서울", district: "노원구", bio: "피아노 레슨합니다", manner: 96.6, joinedDaysAgo: 720 },
  { key: "gt_salaryman", nickname: "기타치는회사원", region: "서울", district: "영등포구", bio: "", manner: 78.0, joinedDaysAgo: 40 },
  { key: "jazzkeys", nickname: "jazzkeys", region: "서울", district: "서대문구", bio: "재즈 피아노/키보드", manner: 85.8, joinedDaysAgo: 260 },
  { key: "morning_tp", nickname: "모닝트럼펫", region: "인천", district: "연수구", bio: "직장인 관악합주단", manner: 81.0, joinedDaysAgo: 180 },
  { key: "ukuler", nickname: "우쿨러", region: "서울", district: "은평구", bio: "", manner: 78.0, joinedDaysAgo: 22 },
  { key: "sori_gongbang", nickname: "소리공방", region: "경기", district: "용인시", bio: "이펙터 모으다가 정리합니다", manner: 91.2, joinedDaysAgo: 480 },
  { key: "haeundae_lp", nickname: "해운대레스폴", region: "부산", district: "해운대구", bio: "부산 직거래 위주", manner: 84.8, joinedDaysAgo: 340 },
  { key: "violin_daddy", nickname: "바이올린아빠", region: "경기", district: "화성시", bio: "", manner: 80.2, joinedDaysAgo: 120 },
  { key: "hongdae_band", nickname: "홍대합주러", region: "서울", district: "마포구", bio: "밴드 보컬 겸 기타", manner: 86.6, joinedDaysAgo: 390 },
  { key: "suwon_flute", nickname: "플룻하는대학생", region: "경기", district: "수원시", bio: "", manner: 78.6, joinedDaysAgo: 60 },
  { key: "yongsan_synth", nickname: "용산신스", region: "서울", district: "용산구", bio: "신스 기변병 환자", manner: 88.4, joinedDaysAgo: 450 },
];
