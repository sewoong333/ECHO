/**
 * 상품 주소 정보 통일 스크립트
 * region, district, fullLocation, detailAddress를 일관성 있게 수정
 */

const admin = require('firebase-admin');
const path = require('path');

// Firebase Admin SDK 초기화
const serviceAccount = require('../firebase-adminsdk.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

// 주소 정규화 함수
function normalizeAddress(product) {
  const updates = {};
  let needsUpdate = false;

  // region과 district가 있으면 fullLocation 생성
  if (product.region && product.district) {
    const expectedFullLocation = `${product.region} ${product.district}`;
    if (product.fullLocation !== expectedFullLocation) {
      updates.fullLocation = expectedFullLocation;
      needsUpdate = true;
      console.log(`  📝 fullLocation 수정: "${product.fullLocation}" → "${expectedFullLocation}"`);
    }
  }

  // detailAddress가 없으면 fullLocation 사용
  if (!product.detailAddress && product.fullLocation) {
    updates.detailAddress = product.fullLocation;
    needsUpdate = true;
    console.log(`  📝 detailAddress 추가: "${product.fullLocation}"`);
  }

  // region이나 district가 없는데 detailAddress가 있으면 파싱 시도
  if ((!product.region || !product.district) && product.detailAddress) {
    const parts = product.detailAddress.split(' ');
    if (parts.length >= 2) {
      if (!product.region) {
        updates.region = parts[0];
        needsUpdate = true;
        console.log(`  📝 region 추가: "${parts[0]}"`);
      }
      if (!product.district) {
        updates.district = parts[1];
        needsUpdate = true;
        console.log(`  📝 district 추가: "${parts[1]}"`);
      }
    }
  }

  // location 필드를 fullLocation으로 마이그레이션
  if (product.location && !product.fullLocation) {
    updates.fullLocation = product.location;
    needsUpdate = true;
    console.log(`  📝 location → fullLocation 마이그레이션: "${product.location}"`);
  }

  return { updates, needsUpdate };
}

async function fixProductAddresses() {
  console.log('🔧 상품 주소 정보 통일 시작\n');

  try {
    // 모든 상품 가져오기
    const productsSnapshot = await db.collection('products').get();
    console.log(`📦 총 ${productsSnapshot.size}개 상품 발견\n`);

    let processedCount = 0;
    let updatedCount = 0;
    let errorCount = 0;

    for (const doc of productsSnapshot.docs) {
      processedCount++;
      const product = doc.data();
      console.log(`\n[${processedCount}/${productsSnapshot.size}] ${product.title || 'Unknown'}`);
      
      // 현재 주소 정보 출력
      console.log(`  현재 정보:`);
      console.log(`    region: ${product.region || '(없음)'}`);
      console.log(`    district: ${product.district || '(없음)'}`);
      console.log(`    fullLocation: ${product.fullLocation || '(없음)'}`);
      console.log(`    detailAddress: ${product.detailAddress || '(없음)'}`);
      console.log(`    location: ${product.location || '(없음)'}`);

      // 주소 정규화
      const { updates, needsUpdate } = normalizeAddress(product);

      if (needsUpdate) {
        try {
          await doc.ref.update(updates);
          updatedCount++;
          console.log(`  ✅ 업데이트 완료`);
        } catch (error) {
          errorCount++;
          console.log(`  ❌ 업데이트 실패:`, error.message);
        }
      } else {
        console.log(`  ⏭️  변경 불필요`);
      }
    }

    console.log('\n\n📊 작업 완료 요약');
    console.log('='.repeat(50));
    console.log(`총 처리: ${processedCount}개`);
    console.log(`업데이트: ${updatedCount}개`);
    console.log(`오류: ${errorCount}개`);
    console.log(`변경 없음: ${processedCount - updatedCount - errorCount}개`);

  } catch (error) {
    console.error('❌ 스크립트 실행 실패:', error);
  } finally {
    process.exit(0);
  }
}

// 스크립트 실행
fixProductAddresses();
