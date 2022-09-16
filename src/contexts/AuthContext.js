import { useEffect } from "react";
import { useState, createContext } from "react";

import api from '../api';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem('auth:user');
    const token = localStorage.getItem('auth:token');

    if(!!user ^ !!token) {
      handleLogout();
      return;
    }

    if(user && token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      setUser(JSON.parse(user));
    }

  }, []);

  async function handleLogin(email, password) {
    try {
      const { data: { user, token } } = await api.post('/auth', {
        email, password,
      });
      
      localStorage.setItem('auth:user', JSON.stringify(user));
      localStorage.setItem('auth:token', token);
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      setUser(user);
    } catch (err) {
      console.log('eitaaa', err);
    }
  }

  async function handleLogout() {
    localStorage.removeItem('auth:user');
    localStorage.removeItem('auth:token');
    api.defaults.headers.common.Authorization = undefined;
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ authenticated: !!user, user, login: handleLogin, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}