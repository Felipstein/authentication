import { useState, createContext } from "react";

import api from '../api';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [authenticated, setAuthenticated] = useState(false);

  async function handleLogin(email, password) {
    try {
      const { data: { user, token } } = await api.post('/auth', {
        email, password,
      });

      console.log(user);
      console.log(token);

      api.defaults.headers.common.Authorization = `Bearer ${token}`
      setAuthenticated(true);
    } catch (err) {
      console.log('eitaaa', err);
    }
  }

  return (
    <AuthContext.Provider value={{ authenticated, login: handleLogin }}>
      {children}
    </AuthContext.Provider>
  );
}