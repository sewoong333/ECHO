// 더미 데이터가 Firestore 보안 규칙(firestore.rules)의 검증 조건을 통과하는지 확인
import { test } from "node:test";
import assert from "node:assert/strict";
import { users } from "./data/users.mjs";
import { products } from "./data/products.mjs";
import { posts } from "./data/posts.mjs";

const CATEGORIES = ["guitar", "piano", "drums", "wind", "string", "audio", "other"];
const CONDITIONS = ["new", "like-new", "good", "fair", "poor"];
const STATUSES = ["active", "sold", "reserved"];
const POST_CATEGORIES = ["gear-review", "performance", "lesson", "collaboration", "tips", "music-share", "free"];
const userKeys = new Set(users.map((u) => u.key));

test("판매자 key와 닉네임이 중복되지 않음", () => {
  assert.equal(userKeys.size, users.length);
  assert.equal(new Set(users.map((u) => u.nickname)).size, users.length);
  for (const u of users) {
    assert.ok(u.nickname.length >= 2 && u.nickname.length <= 50, u.nickname);
    assert.ok(!/[<>"']/.test(u.nickname), u.nickname);
  }
});

test("상품이 등록 규칙(제목·설명·가격·카테고리·상태)을 만족함", () => {
  for (const p of products) {
    const label = p.title;
    assert.ok(userKeys.has(p.seller), `없는 판매자: ${p.seller}`);
    assert.ok(p.title.length >= 2 && p.title.length <= 100, label);
    assert.ok(p.description.length >= 10 && p.description.length <= 2000, label);
    assert.ok(Number.isInteger(p.price) && p.price >= 1000 && p.price <= 100000000, label);
    assert.ok(CATEGORIES.includes(p.category), `${label}: ${p.category}`);
    assert.ok(CONDITIONS.includes(p.condition), `${label}: ${p.condition}`);
    assert.ok(STATUSES.includes(p.status || "active"), label);
    assert.ok(p.images.length >= 1, `${label}: 사진 없음`);
    for (const id of p.images) assert.match(id, /^\d{10,13}-[0-9a-f]{6,12}$/, `${label}: ${id}`);
  }
});

test("상품 제목이 중복되지 않음", () => {
  assert.equal(new Set(products.map((p) => p.title)).size, products.length);
});

test("게시글과 댓글이 작성 규칙을 만족함", () => {
  for (const p of posts) {
    assert.ok(userKeys.has(p.author), `없는 작성자: ${p.author}`);
    assert.ok(p.title.length >= 1 && p.title.length <= 100, p.title);
    assert.ok(p.content.length >= 1 && p.content.length <= 5000, p.title);
    assert.ok(POST_CATEGORIES.includes(p.category), `${p.title}: ${p.category}`);
    for (const [author, content, after] of p.comments) {
      assert.ok(userKeys.has(author), `없는 댓글 작성자: ${author}`);
      assert.ok(content.length >= 1 && content.length <= 1000);
      // 시드 스크립트가 최대 ~1시간 시간차를 더하므로 1시간 여유를 둠
      assert.ok(after >= 0 && after <= p.hoursAgo - 1, `${p.title}: 댓글 시간이 현재보다 미래`);
    }
  }
});
