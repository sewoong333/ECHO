import React, { useState, useContext } from 'react';
import TopBar from '../components/TopBar';
import { UserContext } from '../store/UserContext';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const [form, setForm] = useState({ email: '', password: '', nickname: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { user, signupWithEmail } = useContext(UserContext);
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
    setSuccess('');
    try {
      await signupWithEmail({ email: form.email, password: form.password, nickname: form.nickname });
      setSuccess('회원가입이 완료되었습니다! 이메일로 인증 링크가 발송되었습니다. 인증 후 로그인해 주세요.');
    } catch (err) {
      setError('회원가입에 실패했습니다. 이미 가입된 이메일이거나, 비밀번호가 너무 짧을 수 있습니다.');
    }
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
            <label>비밀번호<br />
              <input type="password" name="password" value={form.password} onChange={handleChange} style={{ width: '100%', padding: 8, fontSize: 16 }} required />
            </label>
          </div>
          <div style={{ marginBottom: 16 }}>
            <label>닉네임<br />
              <input type="text" name="nickname" value={form.nickname} onChange={handleChange} style={{ width: '100%', padding: 8, fontSize: 16 }} />
            </label>
          </div>
          <button type="submit" style={{ width: '100%', padding: 12, fontSize: 18, background: '#ff7e36', color: '#fff', border: 'none', borderRadius: 4, fontWeight: 600 }}>회원가입</button>
        </form>
        {success && <div style={{ color: '#2ed8b6', marginTop: 18, textAlign: 'center' }}>{success}</div>}
        {error && <div style={{ color: 'red', marginTop: 18, textAlign: 'center' }}>{error}</div>}
      </div>
    </div>
  );
} 