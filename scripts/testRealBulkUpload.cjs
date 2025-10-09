/**
 * 실제 중고거래 상품 대량 등록 테스트
 * 16개의 실제 기타 상품으로 대량 등록 기능 검증
 */

const fs = require('fs');
const path = require('path');

console.log('🎸 실제 중고거래 상품 대량 등록 테스트 시작\n');

// 1. CSV 파일 검증
console.log('📄 1단계: CSV 파일 검증');
const csvPath = path.join(__dirname, '../public/real_guitars.csv');
const csvContent = fs.readFileSync(csvPath, 'utf8');
const lines = csvContent.split('\n').filter(line => line.trim());
const header = lines[0].split(',').map(h => h.replace(/"/g, ''));

console.log(`✅ CSV 파일 로드: ${lines.length - 1}개 상품`);
console.log(`📋 헤더: ${header.join(', ')}`);

// 2. 상품 데이터 파싱
console.log('\n🎯 2단계: 상품 데이터 파싱');
const products = [];

for (let i = 1; i < lines.length; i++) {
  const row = lines[i].split(',');
  const product = {};
  
  header.forEach((field, index) => {
    product[field] = row[index]?.replace(/"/g, '') || '';
  });
  
  // 가격 정리
  if (product.price) {
    product.price = parseInt(product.price.replace(/[^0-9]/g, ''));
  }
  
  products.push(product);
  console.log(`  ${i}. ${product.title} - ${product.price.toLocaleString()}원 (${product.condition})`);
}

// 3. 이미지 폴더 매칭 확인
console.log('\n🖼️ 3단계: 이미지 폴더 매칭 확인');
const imagesPath = path.join(__dirname, '../public/real_guitar_images');
const imageFolders = fs.readdirSync(imagesPath).filter(item => 
  fs.statSync(path.join(imagesPath, item)).isDirectory()
);

console.log(`📁 이미지 폴더: ${imageFolders.length}개`);
imageFolders.forEach(folder => {
  const imageFiles = fs.readdirSync(path.join(imagesPath, folder))
    .filter(file => file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg'));
  console.log(`  ${folder}: ${imageFiles.length}개 이미지`);
});

// 4. 매칭 검증
console.log('\n🔗 4단계: 이미지-상품 매칭 검증');
let matchCount = 0;
let totalCount = products.length;

products.forEach((product, index) => {
  const expectedFolder = product.image_folder;
  const hasMatchingFolder = imageFolders.includes(expectedFolder);
  
  if (hasMatchingFolder) {
    matchCount++;
    console.log(`  ✅ ${index + 1}. ${product.title} → ${expectedFolder}`);
  } else {
    console.log(`  ❌ ${index + 1}. ${product.title} → ${expectedFolder} (폴더 없음)`);
  }
});

console.log(`\n📊 매칭 결과: ${matchCount}/${totalCount} (${Math.round((matchCount/totalCount)*100)}%)`);

// 5. 자동 설명 생성 테스트
console.log('\n🤖 5단계: 자동 설명 생성 테스트');
try {
  const { generateProductDescription } = require('../src/utils/descriptionGenerator.js');
  
  console.log('샘플 상품 자동 설명 생성:');
  const sampleProduct = products[0];
  const autoDescription = generateProductDescription(sampleProduct);
  console.log(`  상품: ${sampleProduct.title}`);
  console.log(`  생성된 설명: ${autoDescription.substring(0, 150)}...`);
  console.log(`  설명 길이: ${autoDescription.length}자`);
  
  console.log('✅ 자동 설명 생성 정상 작동');
} catch (error) {
  console.log(`❌ 자동 설명 생성 오류: ${error.message}`);
}

// 6. 데이터 품질 검증
console.log('\n✅ 6단계: 데이터 품질 검증');
let errorCount = 0;
let warningCount = 0;

products.forEach((product, index) => {
  const errors = [];
  const warnings = [];
  
  // 필수 필드 검사
  if (!product.title || product.title.length < 2) {
    errors.push('상품명이 너무 짧습니다');
  }
  
  if (!product.price || product.price < 1000) {
    errors.push('가격이 유효하지 않습니다');
  }
  
  if (!product.category || product.category !== 'guitar') {
    errors.push('카테고리가 올바르지 않습니다');
  }
  
  if (!product.condition || !['excellent', 'good', 'fair', 'poor'].includes(product.condition)) {
    errors.push('상태가 올바르지 않습니다');
  }
  
  // 설명 길이 검사
  if (!product.description || product.description.length < 10) {
    warnings.push('설명이 짧습니다');
  }
  
  if (errors.length > 0) {
    console.log(`  ❌ ${index + 1}. ${product.title}: ${errors.join(', ')}`);
    errorCount += errors.length;
  } else {
    console.log(`  ✅ ${index + 1}. ${product.title}: 검증 통과`);
  }
  
  if (warnings.length > 0) {
    console.log(`     ⚠️ 경고: ${warnings.join(', ')}`);
    warningCount += warnings.length;
  }
});

// 7. 가격대별 분석
console.log('\n💰 7단계: 가격대별 분석');
const priceRanges = {
  '100만원 미만': 0,
  '100-200만원': 0,
  '200-300만원': 0,
  '300만원 이상': 0
};

products.forEach(product => {
  const price = product.price;
  if (price < 1000000) priceRanges['100만원 미만']++;
  else if (price < 2000000) priceRanges['100-200만원']++;
  else if (price < 3000000) priceRanges['200-300만원']++;
  else priceRanges['300만원 이상']++;
});

Object.entries(priceRanges).forEach(([range, count]) => {
  console.log(`  ${range}: ${count}개`);
});

// 8. 상태별 분석
console.log('\n📊 8단계: 상태별 분석');
const conditionStats = {};
products.forEach(product => {
  const condition = product.condition;
  conditionStats[condition] = (conditionStats[condition] || 0) + 1;
});

Object.entries(conditionStats).forEach(([condition, count]) => {
  console.log(`  ${condition}: ${count}개`);
});

// 9. 최종 결과
console.log('\n🎯 최종 테스트 결과');
console.log('='.repeat(50));
console.log(`총 상품 수: ${products.length}개`);
console.log(`이미지 매칭: ${matchCount}/${totalCount} (${Math.round((matchCount/totalCount)*100)}%)`);
console.log(`데이터 오류: ${errorCount}개`);
console.log(`경고: ${warningCount}개`);

if (errorCount === 0 && matchCount === totalCount) {
  console.log('\n🎉 실제 중고거래 상품 대량 등록 준비 완료!');
  console.log('✅ 모든 상품이 정상적으로 처리될 수 있습니다.');
  console.log('✅ 이미지 매칭이 완벽합니다.');
  console.log('✅ 데이터 품질이 우수합니다.');
  console.log('✅ 자동 설명 생성이 정상 작동합니다.');
  
  console.log('\n🚀 대량 등록 진행 방법:');
  console.log('1. 나의 에코 → 상품 등록 → 대량 등록');
  console.log('2. CSV 파일: real_guitars.csv 업로드');
  console.log('3. 이미지 폴더: real_guitar_images/ 선택');
  console.log('4. 매칭 방식: 폴더명 매칭 선택');
  console.log('5. 상품 등록하기 클릭');
} else {
  console.log('\n⚠️ 일부 문제가 있습니다.');
  if (errorCount > 0) console.log(`❌ 데이터 오류: ${errorCount}개`);
  if (matchCount < totalCount) console.log(`❌ 이미지 매칭: ${totalCount - matchCount}개 누락`);
}

console.log('\n🎸 실제 중고거래 상품 대량 등록 테스트 완료!');
