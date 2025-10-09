/**
 * 이미지 파일 매칭 및 업로드 유틸리티
 */

import { imageService } from './firebase';

/**
 * 이미지 파일 확장자 목록
 */
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.gif', '.webp', '.bmp'];

/**
 * 파일이 이미지인지 확인
 * @param {File} file 
 * @returns {boolean}
 */
export function isImageFile(file) {
  const fileName = file.name.toLowerCase();
  return IMAGE_EXTENSIONS.some(ext => fileName.endsWith(ext));
}

/**
 * 폴더에서 이미지 파일들을 읽어오는 함수 (웹에서는 제한적)
 * @param {FileList} files - 선택된 파일들
 * @returns {Object} 폴더명을 키로 하는 이미지 파일 객체
 */
export function organizeImagesByFolder(files) {
  const imageMap = {};
  
  Array.from(files).forEach(file => {
    if (!isImageFile(file)) return;
    
    // 파일 경로에서 폴더명 추출 (웹에서는 파일명에 폴더 정보가 제한적)
    const pathParts = file.webkitRelativePath ? file.webkitRelativePath.split('/') : [file.name];
    const folderName = pathParts.length > 1 ? pathParts[0] : 'default';
    
    if (!imageMap[folderName]) {
      imageMap[folderName] = [];
    }
    
    imageMap[folderName].push(file);
  });
  
  return imageMap;
}

/**
 * 상품명 기반으로 이미지 파일들을 매칭
 * @param {string} productTitle - 상품명
 * @param {Array} imageFiles - 이미지 파일 배열
 * @returns {Array} 매칭된 이미지 파일들
 */
export function matchImagesByTitle(productTitle, imageFiles) {
  if (!productTitle || !imageFiles || imageFiles.length === 0) {
    return [];
  }
  
  // 상품명을 정규화 (특수문자 제거, 소문자 변환)
  const normalizedTitle = productTitle
    .toLowerCase()
    .replace(/[^a-z0-9가-힣]/g, '')
    .trim();
  
  const matchedImages = [];
  
  imageFiles.forEach(file => {
    const fileName = file.name.toLowerCase();
    const normalizedFileName = fileName
      .replace(/[^a-z0-9가-힣]/g, '')
      .replace(/\.[^/.]+$/, ''); // 확장자 제거
    
    // 파일명에 상품명이 포함되어 있는지 확인
    if (normalizedFileName.includes(normalizedTitle) || 
        normalizedTitle.includes(normalizedFileName)) {
      matchedImages.push(file);
    }
  });
  
  // 매칭되지 않은 경우 첫 번째 이미지를 사용
  if (matchedImages.length === 0 && imageFiles.length > 0) {
    matchedImages.push(imageFiles[0]);
  }
  
  return matchedImages;
}

/**
 * 순서 기반으로 이미지 파일들을 매칭
 * @param {number} productIndex - 상품 인덱스 (0부터 시작)
 * @param {number} imagesPerProduct - 상품당 이미지 개수
 * @param {Array} imageFiles - 전체 이미지 파일 배열
 * @returns {Array} 매칭된 이미지 파일들
 */
export function matchImagesByOrder(productIndex, imagesPerProduct, imageFiles) {
  if (!imageFiles || imageFiles.length === 0) {
    return [];
  }
  
  const startIndex = productIndex * imagesPerProduct;
  const endIndex = startIndex + imagesPerProduct;
  
  return imageFiles.slice(startIndex, endIndex);
}

/**
 * 이미지 파일들을 Firebase에 업로드
 * @param {Array} imageFiles - 업로드할 이미지 파일들
 * @param {string} userId - 사용자 ID
 * @returns {Promise<Array>} 업로드된 이미지 URL 배열
 */
export async function uploadProductImages(imageFiles, userId) {
  if (!imageFiles || imageFiles.length === 0) {
    return [];
  }
  
  const uploadPromises = imageFiles.map(file => 
    imageService.uploadProductImage(file, userId)
  );
  
  try {
    const results = await Promise.all(uploadPromises);
    return results.map(result => result.url);
  } catch (error) {
    console.error('이미지 업로드 실패:', error);
    throw new Error(`이미지 업로드 실패: ${error.message}`);
  }
}

/**
 * 대량 상품 등록을 위한 이미지 매칭 및 업로드
 * @param {Array} products - 상품 데이터 배열
 * @param {Object} imageMap - 폴더별 이미지 파일 맵
 * @param {string} userId - 사용자 ID
 * @param {string} matchingType - 매칭 타입 ('title', 'order', 'folder')
 * @returns {Promise<Array>} 이미지 URL이 추가된 상품 데이터 배열
 */
export async function processBulkProductImages(products, imageMap, userId, matchingType = 'title') {
  const processedProducts = [];
  
  for (let i = 0; i < products.length; i++) {
    const product = { ...products[i] };
    let matchedImages = [];
    
    try {
      switch (matchingType) {
        case 'folder':
          // 폴더명 기반 매칭
          const folderName = product.image_folder || `product_${i + 1}`;
          const folderImages = imageMap[folderName] || imageMap['default'] || [];
          matchedImages = folderImages;
          break;
          
        case 'title':
          // 상품명 기반 매칭
          const allImages = Object.values(imageMap).flat();
          matchedImages = matchImagesByTitle(product.title, allImages);
          break;
          
        case 'order':
          // 순서 기반 매칭
          const allImagesOrder = Object.values(imageMap).flat();
          matchedImages = matchImagesByOrder(i, 3, allImagesOrder); // 상품당 3장
          break;
          
        default:
          matchedImages = [];
      }
      
      // 이미지 업로드 (최대 10장)
      if (matchedImages.length > 0) {
        const imagesToUpload = matchedImages.slice(0, 10);
        const imageUrls = await uploadProductImages(imagesToUpload, userId);
        product.images = imageUrls;
        
        console.log(`✅ 상품 ${product.title}: ${imageUrls.length}개 이미지 업로드 완료`);
      } else {
        product.images = [];
        console.log(`⚠️ 상품 ${product.title}: 매칭된 이미지 없음`);
      }
      
    } catch (error) {
      console.error(`❌ 상품 ${product.title} 이미지 처리 실패:`, error);
      product.images = [];
    }
    
    processedProducts.push(product);
  }
  
  return processedProducts;
}

/**
 * 이미지 폴더 구조 분석 및 미리보기 생성
 * @param {FileList} files - 선택된 파일들
 * @returns {Object} 폴더 구조 정보
 */
export function analyzeImageStructure(files) {
  const structure = {
    totalFiles: 0,
    totalImages: 0,
    folders: {},
    unorganized: []
  };
  
  Array.from(files).forEach(file => {
    structure.totalFiles++;
    
    if (isImageFile(file)) {
      structure.totalImages++;
      
      const pathParts = file.webkitRelativePath ? file.webkitRelativePath.split('/') : [file.name];
      
      if (pathParts.length > 1) {
        const folderName = pathParts[0];
        if (!structure.folders[folderName]) {
          structure.folders[folderName] = [];
        }
        structure.folders[folderName].push({
          name: file.name,
          size: file.size,
          type: file.type
        });
      } else {
        structure.unorganized.push({
          name: file.name,
          size: file.size,
          type: file.type
        });
      }
    }
  });
  
  return structure;
}
