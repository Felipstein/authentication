import { useState, createContext, useEffect } from "react";

import delay from '../utils/delay';
import api from '../api';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setError(null);
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
    setIsLoading(false);
  }, []);

  async function handleLogin(email, password) {
    try {
      setError(null);
      setIsLoading(true);

      await delay(2000);
      const { data: { user, token } } = await api.post('/auth', {
        email, password,
      });

      
      localStorage.setItem('auth:user', JSON.stringify(user));
      localStorage.setItem('auth:token', token);
      api.defaults.headers.common.Authorization = `Bearer ${token}`
      setUser(user);
    } catch (err) {
      setError(err.response);
    } finally {
      setIsLoading(false);
    }
  }
  
  function handleLogout() {
    setIsLoading(true);
    localStorage.removeItem('auth:user');
    localStorage.removeItem('auth:token');
    api.defaults.headers.common.Authorization = undefined;
    setUser(null);
    setIsLoading(false);
  }

  return (
    <AuthContext.Provider value={{ authenticated: !!user, isLoading, user, login: handleLogin, logout: handleLogout, error }}>
      {children}
    </AuthContext.Provider>
  );
}