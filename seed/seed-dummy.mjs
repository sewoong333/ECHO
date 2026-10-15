#!/usr/bin/env node
// ECHO 더미 데이터 시드 스크립트 (Firebase Admin SDK)
//
// 사용법 (프로젝트 루트에서):
//   node seed/seed-dummy.mjs --key ./serviceAccountKey.json              # 미리보기 (아무것도 안 씀)
//   node seed/seed-dummy.mjs --key ./serviceAccountKey.json --apply      # 더미 업로드 + 테스트글 숨김
//   node seed/seed-dummy.mjs --key ./serviceAccountKey.json --remove     # 더미 전부 삭제 (isSeedData 문서만)
//   node seed/seed-dummy.mjs --key ./serviceAccountKey.json --unhide     # 숨겼던 테스트글 원복
//
// 서비스 계정 키: Firebase 콘솔 > 프로젝트 설정 > 서비스 계정 > 새 비공개 키 생성
// 키 파일은 절대 깃에 올리지 마세요 (.gitignore에 serviceAccountKey*.json 등록됨)

import { readFileSync, existsSync } from "node:fs";
import { initializeApp, cert, applicationDefault } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import { users } from "./data/users.mjs";
import { products } from "./data/products.mjs";
import { posts } from "./data/posts.mjs";

const args = process.argv.slice(2);
const has = (f) => args.includes(f);
const keyPath = args.includes("--key") ? args[args.indexOf("--key") + 1] : null;
const MODE = has("--remove") ? "remove" : has("--unhide") ? "unhide" : has("--apply") ? "apply" : "preview";
const SKIP_HIDE = has("--no-hide");

const PROJECT_ID = "echo-5385e";
const NOW = Date.now();
const HOUR = 3600 * 1000;

// 지역 → 대략적인 구청/시청 좌표 (동네지도 표시용, 실제 주소 아님)
const COORDS = {
  "서울 마포구": [37.5663, 126.9019], "서울 관악구": [37.4784, 126.9516], "서울 송파구": [37.5145, 127.1059],
  "서울 성동구": [37.5634, 127.0369], "서울 노원구": [37.6542, 127.0568], "서울 영등포구": [37.5264, 126.8962],
  "서울 서대문구": [37.5791, 126.9368], "서울 은평구": [37.6027, 126.9291], "서울 용산구": [37.5326, 126.9905],
  "경기 성남시": [37.4200, 127.1265], "경기 수원시": [37.2636, 127.0286], "경기 고양시": [37.6584, 126.8320],
  "경기 용인시": [37.2411, 127.1776], "경기 화성시": [37.2005, 127.0730], "인천 연수구": [37.4101, 126.6783],
  "부산 해운대구": [35.1631, 129.1636],
};
const REGION_LABEL = { 서울: "서울특별시", 경기: "경기도", 인천: "인천광역시", 부산: "부산광역시" };

