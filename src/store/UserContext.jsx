import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState({ nickname: '나', email: 'me@example.com', isLoggedIn: true });

  const login = ({ nickname, email }) => setUser({ nickname, email, isLoggedIn: true });
  const logout = () => setUser({ nickname: '', email: '', isLoggedIn: false });
  const signup = ({ nickname, email }) => setUser({ nickname, email, isLoggedIn: true });

  return (
    <UserContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </UserContext.Provider>
  );
} 