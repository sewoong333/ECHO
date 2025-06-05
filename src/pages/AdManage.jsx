import React, { useState, useEffect } from 'react';

export default function AdManage() {
  const [ads, setAds] = useState([]);
  const [form, setForm] = useState({ title: '', desc: '' });
  useEffect(() => {
    const saved = localStorage.getItem('myAds');
    if (saved) setAds(JSON.parse(saved));
  }, []);
  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };
  const handleAdd = () => {
    if (!form.title) return alert('제목을 입력하세요');
    const newAds = [{ ...form, id: Date.now() }, ...ads];
    setAds(newAds);
    localStorage.setItem('myAds', JSON.stringify(newAds));
    setForm({ title: '', desc: '' });
  };
  const handleDelete = id => {
    const newAds = ads.filter(a => a.id !== id);
    setAds(newAds);
    localStorage.setItem('myAds', JSON.stringify(newAds));
  };
  return (
    <div style={{padding:24, maxWidth:480, margin:'0 auto'}}>
      <h2 style={{fontSize:22, fontWeight:700, marginBottom:18}}>광고 관리</h2>
      <div style={{marginBottom:18}}>
        <input name="title" value={form.title} onChange={handleChange} placeholder="광고 제목" style={{width:'100%',padding:8,marginBottom:8}}/>
        <textarea name="desc" value={form.desc} onChange={handleChange} placeholder="광고 설명" style={{width:'100%',padding:8}}/>
        <button onClick={handleAdd} style={{marginTop:8,padding:'8px 18px',background:'#2ed8b6',color:'#fff',border:'none',borderRadius:8,fontWeight:700}}>등록</button>
      </div>
      {ads.length === 0 && <div style={{color:'#bbb'}}>등록된 광고가 없습니다.</div>}
      {ads.map(a => (
        <div key={a.id} style={{background:'#fff',borderRadius:10,boxShadow:'0 1px 4px #b2f0e6',padding:16,marginBottom:14,position:'relative'}}>
          <div style={{fontWeight:600, fontSize:17, marginBottom:6}}>{a.title}</div>
          <div style={{color:'#888', marginBottom:8}}>{a.desc}</div>
          <button onClick={()=>handleDelete(a.id)} style={{position:'absolute',top:12,right:12,background:'#ff7e36',color:'#fff',border:'none',borderRadius:6,padding:'4px 10px',fontWeight:700}}>삭제</button>
        </div>
      ))}
    </div>
  );
} 