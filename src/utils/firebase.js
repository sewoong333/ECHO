// 개선된 Firebase 설정 및 서비스
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, setPersistence, browserLocalPersistence } from "firebase/auth";
import {
  getFirestore,
  enableIndexedDbPersistence,
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  orderBy,
  where,
  serverTimestamp,
  onSnapshot,
  increment,
  getDoc,
  limit,
  startAfter,
} from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};

// Firebase 초기화
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

// 인증 지속성 설정 (앱 초기화 시 한 번만 실행)
if (typeof window !== "undefined") {
  setPersistence(auth, browserLocalPersistence)
    .then(() => {
      console.log("✅ Firebase Auth 지속성 설정 완료 (LOCAL)");
    })
    .catch((error) => {
      console.warn("⚠️ Firebase Auth 지속성 설정 실패:", error);
    });
}

// 오프라인 지속성 설정
if (typeof window !== "undefined") {
  enableIndexedDbPersistence(db, {
    synchronizeTabs: true,
  }).catch((err) => {
    if (err.code === "failed-precondition") {
      console.warn(
        "Multiple tabs open, persistence can only be enabled in one tab at a time.",
      );
    } else if (err.code === "unimplemented") {
      console.warn("The current browser does not support persistence.");
    }
  });
}

// 컬렉션 참조
export const productsCollection = collection(db, "products");
export const usersCollection = collection(db, "users");
export const chatsCollection = collection(db, "chats");
export const reviewsCollection = collection(db, "reviews");
export const reportsCollection = collection(db, "reports");

// 상품 상태 열거형
export const PRODUCT_STATUS = {
  ACTIVE: "active",
  SOLD: "sold",
  RESERVED: "reserved",
  DELETED: "deleted",
  SUSPENDED: "suspended",
};

// 거래 상태 열거형
export const TRANSACTION_STATUS = {
  PENDING: "pending",
  IN_PROGRESS: "in_progress",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
};

// 악기 카테고리
export const INSTRUMENT_CATEGORIES = {
  GUITAR: {
    id: "guitar",
    name: "기타",
    subcategories: [
      "어쿠스틱 기타",
      "일렉트릭 기타",
      "베이스 기타",
      "클래식 기타",
    ],
  },
  PIANO: {
    id: "piano",
    name: "피아노/건반",
    subcategories: ["피아노", "전자피아노", "신디사이저", "오르간"],
  },
  DRUMS: {
    id: "drums",
    name: "드럼/타악기",
    subcategories: ["어쿠스틱 드럼", "전자드럼", "타악기", "심벌"],
  },
  WIND: {
    id: "wind",
    name: "관악기",
    subcategories: ["색소폰", "플룻", "트럼펫", "클라리넷", "트롬본"],
  },
  STRING: {
    id: "string",
    name: "현악기",
    subcategories: ["바이올린", "비올라", "첼로", "우쿨렐레"],
  },
  AUDIO: {
    id: "audio",
    name: "오디오 장비",
    subcategories: ["앰프", "스피커", "마이크", "오디오 인터페이스", "이펙터"],
  },
  OTHER: {
    id: "other",
    name: "기타",
    subcategories: ["하모니카", "아코디언", "기타 악기"],
  },
};

// 지역 데이터
export const REGIONS = {
  SEOUL: {
    id: "seoul",
    name: "서울",
    districts: [
      "강남구",
      "강동구",
      "강북구",
      "강서구",
      "관악구",
      "광진구",
      "구로구",
      "금천구",
      "노원구",
      "도봉구",
      "동대문구",
      "동작구",
      "마포구",
      "서대문구",
      "서초구",
      "성동구",
      "성북구",
      "송파구",
      "양천구",
      "영등포구",
      "용산구",
      "은평구",
      "종로구",
      "중구",
      "중랑구",
    ],
  },
  BUSAN: {
    id: "busan",
    name: "부산",
    districts: [
      "중구",
      "서구",
      "동구",
      "영도구",
      "부산진구",
      "동래구",
      "남구",
      "북구",
      "해운대구",
      "사하구",
      "금정구",
      "강서구",
      "연제구",
      "수영구",
      "사상구",
      "기장군",
    ],
  },
  INCHEON: {
    id: "incheon",
    name: "인천",
    districts: [
      "중구",
      "동구",
      "미추홀구",
      "연수구",
      "남동구",
      "부평구",
      "계양구",
      "서구",
      "강화군",
      "옹진군",
    ],
  },
  DAEGU: {
    id: "daegu",
    name: "대구",
    districts: [
      "중구",
      "동구",
      "서구",
      "남구",
      "북구",
      "수성구",
      "달서구",
      "달성군",
    ],
  },
  DAEJEON: {
    id: "daejeon",
    name: "대전",
    districts: ["동구", "중구", "서구", "유성구", "대덕구"],
  },
  GWANGJU: {
    id: "gwangju",
    name: "광주",
    districts: ["동구", "서구", "남구", "북구", "광산구"],
  },
  ULSAN: {
    id: "ulsan",
    name: "울산",
    districts: ["중구", "남구", "동구", "북구", "울주군"],
  },
};

