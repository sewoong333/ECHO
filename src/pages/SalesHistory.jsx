import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { ProductContext } from "../store/ProductContext";
import { UserContext } from "../store/UserContext";
import { useNavigate } from "react-router-dom";
import {
  FiChevronLeft,
  FiMoreHorizontal,
  FiHeart,
  FiMessageCircle,
} from "react-icons/fi";
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

const FilterRow = styled.div`
  width: 100%;
  max-width: 480px;
  display: flex;
  align-items: center;
  padding: 12px 18px 0 18px;
  gap: 8px;
`;

const FilterBtn = styled.button`
  background: ${({ $active }) => ($active ? "#222" : "none")};
  color: ${({ $active }) => ($active ? "#fff" : "#222")};
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 8px;
  padding: 7px 18px;
  margin: 0;
  cursor: pointer;
  align-self: flex-start;
`;

const List = styled.div`
  width: 100%;
  max-width: 480px;
  margin: 0 auto;
  margin-top: 8px;
`;

const Item = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 18px 0 0 0;
  border-bottom: 1.5px solid #f2f2f2;
`;

const Thumb = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 12px;
  object-fit: cover;
  margin-left: 18px;
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

const ItemStats = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 2px;
`;

const Stat = styled.div`
  display: flex;
  align-items: center;
  font-size: 15px;
  color: #bbb;
  gap: 3px;
`;

const ItemBtns = styled.div`
  display: flex;
  gap: 10px;
  margin: 14px 0 18px 124px;
`;

const ActionBtn = styled.button`
  flex: 1;
  background: #f7f8fa;
  color: #222;
  font-size: 16px;
  font-weight: 700;
  border: none;
  border-radius: 10px;
  padding: 13px 0;
  cursor: pointer;
`;

const MoreBtn = styled(ActionBtn)`
  width: 48px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function SalesHistory() {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { userProducts, loadUserProducts } = useContext(ProductContext);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [error, setError] = useState(null);

  // 사용자 인증 체크
  if (!user || !user.uid) {
    return (
      <Wrapper>
        <TopBar />
        <div style={{ textAlign: "center", padding: "40px 0" }}>
          로그인이 필요합니다.
        </div>
      </Wrapper>
    );
  }

  useEffect(() => {
    const loadData = async () => {
      try {
        setError(null);
        setLoading(true);
        
        console.log("📦 판매내역 로드 시작...", user.uid);
        await loadUserProducts();
        console.log("✅ 판매내역 로드 완료");
      } catch (err) {
        console.error("❌ 판매내역 로드 실패:", err);
        setError(err.message || '데이터를 불러오는데 실패했습니다.');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [user.uid, loadUserProducts]);

  const filteredList = (userProducts || []).filter((item) => {
    if (!item) return false;
    if (filter === "all") return true;
    if (filter === "active") return !item.sold;
    if (filter === "sold") return item.sold;
    return true;
  });

  if (loading) {
    return (
      <Wrapper>
        <TopBar />
        <div style={{ textAlign: "center", padding: "40px 0" }}>로딩중...</div>
      </Wrapper>
    );
  }

  if (error) {
    return (
      <Wrapper>
        <TopBar />
        <div style={{ 
          textAlign: "center", 
          padding: "40px 20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px"
        }}>
          <div style={{ fontSize: "48px" }}>⚠️</div>
          <div style={{ fontSize: "18px", fontWeight: "600", color: "#333" }}>
            문제가 발생했습니다
          </div>
          <div style={{ fontSize: "14px", color: "#666", marginBottom: "20px" }}>
            {error}
          </div>
          <button 
            onClick={() => window.location.reload()}
            style={{
              background: "#2ed8b6",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "12px 24px",
              fontSize: "16px",
              fontWeight: "600",
              cursor: "pointer"
            }}
          >
            다시 시도
          </button>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <StyledTopBar>
        <BackBtn onClick={() => navigate(-1)}>
          <FiChevronLeft />
        </BackBtn>
        <Title>판매내역</Title>
        <div style={{ width: 38 }} />
      </StyledTopBar>
      
      <FilterRow>
        <FilterBtn $active={filter === "all"} onClick={() => setFilter("all")}>
          전체
        </FilterBtn>
        <FilterBtn
          $active={filter === "active"}
          onClick={() => setFilter("active")}
        >
          판매중
        </FilterBtn>
        <FilterBtn
          $active={filter === "sold"}
          onClick={() => setFilter("sold")}
        >
          판매완료
        </FilterBtn>
      </FilterRow>
      
      <List>
        {filteredList.length === 0 && !loading && (
          <div style={{ 
            color: "#bbb", 
            textAlign: "center", 
            marginTop: 40,
            padding: "20px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px"
          }}>
            <div style={{ fontSize: "48px" }}>📦</div>
            <div style={{ fontSize: "16px", fontWeight: "600" }}>
              {filter === "all" && "등록한 상품이 없습니다."}
              {filter === "active" && "판매중인 상품이 없습니다."}  
              {filter === "sold" && "판매완료된 상품이 없습니다."}
            </div>
            <div style={{ fontSize: "14px", marginTop: "4px" }}>
              새로운 상품을 등록해보세요!
            </div>
          </div>
        )}
        
        {filteredList.map((item, i) => (
          <div key={item.id || i}>
            <Item onClick={() => navigate(`/product/${item.id}`)} style={{ cursor: 'pointer' }}>
              <Thumb
                src={
                  item.images && item.images.length > 0 
                    ? item.images[0] 
                    : item.image || "https://via.placeholder.com/90x90?text=No+Image"
                }
                alt="썸네일"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/90x90?text=No+Image";
                }}
              />
              <Info>
                <ItemTitle>{item.title || "제목 없음"}</ItemTitle>
                <ItemMeta>
                  {item.location || "위치 정보 없음"} · {item.time || "방금 전"}
                </ItemMeta>
                <ItemPrice>
                  {Number(item.price || 0).toLocaleString("ko-KR")}원
                </ItemPrice>
                <ItemStats>
                  <Stat>
                    <FiMessageCircle size={16} />
                    {item.chatCount || 0}
                  </Stat>
                  <Stat>
                    <FiHeart size={16} />
                    {item.likeCount || 0}
                  </Stat>
                  <Stat>👁{item.views || 0}</Stat>
                </ItemStats>
              </Info>
              <MoreBtn>
                <FiMoreHorizontal size={22} />
              </MoreBtn>
            </Item>
            <ItemBtns>
              <ActionBtn>끌어올리기</ActionBtn>
              <ActionBtn>홍보하기</ActionBtn>
              <MoreBtn>
                <FiMoreHorizontal size={22} />
              </MoreBtn>
            </ItemBtns>
          </div>
        ))}
      </List>
    </Wrapper>
  );
}