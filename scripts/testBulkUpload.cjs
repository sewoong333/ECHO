/**
 * 대량 등록 기능 자동 테스트 스크립트
 * 실제 대량 등록 프로세스를 시뮬레이션하여 테스트
 */

const fs = require('fs');
const path = require('path');

// 테스트 결과를 저장할 객체
const testResults = {
  startTime: new Date(),
  tests: [],
  summary: {
    total: 0,
    passed: 0,
    failed: 0
  }
};

// 테스트 함수
function runTest(testName, testFunction) {
  console.log(`🧪 테스트 시작: ${testName}`);
  testResults.summary.total++;
  
  try {
    const result = testFunction();
    if (result.success) {
      console.log(`✅ ${testName}: 성공`);
      testResults.tests.push({
        name: testName,
        status: 'PASS',
        message: result.message,
        details: result.details
      });
      testResults.summary.passed++;
    } else {
      console.log(`❌ ${testName}: 실패 - ${result.message}`);
      testResults.tests.push({
        name: testName,
        status: 'FAIL',
        message: result.message,
        details: result.details
      });
      testResults.summary.failed++;
    }
  } catch (error) {
    console.log(`💥 ${testName}: 오류 - ${error.message}`);
    testResults.tests.push({
      name: testName,
      status: 'ERROR',
      message: error.message,
      details: error.stack
    });
    testResults.summary.failed++;
  }
}

// 1. CSV 파일 존재 확인 테스트
function testCSVFileExists() {
  const csvPath = path.join(__dirname, '../public/scraped_products.csv');
  const exists = fs.existsSync(csvPath);
  
  if (!exists) {
    return { success: false, message: 'CSV 파일이 존재하지 않습니다.' };
  }
  
  const content = fs.readFileSync(csvPath, 'utf8');
  const lines = content.split('\n').filter(line => line.trim());
  
  return {
    success: true,
    message: `CSV 파일 확인 완료 (${lines.length - 1}개 상품)`,
    details: {
      filePath: csvPath,
      lineCount: lines.length,
      hasHeader: lines.length > 0
    }
  };
}

// 2. CSV 파일 형식 검증 테스트
function testCSVFormat() {
  const csvPath = path.join(__dirname, '../public/scraped_products.csv');
  const content = fs.readFileSync(csvPath, 'utf8');
  const lines = content.split('\n').filter(line => line.trim());
  
  if (lines.length < 2) {
    return { success: false, message: 'CSV 파일에 데이터가 없습니다.' };
  }
  
  const header = lines[0].split(',');
  const requiredFields = ['title', 'price', 'category', 'condition', 'description'];
  
  for (const field of requiredFields) {
    if (!header.includes(field)) {
      return { success: false, message: `필수 필드 '${field}'가 없습니다.` };
    }
  }
  
  // 데이터 행 검증
  for (let i = 1; i < lines.length; i++) {
    const row = lines[i].split(',');
    if (row.length !== header.length) {
      return { success: false, message: `${i + 1}행의 컬럼 수가 맞지 않습니다.` };
    }
  }
  
  return {
    success: true,
    message: `CSV 형식 검증 완료 (${lines.length - 1}개 상품)`,
    details: {
      header: header,
      dataRows: lines.length - 1,
      requiredFields: requiredFields
    }
  };
}

// 3. 이미지 폴더 구조 테스트
function testImageFolders() {
  const imagesPath = path.join(__dirname, '../public/scraped_images');
  const expectedFolders = ['gibson_les_paul', 'fender_stratocaster', 'yamaha_p125', 'pearl_export', 'martin_d28'];
  
  if (!fs.existsSync(imagesPath)) {
    return { success: false, message: '이미지 폴더가 존재하지 않습니다.' };
  }
  
  const existingFolders = fs.readdirSync(imagesPath).filter(item => 
    fs.statSync(path.join(imagesPath, item)).isDirectory()
  );
  
  const missingFolders = expectedFolders.filter(folder => !existingFolders.includes(folder));
  
  if (missingFolders.length > 0) {
    return { 
      success: false, 
      message: `누락된 폴더: ${missingFolders.join(', ')}` 
    };
  }
  
  return {
    success: true,
    message: `이미지 폴더 구조 확인 완료 (${existingFolders.length}개 폴더)`,
    details: {
      expectedFolders: expectedFolders,
      existingFolders: existingFolders,
      missingFolders: []
    }
  };
}

