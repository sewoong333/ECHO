/**
 * 상품 설명 자동 생성 유틸리티
 * 대량 등록 시 기본적인 상품 설명을 자동으로 생성
 */

// 카테고리별 상품 설명 템플릿
const DESCRIPTION_TEMPLATES = {
  guitar: {
    excellent: [
      "거의 새 제품 수준의 기타입니다. 스크래치나 손상 없이 잘 관리되었습니다.",
      "최상의 상태를 유지하고 있는 기타로, 전문가용으로 적합합니다.",
      "거의 사용하지 않아 새 제품과 같은 상태입니다. 케이스와 함께 판매합니다."
    ],
    good: [
      "상태가 양호한 기타입니다. 약간의 사용 흔적이 있지만 전반적으로 잘 관리되었습니다.",
      "중급자용으로 적합한 기타로, 연습용이나 취미용으로 좋습니다.",
      "일반적인 사용 흔적이 있지만 소리와 기능은 완벽합니다."
    ],
    fair: [
      "사용 흔적이 있는 기타입니다. 튜닝과 기본 기능은 정상적으로 작동합니다.",
      "입문자용으로 적합한 기타로, 연습용으로 사용하기 좋습니다.",
      "일부 마모가 있지만 연주에는 전혀 문제가 없습니다."
    ],
    poor: [
      "사용 흔적이 많지만 연주 가능한 상태입니다. 수리가 필요할 수 있습니다.",
      "오래된 기타로 일부 수리가 필요하지만 기본 기능은 작동합니다.",
      "프로젝트용이나 수리 후 사용하기에 적합합니다."
    ]
  },
  piano: {
    excellent: [
      "거의 새 제품 수준의 피아노입니다. 튜닝이 완료되어 연주 준비가 되어 있습니다.",
      "최상의 상태를 유지하고 있는 피아노로, 전문가용으로 적합합니다.",
      "거의 사용하지 않아 새 제품과 같은 상태입니다. 케이스와 함께 판매합니다."
    ],
    good: [
      "상태가 양호한 피아노입니다. 약간의 사용 흔적이 있지만 전반적으로 잘 관리되었습니다.",
      "중급자용으로 적합한 피아노로, 연습용이나 취미용으로 좋습니다.",
      "일반적인 사용 흔적이 있지만 소리와 기능은 완벽합니다."
    ],
    fair: [
      "사용 흔적이 있는 피아노입니다. 튜닝과 기본 기능은 정상적으로 작동합니다.",
      "입문자용으로 적합한 피아노로, 연습용으로 사용하기 좋습니다.",
      "일부 마모가 있지만 연주에는 전혀 문제가 없습니다."
    ],
    poor: [
      "사용 흔적이 많지만 연주 가능한 상태입니다. 튜닝이 필요할 수 있습니다.",
      "오래된 피아노로 일부 수리가 필요하지만 기본 기능은 작동합니다.",
      "프로젝트용이나 수리 후 사용하기에 적합합니다."
    ]
};

// 카테고리별 추가 설명 템플릿
const CATEGORY_SPECIFIC_DESCRIPTIONS = {
  guitar: [
    "코드 연주와 멜로디 연주 모두에 적합합니다.",
    "다양한 장르의 음악에 활용할 수 있습니다.",
    "연습용부터 공연용까지 폭넓게 사용 가능합니다."
  ],
  piano: [
    "클래식부터 팝까지 다양한 장르에 적합합니다.",
    "연습용부터 공연용까지 폭넓게 사용 가능합니다.",
    "입문자부터 전문가까지 모두 사용할 수 있습니다."
  ],
  drum: [
    "다양한 장르의 음악에 활용할 수 있습니다.",
    "연습용부터 공연용까지 폭넓게 사용 가능합니다.",
    "드럼 연주의 기본기를 다지기에 적합합니다."
  ],
  bass: [
    "베이스 라인 연주에 최적화되어 있습니다.",
    "다양한 장르의 음악에 활용할 수 있습니다.",
    "연습용부터 공연용까지 폭넓게 사용 가능합니다."
  ],
  violin: [
    "클래식 연주에 최적화되어 있습니다.",
    "입문자부터 전문가까지 모두 사용할 수 있습니다.",
    "다양한 장르의 음악에 활용할 수 있습니다."
  ],
  accessory: [
    "악기 연주에 필수적인 액세서리입니다.",
    "연주 품질 향상에 도움이 됩니다.",
    "다양한 상황에서 활용할 수 있습니다."
  ]
};

// 가격대별 추가 설명
const PRICE_DESCRIPTIONS = {
  high: [
    "프로페셔널급 제품으로 전문가용으로 적합합니다.",
    "고품질의 소리와 성능을 제공합니다.",
    "장기간 사용해도 품질이 유지됩니다."
  ],
  medium: [
    "중급자용으로 적합한 제품입니다.",
    "가성비가 뛰어난 제품으로 추천합니다.",
    "연습용부터 공연용까지 폭넓게 사용 가능합니다."
  ],
  low: [
    "입문자용으로 적합한 제품입니다.",
    "가격 대비 우수한 성능을 제공합니다.",
    "연습용으로 사용하기에 최적입니다."
  ]
};

/**
 * 상품 설명을 자동으로 생성하는 함수
 * @param {Object} product - 상품 정보
 * @returns {string} 생성된 상품 설명
 */
export function generateProductDescription(product) {
  const { title, category, condition, price } = product;
  
  // 기본 설명 템플릿 선택
  const templates = DESCRIPTION_TEMPLATES[category] || DESCRIPTION_TEMPLATES.guitar;
  const baseDescription = getRandomTemplate(templates[condition] || templates.good);
  
  // 카테고리별 추가 설명
  const categoryDescription = getRandomTemplate(CATEGORY_SPECIFIC_DESCRIPTIONS[category] || []);
  
  // 가격대별 추가 설명
  const priceDescription = getPriceDescription(price);
  
  // 상품명 기반 맞춤 설명
  const customDescription = generateCustomDescription(title, category);
  
  // 모든 설명을 조합
  const descriptions = [
    baseDescription,
    categoryDescription,
    priceDescription,
    customDescription
  ].filter(desc => desc && desc.trim());
  
  return descriptions.join(' ');
}

/**
 * 랜덤 템플릿 선택
 * @param {Array} templates - 템플릿 배열
 * @returns {string} 선택된 템플릿
 */
function getRandomTemplate(templates) {
  if (!templates || templates.length === 0) return '';
  return templates[Math.floor(Math.random() * templates.length)];
}

/**
 * 가격대별 설명 생성
 * @param {number} price - 가격
 * @returns {string} 가격대별 설명
 */
function getPriceDescription(price) {
  if (price >= 1000000) {
    return getRandomTemplate(PRICE_DESCRIPTIONS.high);
  } else if (price >= 300000) {
    return getRandomTemplate(PRICE_DESCRIPTIONS.medium);
  } else {
    return getRandomTemplate(PRICE_DESCRIPTIONS.low);
  }
}

/**
 * 상품명 기반 맞춤 설명 생성
 * @param {string} title - 상품명
 * @param {string} category - 카테고리
 * @returns {string} 맞춤 설명
 */
function generateCustomDescription(title, category) {
  const titleLower = title.toLowerCase();
  
  // 브랜드별 설명
  if (titleLower.includes('gibson')) {
    return "전설적인 기타 브랜드 Gibson의 제품으로, 뛰어난 소리와 품질을 자랑합니다.";
  }
  if (titleLower.includes('fender')) {
    return "클래식한 디자인과 뛰어난 소리로 유명한 Fender의 제품입니다.";
  }
  if (titleLower.includes('yamaha')) {
    return "신뢰할 수 있는 브랜드 Yamaha의 제품으로, 우수한 품질과 가성비를 제공합니다.";
  }
  if (titleLower.includes('roland')) {
    return "디지털 악기의 선두주자 Roland의 제품으로, 혁신적인 기술과 품질을 자랑합니다.";
  }
  if (titleLower.includes('martin')) {
    return "어쿠스틱 기타의 명가 Martin의 제품으로, 최고급 소리와 품질을 제공합니다.";
  }
  if (titleLower.includes('taylor')) {
    return "현대적인 디자인과 뛰어난 소리로 유명한 Taylor의 제품입니다.";
  }
  
  // 모델별 설명
  if (titleLower.includes('les paul')) {
    return "레전드적인 모델로, 록과 블루스 연주에 최적화되어 있습니다.";
  }
  if (titleLower.includes('stratocaster')) {
    return "클래식한 디자인과 다용도로 사용 가능한 모델입니다.";
  }
  if (titleLower.includes('telecaster')) {
    return "깔끔한 디자인과 뛰어난 소리로 유명한 모델입니다.";
  }
  if (titleLower.includes('p-125') || titleLower.includes('fp-30')) {
    return "입문자부터 중급자까지 적합한 디지털 피아노입니다.";
  }
  if (titleLower.includes('d-28')) {
    return "전문가용 어쿠스틱 기타로, 최고급 소리와 품질을 제공합니다.";
  }
  
  // 기본 설명
  return "검증된 품질과 성능을 자랑하는 제품입니다.";
}

/**
 * 상품 설명을 자동으로 생성하고 기존 설명과 병합
 * @param {Object} product - 상품 정보
 * @returns {Object} 설명이 추가된 상품 정보
 */
export function enhanceProductWithDescription(product) {
  // 이미 설명이 있고 충분히 긴 경우 그대로 사용
  if (product.description && product.description.length >= 20) {
    return product;
  }
  
  // 자동 생성된 설명 사용
  const autoDescription = generateProductDescription(product);
  
  return {
    ...product,
    description: autoDescription
  };
}

/**
 * 대량 상품 데이터에 자동 설명 추가
 * @param {Array} products - 상품 배열
 * @returns {Array} 설명이 추가된 상품 배열
 */
export function enhanceBulkProductsWithDescriptions(products) {
  return products.map(product => enhanceProductWithDescription(product));
}
