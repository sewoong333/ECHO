import React, { useState, useContext } from 'react';
import TopBar from '../components/TopBar';
import { UserContext } from '../store/UserContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const { user, loginWithGoogle, loginWithEmail } = useContext(UserContext);
  const navigate = useNavigate();

  React.useEffect(() => {
    if (user.isLoggedIn) navigate('/');
  }, [user, navigate]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(f => ({ ...f, [name]: value }));
  };
  const handleSubmit = async e => {
    e.preventDefault();
    setError('');
    try {
      await loginWithEmail({ email: form.email, password: form.password });
    } catch (err) {
      setError('이메일 또는 비밀번호가 올바르지 않습니다.');
    }
  };
  const handleGoogle = async () => {
    setError('');
    try {
      await loginWithGoogle();
    } catch (err) {
      setError('구글 로그인에 실패했습니다.');
    }
  };

  return (
    <div style={{ maxWidth: 480, margin: '0 auto', padding: 0, background: '#f8f9fa', minHeight: '100vh' }}>
      <TopBar />
      <div style={{ padding: 32 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700, marginBottom: 24 }}>로그인</h1>
        <button onClick={handleGoogle} style={{ width: '100%', padding: 12, fontSize: 18, background: '#4285F4', color: '#fff', border: 'none', borderRadius: 4, fontWeight: 600, marginBottom: 18 }}>Google 계정으로 로그인</button>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 16 }}>
            <label>이메일<br />
              <input type="email" name="email" value={form.email} onChange={handleChange} style={{ width: '100%', padding: 8, fontSize: 16 }} required />
            </label>
          </div>
          <div style={{ marginBottom: 24 }}>
            <label>비밀번호<br />
              <input type="password" name="password" value={form.password} onChange={handleChange} style={{ width: '100%', padding: 8, fontSize: 16 }} required />
            </label>
          </div>
          <button type="submit" style={{ width: '100%', padding: 12, fontSize: 18, background: '#ff7e36', color: '#fff', border: 'none', borderRadius: 4, fontWeight: 600 }}>이메일로 로그인</button>
        </form>
        <div style={{ marginTop: 18, textAlign: 'center' }}>
          <span style={{ color: '#888' }}>계정이 없으신가요? </span>
          <button onClick={() => navigate('/signup')} style={{ color: '#2ed8b6', background: 'none', border: 'none', fontWeight: 600, cursor: 'pointer' }}>회원가입</button>
        </div>
        {error && <div style={{ color: 'red', marginTop: 18, textAlign: 'center' }}>{error}</div>}
      </div>
    </div>
  );
} 