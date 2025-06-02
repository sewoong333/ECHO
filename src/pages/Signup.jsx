import React, { useState, useContext } from 'react';
import TopBar from '../components/TopBar';
import { UserContext } from '../store/UserContext';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [form, setForm] = useState({ email: '', nickname: '' });
  const { user, signup } = useContext(UserContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user.isLoggedIn) navigate('/');
  }, [user, navigate]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    signup({ nickname: form.nickname || '나', email: form.email });
    navigate('/');
  };

  return (
    <div style={{ maxWidth: 480, margin: '0 auto', padding: 0, background: '#f8f9fa', minHeight: '100vh' }}>
      <TopBar />
      <div style={{ padding: 32 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24 }}>회원가입</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 16 }}>
            <label>이메일<br />
              <input type="email" name="email" value={form.email} onChange={handleChange} style={{ width: '100%', padding: 8, fontSize: 16 }} required />
            </label>
          </div>
          <div style={{ marginBottom: 16 }}>
            <label>닉네임<br />
              <input type="text" name="nickname" value={form.nickname} onChange={handleChange} style={{ width: '100%', padding: 8, fontSize: 16 }} />
            </label>
          </div>
          <button type="submit" style={{ width: '100%', padding: 12, fontSize: 18, background: '#ff7e36', color: '#fff', border: 'none', borderRadius: 4, fontWeight: 600 }}>회원가입</button>
        </form>
      </div>
    </div>
  );
} 