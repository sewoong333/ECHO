// AI 기반 가격 분석 및 추천 시스템
import { 
  collection, 
  getDocs, 
  query, 
  where, 
  orderBy, 
  limit,
  addDoc,
  serverTimestamp
} from "firebase/firestore";
import { db } from "./firebase";

// 악기 브랜드별 가중치
export const BRAND_WEIGHTS = {
  // 기타 브랜드
  'Gibson': 1.5,
  'Fender': 1.4,
  'Martin': 1.6,
  'Taylor': 1.5,
  'PRS': 1.3,
  'Epiphone': 1.1,
  'Squier': 1.0,
  'Yamaha_Guitar': 1.2,
  'Ibanez': 1.1,
  'Cort': 0.9,
  
  // 피아노 브랜드
  'Steinway': 2.0,
  'Bosendorfer': 1.9,
  'Fazioli': 1.8,
  'Kawai': 1.3,
  'Yamaha_Piano': 1.2,
  'Young Chang': 1.0,
  'Samick': 0.9,
  
  // 관악기
  'Selmer': 1.8,
  'Yanagisawa': 1.6,
  'Cannonball': 1.4,
  'Buffet': 1.5,
  'Bach': 1.4,
  
  // 기본값
  'default': 1.0
};

// 상태별 가격 조정 계수
export const CONDITION_MULTIPLIERS = {
  'excellent': 0.9,  // 매우 좋음: 90%
  'good': 0.8,       // 좋음: 80%
  'fair': 0.65,      // 보통: 65%
  'poor': 0.4        // 나쁨: 40%
};

// 연식별 감가상각률 (연간)
export const DEPRECIATION_RATES = {
  'guitar': 0.08,      // 기타: 연 8%
  'piano': 0.05,       // 피아노: 연 5%
  'drums': 0.10,       // 드럼: 연 10%
  'wind': 0.07,        // 관악기: 연 7%
  'audio': 0.15,       // 오디오: 연 15%
  'default': 0.08
};

