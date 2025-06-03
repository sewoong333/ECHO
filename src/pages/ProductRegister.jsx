import React, { useState, useContext } from 'react';
import TopBar from '../components/TopBar';
import { useNavigate } from 'react-router-dom';
import { ProductContext } from '../store/ProductContext';
import { UserContext } from '../store/UserContext';

export default function ProductRegister() {
  const [form, setForm] = useState({ title: '', description: '', price: '', location: '', image: '', category: '' });
  const { addProduct } = useContext(ProductContext);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (name === 'image' && files && files[0]) {
      const reader = new FileReader();
      reader.onload = e2 => setForm(f => ({ ...f, image: e2.target.result }));
      reader.readAsDataURL(files[0]);
    } else {
      setForm(f => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    addProduct({
      ...form,
      id: Date.now(),
      time: '방금 전',
      location: form.location || '서울 강남구',
      image: form.image || 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=400&q=80',
      author: user.nickname || '나',
    });
    navigate('/');
  };

  return (
    <div style={{ maxWidth: 500, margin: '0 auto', padding: 0, background: '#e0f7f3', minHeight: '100vh' }}>
      <TopBar />
      <div style={{ padding: 24 }}>
        <h1 style={{ fontSize: 24, fontWeight: 700, marginBottom: 24, color: '#2ed8b6' }}>악기 등록</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 16 }}>
            <label>사진<br />
              <input type="file" name="image" onChange={handleChange} style={{ width: '100%' }} />
            </label>
            {form.image && (
              <div style={{ marginTop: 12, textAlign: 'center' }}>
                <img src={form.image} alt="미리보기" style={{ maxWidth: 220, maxHeight: 220, borderRadius: 12, border: '2px solid #b2f0e6', boxShadow: '0 2px 8px #b2f0e6', background: '#fff' }} />
                <div style={{ color: '#3bbfa6', fontSize: 14, marginTop: 4 }}>이미지 미리보기</div>
              </div>
            )}
          </div>
          <div style={{ marginBottom: 16 }}>
            <label>제목<br />
              <input type="text" name="title" value={form.title} onChange={handleChange} style={{ width: '100%', padding: 8, fontSize: 16, border: '1.5px solid #b2f0e6', borderRadius: 6 }} required />
            </label>
          </div>
          <div style={{ marginBottom: 16 }}>
            <label>설명<br />
              <textarea name="description" value={form.description} onChange={handleChange} style={{ width: '100%', padding: 8, fontSize: 16, border: '1.5px solid #b2f0e6', borderRadius: 6 }} rows={4} required />
            </label>
          </div>
          <div style={{ marginBottom: 16 }}>
            <label>가격<br />
              <input type="number" name="price" value={form.price} onChange={handleChange} style={{ width: '100%', padding: 8, fontSize: 16, border: '1.5px solid #b2f0e6', borderRadius: 6 }} required />
            </label>
          </div>
          <div style={{ marginBottom: 16 }}>
            <label>카테고리<br />
              <input type="text" name="category" value={form.category} onChange={handleChange} style={{ width: '100%', padding: 8, fontSize: 16, border: '1.5px solid #b2f0e6', borderRadius: 6 }} />
            </label>
          </div>
          <button type="submit" style={{ width: '100%', padding: 14, fontSize: 18, background: '#2ed8b6', color: '#fff', border: 'none', borderRadius: 8, fontWeight: 700, boxShadow: '0 2px 8px #b2f0e6' }}>등록하기</button>
        </form>
      </div>
    </div>
  );
} 