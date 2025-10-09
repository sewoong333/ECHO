/**
 * Excel 파일 파싱을 위한 유틸리티 함수들
 * xlsx 라이브러리가 없어도 기본 JavaScript로 Excel 파일을 읽을 수 있는 방법을 제공
 */

import { enhanceBulkProductsWithDescriptions } from './descriptionGenerator';

// CSV 파일을 파싱하는 함수 (Excel에서 CSV로 저장된 파일용)
export function parseCSV(csvText) {
  const lines = csvText.split('\n');
  const headers = lines[0].split(',').map(header => header.trim().replace(/"/g, ''));
  const data = [];
  
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim()) {
      const values = lines[i].split(',').map(value => value.trim().replace(/"/g, ''));
      const row = {};
      headers.forEach((header, index) => {
        row[header] = values[index] || '';
      });
      data.push(row);
    }
  }
  
  return data;
}

// 텍스트 파일을 읽는 함수
export function readTextFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = (e) => resolve(e.target.result);
    reader.onerror = (e) => reject(e);
    reader.readAsText(file, 'UTF-8');
  });
}

// 한글 카테고리 매핑
const KOREAN_CATEGORY_MAP = {
  '기타': 'guitar',
  '피아노': 'piano', 
  '드럼': 'drum',
  '베이스': 'bass',
  '바이올린': 'violin',
  '악기': 'accessory',
  '액세서리': 'accessory'
};

// 한글 상태 매핑
const KOREAN_CONDITION_MAP = {
  '최상': 'excellent',
  '양호': 'good',
  '보통': 'fair',
  '나쁨': 'poor',
  '좋음': 'good',
  '괜찮음': 'fair'
};

// 자동 수정 함수
function autoCorrectData(row) {
  const corrected = { ...row };
  
  // 카테고리 자동 수정
  if (corrected.category) {
    const category = corrected.category.toString().trim();
    if (KOREAN_CATEGORY_MAP[category]) {
      corrected.category = KOREAN_CATEGORY_MAP[category];
    }
  }
  
  // 상태 자동 수정
  if (corrected.condition) {
    const condition = corrected.condition.toString().trim();
    if (KOREAN_CONDITION_MAP[condition]) {
      corrected.condition = KOREAN_CONDITION_MAP[condition];
    }
  }
  
  // 가격 자동 수정 (쉼표, 원화 표시 제거)
  if (corrected.price) {
    const priceStr = corrected.price.toString().replace(/[^0-9]/g, '');
    corrected.price = priceStr;
  }
  
  return corrected;
}

// Excel 파일 유효성 검사
export function validateExcelData(data) {
  const requiredFields = ['title', 'price', 'category', 'condition'];
  const errors = [];
  const warnings = [];
  
  data.forEach((row, index) => {
    const rowNumber = index + 2; // 헤더가 첫 번째 행이므로 +2
    const correctedRow = autoCorrectData(row);
    
    // 필수 필드 검사
    requiredFields.forEach(field => {
      if (!correctedRow[field] || correctedRow[field].toString().trim() === '') {
        errors.push(`${rowNumber}행: ${field} 필드가 비어있습니다.`);
      }
    });
    
    // 가격 검사
    if (correctedRow.price) {
      const price = parseInt(correctedRow.price.toString().replace(/[^0-9]/g, ''));
      if (isNaN(price) || price < 1000) {
        errors.push(`${rowNumber}행: 가격은 1000원 이상의 숫자여야 합니다.`);
      }
    }
    
    // 제목 길이 검사
    if (correctedRow.title && correctedRow.title.toString().trim().length < 2) {
      errors.push(`${rowNumber}행: 상품명은 2글자 이상이어야 합니다.`);
    }
    
    // 카테고리 유효성 검사
    if (correctedRow.category) {
      const validCategories = ['guitar', 'piano', 'drum', 'bass', 'violin', 'accessory'];
      if (!validCategories.includes(correctedRow.category.toLowerCase())) {
        warnings.push(`${rowNumber}행: 카테고리가 '${correctedRow.category}'로 자동 수정되었습니다.`);
      }
    }
    
    // 상태 유효성 검사
    if (correctedRow.condition) {
      const validConditions = ['excellent', 'good', 'fair', 'poor'];
      if (!validConditions.includes(correctedRow.condition.toLowerCase())) {
        warnings.push(`${rowNumber}행: 상태가 '${correctedRow.condition}'로 자동 수정되었습니다.`);
      }
    }
    
    // 설명 길이 검사 (경고만)
    if (correctedRow.description && correctedRow.description.toString().trim().length < 10) {
      warnings.push(`${rowNumber}행: 상품 설명이 짧습니다. 자동으로 생성됩니다.`);
    }
  });
  
  return {
    isValid: errors.length === 0,
    errors,
    warnings
  };
}

