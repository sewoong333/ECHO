import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ProductContext } from "../store/ProductContext";
import { UserContext } from "../store/UserContext";
import { useNavigate } from "react-router-dom";
import {
  FiChevronLeft,
  FiHeart,
  FiMessageCircle,
} from "react-icons/fi";
import { collection, query, where, getDocs, orderBy } from "firebase/firestore";
import { db } from "../utils/firebase";
import TopBar from "../components/TopBar";

const Wrapper = styled.div`
  width: 100vw;
  min-height: 100vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 24px;
`;

const StyledTopBar = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 18px 0 18px;
`;

const BackBtn = styled.button`
  background: none;
  border: none;
  font-size: 28px;
  color: #222;
  cursor: pointer;
  margin-right: 8px;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 800;
  color: #222;
  flex: 1;
`;

const List = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  margin-top: 20px;
`;

const Item = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 18px 18px;
  border-bottom: 1.5px solid #f2f2f2;
`;

const Thumb = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 12px;
  object-fit: cover;
  margin-right: 16px;
`;

const Info = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const ItemTitle = styled.div`
  font-size: 17px;
  font-weight: 700;
  color: #222;
  margin-bottom: 6px;
  margin-top: 2px;
  line-height: 1.3;
`;

const ItemMeta = styled.div`
  font-size: 14px;
  color: #888;
  margin-bottom: 2px;
`;

const ItemPrice = styled.div`
  font-size: 18px;
  font-weight: 800;
  color: #222;
  margin-bottom: 2px;
`;

const PurchasedBadge = styled.div`
  background: #2196F3;
  color: white;
  padding: 4px 8px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 600;
  display: inline-block;
  margin-top: 6px;
`;

const ItemStats = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 6px;
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  color: #bbb;
  gap: 3px;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 80px 20px;
  color: #999;
`;

const EmptyIcon = styled.div`
  font-size: 48px;
  margin-bottom: 16px;
`;

const EmptyText = styled.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
`;

const EmptyDesc = styled.div`
  font-size: 14px;
  color: #bbb;
`;

export default function BuyingHistory() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { chatRooms } = useContext(ProductContext);
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBuyingHistory = async () => {
      try {
        // 실제 구매 내역은 별도의 transactions 컬렉션에서 가져와야 하지만,
        // 현재는 채팅 기록이나 관심 상품을 기준으로 구성
        const q = query(
          collection(db, "products"),
          where("interestedUsers", "array-contains", user.uid),
          orderBy("createdAt", "desc"),
        );
        const querySnapshot = await getDocs(q);
        const buyingList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setList(buyingList);
      } catch (err) {
        console.error("구매 내역 불러오기 실패:", err);
        // fallback: 관심목록 기반으로 표시
        setList([]);
      } finally {
        setLoading(false);
      }
    };

    if (user.isLoggedIn && user.uid) {
      fetchBuyingHistory();
    }
  }, [user]);

  if (loading) {
    return (
      <Wrapper>
        <TopBar />
        <div style={{ textAlign: "center", padding: "40px 0" }}>로딩중...</div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <StyledTopBar>
        <BackBtn onClick={() => navigate(-1)}>
          <FiChevronLeft />
        </BackBtn>
        <Title>구매내역</Title>
        <div style={{ width: 38 }} />
      </StyledTopBar>
      
      <List>
        {list.length === 0 ? (
          <EmptyState>
            <EmptyIcon>🛍️</EmptyIcon>
            <EmptyText>구매한 상품이 없어요</EmptyText>
            <EmptyDesc>관심있는 상품을 찾아 구매해보세요</EmptyDesc>
          </EmptyState>
        ) : (
          list.map((item, i) => (
            <Item key={i} onClick={() => navigate(`/product/${item.id}`)}>
              <Thumb
                src={item.image || item.images?.[0] || "https://via.placeholder.com/90"}
                alt="썸네일"
              />
              <Info>
                <ItemTitle>{item.title}</ItemTitle>
                <ItemMeta>
                  {item.location || item.region} · {item.time || "방금 전"}
                </ItemMeta>
                <ItemPrice>
                  {Number(item.price).toLocaleString("ko-KR")}원
                </ItemPrice>
                <PurchasedBadge>관심상품</PurchasedBadge>
                <ItemStats>
                  <Stat>
                    <FiMessageCircle size={16} />
                    {chatRooms?.[item.id]?.length || 0}
                  </Stat>
                  <Stat>
                    <FiHeart size={16} />
                    {item.likeCount || 0}
                  </Stat>
                  <Stat>👁{item.views || 0}</Stat>
                </ItemStats>
              </Info>
            </Item>
          ))
        )}
      </List>
    </Wrapper>
  );
}