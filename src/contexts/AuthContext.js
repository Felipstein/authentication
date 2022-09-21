import { useState, createContext, useEffect } from "react";

import toast from '../utils/toast';
import delay from '../utils/delay';
import api from '../api';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    (async function () {
      const token = getTokenStoraged();

      if(!!user ^ !!token) {
        handleLogout();
        return;
      }

      if(!token) {
        return;
      }

      try {
        setIsLoading(true);
        const { data: user } = await api.post('/auth/validate', { token });

        console.log(user);

        if(user && token) {
          api.defaults.headers.common.Authorization = `Bearer ${token}`
          setUser(JSON.parse(user));
        }
      } catch {
        unsetTokenAndUser();
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  function getTokenStoraged() {
    return localStorage.getItem('auth:token');
  }

  function setToken(token) {
    localStorage.setItem('auth:token', token);
    api.defaults.headers.common.Authorization = `Bearer ${token}`
    setUser(user);
  }

  function unsetToken() {
    localStorage.removeItem('auth:token');
    api.defaults.headers.common.Authorization = undefined;
    setUser(null);
  }

  async function handleLogin(email, password) {
    let success = false;

    try {
      setIsLoading(true);

      await delay(2000);
      const { data: { user, token } } = await api.post('/auth', {
        email, password,
      });

      setTokenAndUser(token, user);
      success = true;
    } catch (err) {
      if(!err.response.status) {
        toast({ text: 'Parece que nossos servidores não estão nos respondendo no momento, tente novamente mais tarde', type: 'danger' });
        return false;
      }


      toast({ text: err.response.data.error, type: 'danger' })
    } finally {
      setIsLoading(false);
      return success;
    }
  }
  
  async function handleRegister(name, email, password, confirmPassword) {
    let success = false;

    try {
      setIsLoading(true);

      await delay(2000);
      const { data: { user, token } } = await api.post('/auth/register', {
        name, email, password, confirmPassword,
      });

      setTokenAndUser(token, user);
      success = true;
    } catch(err) {
      if(!err.response.status) {
        toast({ text: 'Parece que nossos servidores não estão nos respondendo no momento, tente novamente mais tarde', type: 'danger' });
        return false;
      }

      toast({ text: err.response.data.error , type: 'danger' });
    } finally {
      setIsLoading(false);
      return success;
    }
  }

  function handleLogout() {
    setIsLoading(true);
    unsetTokenAndUser();
    setIsLoading(false);
  }

  return (
    <AuthContext.Provider
      value={{
        authenticated: !!user,
        isLoading,
        user,
        login: handleLogin,
        register: handleRegister,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}