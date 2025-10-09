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

// Excel 파일 유효성 검사
export function validateExcelData(data) {
  const requiredFields = ['title', 'price', 'category', 'condition', 'description'];
  const errors = [];
  
  data.forEach((row, index) => {
    const rowNumber = index + 2; // 헤더가 첫 번째 행이므로 +2
    
    // 필수 필드 검사
    requiredFields.forEach(field => {
      if (!row[field] || row[field].toString().trim() === '') {
        errors.push(`${rowNumber}행: ${field} 필드가 비어있습니다.`);
      }
    });
    
    // 가격 검사
    if (row.price) {
      const price = parseInt(row.price.toString().replace(/[^0-9]/g, ''));
      if (isNaN(price) || price < 1000) {
        errors.push(`${rowNumber}행: 가격은 1000원 이상의 숫자여야 합니다.`);
      }
    }
    
    // 제목 길이 검사
    if (row.title && row.title.toString().trim().length < 2) {
      errors.push(`${rowNumber}행: 상품명은 2글자 이상이어야 합니다.`);
    }
    
    // 설명 길이 검사
    if (row.description && row.description.toString().trim().length < 10) {
      errors.push(`${rowNumber}행: 상품 설명은 10글자 이상이어야 합니다.`);
    }
  });
  
  return {
    isValid: errors.length === 0,
    errors
  };
}

// 상품 데이터 변환 함수
export function transformProductData(rawData, user) {
  const transformedData = rawData.map(row => {
    const price = parseInt(row.price.toString().replace(/[^0-9]/g, ''));
    
    return {
      title: row.title.toString().trim(),
      price: price,
      description: row.description?.toString().trim() || '', // 설명이 없으면 빈 문자열
      category: row.category.toString().trim().toLowerCase(),
      condition: row.condition.toString().trim().toLowerCase(),
      region: row.region?.toString().trim() || '서울',
      district: row.district?.toString().trim() || '강남구',
      fullLocation: `${row.region || '서울'} ${row.district || '강남구'}`,
      detailAddress: row.detailAddress?.toString().trim() || `${row.region || '서울'} ${row.district || '강남구'}`,
      latitude: parseFloat(row.latitude) || null,
      longitude: parseFloat(row.longitude) || null,
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
      searchKeywords: [row.title.toString().trim().toLowerCase(), row.category.toString().trim().toLowerCase()],
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
