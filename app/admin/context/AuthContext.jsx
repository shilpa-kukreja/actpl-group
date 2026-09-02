'use client';

import React, { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const AuthContext = createContext();

// Cookie helpers
const setCookie = (name, value, days = 30) => {
  document.cookie = `${name}=${value}; path=/; max-age=${days * 86400}`;
};
const deleteCookie = (name) => {
  document.cookie = `${name}=; path=/; max-age=0`;
};

export const AdminAuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    if (token) {
      setAdmin({ token });
    }
    setLoading(false);
  }, []);

  const login = (token) => {
    localStorage.setItem('adminToken', token);
    setCookie('adminToken', token);
    setAdmin({ token });
    router.push('/admin/dashboard/add-blog');
  };

  const logout = () => {
    localStorage.removeItem('adminToken');
    deleteCookie('adminToken');
    setAdmin(null);
    router.push('/admin/login');
  };

  return (
    <AuthContext.Provider value={{ admin, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);