// 개선된 상품 서비스
export const productService = {
  // 상품 생성 (중고거래 표준 구조)
  async createProduct(productData, userId) {
    try {
      const now = serverTimestamp();
      const product = {
        // 기본 정보
        title: productData.title.trim(),
        description: productData.description.trim(),
        category: productData.category,
        subcategory: productData.subcategory || "",
        brand: productData.brand || "",
        model: productData.model || "",

        // 가격 정보
        price: parseInt(productData.price),
        originalPrice: productData.originalPrice
          ? parseInt(productData.originalPrice)
          : null,
        isPriceNegotiable: productData.isPriceNegotiable || false,

        // 상태 정보
        condition: productData.condition || "good",
        conditionDescription: productData.conditionDescription || "",
        yearOfManufacture: productData.yearOfManufacture
          ? parseInt(productData.yearOfManufacture)
          : null,

        // 이미지
        images: productData.images || [],
        thumbnailImage: productData.images?.[0] || "",

        // 위치 정보
        region: productData.region || "",
        district: productData.district || "",
        fullLocation: `${productData.region} ${productData.district}`.trim(),

        // 거래 옵션
        isDeliveryAvailable: productData.isDeliveryAvailable || false,
        deliveryFee: productData.deliveryFee
          ? parseInt(productData.deliveryFee)
          : 0,
        preferredTransactionType:
          productData.preferredTransactionType || "direct",

        // 판매자 정보
        sellerId: userId,
        sellerNickname: productData.sellerNickname || "",

        // 상태 관리
        status: PRODUCT_STATUS.ACTIVE,

        // 통계
        viewCount: 0,
        likeCount: 0,
        chatCount: 0,

        // 태그
        tags: productData.tags || [],

        // 시간 정보
        createdAt: now,
        updatedAt: now,
        lastBumpedAt: now,

        // SEO 및 검색
        searchKeywords: [],

        // 관리자 기능
        isPromoted: false,
        reportCount: 0,

        // 예약/판매 정보
        reservedBy: null,
        soldTo: null,
        soldAt: null,

        // 추가 옵션
        isUrgent: productData.isUrgent || false,
        accessories: productData.accessories || [],
        defects: productData.defects || [],
      };

      console.log("📦 Firestore에 저장할 상품 데이터:", product);
      
      try {
        const docRef = await addDoc(productsCollection, product);
        console.log("✅ Firestore 저장 성공, 문서 ID:", docRef.id);
        
        const currentTime = new Date();
        const result = { 
          id: docRef.id, 
          ...product,
          // 명시적으로 현재 시간 설정 (최신 상품이 맨 위로 가도록)
          createdAt: currentTime,
          updatedAt: currentTime,
          lastBumpedAt: currentTime
        };
        console.log("📋 반환할 결과:", result);
        
        return result;
      } catch (firestoreError) {
        console.error("❌ Firestore 저장 실패:", firestoreError);
        throw firestoreError;
      }
    } catch (error) {
      console.error("❌ Firebase 상품 생성 실패:", error);
      console.error("❌ Firebase 에러 상세:", {
        message: error.message,
        code: error.code,
        stack: error.stack,
        productData: productData,
        userId: userId
      });
      
      throw error;
    }
  },

  // 검색 키워드 생성
  generateSearchKeywords(productData) {
    const keywords = new Set();

    // 제목에서 키워드 추출
    const titleWords = productData.title.toLowerCase().split(/\s+/);
    titleWords.forEach((word) => {
      if (word.length > 1) keywords.add(word);
    });

    // 브랜드, 모델명 추가
    if (productData.brand) keywords.add(productData.brand.toLowerCase());
    if (productData.model) keywords.add(productData.model.toLowerCase());

    // 카테고리 추가
    if (productData.category) keywords.add(productData.category.toLowerCase());

    return Array.from(keywords);
  },

  // 상품 목록 조회 (페이지네이션 포함)
  async getProducts(options = {}) {
    try {
      const {
        category = null,
        region = null,
        priceMin = null,
        priceMax = null,
        condition = null,
        sortBy = "latest",
        pageSize = 20,
        lastDoc = null,
        searchQuery = null,
      } = options;

      // 단순한 쿼리로 시작 (인덱스 문제 해결 위해)
      let q = query(
        productsCollection,
        where("status", "==", PRODUCT_STATUS.ACTIVE),
        orderBy("createdAt", "desc"),
        limit(pageSize)
      );

      // 페이지네이션만 적용
      if (lastDoc) {
        q = query(
          productsCollection,
          where("status", "==", PRODUCT_STATUS.ACTIVE),
          orderBy("createdAt", "desc"),
          startAfter(lastDoc),
          limit(pageSize)
        );
      }

      console.log("📋 Firestore 쿼리 실행 중...");
      const querySnapshot = await getDocs(q);
      console.log("✅ Firestore 쿼리 성공, 문서 수:", querySnapshot.docs.length);
      
      let products = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        _doc: doc,
      }));

      // 클라이언트 사이드에서 필터링 (임시 해결책)
      if (category) {
        products = products.filter(p => p.category === category);
      }

      if (region) {
        products = products.filter(p => p.region === region);
      }

      if (condition) {
        products = products.filter(p => p.condition === condition);
      }

      if (priceMin !== null) {
        products = products.filter(p => p.price >= priceMin);
      }

      if (priceMax !== null) {
        products = products.filter(p => p.price <= priceMax);
      }

      if (searchQuery) {
        const searchLower = searchQuery.toLowerCase();
        products = products.filter(p => 
          p.title?.toLowerCase().includes(searchLower) ||
          p.description?.toLowerCase().includes(searchLower)
        );
      }

      // 클라이언트 사이드 정렬
      switch (sortBy) {
        case "price_low":
          products.sort((a, b) => a.price - b.price);
          break;
        case "price_high":
          products.sort((a, b) => b.price - a.price);
          break;
        case "popular":
          products.sort((a, b) => (b.likeCount || 0) - (a.likeCount || 0));
          break;
        // latest는 이미 정렬됨
      }

      return {
        products,
        hasMore: querySnapshot.docs.length === pageSize,
        lastDoc: querySnapshot.docs[querySnapshot.docs.length - 1] || null,
      };
    } catch (error) {
      console.error("상품 조회 실패:", error);
      console.error("에러 상세:", error.message, error.code);
      throw new Error("상품을 불러오는데 실패했습니다.");
    }
  },

  // 상품 상세 조회
  async getProduct(productId) {
    try {
      const docRef = doc(db, "products", productId);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        throw new Error("상품을 찾을 수 없습니다.");
      }

      return { id: docSnap.id, ...docSnap.data() };
    } catch (error) {
      console.error("상품 상세 조회 실패:", error);
      throw error;
    }
  },

  // 조회수 증가 (중복 방지)
  async incrementViewCount(productId, userId = null) {
    try {
      // 세션 스토리지로 중복 방지 (브라우저 탭별로 관리)
      const viewKey = `viewed_${productId}`;
      const hasViewed = sessionStorage.getItem(viewKey);
      
      if (hasViewed) {
        console.log('이미 조회한 상품입니다:', productId);
        return;
      }
      
      const productRef = doc(db, "products", productId);
      
      // 상품 정보 확인 (본인 상품인지 체크)
      const productSnap = await getDoc(productRef);
      if (!productSnap.exists()) {
        console.log('상품을 찾을 수 없습니다:', productId);
        return;
      }
      
      const productData = productSnap.data();
      
      // 본인 상품은 조회수 증가하지 않음
      if (userId && productData.sellerId === userId) {
        console.log('본인 상품은 조회수가 증가하지 않습니다:', productId);
        return;
      }
      
      await updateDoc(productRef, {
        viewCount: increment(1),
        lastViewedAt: serverTimestamp(),
      });
      
      // 세션에 조회 기록 저장
      sessionStorage.setItem(viewKey, Date.now().toString());
      
      console.log('조회수 증가 완료:', productId);
    } catch (error) {
      console.error("조회수 증가 실패:", error);
    }
  },

  // 채팅 수 증가
  async incrementChatCount(productId) {
    try {
      const productRef = doc(db, "products", productId);
      await updateDoc(productRef, {
        chatCount: increment(1),
        lastChatAt: serverTimestamp(),
      });
      console.log('채팅 수 증가 완료:', productId);
    } catch (error) {
      console.error("채팅 수 증가 실패:", error);
      throw error;
    }
  },

  // 찜하기/찜 해제
  async toggleLike(productId, userId) {
    try {
      const userLikesRef = collection(db, "users", userId, "likes");
      const likeQuery = query(
        userLikesRef,
        where("productId", "==", productId),
      );
      const likeSnapshot = await getDocs(likeQuery);

      const productRef = doc(db, "products", productId);

      if (likeSnapshot.empty) {
        await addDoc(userLikesRef, {
          productId,
          createdAt: serverTimestamp(),
        });
        await updateDoc(productRef, {
          likeCount: increment(1),
        });
        return true;
      } else {
        const likeDoc = likeSnapshot.docs[0];
        await deleteDoc(likeDoc.ref);
        await updateDoc(productRef, {
          likeCount: increment(-1),
        });
        return false;
      }
    } catch (error) {
      console.error("찜하기 처리 실패:", error);
      throw error;
    }
  },

  // 상품 상태 변경
  async updateProductStatus(productId, status, additionalData = {}) {
    try {
      const productRef = doc(db, "products", productId);
      const updateData = {
        status,
        updatedAt: serverTimestamp(),
        ...additionalData,
      };

      if (status === PRODUCT_STATUS.SOLD) {
        updateData.soldAt = serverTimestamp();
      }

      await updateDoc(productRef, updateData);
    } catch (error) {
      console.error("상품 상태 변경 실패:", error);
      throw error;
    }
  },

  // 상품 수정
  async updateProduct(productId, updateData) {
    try {
      const productRef = doc(db, "products", productId);
      await updateDoc(productRef, {
        ...updateData,
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      console.error("상품 수정 실패:", error);
      throw error;
    }
  },

  // 사용자별 상품 조회
  async getUserProducts(userId, status = PRODUCT_STATUS.ACTIVE) {
    try {
      const q = query(
        productsCollection,
        where("sellerId", "==", userId),
        where("status", "==", status),
        orderBy("createdAt", "desc"),
      );

      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
    } catch (error) {
      console.error("사용자 상품 조회 실패:", error);
      throw error;
    }
  },

  // 끌어올리기
  async bumpProduct(productId, userId) {
    try {
      const productRef = doc(db, "products", productId);
      const productSnap = await getDoc(productRef);

      if (!productSnap.exists()) {
        throw new Error("상품을 찾을 수 없습니다.");
      }

      const productData = productSnap.data();
      if (productData.sellerId !== userId) {
        throw new Error("권한이 없습니다.");
      }

      const lastBumped = productData.lastBumpedAt?.toDate();
      const now = new Date();
      const hoursDiff = (now - lastBumped) / (1000 * 60 * 60);

      if (hoursDiff < 24) {
        throw new Error("24시간에 한 번만 끌어올릴 수 있습니다.");
      }

      await updateDoc(productRef, {
        lastBumpedAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      return true;
    } catch (error) {
      console.error("끌어올리기 실패:", error);
      throw error;
    }
  },
};

// 이미지 서비스 개선
export const imageService = {
  async uploadProductImage(file, userId, productId = null) {
    try {
      if (file.size > 5 * 1024 * 1024) {
        throw new Error("이미지 크기는 5MB 이하여야 합니다.");
      }
      if (!file.type.startsWith("image/")) {
        throw new Error("이미지 파일만 업로드 가능합니다.");
      }
      // 10초 타임아웃 적용
      const compressPromise = this.compressImage(file);
      const timeoutPromise = new Promise((_, reject) =>
        setTimeout(
          () => reject(new Error("이미지 업로드가 너무 오래 걸립니다.")),
          10000,
        ),
      );
      const compressedFile = await Promise.race([
        compressPromise,
        timeoutPromise,
      ]);
      const timestamp = Date.now();
      const fileName = `${userId}_${timestamp}_${file.name}`;
      const path = productId
        ? `products/${productId}/${fileName}`
        : `products/temp/${fileName}`;
      const storageRef = ref(storage, path);
      const snapshot = await uploadBytes(storageRef, compressedFile);
      const downloadURL = await getDownloadURL(snapshot.ref);
      return {
        url: downloadURL,
        path: path,
        size: compressedFile.size,
        originalName: file.name,
      };
    } catch (error) {
      console.error("이미지 업로드 실패:", error);
      throw error;
    }
  },

  async compressImage(file, maxWidth = 800, quality = 0.8) {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();
      let timeoutId;
      img.onload = function () {
        const ratio = Math.min(maxWidth / img.width, maxWidth / img.height);
        canvas.width = img.width * ratio;
        canvas.height = img.height * ratio;
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        if (!canvas.toBlob) {
          reject(new Error("이미지 압축을 지원하지 않는 브라우저입니다."));
          return;
        }
        timeoutId = setTimeout(() => {
          reject(new Error("이미지 압축이 너무 오래 걸립니다."));
        }, 10000); // 10초 타임아웃
        canvas.toBlob(
          (blob) => {
            clearTimeout(timeoutId);
            if (!blob) reject(new Error("이미지 압축 실패"));
            else resolve(blob);
          },
          file.type,
          quality,
        );
      };
      img.onerror = function () {
        reject(new Error("이미지 로드 실패"));
      };
      img.src = URL.createObjectURL(file);
    });
  },

  async uploadMultipleImages(files, userId, productId = null) {
    try {
      if (files.length > 5) {
        throw new Error("이미지는 최대 5개까지 업로드 가능합니다.");
      }
      const uploadPromises = files.map((file) =>
        this.uploadProductImage(file, userId, productId),
      );
      const results = await Promise.all(uploadPromises);
      return results;
    } catch (error) {
      console.error("다중 이미지 업로드 실패:", error);
      throw error;
    }
  },

  async deleteImage(imagePath) {
    try {
      const imageRef = ref(storage, imagePath);
      await deleteObject(imageRef);
    } catch (error) {
      console.error("이미지 삭제 실패:", error);
      throw error;
    }
  },
};

// 사용자 서비스
export const userService = {
  async createOrUpdateUserProfile(userId, userData) {
    try {
      const userRef = doc(db, "users", userId);
      const profileData = {
        nickname: userData.nickname || "",
        email: userData.email || "",
        profileImage: userData.profileImage || "",
        location: userData.location || "",
        introduction: userData.introduction || "",

        totalSales: 0,
        totalPurchases: 0,
        totalRating: 0,
        reviewCount: 0,

        productCount: 0,
        likeCount: 0,

        isEmailNotificationEnabled: true,
        isPushNotificationEnabled: true,
        isLocationPublic: true,

        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        lastActiveAt: serverTimestamp(),
      };

      await updateDoc(userRef, profileData, { merge: true });
      return profileData;
    } catch (error) {
      console.error("사용자 프로필 생성/업데이트 실패:", error);
      throw error;
    }
  },

  async updateUserRating(userId, rating) {
    try {
      const userRef = doc(db, "users", userId);
      await updateDoc(userRef, {
        totalRating: increment(rating),
        reviewCount: increment(1),
        updatedAt: serverTimestamp(),
      });
    } catch (error) {
      console.error("사용자 신뢰도 업데이트 실패:", error);
      throw error;
    }
  },
};

// 실시간 구독 서비스
export const subscriptionService = {
  subscribeToProducts(callback, filters = {}) {
    try {
      let q = query(
        productsCollection,
        where("status", "==", PRODUCT_STATUS.ACTIVE),
        orderBy("createdAt", "desc"),
        limit(20),
      );

      if (filters.category) {
        q = query(q, where("category", "==", filters.category));
      }

      return onSnapshot(q, (snapshot) => {
        const products = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        callback(products);
      });
    } catch (error) {
      console.error("실시간 구독 실패:", error);
      throw error;
    }
  },

  subscribeToProduct(productId, callback) {
    try {
      const productRef = doc(db, "products", productId);
      return onSnapshot(productRef, (doc) => {
        if (doc.exists()) {
          callback({ id: doc.id, ...doc.data() });
        } else {
          callback(null);
        }
      });
    } catch (error) {
      console.error("상품 실시간 구독 실패:", error);
      throw error;
    }
  },
};

export default {
  productService,
  imageService,
  userService,
  subscriptionService,
  PRODUCT_STATUS,
  TRANSACTION_STATUS,
  INSTRUMENT_CATEGORIES,
  REGIONS,
};
