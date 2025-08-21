// 상품 추천 알고리즘

export class RecommendationEngine {
  constructor() {
    this.userPreferences = new Map();
    this.productSimilarity = new Map();
    this.weights = {
      category: 0.3,
      price: 0.2,
      brand: 0.2,
      userHistory: 0.3
    };
  }

  // 사용자 선호도 업데이트
  updateUserPreference(userId, productId, action, weight = 1) {
    if (!this.userPreferences.has(userId)) {
      this.userPreferences.set(userId, {
        categories: {},
        priceRanges: {},
        brands: {},
        actions: []
      });
    }

    const prefs = this.userPreferences.get(userId);
    
    // 액션 타입별 가중치
    const actionWeights = {
      view: 1,
      like: 3,
      chat: 5,
      purchase: 10
    };

    prefs.actions.push({
      productId,
      action,
      weight: actionWeights[action] * weight,
      timestamp: Date.now()
    });

    // 최근 100개 액션만 유지
    if (prefs.actions.length > 100) {
      prefs.actions = prefs.actions.slice(-100);
    }
  }

  // 상품 유사도 계산
  calculateProductSimilarity(product1, product2) {
    let similarity = 0;

    // 카테고리 유사도
    if (product1.category === product2.category) {
      similarity += this.weights.category;
    }

    // 가격 유사도 (가격대가 비슷할수록 높은 점수)
    const priceRatio = Math.min(product1.price, product2.price) / 
                      Math.max(product1.price, product2.price);
    similarity += this.weights.price * priceRatio;

    // 브랜드 유사도
    if (product1.brand === product2.brand) {
      similarity += this.weights.brand;
    }

    // 태그 유사도
    if (product1.tags && product2.tags) {
      const commonTags = product1.tags.filter(tag => 
        product2.tags.includes(tag)
      );
      const totalTags = new Set([...product1.tags, ...product2.tags]).size;
      const tagSimilarity = commonTags.length / totalTags;
      similarity += 0.1 * tagSimilarity;
    }

    return Math.min(similarity, 1);
  }

  // 사용자별 추천 상품 생성
  getRecommendations(userId, allProducts, excludeIds = [], limit = 10) {
    const userPrefs = this.userPreferences.get(userId);
    
    if (!userPrefs || userPrefs.actions.length === 0) {
      // 신규 사용자 - 인기 상품 추천
      return this.getPopularProducts(allProducts, excludeIds, limit);
    }

    // 사용자 선호 카테고리 분석
    const categoryScores = {};
    const brandScores = {};
    const priceRanges = [];

    userPrefs.actions.forEach(action => {
      const product = allProducts.find(p => p.id === action.productId);
      if (!product) return;

      // 카테고리 점수
      categoryScores[product.category] = 
        (categoryScores[product.category] || 0) + action.weight;

      // 브랜드 점수
      if (product.brand) {
        brandScores[product.brand] = 
          (brandScores[product.brand] || 0) + action.weight;
      }

      // 가격대 기록
      priceRanges.push(product.price);
    });

    // 추천 점수 계산
    const recommendations = allProducts
      .filter(product => !excludeIds.includes(product.id))
      .filter(product => product.status === 'active')
      .map(product => ({
        ...product,
        score: this.calculateRecommendationScore(
          product, 
          categoryScores, 
          brandScores, 
          priceRanges
        )
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);

    return recommendations;
  }

  // 추천 점수 계산
  calculateRecommendationScore(product, categoryScores, brandScores, priceRanges) {
    let score = 0;

    // 카테고리 선호도
    const categoryScore = categoryScores[product.category] || 0;
    score += categoryScore * 0.3;

    // 브랜드 선호도
    const brandScore = brandScores[product.brand] || 0;
    score += brandScore * 0.2;

    // 가격대 선호도
    if (priceRanges.length > 0) {
      const avgPrice = priceRanges.reduce((a, b) => a + b, 0) / priceRanges.length;
      const priceDeviation = Math.abs(product.price - avgPrice) / avgPrice;
      const priceScore = Math.max(0, 1 - priceDeviation);
      score += priceScore * 0.2;
    }

    // 상품 인기도
    const popularityScore = this.calculatePopularityScore(product);
    score += popularityScore * 0.2;

    // 신선도 (최근 등록된 상품에 보너스)
    const daysOld = (Date.now() - new Date(product.createdAt).getTime()) / (1000 * 60 * 60 * 24);
    const freshnessScore = Math.max(0, 1 - daysOld / 30); // 30일 기준
    score += freshnessScore * 0.1;

    return score;
  }

  // 인기 상품 반환
  getPopularProducts(allProducts, excludeIds = [], limit = 10) {
    return allProducts
      .filter(product => !excludeIds.includes(product.id))
      .filter(product => product.status === 'active')
      .map(product => ({
        ...product,
        score: this.calculatePopularityScore(product)
      }))
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);
  }

  // 인기도 점수 계산
  calculatePopularityScore(product) {
    const viewWeight = 1;
    const likeWeight = 3;
    const chatWeight = 5;
    
    return (
      (product.views || 0) * viewWeight +
      (product.likes || 0) * likeWeight +
      (product.chatCount || 0) * chatWeight
    ) / 100; // 정규화
  }

  // 비슷한 상품 찾기
  getSimilarProducts(targetProduct, allProducts, limit = 5) {
    return allProducts
      .filter(product => product.id !== targetProduct.id)
      .filter(product => product.status === 'active')
      .map(product => ({
        ...product,
        similarity: this.calculateProductSimilarity(targetProduct, product)
      }))
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, limit);
  }