export const priceAnalysisService = {
  // 시장가 분석을 위한 유사 상품 검색
  async findSimilarProducts(productData, options = {}) {
    try {
      const {
        category = productData.category,
        brand = productData.brand,
        model = productData.model,
        priceRange = 0.3, // 30% 범위
        limit: searchLimit = 50
      } = options;

      // 기본 쿼리: 같은 카테고리
      let constraints = [
        where('category', '==', category),
        where('status', '==', 'active'),
        orderBy('createdAt', 'desc'),
        limit(searchLimit)
      ];

      const q = query(collection(db, 'products'), ...constraints);
      const querySnapshot = await getDocs(q);
      
      let products = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      // 클라이언트 사이드 필터링으로 유사도 계산
      products = products.map(product => {
        let similarity = 0;
        
        // 브랜드 일치 (40점)
        if (brand && product.brand && 
            product.brand.toLowerCase() === brand.toLowerCase()) {
          similarity += 40;
        }
        
        // 모델 일치 (30점)
        if (model && product.model && 
            product.model.toLowerCase().includes(model.toLowerCase())) {
          similarity += 30;
        }
        
        // 가격 범위 유사성 (20점)
        if (productData.price && product.price) {
          const priceDiff = Math.abs(product.price - productData.price) / productData.price;
          if (priceDiff <= priceRange) {
            similarity += 20 * (1 - priceDiff / priceRange);
          }
        }
        
        // 제목 키워드 유사성 (10점)
        if (productData.title && product.title) {
          const titleWords = productData.title.toLowerCase().split(' ');
          const productWords = product.title.toLowerCase().split(' ');
          const commonWords = titleWords.filter(word => 
            productWords.some(pw => pw.includes(word) || word.includes(pw))
          );
          similarity += (commonWords.length / titleWords.length) * 10;
        }
        
        return { ...product, similarity };
      });

      // 유사도 기준으로 정렬하고 상위 결과만 반환
      return products
        .filter(p => p.similarity > 10) // 최소 유사도 필터
        .sort((a, b) => b.similarity - a.similarity)
        .slice(0, 20);
        
    } catch (error) {
      console.error('유사 상품 검색 실패:', error);
      return [];
    }
  },

  // AI 가격 예측 알고리즘
  async predictPrice(productData) {
    try {
      console.log('가격 예측 시작:', productData.title);
      
      // 1. 유사 상품 검색
      const similarProducts = await this.findSimilarProducts(productData);
      
      if (similarProducts.length === 0) {
        throw new Error('유사한 상품을 찾을 수 없습니다.');
      }

      // 2. 기본 시장가 계산 (유사 상품들의 가중 평균)
      const basePrice = this.calculateWeightedAveragePrice(similarProducts);
      
      // 3. 브랜드 가중치 적용
      const brandWeight = this.getBrandWeight(productData.brand, productData.category);
      let adjustedPrice = basePrice * brandWeight;
      
      // 4. 상태별 조정
      if (productData.condition) {
        const conditionMultiplier = CONDITION_MULTIPLIERS[productData.condition] || 0.8;
        adjustedPrice *= conditionMultiplier;
      }
      
      // 5. 연식별 감가상각 적용
      if (productData.yearOfManufacture) {
        const currentYear = new Date().getFullYear();
        const age = currentYear - productData.yearOfManufacture;
        const depreciationRate = DEPRECIATION_RATES[productData.category] || DEPRECIATION_RATES.default;
        const depreciationMultiplier = Math.pow(1 - depreciationRate, age);
        adjustedPrice *= Math.max(depreciationMultiplier, 0.2); // 최소 20% 가치 보장
      }

      // 6. 시장 트렌드 반영 (최근 30일 가격 변동)
      const trendMultiplier = await this.calculateTrendMultiplier(productData.category);
      adjustedPrice *= trendMultiplier;

      // 7. 가격 범위 계산
      const priceRange = this.calculatePriceRange(adjustedPrice, similarProducts);
      
      const result = {
        predictedPrice: Math.round(adjustedPrice),
        priceRange,
        confidence: this.calculateConfidence(similarProducts),
        marketData: {
          similarProductsCount: similarProducts.length,
          averageMarketPrice: Math.round(basePrice),
          priceVariance: this.calculatePriceVariance(similarProducts)
        },
        factors: {
          brandWeight,
          conditionAdjustment: CONDITION_MULTIPLIERS[productData.condition] || 1,
          ageAdjustment: productData.yearOfManufacture ? 
            Math.pow(1 - (DEPRECIATION_RATES[productData.category] || 0.08), 
                    new Date().getFullYear() - productData.yearOfManufacture) : 1,
          trendAdjustment: trendMultiplier
        }
      };

      // 8. 분석 결과 저장 (학습 데이터로 활용)
      await this.savePriceAnalysis({
        productData,
        result,
        similarProducts: similarProducts.slice(0, 5) // 상위 5개만 저장
      });

      console.log('가격 예측 완료:', result);
      return result;
      
    } catch (error) {
      console.error('가격 예측 실패:', error);
      throw error;
    }
  },

  // 가중 평균 가격 계산
  calculateWeightedAveragePrice(products) {
    if (products.length === 0) return 0;

    let totalWeight = 0;
    let weightedSum = 0;

    products.forEach(product => {
      // 유사도를 가중치로 사용
      const weight = product.similarity / 100;
      weightedSum += product.price * weight;
      totalWeight += weight;
    });

    return totalWeight > 0 ? weightedSum / totalWeight : 
           products.reduce((sum, p) => sum + p.price, 0) / products.length;
  },

  // 브랜드 가중치 조회
  getBrandWeight(brand) {
    if (!brand) return 1.0;
    
    const brandKey = brand.charAt(0).toUpperCase() + brand.slice(1).toLowerCase();
    return BRAND_WEIGHTS[brandKey] || BRAND_WEIGHTS.default;
  },

  // 시장 트렌드 계산
  async calculateTrendMultiplier(category) {
    try {
      // 최근 30일 판매 데이터 조회
      const thirtyDaysAgo = new Date();
      thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

      const recentQuery = query(
        collection(db, 'products'),
        where('category', '==', category),
        where('status', '==', 'sold'),
        where('soldAt', '>=', thirtyDaysAgo),
        limit(100)
      );

      const snapshot = await getDocs(recentQuery);
      const recentSales = snapshot.docs.map(doc => doc.data());

      if (recentSales.length < 5) {
        return 1.0; // 데이터 부족시 기본값
      }

      // 가격 상승/하락 트렌드 계산
      const _priceChanges = recentSales.map(() => {
        // 실제로는 상품의 원래 등록가와 판매가를 비교해야 함
        // 여기서는 단순화하여 시장 활성도로 트렌드 판단
        return 1.0;
      });

      // 시장 활성도 기반 조정 (거래량이 많으면 가격 상승 압력)
      const marketActivity = Math.min(recentSales.length / 50, 1.2); // 최대 20% 증가
      
      return marketActivity;
      
    } catch (error) {
      console.error('트렌드 계산 실패:', error);
      return 1.0;
    }
  },

  // 가격 범위 계산
  calculatePriceRange(predictedPrice, similarProducts) {
    const _prices = similarProducts.map(p => p.price);
    const variance = this.calculatePriceVariance(similarProducts);
    
    // 표준편차 기반 범위 계산
    const standardDeviation = Math.sqrt(variance);
    const rangeWidth = Math.max(standardDeviation * 0.5, predictedPrice * 0.1); // 최소 10% 범위
    
    return {
      min: Math.round(Math.max(predictedPrice - rangeWidth, predictedPrice * 0.7)),
      max: Math.round(predictedPrice + rangeWidth),
      optimal: Math.round(predictedPrice)
    };
  },

  // 가격 분산 계산
  calculatePriceVariance(products) {
    if (products.length < 2) return 0;
    
    const prices = products.map(p => p.price);
    const mean = prices.reduce((sum, price) => sum + price, 0) / prices.length;
    const variance = prices.reduce((sum, price) => sum + Math.pow(price - mean, 2), 0) / prices.length;
    
    return variance;
  },

  // 예측 신뢰도 계산
  calculateConfidence(similarProducts) {
    if (similarProducts.length === 0) return 0;
    
    let confidence = 0;
    
    // 유사 상품 수에 따른 신뢰도 (최대 40점)
    confidence += Math.min(similarProducts.length * 4, 40);
    
    // 평균 유사도에 따른 신뢰도 (최대 40점)
    const avgSimilarity = similarProducts.reduce((sum, p) => sum + p.similarity, 0) / similarProducts.length;
    confidence += (avgSimilarity / 100) * 40;
    
    // 가격 일관성에 따른 신뢰도 (최대 20점)
    const priceVariance = this.calculatePriceVariance(similarProducts);
    const avgPrice = similarProducts.reduce((sum, p) => sum + p.price, 0) / similarProducts.length;
    const cvCoefficient = Math.sqrt(priceVariance) / avgPrice; // 변동계수
    const consistencyScore = Math.max(0, 1 - cvCoefficient) * 20;
    confidence += consistencyScore;
    
    return Math.round(Math.min(confidence, 100));
  },

  // 분석 결과 저장 (학습 데이터)
  async savePriceAnalysis(analysisData) {
    try {
      await addDoc(collection(db, 'price_analyses'), {
        ...analysisData,
        createdAt: serverTimestamp()
      });
    } catch (error) {
      console.error('가격 분석 데이터 저장 실패:', error);
      // 실패해도 메인 기능에는 영향 없음
    }
  },

  // 카테고리별 시장 트렌드 조회
  async getCategoryTrends(category, period = 30) {
    try {
      const startDate = new Date();
      startDate.setDate(startDate.getDate() - period);

      const q = query(
        collection(db, 'products'),
        where('category', '==', category),
        where('createdAt', '>=', startDate),
        orderBy('createdAt', 'desc'),
        limit(100)
      );

      const snapshot = await getDocs(q);
      const products = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      // 일별 평균 가격 계산
      const dailyPrices = {};
      products.forEach(product => {
        const dateKey = product.createdAt.toDate().toISOString().split('T')[0];
        if (!dailyPrices[dateKey]) {
          dailyPrices[dateKey] = [];
        }
        dailyPrices[dateKey].push(product.price);
      });

      const trendData = Object.entries(dailyPrices).map(([date, prices]) => ({
        date,
        averagePrice: prices.reduce((sum, price) => sum + price, 0) / prices.length,
        productCount: prices.length
      })).sort((a, b) => a.date.localeCompare(b.date));

      return {
        category,
        period,
        data: trendData,
        summary: {
          totalProducts: products.length,
          averagePrice: products.reduce((sum, p) => sum + p.price, 0) / products.length,
          priceRange: {
            min: Math.min(...products.map(p => p.price)),
            max: Math.max(...products.map(p => p.price))
          }
        }
      };
      
    } catch (error) {
      console.error('카테고리 트렌드 조회 실패:', error);
      return null;
    }
  },

  // 가격 제안 생성
  generatePriceSuggestions(predictedPrice) {
    const { min, max, optimal } = predictedPrice;
    
    return {
      quick_sale: {
        price: min,
        label: '빠른 판매',
        description: '시장가보다 낮은 가격으로 빠른 판매를 원할 때',
        expectedDays: '1-3일',
        probability: '90%'
      },
      market_price: {
        price: optimal,
        label: '시장가',
        description: '현재 시장 상황을 반영한 적정 가격',
        expectedDays: '1-2주',
        probability: '70%'
      },
      premium_price: {
        price: max,
        label: '프리미엄',
        description: '상품 상태가 매우 좋거나 희귀한 경우',
        expectedDays: '2-4주',
        probability: '40%'
      }
    };
  }
};

export default priceAnalysisService;