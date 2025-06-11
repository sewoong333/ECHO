import React, { useContext, useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductContext } from '../store/ProductContext';
import { UserContext } from '../store/UserContext';
import { FaHeart, FaRegCommentDots, FaUserCircle, FaArrowLeft, FaRegHeart } from 'react-icons/fa';
import { doc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../utils/firebase';
import getInstrumentImage from '../utils/getInstrumentImage';

export default function ProductDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { products, setProducts, likes, toggleLike, chatRooms } = useContext(ProductContext);
  const { user } = useContext(UserContext);
  const product = products.find(p => String(p.id) === String(id));
  const [showSlide, setShowSlide] = useState(false);
  const [slideIdx, setSlideIdx] = useState(0);
  const [loading, setLoading] = useState(false);

  // 조회수 증가
  useEffect(() => {
    if (!product) return;
    
    const updateViews = async () => {
      try {
        const productRef = doc(db, 'products', product.id);
        await updateDoc(productRef, {
          views: increment(1)
        });
        setProducts(prev => prev.map(p => 
          p.id === product.id 
            ? { ...p, views: (p.views || 0) + 1 }
            : p
        ));
      } catch (err) {
        console.error('조회수 업데이트 실패:', err);
      }
    };

    updateViews();
  }, [product?.id]);

  if (!product) return <div style={{ padding: 32 }}>상품을 찾을 수 없습니다.</div>;

  const chatCount = chatRooms[product.id]?.length || 0;
  const likeCount = likes.filter(lid => lid === product.id).length;
  const viewCount = product.views || 0;
  const images = product.images && product.images.length ? product.images : [product.image];

  const handleLike = async (e) => {
    e.stopPropagation();
    if (!user.isLoggedIn) {
      alert('로그인이 필요합니다.');
      navigate('/login');
      return;
    }
    setLoading(true);
    try {
      await toggleLike(product.id);
    } catch (err) {
      console.error('관심 상품 토글 실패:', err);
      alert('관심 상품 등록에 실패했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ width: '100vw', minHeight: '100vh', background: '#f8f9fa', display: 'flex', flexDirection: 'column', alignItems: 'center', position:'relative' }}>
      <TopBar />
      <div style={{ width: '100%', maxWidth: 480, margin: '0 auto', padding: 0, boxSizing: 'border-box', position:'relative', paddingBottom: 90 }}>
        {/* 대표사진(정사각형) */}
        <div style={{ width: '100%', aspectRatio: '1/1', background: '#eee', position: 'relative', borderRadius: '0 0 18px 18px', overflow: 'hidden', cursor:'pointer' }} onClick={()=>setShowSlide(true)}>
          <img src={images[0]} alt={product.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          {/* 뒤로가기 */}
          <button onClick={e => {e.stopPropagation(); navigate(-1);}} style={{ position: 'absolute', top: 16, left: 16, background: 'rgba(255,255,255,0.85)', border: '1.5px solid #b2f0e6', borderRadius: 20, width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, color: '#2ed8b6', zIndex: 102, boxShadow: '0 1px 4px #b2f0e6', padding: 0 }}>
            <FaArrowLeft style={{ margin: 0, fontSize: 18 }} />
          </button>
        </div>
        {/* 슬라이드 모달 */}
        {showSlide && (
          <div style={{ position:'fixed', top:0, left:0, width:'100vw', height:'100vh', background:'rgba(0,0,0,0.85)', zIndex:9999, display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column' }} onClick={()=>setShowSlide(false)}>
            <div style={{ position:'relative', width: '90vw', maxWidth: 420, aspectRatio:'1/1', background:'#222', borderRadius:18, overflow:'hidden', display:'flex', alignItems:'center', justifyContent:'center' }} onClick={e=>e.stopPropagation()}>
              {/* 우측 상단에 닫기(X) 버튼 */}
              <button style={{ position:'absolute', top:18, right:18, background:'rgba(255,255,255,0.8)', border:'none', borderRadius:18, width:36, height:36, fontSize:22, cursor:'pointer', zIndex:3, display:'flex', alignItems:'center', justifyContent:'center' }} onClick={()=>setShowSlide(false)}>×</button>
              {/* 좌우 중앙에 화살표 */}
              {images.length > 1 && slideIdx > 0 && (
                <button style={{ position:'absolute', left:8, top:'50%', transform:'translateY(-50%)', background:'rgba(255,255,255,0.7)', border:'none', borderRadius:18, width:36, height:36, fontSize:22, cursor:'pointer', zIndex:2, display:'flex', alignItems:'center', justifyContent:'center' }} onClick={()=>setSlideIdx(idx=>Math.max(0,idx-1))}>&lt;</button>
              )}
              {images.length > 1 && slideIdx < images.length-1 && (
                <button style={{ position:'absolute', right:8, top:'50%', transform:'translateY(-50%)', background:'rgba(255,255,255,0.7)', border:'none', borderRadius:18, width:36, height:36, fontSize:22, cursor:'pointer', zIndex:2, display:'flex', alignItems:'center', justifyContent:'center' }} onClick={()=>setSlideIdx(idx=>Math.min(images.length-1,idx+1))}>&gt;</button>
              )}
              <img src={images[slideIdx]} alt={product.title} style={{ width:'100%', height:'100%', objectFit:'contain', background:'#222' }} />
            </div>
            {images.length > 1 && (
              <div style={{marginTop:18, display:'flex', gap:8}}>
                {images.map((img, i) => (
                  <div key={i} style={{width:12, height:12, borderRadius:'50%', background:i===slideIdx?'#2ed8b6':'#bbb', transition:'background 0.2s'}} />
                ))}
              </div>
            )}
          </div>
        )}
        {/* 프로필/닉네임/동네 */}
        <div style={{ display:'flex', alignItems:'center', gap:12, margin:'18px 0 0 0', padding:'0 18px' }}>
          <FaUserCircle size={36} color="#bbb" />
          <div style={{ fontWeight:700, fontSize:17, color:'#222' }}>{product.author}</div>
          <div style={{ color:'#888', fontSize:15 }}>{product.location}</div>
        </div>
        {/* 제목/카테고리/시간 */}
        <div style={{ padding:'0 18px', marginTop:10 }}>
          <h1 style={{ fontSize:22, fontWeight:800, color:'#1a4740', margin:'0 0 8px 0' }}>{product.title}</h1>
          <div style={{ display:'flex', alignItems:'center', gap:10, fontSize:14, color:'#888', marginBottom:6 }}>
            <span>{product.category || '기타'}</span>
            <span>· {product.time || '방금 전'}</span>
          </div>
        </div>
        {/* 상세설명 */}
        <div style={{ padding:'0 18px', margin:'18px 0 0 0', color:'#1a4740', fontSize:16, lineHeight:1.7, wordBreak:'break-all', overflowWrap:'break-word' }}>
          {product.description}
        </div>
        {/* 채팅/관심/조회 */}
        <div style={{ display:'flex', alignItems:'center', gap:18, fontSize:14, color:'#bbb', margin:'18px 0 0 18px' }}>
          <span><FaRegCommentDots style={{ marginRight: 2 }} />{chatCount} 채팅</span>
          <span><FaHeart style={{ marginRight: 2, color: '#ff7e36' }} />{likeCount} 관심</span>
          <span>{viewCount} 조회</span>
        </div>
        {/* 하단 고정 바 */}
        <div style={{ position:'fixed', left:0, right:0, bottom:0, width:'100%', maxWidth:480, margin:'0 auto', background:'#fff', borderTop:'1.5px solid #e0e0e0', display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 18px', height:68, zIndex:200, boxShadow:'0 -2px 12px rgba(46,216,182,0.06)' }}>
          <div style={{ display:'flex', alignItems:'center', gap:12 }}>
            <FaRegHeart size={26} color="#bbb" style={{marginRight:2}} />
            <div style={{ fontWeight:800, fontSize:20, color:'#222' }}>{Number(product.price).toLocaleString()}원</div>
            <span style={{ color:'#ff7e36', fontWeight:700, fontSize:15, marginLeft:6 }}>가격 제안 불가</span>
          </div>
          <button
            style={{ padding:'12px 28px', fontSize:18, background:'#2ed8b6', color:'#fff', border:'none', borderRadius:10, fontWeight:700, boxShadow:'0 2px 8px #b2f0e6', cursor:'pointer' }}
            onClick={() => navigate(`/chat/${product.id}`)}
          >
            채팅하기
          </button>
        </div>
      </div>
    </div>
  );
} 