// 4. 데이터 품질 테스트
function testDataQuality() {
  const csvPath = path.join(__dirname, '../public/scraped_products.csv');
  const content = fs.readFileSync(csvPath, 'utf8');
  const lines = content.split('\n').filter(line => line.trim());
  
  const issues = [];
  
  for (let i = 1; i < lines.length; i++) {
    const row = lines[i].split(',');
    const title = row[0]?.replace(/"/g, '') || '';
    const price = row[1]?.replace(/"/g, '') || '';
    const category = row[2]?.replace(/"/g, '') || '';
    const condition = row[3]?.replace(/"/g, '') || '';
    const description = row[4]?.replace(/"/g, '') || '';
    
    // 제목 검증
    if (title.length < 2) {
      issues.push(`${i + 1}행: 상품명이 너무 짧습니다.`);
    }
    
    // 가격 검증
    const priceNum = parseInt(price.replace(/[^0-9]/g, ''));
    if (isNaN(priceNum) || priceNum < 1000) {
      issues.push(`${i + 1}행: 가격이 유효하지 않습니다. (${price})`);
    }
    
    // 카테고리 검증
    const validCategories = ['guitar', 'piano', 'drum', 'bass', 'violin', 'accessory'];
    if (!validCategories.includes(category.toLowerCase())) {
      issues.push(`${i + 1}행: 유효하지 않은 카테고리입니다. (${category})`);
    }
    
    // 상태 검증
    const validConditions = ['excellent', 'good', 'fair', 'poor'];
    if (!validConditions.includes(condition.toLowerCase())) {
      issues.push(`${i + 1}행: 유효하지 않은 상태입니다. (${condition})`);
    }
  }
  
  if (issues.length > 0) {
    return { 
      success: false, 
      message: `데이터 품질 문제 발견: ${issues.length}개`,
      details: { issues: issues }
    };
  }
  
  return {
    success: true,
    message: '데이터 품질 검증 완료',
    details: { 
      totalProducts: lines.length - 1,
      issues: []
    }
  };
}

// 5. 자동 설명 생성 테스트
function testAutoDescription() {
  // descriptionGenerator 모듈 테스트
  try {
    const { generateProductDescription } = require('../src/utils/descriptionGenerator.js');
    
    const testProduct = {
      title: 'Gibson Les Paul Standard',
      category: 'guitar',
      condition: 'excellent',
      price: 1800000
    };
    
    const description = generateProductDescription(testProduct);
    
    if (!description || description.length < 20) {
      return { 
        success: false, 
        message: '자동 설명 생성이 제대로 작동하지 않습니다.' 
      };
    }
    
    return {
      success: true,
      message: '자동 설명 생성 기능 정상 작동',
      details: {
        testProduct: testProduct,
        generatedDescription: description,
        descriptionLength: description.length
      }
    };
  } catch (error) {
    return { 
      success: false, 
      message: `자동 설명 생성 모듈 오류: ${error.message}` 
    };
  }
}

// 6. 한글 지원 테스트
function testKoreanSupport() {
  const csvPath = path.join(__dirname, '../public/scraped_products.csv');
  const content = fs.readFileSync(csvPath, 'utf8');
  
  // 한글 텍스트가 포함되어 있는지 확인
  const koreanRegex = /[가-힣]/;
  const hasKorean = koreanRegex.test(content);
  
  if (!hasKorean) {
    return { 
      success: false, 
      message: 'CSV 파일에 한글이 포함되어 있지 않습니다.' 
    };
  }
  
  return {
    success: true,
    message: '한글 지원 확인 완료',
    details: {
      hasKorean: true,
      koreanContent: content.match(/[가-힣]+/g) || []
    }
  };
}

// 테스트 실행
console.log('🚀 ECHO 대량 등록 기능 테스트 시작\n');

runTest('CSV 파일 존재 확인', testCSVFileExists);
runTest('CSV 파일 형식 검증', testCSVFormat);
runTest('이미지 폴더 구조 확인', testImageFolders);
runTest('데이터 품질 검증', testDataQuality);
runTest('자동 설명 생성 기능', testAutoDescription);
runTest('한글 지원 확인', testKoreanSupport);

// 테스트 결과 요약
testResults.endTime = new Date();
testResults.duration = testResults.endTime - testResults.startTime;

console.log('\n📊 테스트 결과 요약');
console.log('='.repeat(50));
console.log(`총 테스트: ${testResults.summary.total}개`);
console.log(`성공: ${testResults.summary.passed}개`);
console.log(`실패: ${testResults.summary.failed}개`);
console.log(`소요 시간: ${testResults.duration}ms`);

if (testResults.summary.failed === 0) {
  console.log('\n🎉 모든 테스트 통과! 대량 등록 기능이 정상적으로 작동합니다.');
} else {
  console.log('\n⚠️ 일부 테스트 실패. 문제를 확인해주세요.');
}

// 상세 결과를 파일로 저장
const reportPath = path.join(__dirname, '../test-results.json');
fs.writeFileSync(reportPath, JSON.stringify(testResults, null, 2));
console.log(`\n📄 상세 테스트 결과: ${reportPath}`);

// 테스트 결과 반환
module.exports = testResults;
