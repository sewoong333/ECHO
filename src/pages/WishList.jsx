import React, { useContext, useEffect, useState } from "react";
import TopBar from "../components/TopBar";
import { ProductContext } from "../store/ProductContext";
import { UserContext } from "../store/UserContext";
import { useNavigate } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../utils/firebase";

export default function WishList() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { likes } = useContext(ProductContext);
  const [wishList, setWishList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWishList = async () => {
      if (!user.isLoggedIn) return;

      try {
        // 사용자의 관심 상품 ID 목록 가져오기
        const likesRef = doc(db, "likes", user.uid);
        const likesDoc = await getDoc(likesRef);
        const likedProductIds = likesDoc.exists()
          ? likesDoc.data().productIds
          : [];

        if (likedProductIds.length === 0) {
          setWishList([]);
          setLoading(false);
          return;
        }

        // 관심 상품들의 상세 정보 가져오기
        const productsRef = collection(db, "products");
        const q = query(productsRef, where("id", "in", likedProductIds));
        const querySnapshot = await getDocs(q);
        const products = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setWishList(products);
      } catch (err) {
        console.error("관심목록 불러오기 실패:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchWishList();
  }, [user]);

  if (loading) {
    return (
      <div style={{ padding: 24, maxWidth: 480, margin: "0 auto" }}>
        <TopBar />
        <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 18 }}>
          관심목록
        </h2>
        <div style={{ textAlign: "center", color: "#bbb" }}>로딩중...</div>
      </div>
    );
  }

  return (
    <div style={{ padding: 24, width: "100vw" }}>
      <TopBar />
      <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 18 }}>
        관심목록
      </h2>
      {wishList.length === 0 && (
        <div style={{ color: "#bbb" }}>관심 상품이 없습니다.</div>
      )}
      {wishList.map((p) => (
        <div
          key={p.id}
          onClick={() => navigate(`/product/${p.id}`)}
          style={{
            background: "#fff",
            borderRadius: 10,
            boxShadow: "0 1px 4px #b2f0e6",
            padding: 16,
            marginBottom: 14,
            cursor: "pointer",
          }}
        >
          <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6 }}>
            {p.title}
          </div>
          <div style={{ color: "#2ed8b6", fontWeight: 700 }}>{p.price}원</div>
        </div>
      ))}
    </div>
  );
}
