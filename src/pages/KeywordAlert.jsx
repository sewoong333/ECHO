import React, { useState, useEffect } from 'react';

export default function KeywordAlert() {
  const [keywords, setKeywords] = useState([]);
  const [input, setInput] = useState('');
  useEffect(() => {
    const saved = localStorage.getItem('myKeywords');
    if (saved) setKeywords(JSON.parse(saved));
  }, []);
  const handleAdd = () => {
    if (!input.trim()) return;
    setKeywords(kws => {
      const newKws = [...kws, { word: input, enabled: true }];
      localStorage.setItem('myKeywords', JSON.stringify(newKws));
      return newKws;
    });
    setInput('');
  };
  const handleDelete = idx => {
    setKeywords(kws => {
      const newKws = kws.filter((_, i) => i !== idx);
      localStorage.setItem('myKeywords', JSON.stringify(newKws));
      return newKws;
    });
  };
  const handleToggle = idx => {
    setKeywords(kws => {
      const newKws = kws.map((k, i) => i===idx ? { ...k, enabled: !k.enabled } : k);
      localStorage.setItem('myKeywords', JSON.stringify(newKws));
      return newKws;
    });
  };
  return (
    <div style={{padding:24, maxWidth:480, margin:'0 auto'}}>
      <h2 style={{fontSize:22, fontWeight:700, marginBottom:18}}>키워드 알림 설정</h2>
      <div style={{marginBottom:14}}>
        <input value={input} onChange={e=>setInput(e.target.value)} placeholder="키워드 입력" style={{width:'70%',padding:8,marginRight:8}}/>
        <button onClick={handleAdd} style={{padding:'8px 16px',background:'#2ed8b6',color:'#fff',border:'none',borderRadius:8,fontWeight:700}}>추가</button>
      </div>
      {keywords.length === 0 && <div style={{color:'#bbb'}}>등록된 키워드가 없습니다.</div>}
      {keywords.map((k, i) => (
        <div key={i} style={{background:'#fff',borderRadius:10,boxShadow:'0 1px 4px #b2f0e6',padding:16,marginBottom:14,display:'flex',alignItems:'center',justifyContent:'space-between'}}>
          <span style={{fontWeight:600, fontSize:17}}>{k.word}</span>
          <span>
            <button onClick={()=>handleToggle(i)} style={{marginRight:10,padding:'4px 12px',background:k.enabled?'#2ed8b6':'#bbb',color:'#fff',border:'none',borderRadius:8,fontWeight:700}}>{k.enabled?'ON':'OFF'}</button>
            <button onClick={()=>handleDelete(i)} style={{padding:'4px 12px',background:'#ff7e36',color:'#fff',border:'none',borderRadius:8,fontWeight:700}}>삭제</button>
          </span>
        </div>
      ))}
    </div>
  );
} 