// 재실행해도 같은 값이 나오도록 문자열 기반 의사난수
function seeded(str) {
  let h = 2166136261;
  for (const c of str) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return ((h >>> 0) % 10000) / 10000;
}
const img = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1080&q=80`;
const ts = (ms) => Timestamp.fromMillis(Math.min(ms, NOW - 60 * 1000));
const pad = (n) => String(n).padStart(2, "0");

const userByKey = Object.fromEntries(users.map((u) => [u.key, u]));
const uidOf = (key) => {
  if (!userByKey[key]) throw new Error(`users.mjs에 없는 작성자 key: ${key}`);
  return `seed_${key}`;
};

function buildUsers() {
  return users.map((u) => {
    const created = NOW - u.joinedDaysAgo * 24 * HOUR;
    return {
      id: uidOf(u.key),
      data: {
        uid: uidOf(u.key),
        nickname: u.nickname,
        displayName: u.nickname,
        email: "",
        profileImage: "",
        bio: u.bio,
        region: u.region,
        district: u.district,
        address: `${REGION_LABEL[u.region] || u.region} ${u.district}`,
        mannerScore: u.manner,
        transactionCount: Math.round(seeded(u.key) * 20),
        reviewCount: 0,
        isVerified: false,
        createdAt: ts(created),
        updatedAt: ts(created),
        lastLoginAt: ts(NOW - seeded(u.key + "login") * 72 * HOUR),
        isSeedData: true,
      },
    };
  });
}

function buildProducts() {
  return products.map((p, i) => {
    const u = userByKey[p.seller];
    if (!u) throw new Error(`판매자 key 없음: ${p.seller}`);
    const loc = `${u.region} ${u.district}`;
    const [lat, lng] = COORDS[loc] || [37.5665, 126.978];
    const jitter = (s) => (seeded(p.title + s) - 0.5) * 0.02;
    const created = NOW - p.hoursAgo * HOUR - Math.round(seeded(p.title) * 50) * 60 * 1000;
    const status = p.status || "active";
    const images = p.images.map(img);
    const keywords = new Set(
      [...p.title.toLowerCase().split(/\s+/), p.brand?.toLowerCase(), p.model?.toLowerCase(), p.category]
        .filter((w) => w && w.length > 1)
    );
    return {
      id: `seed_p_${pad(i + 1)}`,
      data: {
        title: p.title,
        description: p.description,
        category: p.category,
        subcategory: p.subcategory || "",
        brand: p.brand || "",
        model: p.model || "",
        price: p.price,
        originalPrice: null,
        isPriceNegotiable: !!p.negotiable,
        condition: p.condition,
        conditionDescription: "",
        yearOfManufacture: null,
        images,
        thumbnailImage: images[0] || "",
        region: u.region,
        district: u.district,
        fullLocation: loc,
        detailAddress: loc,
        latitude: +(lat + jitter("lat")).toFixed(6),
        longitude: +(lng + jitter("lng")).toFixed(6),
        isDeliveryAvailable: !!p.delivery,
        deliveryFee: 0,
        preferredTransactionType: p.delivery ? "both" : "direct",
        sellerId: uidOf(p.seller),
        sellerNickname: u.nickname,
        sellerProfileImage: "",
        status,
        viewCount: p.views || 0,
        likeCount: p.likes || 0,
        chatCount: p.chats || 0,
        tags: [],
        searchKeywords: [...keywords],
        createdAt: ts(created),
        updatedAt: ts(created),
        lastBumpedAt: ts(created),
        isPromoted: false,
        reportCount: 0,
        reservedBy: null,
        soldTo: null,
        soldAt: status === "sold" ? ts(created + 30 * HOUR) : null,
        isUrgent: false,
        accessories: [],
        defects: [],
        isSeedData: true,
      },
    };
  });
}

function buildPosts() {
  const postDocs = [];
  const commentDocs = [];
  posts.forEach((p, i) => {
    const pid = `seed_post_${pad(i + 1)}`;
    const u = userByKey[p.author];
    const created = NOW - p.hoursAgo * HOUR - Math.round(seeded(p.title) * 40) * 60 * 1000;
    postDocs.push({
      id: pid,
      data: {
        title: p.title,
        content: p.content,
        category: p.category,
        authorId: uidOf(p.author),
        authorName: u.nickname,
        authorNickname: u.nickname,
        authorProfileImage: "",
        images: [],
        location: null,
        viewCount: p.views || 0,
        commentCount: p.comments.length,
        likes: 0,
        createdAt: ts(created),
        updatedAt: ts(created),
        isSeedData: true,
      },
    });
    p.comments.forEach(([authorKey, content, afterHours], j) => {
      const cu = userByKey[authorKey];
      if (!cu) throw new Error(`댓글 작성자 key 없음: ${authorKey}`);
      const at = created + afterHours * HOUR + Math.round(seeded(content) * 30) * 60 * 1000;
      commentDocs.push({
        id: `seed_c_${pad(i + 1)}_${pad(j + 1)}`,
        data: {
          postId: pid,
          content,
          authorId: uidOf(authorKey),
          authorName: cu.nickname,
          authorNickname: cu.nickname,
          createdAt: ts(at),
          updatedAt: ts(at),
          isSeedData: true,
        },
      });
    });
  });
  return { postDocs, commentDocs };
}

// 숨길 대상: 테스트로 올라간 글
const JUNK_POST_TITLES = new Set(["테스트", "모모모모모모모모모", "ㅌㅊㅍㅌㅊㅍㅌㅊㅍㅌㅊㅍ"]);
const isTestProduct = (d) => (d.title || "").startsWith("[TEST]") || d.sellerId === "qa-admin-seed";
const isJunkPost = (d) => (d.title || "").startsWith("[TEST]") || JUNK_POST_TITLES.has((d.title || "").trim());

async function commitInChunks(db, ops) {
  for (let i = 0; i < ops.length; i += 400) {
    const batch = db.batch();
    ops.slice(i, i + 400).forEach((op) => op(batch));
    await batch.commit();
  }
}

async function main() {
  const userDocs = buildUsers();
  const productDocs = buildProducts();
  const { postDocs, commentDocs } = buildPosts();

  console.log(`\n[ECHO 시드] 모드: ${MODE}`);
  console.log(`  판매자/작성자 ${userDocs.length}명, 상품 ${productDocs.length}개 ` +
    `(판매중 ${productDocs.filter((p) => p.data.status === "active").length}), ` +
    `게시글 ${postDocs.length}개, 댓글 ${commentDocs.length}개`);

  if (!keyPath && !process.env.GOOGLE_APPLICATION_CREDENTIALS) {
    console.log("\n서비스 계정 키가 없어 데이터베이스에는 접속하지 않았습니다.");
    console.log("  예) node seed/seed-dummy.mjs --key ./serviceAccountKey.json --apply\n");
    return;
  }

  if (keyPath && !existsSync(keyPath)) {
    console.error(`\n서비스 계정 키 파일을 찾을 수 없습니다: ${keyPath}`);
    console.error("  Firebase 콘솔 > 프로젝트 설정 > 서비스 계정 > '새 비공개 키 생성'으로 받은 파일을");
    console.error("  프로젝트 폴더(package.json 있는 곳)에 serviceAccountKey.json 이름으로 저장한 뒤 다시 실행하세요.\n");
    process.exit(1);
  }
  let credential;
  try {
    credential = keyPath ? cert(JSON.parse(readFileSync(keyPath, "utf8"))) : applicationDefault();
  } catch (e) {
    console.error(`\n키 파일을 읽지 못했습니다 (${e.message}). 콘솔에서 받은 JSON 파일 그대로인지 확인하세요.\n`);
    process.exit(1);
  }
  initializeApp({ credential, projectId: PROJECT_ID });
  const db = getFirestore();

  const productSnap = await db.collection("products").get();
  const postSnap = await db.collection("musiclife_posts").get();
  const testProducts = productSnap.docs.filter((d) => !d.data().isSeedData && isTestProduct(d.data()));
  const junkPosts = postSnap.docs.filter((d) => !d.data().isSeedData && isJunkPost(d.data()));

  if (MODE === "preview") {
    console.log(`\n현재 DB: 상품 ${productSnap.size}개, 게시글 ${postSnap.size}개`);
    console.log("--apply 시 숨김 처리될 테스트 상품:");
    testProducts.forEach((d) => console.log(`  - [${d.id}] ${d.data().title} (status: ${d.data().status})`));
    console.log("--apply 시 숨김 처리될 테스트 게시글:");
    junkPosts.forEach((d) => console.log(`  - [${d.id}] ${d.data().title}`));
    console.log("\n실제로 반영하려면 --apply 를 붙여 다시 실행하세요.\n");
    return;
  }

  if (MODE === "remove") {
    let total = 0;
    for (const col of ["musiclife_comments", "musiclife_posts", "products", "users"]) {
      const snap = await db.collection(col).where("isSeedData", "==", true).get();
      await commitInChunks(db, snap.docs.map((d) => (b) => b.delete(d.ref)));
      console.log(`  ${col}: ${snap.size}개 삭제`);
      total += snap.size;
    }
    console.log(`\n더미 데이터 ${total}개 삭제 완료 (원래 데이터는 건드리지 않음)\n`);
    return;
  }

  if (MODE === "unhide") {
    const hiddenP = productSnap.docs.filter((d) => d.data().hiddenReason === "test-data");
    const hiddenM = postSnap.docs.filter((d) => d.data().hiddenReason === "test-data");
    await commitInChunks(db, [
      ...hiddenP.map((d) => (b) => b.update(d.ref, { status: d.data().statusBeforeHide || "active", hiddenReason: null })),
      ...hiddenM.map((d) => (b) => b.update(d.ref, { isHidden: false, hiddenReason: null })),
    ]);
    console.log(`\n숨김 해제: 상품 ${hiddenP.length}개, 게시글 ${hiddenM.length}개\n`);
    return;
  }

  // apply
  const ops = [
    ...userDocs.map((d) => (b) => b.set(db.collection("users").doc(d.id), d.data)),
    ...productDocs.map((d) => (b) => b.set(db.collection("products").doc(d.id), d.data)),
    ...postDocs.map((d) => (b) => b.set(db.collection("musiclife_posts").doc(d.id), d.data)),
    ...commentDocs.map((d) => (b) => b.set(db.collection("musiclife_comments").doc(d.id), d.data)),
  ];
  if (!SKIP_HIDE) {
    testProducts.forEach((d) => ops.push((b) => b.update(d.ref, {
      status: "deleted", statusBeforeHide: d.data().status || "active", hiddenReason: "test-data",
    })));
    junkPosts.forEach((d) => ops.push((b) => b.update(d.ref, { isHidden: true, hiddenReason: "test-data" })));
  }
  await commitInChunks(db, ops);
  console.log(`\n업로드 완료: 사용자 ${userDocs.length}, 상품 ${productDocs.length}, 게시글 ${postDocs.length}, 댓글 ${commentDocs.length}`);
  if (!SKIP_HIDE) console.log(`테스트 데이터 숨김: 상품 ${testProducts.length}개, 게시글 ${junkPosts.length}개 (--unhide 로 원복 가능)`);
  console.log("되돌리려면: node seed/seed-dummy.mjs --key <키파일> --remove\n");
}

main().catch((e) => {
  const hint = /PERMISSION_DENIED|permission/i.test(e.message)
    ? "\n  → 키의 서비스 계정에 Firestore 쓰기 권한이 없습니다. 콘솔에서 받은 firebase-adminsdk 키인지 확인하세요."
    : /project|NOT_FOUND/i.test(e.message)
      ? "\n  → 키 파일의 project_id가 echo-5385e 인지 확인하세요."
      : "";
  console.error("\n실패:", e.message + hint);
  process.exit(1);
});
