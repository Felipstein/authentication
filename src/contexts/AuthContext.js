import { useState, createContext, useEffect } from "react";

import toast from '../utils/toast';
import delay from '../utils/delay';
import api from '../api';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const { user, token } = getTokenAndUserStoraged();

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

  function getTokenAndUserStoraged() {
    const user = localStorage.getItem('auth:user');
    const token = localStorage.getItem('auth:token');

    return { user, token }
  }

  function setTokenAndUser(token, user) {
    localStorage.setItem('auth:user', JSON.stringify(user));
    localStorage.setItem('auth:token', token);
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    setUser(user);
  }

  function unsetTokenAndUser() {
    localStorage.removeItem('auth:user');
    localStorage.removeItem('auth:token');
    api.defaults.headers.common.Authorization = undefined;
    setUser(null);
  }

  async function handleLogin(email, password) {
    try {
      setIsLoading(true);

      await delay(2000);
      const { data: { user, token } } = await api.post('/auth', {
        email, password,
      });

      setTokenAndUser(token, user);
    } catch (err) {
      toast({ text: err.response.data.error, type: 'danger' })
    } finally {
      setIsLoading(false);
    }
  }
  
  function handleLogout() {
    setIsLoading(true);
    unsetTokenAndUser();
    setIsLoading(false);
  }

  return (
    <AuthContext.Provider value={{ authenticated: !!user, isLoading, user, login: handleLogin, logout: handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
}