// 상품 데이터 변환 함수
export function transformProductData(rawData, user) {
  const transformedData = rawData.map(row => {
    // 자동 수정 적용
    const correctedRow = autoCorrectData(row);
    const price = parseInt(correctedRow.price.toString().replace(/[^0-9]/g, ''));
    
    return {
      title: correctedRow.title.toString().trim(),
      price: price,
      description: correctedRow.description?.toString().trim() || '', // 설명이 없으면 빈 문자열
      category: correctedRow.category.toString().trim().toLowerCase(),
      condition: correctedRow.condition.toString().trim().toLowerCase(),
      region: correctedRow.region?.toString().trim() || '서울',
      district: correctedRow.district?.toString().trim() || '강남구',
      fullLocation: `${correctedRow.region || '서울'} ${correctedRow.district || '강남구'}`,
      detailAddress: correctedRow.detailAddress?.toString().trim() || `${correctedRow.region || '서울'} ${correctedRow.district || '강남구'}`,
      latitude: parseFloat(correctedRow.latitude) || null,
      longitude: parseFloat(correctedRow.longitude) || null,
      images: [], // 이미지는 별도 처리 필요
      sellerId: user.uid,
      sellerNickname: user.nickname || user.displayName || "사용자",
      status: "active",
      viewCount: 0,
      likeCount: 0,
      chatCount: 0,
      isDeliveryAvailable: false,
      deliveryFee: 0,
      preferredTransactionType: "direct",
      isPriceNegotiable: false,
      tags: [],
      searchKeywords: [correctedRow.title.toString().trim().toLowerCase(), correctedRow.category.toString().trim().toLowerCase()],
      createdAt: new Date(),
      updatedAt: new Date(),
      lastBumpedAt: new Date()
    };
  });
  
  // 자동 설명 생성 적용
  return enhanceBulkProductsWithDescriptions(transformedData);
}

// Excel 템플릿 데이터 생성
export function generateExcelTemplate() {
  const headers = [
    'title',
    'price', 
    'category',
    'condition',
    'description',
    'region',
    'district',
    'detailAddress',
    'latitude',
    'longitude',
    'image_folder'
  ];
  
  const sampleData = [
    [
      'Gibson Les Paul Standard',
      '1500000',
      'guitar',
      'good',
      '2020년 구매한 기타로 상태가 양호합니다. 스크래치 없고 잘 관리했습니다.',
      '서울',
      '강남구',
      '서울 강남구 테헤란로 123',
      '37.5665',
      '126.9780',
      'gibson_les_paul'
    ],
    [
      'Fender Stratocaster',
      '1200000',
      'guitar',
      'like-new',
      '거의 새 제품 수준입니다. 케이스와 함께 판매합니다.',
      '서울',
      '서초구',
      '서울 서초구 서초대로 456',
      '37.5010',
      '127.0250',
      'fender_stratocaster'
    ]
  ];
  
  const csvContent = [headers, ...sampleData]
    .map(row => row.map(cell => `"${cell}"`).join(','))
    .join('\n');
  
  return csvContent;
}

// CSV 파일 다운로드 함수
export function downloadCSVTemplate() {
  const csvContent = generateExcelTemplate();
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  const url = URL.createObjectURL(blob);
  
  link.setAttribute('href', url);
  link.setAttribute('download', '상품등록_템플릿.csv');
  link.style.visibility = 'hidden';
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
