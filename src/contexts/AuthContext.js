import { useEffect } from "react";
import { useState, createContext } from "react";

import api from '../api';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if(token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      setAuthenticated(true);
    }

  }, []);

  async function handleLogin(email, password) {
    try {
      const { data: { token } } = await api.post('/auth', {
        email, password,
      });
      
      localStorage.setItem('token', token);
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      setAuthenticated(true);
    } catch (err) {
      console.log('eitaaa', err);
    }
  }

  async function handleLogout() {
    localStorage.removeItem('token');
    api.defaults.headers.common.Authorization = undefined;
    setAuthenticated(false);
  }

  return (
    <AuthContext.Provider value={{ authenticated, login: handleLogin, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}