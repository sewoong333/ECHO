import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import { UserContext } from "./UserContext";
import {
  productService,
  subscriptionService,
  PRODUCT_STATUS,
  INSTRUMENT_CATEGORIES,
} from "../utils/firebase";

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

        if (resetList) {
          console.log("🔄 상품 목록 리셋, 새 상품:", result.products.length, "개");
          setProducts(result.products);
        } else {
          console.log("➕ 상품 추가 로드:", result.products.length, "개");
          setProducts((prev) => [...prev, ...result.products]);
        }

        setHasMore(result.hasMore);
        setLastDoc(result.lastDoc);

        console.log("✅ 상품 로드 완료:", result.products.length, "개");
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

  // 필터 변경 시 상품 목록 새로고침
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
    filters.searchQuery,
  ]);

  // 무한 스크롤을 위한 추가 로드
  const loadMoreProducts = useCallback(() => {
    if (!loading && hasMore) {
      loadProducts(false);
    }
  }, [loading, hasMore, loadProducts]);

  // 실시간 데이터 구독 (사용자 상태와 관계없이)
  useEffect(() => {
    console.log("👂 실시간 상품 구독 시작...");

    const unsubscribe = subscriptionService.subscribeToProducts(
      (realtimeProducts) => {
        console.log("🔄 실시간 업데이트:", realtimeProducts.length, "개");

        // 새로운 상품이나 업데이트된 상품 반영
        setProducts((prevProducts) => {
          console.log("📋 현재 상품 수:", prevProducts.length);
          
          // 먼저 기존 상품들을 복사
          let updatedProducts = [...prevProducts];
          
          // 실시간으로 받은 상품들을 생성시간 기준으로 정렬 (최신순)
          const sortedRealtimeProducts = [...realtimeProducts].sort((a, b) => {
            const timeA = a.createdAt?.toDate?.() || new Date(a.createdAt) || new Date();
            const timeB = b.createdAt?.toDate?.() || new Date(b.createdAt) || new Date();
            return timeB - timeA; // 최신 순으로 정렬
          });

          sortedRealtimeProducts.forEach((newProduct) => {
            const existingIndex = updatedProducts.findIndex(
              (p) => p.id === newProduct.id,
            );

            if (existingIndex >= 0) {
              // 기존 상품 업데이트
              console.log("🔄 기존 상품 업데이트:", newProduct.id);
              updatedProducts[existingIndex] = newProduct;
            } else {
              // 새 상품 추가 - 생성시간을 비교해서 올바른 위치에 삽입
              console.log("➕ 새 상품 추가:", newProduct.id, newProduct.title);
              
              const newProductTime = newProduct.createdAt?.toDate?.() || new Date(newProduct.createdAt) || new Date();
              
              // 더 최신 상품이면 맨 앞에 추가
              let insertIndex = 0;
              for (let i = 0; i < updatedProducts.length; i++) {
                const existingTime = updatedProducts[i].createdAt?.toDate?.() || new Date(updatedProducts[i].createdAt) || new Date();
                if (newProductTime <= existingTime) {
                  insertIndex = i + 1;
                } else {
                  break;
                }
              }
              
              updatedProducts.splice(insertIndex, 0, newProduct);
            }
          });

          // 삭제된 상품 제거 후 생성시간 기준으로 다시 정렬
          const activeProducts = updatedProducts
            .filter((product) => product.status === PRODUCT_STATUS.ACTIVE)
            .sort((a, b) => {
              const timeA = a.createdAt?.toDate?.() || new Date(a.createdAt) || new Date();
              const timeB = b.createdAt?.toDate?.() || new Date(b.createdAt) || new Date();
              return timeB - timeA; // 최신 순으로 정렬
            });
          
          console.log("✅ 최종 상품 수:", activeProducts.length);
          console.log("📅 첫 번째 상품 생성시간:", activeProducts[0]?.createdAt, activeProducts[0]?.title);
          return activeProducts;
        });
      },
      { category: filters.category },
    );

    return () => {
      console.log("👋 실시간 구독 해제");
      unsubscribe();
    };
  }, [filters.category]); // user 의존성 제거

  // 사용자별 상품 로드
  const loadUserProducts = useCallback(
    async (userId = null) => {
      try {
        const targetUserId = userId || user?.uid;
        if (!targetUserId) return;

        console.log("👤 사용자 상품 로드 중...", targetUserId);

        const products = await productService.getUserProducts(targetUserId);
        setUserProducts(products);

        console.log("✅ 사용자 상품 로드 완료:", products.length, "개");
      } catch (err) {
        console.error("❌ 사용자 상품 로드 실패:", err);
        setError(err.message);
      }
    },
    [user],
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
        await productService.incrementViewCount(productId, user?.uid);

        // 로컬 상태 업데이트
        setProducts((prev) =>
          prev.map((product) =>
            product.id === productId
              ? { ...product, viewCount: (product.viewCount || 0) + 1 }
              : product,
          ),
        );
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
    toggleLike,
    bumpProduct,
    changeProductStatus,

    // 필터링 및 검색
    updateFilters,
    searchProducts,

    // 사용자별 데이터
    loadUserProducts,

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