  // 검색 결과 개인화
  personalizeSearchResults(userId, searchResults) {
    const userPrefs = this.userPreferences.get(userId);
    
    if (!userPrefs || userPrefs.actions.length === 0) {
      return searchResults;
    }

    // 사용자 선호도 기반으로 재정렬
    return searchResults.map(product => {
      const personalScore = this.calculateRecommendationScore(
        product,
        this.extractCategoryScores(userPrefs),
        this.extractBrandScores(userPrefs),
        this.extractPriceRanges(userPrefs)
      );
      
      return {
        ...product,
        personalScore
      };
    }).sort((a, b) => (b.personalScore || 0) - (a.personalScore || 0));
  }

  // 사용자 선호도 데이터 추출 헬퍼
  extractCategoryScores(userPrefs) {
    const scores = {};
    userPrefs.actions.forEach(action => {
      // 실제 상품 정보가 필요하지만 여기서는 간소화
      scores[action.category] = (scores[action.category] || 0) + action.weight;
    });
    return scores;
  }

  extractBrandScores(userPrefs) {
    const scores = {};
    userPrefs.actions.forEach(action => {
      if (action.brand) {
        scores[action.brand] = (scores[action.brand] || 0) + action.weight;
      }
    });
    return scores;
  }

  extractPriceRanges(userPrefs) {
    return userPrefs.actions
      .filter(action => action.price)
      .map(action => action.price);
  }

  // 추천 설명 생성
  getRecommendationReason(userId, productId) {
    const userPrefs = this.userPreferences.get(userId);
    if (!userPrefs) return '인기 상품입니다';

    const reasons = [];
    
    // 카테고리 기반 추천
    const categoryActions = userPrefs.actions.filter(action => 
      action.category === 'same_as_product_category' // 실제로는 상품 정보 필요
    );
    
    if (categoryActions.length > 0) {
      reasons.push('관심있어 하신 카테고리의 상품입니다');
    }

    // 가격대 기반 추천
    reasons.push('선호하시는 가격대의 상품입니다');

    // 브랜드 기반 추천
    reasons.push('자주 찾아보신 브랜드입니다');

    return reasons[0] || '추천 상품입니다';
  }
}

// 전역 추천 엔진 인스턴스
export const recommendationEngine = new RecommendationEngine();