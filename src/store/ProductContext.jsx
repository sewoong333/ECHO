import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import { UserContext } from "./UserContext";
import notificationService from "../utils/notificationService";
import {
  productService,
  subscriptionService,
  PRODUCT_STATUS,
  INSTRUMENT_CATEGORIES,
} from "../utils/firebase";
// import { loadDummyProductsForDev } from "../utils/createDummyData";

export const ProductContext = createContext();

export function ProductProvider({ children }) {
  // 상품 관련 상태
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [lastDoc, setLastDoc] = useState(null);

  // 필터 및 검색 상태
  const [filters, setFilters] = useState({
    category: "",
    region: "",
    priceMin: "",
    priceMax: "",
    condition: "",
    sortBy: "latest",
    searchQuery: "",
  });

  // 사용자별 데이터
  const [userProducts, setUserProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);

  const { user } = useContext(UserContext);

  // 필터링 및 정렬 적용 함수
  const applyFiltersAndSort = useCallback((productList, currentFilters) => {
    let filteredProducts = [...productList];

    // 삭제된 상품 제거
    filteredProducts = filteredProducts.filter((product) => 
      product.status !== PRODUCT_STATUS.DELETED && 
      product.status !== PRODUCT_STATUS.SUSPENDED
    );

    // 필터 적용
    if (currentFilters.category) {
      filteredProducts = filteredProducts.filter(p => p.category === currentFilters.category);
    }

    if (currentFilters.region) {
      filteredProducts = filteredProducts.filter(p => p.region === currentFilters.region);
    }

    if (currentFilters.condition) {
      filteredProducts = filteredProducts.filter(p => p.condition === currentFilters.condition);
    }

    if (currentFilters.priceMin) {
      filteredProducts = filteredProducts.filter(p => p.price >= parseInt(currentFilters.priceMin));
    }

    if (currentFilters.priceMax) {
      filteredProducts = filteredProducts.filter(p => p.price <= parseInt(currentFilters.priceMax));
    }

    if (currentFilters.searchQuery && currentFilters.searchQuery.trim()) {
      const searchLower = currentFilters.searchQuery.toLowerCase();
      filteredProducts = filteredProducts.filter(p => 
        p.title?.toLowerCase().includes(searchLower) ||
        p.description?.toLowerCase().includes(searchLower)
      );
    }

    // 정렬 적용
    switch (currentFilters.sortBy) {
      case "price_low":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "price_high":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case "popular":
        filteredProducts.sort((a, b) => (b.likeCount || 0) - (a.likeCount || 0));
        break;
      case "latest":
      default:
        // 최신순 정렬 (기본값)
        filteredProducts.sort((a, b) => {
          const timeA = a.createdAt?.toDate?.() || new Date(a.createdAt) || new Date();
          const timeB = b.createdAt?.toDate?.() || new Date(b.createdAt) || new Date();
          return timeB - timeA;
        });
        break;
    }

    return filteredProducts;
  }, []);

  // 초기 상품 로드
  const loadProducts = useCallback(
    async (resetList = false) => {
      try {
        setLoading(true);
        setError(null);

        const options = {
          ...filters,
          pageSize: 20,
          lastDoc: resetList ? null : lastDoc,
        };

        console.log("🔍 상품 로드 중...", options);

        const result = await productService.getProducts(options);

        // 소비자 사용을 위해 Firebase 데이터만 사용 (더미 데이터 제거)
        let finalProducts = result.products;
        
        // 상품이 없으면 빈 배열로 설정
        if (result.products.length === 0 && resetList) {
          console.log("📦 등록된 상품이 없습니다.");
        }

        if (resetList) {
          console.log("🔄 상품 목록 리셋, 새 상품:", finalProducts.length, "개");
          setProducts(finalProducts);
        } else {
          console.log("➕ 상품 추가 로드:", finalProducts.length, "개");
          setProducts((prev) => [...prev, ...finalProducts]);
        }

        setHasMore(result.hasMore || finalProducts.length > 0);
        setLastDoc(result.lastDoc);

        console.log("✅ 상품 로드 완료:", finalProducts.length, "개");
      } catch (err) {
        console.error("❌ 상품 로드 실패:", err);
        setError(err.message || "상품을 불러오는데 실패했습니다.");
      } finally {
        setLoading(false);
      }
    },
    [filters, lastDoc],
  );

  // 앱 시작 시 초기 상품 로드 (사용자 로그인 여부와 관계없이)
  useEffect(() => {
    console.log("🚀 앱 시작 - 초기 상품 로드");
    setLastDoc(null);
    loadProducts(true);
  }, []); // 빈 배열로 앱 시작 시 한 번만 실행

  // 사용자 로그인 시 찜한 상품 로드
  useEffect(() => {
    if (user?.uid && products.length > 0) {
      loadLikedProducts();
    }
  }, [user?.uid, products, loadLikedProducts]);

  // 필터 변경 시 상품 목록 새로고침 (검색어는 제외)
  useEffect(() => {
    console.log("🔧 필터 변경 - 상품 다시 로드");
    setLastDoc(null);
    loadProducts(true);
  }, [
    filters.category,
    filters.region,
    filters.priceMin,
    filters.priceMax,
    filters.condition,
    filters.sortBy,
  ]);

  // 검색어 변경 시에만 별도 처리
  useEffect(() => {
    if (filters.searchQuery.trim()) {
      console.log("🔍 검색어 변경 - 상품 다시 로드:", filters.searchQuery);
      setLastDoc(null);
      loadProducts(true);
    }
  }, [filters.searchQuery]);

  // 무한 스크롤을 위한 추가 로드
  const loadMoreProducts = useCallback(() => {
    if (!loading && hasMore) {
      loadProducts(false);
    }
  }, [loading, hasMore, loadProducts]);

  // 실시간 데이터 구독 - 초기 로드 완료 후에만 활성화
  useEffect(() => {
    // 초기 로드가 완료되지 않았으면 구독하지 않음
    if (loading && products.length === 0) {
      console.log("⏳ 초기 로드 대기 중... 실시간 구독 연기");
      return;
    }

    console.log("👂 실시간 상품 구독 시작... (초기 데이터:", products.length, "개)");

    const unsubscribe = subscriptionService.subscribeToProducts(
      (realtimeProducts) => {
        console.log("🔄 실시간 업데이트:", realtimeProducts.length, "개");
        
        // 실시간 데이터를 직접 사용
        setProducts(realtimeProducts);
      },
      filters,
    );

    return () => {
      console.log("👋 실시간 구독 해제");
      unsubscribe();
    };
  }, [filters, loading, products.length]); // loading과 products.length도 의존성에 추가

  // 사용자별 상품 로드
  const loadUserProducts = useCallback(
    async (userId = null) => {
      try {
        const targetUserId = userId || user?.uid;
        if (!targetUserId) {
          console.log("❌ 사용자 UID가 없음");
          setUserProducts([]);
          return;
        }

        console.log("👤 사용자 상품 로드 중...", targetUserId);

        const products = await productService.getUserProducts(targetUserId);
        setUserProducts(products || []);

        console.log("✅ 사용자 상품 로드 완료:", (products || []).length, "개");
      } catch (err) {
        console.error("❌ 사용자 상품 로드 실패:", err);
        setError(err.message);
        // 에러 발생 시 빈 배열로 설정
        setUserProducts([]);
      }
    },
    [user],
  );

  // 찜한 상품 로드
  const loadLikedProducts = useCallback(
    async () => {
      try {
        if (!user?.uid) {
          console.log("❌ 사용자 UID가 없음");
          setLikedProducts([]);
          return;
        }

        console.log("❤️ 찜한 상품 로드 중...", user.uid);
        
        // 현재 products에서 찜한 상품만 필터링
        const likedProducts = products.filter(product => product.isLikedByUser);
        setLikedProducts(likedProducts);

        console.log("✅ 찜한 상품 로드 완료:", likedProducts.length, "개");
      } catch (err) {
        console.error("❌ 찜한 상품 로드 실패:", err);
        setLikedProducts([]);
      }
    },
    [user?.uid, products],
  );

  // 상품 등록
  const addProduct = useCallback(
    async (productData) => {
      try {
        if (!user?.uid || !user?.isLoggedIn) {
          throw new Error("로그인이 필요합니다.");
        }

        console.log("📝 상품 등록 중...", productData);
        console.log("👤 사용자 정보:", user);

        // 판매자 정보 추가
        const enrichedProductData = {
          ...productData,
          sellerNickname:
            user.nickname ||
            user.displayName ||
            user.email?.split("@")[0] ||
            "익명",
          region: productData.region || "",
          district: productData.district || "",
        };

        console.log("📋 최종 상품 데이터:", enrichedProductData);

        const newProduct = await productService.createProduct(
          enrichedProductData,
          user.uid,
        );

        console.log("✅ 상품 등록 완료:", newProduct.id);

        // 로컬 상태 즉시 업데이트 (최신 시간으로 맨 앞에 추가)
        setProducts((prev) => {
          console.log("📝 새 상품을 목록 맨 앞에 추가:", newProduct.title);
          
          // 새 상품에 현재 시간을 명시적으로 설정 (최신으로 보장)
          const productWithTime = {
            ...newProduct,
            createdAt: new Date(), // 현재 시간으로 설정
            updatedAt: new Date()
          };
          
          // 생성시간 기준으로 정렬하여 올바른 순서 보장
          const updatedList = [productWithTime, ...prev].sort((a, b) => {
            const timeA = a.createdAt?.toDate?.() || new Date(a.createdAt) || new Date();
            const timeB = b.createdAt?.toDate?.() || new Date(b.createdAt) || new Date();
            return timeB - timeA; // 최신 순으로 정렬
          });
          
          console.log("📅 새 상품이 첫 번째인지 확인:", updatedList[0]?.title === newProduct.title);
          return updatedList;
        });

        // 사용자 상품 목록 업데이트
        if (userProducts.length > 0) {
          setUserProducts((prev) => [newProduct, ...prev]);
        }

        // 상품 등록 성공 알림
        try {
          notificationService.showProductRegisteredNotification(newProduct.title);
          console.log("📢 상품 등록 알림 전송:", newProduct.title);
        } catch (notificationError) {
          console.warn("상품 등록 알림 전송 실패:", notificationError);
        }

        return newProduct;
      } catch (error) {
        console.error("❌ ProductContext 상품 등록 실패:", error);
        console.error("❌ 에러 상세:", {
          message: error.message,
          code: error.code,
          stack: error.stack
        });
        throw error;
      }
    },
    [user, userProducts.length],
  );

  // 상품 수정
  const updateProduct = useCallback(
    async (productId, updateData) => {
      try {
        if (!user) {
          throw new Error("로그인이 필요합니다.");
        }

        console.log("✏️ 상품 수정 중...", productId);

        await productService.updateProduct(productId, updateData);

        // 로컬 상태 업데이트
        const updateProductInList = (productList) =>
          productList.map((product) =>
            product.id === productId
              ? { ...product, ...updateData, updatedAt: new Date() }
              : product,
          );

        setProducts(updateProductInList);
        setUserProducts(updateProductInList);

        console.log("✅ 상품 수정 완료");
      } catch (error) {
        console.error("❌ 상품 수정 실패:", error);
        throw error;
      }
    },
    [user],
  );

  // 상품 삭제 (소프트 삭제)
  const deleteProduct = useCallback(
    async (productId) => {
      try {
        if (!user) {
          throw new Error("로그인이 필요합니다.");
        }

        console.log("🗑️ 상품 삭제 중...", productId);

        await productService.updateProductStatus(
          productId,
          PRODUCT_STATUS.DELETED,
        );

        // 로컬 상태에서 제거
        setProducts((prev) =>
          prev.filter((product) => product.id !== productId),
        );
        setUserProducts((prev) =>
          prev.filter((product) => product.id !== productId),
        );

        console.log("✅ 상품 삭제 완료");
      } catch (error) {
        console.error("❌ 상품 삭제 실패:", error);
        throw error;
      }
    },
    [user],
  );

  // 상품 상태 변경 (예약, 판매완료 등)
  const changeProductStatus = useCallback(
    async (productId, status, additionalData = {}) => {
      try {
        console.log("🔄 상품 상태 변경 중...", productId, status);

        await productService.updateProductStatus(
          productId,
          status,
          additionalData,
        );

        // 로컬 상태 업데이트
        const updateProductStatus = (productList) =>
          productList.map((product) =>
            product.id === productId
              ? { ...product, status, ...additionalData, updatedAt: new Date() }
              : product,
          );

        setProducts(updateProductStatus);
        setUserProducts(updateProductStatus);

        console.log("✅ 상품 상태 변경 완료");
      } catch (error) {
        console.error("❌ 상품 상태 변경 실패:", error);
        throw error;
      }
    },
    [],
  );

  // 조회수 증가
  const incrementViews = useCallback(
    async (productId) => {
      try {
        // 서버에서 조회수 증가 시도 (중복 방지 로직 포함)
        await productService.incrementViewCount(productId, user?.uid);

        // 서버에서 성공한 경우에만 로컬 상태 업데이트
        // (중복 방지나 권한 문제로 실패한 경우 로컬도 업데이트 안함)
        setProducts((prev) =>
          prev.map((product) => {
            if (product.id === productId) {
              // 본인 상품이면 로컬 업데이트 안함
              if (user?.uid && product.sellerId === user.uid) {
                return product;
              }
              // 다른 사람 상품이면 조회수 증가
              return { ...product, viewCount: (product.viewCount || 0) + 1 };
            }
            return product;
          }),
        );
        
        console.log('✅ 조회수 증가 완료:', productId);
      } catch (error) {
        console.error("❌ 조회수 증가 실패:", error);
      }
    },
    [user],
  );

  // 찜하기/찜 해제
  const toggleLike = useCallback(
    async (productId) => {
      try {
        if (!user) {
          throw new Error("로그인이 필요합니다.");
        }

        console.log("❤️ 찜하기 토글 중...", productId);

        const isLiked = await productService.toggleLike(productId, user.uid);

        // 로컬 상태 업데이트
        setProducts((prev) =>
          prev.map((product) =>
            product.id === productId
              ? {
                  ...product,
                  likeCount: product.likeCount + (isLiked ? 1 : -1),
                  isLikedByUser: isLiked,
                }
              : product,
          ),
        );

        // 찜한 상품 목록 업데이트
        if (isLiked) {
          const product = products.find((p) => p.id === productId);
          if (product) {
            setLikedProducts((prev) => [
              { ...product, isLikedByUser: true },
              ...prev,
            ]);
          }
        } else {
          setLikedProducts((prev) => prev.filter((p) => p.id !== productId));
        }

        // 찜하기 알림 (찜한 경우에만)
        if (isLiked) {
          const product = products.find((p) => p.id === productId);
          if (product && product.sellerId !== user.uid) {
            try {
              notificationService.showLikeNotification(
                product.title,
                user.nickname || '익명의 사용자'
              );
              console.log("📢 찜하기 알림 전송:", product.title);
            } catch (notificationError) {
              console.warn("찜하기 알림 전송 실패:", notificationError);
            }
          }
        }

        console.log("✅ 찜하기 토글 완료:", isLiked ? "추가" : "제거");
        return isLiked;
      } catch (error) {
        console.error("❌ 찜하기 실패:", error);
        throw error;
      }
    },
    [user, products],
  );

  // 끌어올리기
  const bumpProduct = useCallback(
    async (productId) => {
      try {
        if (!user) {
          throw new Error("로그인이 필요합니다.");
        }

        console.log("⬆️ 상품 끌어올리기 중...", productId);

        await productService.bumpProduct(productId, user.uid);

        // 로컬 상태에서 해당 상품을 맨 앞으로 이동
        setProducts((prev) => {
          const productIndex = prev.findIndex((p) => p.id === productId);
          if (productIndex > 0) {
            const product = prev[productIndex];
            const newProducts = [...prev];
            newProducts.splice(productIndex, 1);
            newProducts.unshift({ ...product, lastBumpedAt: new Date() });
            return newProducts;
          }
          return prev;
        });

        console.log("✅ 상품 끌어올리기 완료");
      } catch (error) {
        console.error("❌ 끌어올리기 실패:", error);
        throw error;
      }
    },
    [user],
  );

  // 필터 업데이트
  const updateFilters = useCallback((newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
    setLastDoc(null); // 필터 변경 시 페이지네이션 리셋
  }, []);

  // 검색
  const searchProducts = useCallback(
    (searchQuery) => {
      updateFilters({ searchQuery });
    },
    [updateFilters],
  );

  // 카테고리별 상품 개수 조회 (통계용)
  const getCategoryStats = useCallback(() => {
    const stats = {};

    Object.values(INSTRUMENT_CATEGORIES).forEach((category) => {
      stats[category.id] = products.filter(
        (product) =>
          product.category === category.id &&
          product.status === PRODUCT_STATUS.ACTIVE,
      ).length;
    });

    return stats;
  }, [products]);

  // 채팅 수 증가
  const incrementChatCount = useCallback(
    async (productId) => {
      try {
        await productService.incrementChatCount(productId);

        // 로컬 상태 업데이트
        setProducts((prev) =>
          prev.map((product) =>
            product.id === productId
              ? { ...product, chatCount: (product.chatCount || 0) + 1 }
              : product,
          ),
        );
      } catch (error) {
        console.error("❌ 채팅 수 증가 실패:", error);
      }
    },
    [],
  );

  // 에러 초기화
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  // 상품 목록 새로고침
  const refreshProducts = useCallback(() => {
    setLastDoc(null);
    loadProducts(true);
  }, [loadProducts]);

  const contextValue = {
    // 상태
    products,
    userProducts,
    likedProducts,
    loading,
    error,
    hasMore,
    filters,

    // 상품 CRUD
    addProduct,
    updateProduct,
    deleteProduct,
    loadMoreProducts,
    refreshProducts,

    // 상품 상호작용
    incrementViews,
    incrementChatCount,
    toggleLike,
    bumpProduct,
    changeProductStatus,

    // 필터링 및 검색
    updateFilters,
    searchProducts,

    // 사용자별 데이터
    loadUserProducts,
    loadLikedProducts,

    // 유틸리티
    getCategoryStats,
    clearError,

    // 상수
    PRODUCT_STATUS,
    INSTRUMENT_CATEGORIES,
  };

  return (
    <ProductContext.Provider value={contextValue}>
      {children}
    </ProductContext.Provider>
  );
}
