// app/admin/login/page.js (or whatever your path)
'use client';

import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../lib/axios';
import { toast } from 'react-toastify';
import { Lock, Mail } from 'lucide-react'; // optional

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/api/auth/adminlogin', { email, password });
      if (res.data.success) {
        login(res.data.aToken);
        toast.success('Login successful');
      } else {
        toast.error(res.data.error || 'Login failed');
      }
    } catch (err) {
      toast.error(err.response?.data?.error || 'Something went wrong');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <div className="w-full max-w-md bg-amber-50 rounded-2xl shadow-2xl p-8 border border-white/20">
        <div className="bg-[#1d1d1d] p-6 rounded-xl shadow-lg border border-white/20 backdrop-blur-lg ">
          <h2 className="text-4xl font-extrabold text-white text-center mb-2">Welcome Back</h2>
          <p className="text-white/70 text-center mb-8">Admin Login</p>

          <form onSubmit={handleSubmit} className="space-y-6 bg-[#1d1d1d] p-6 rounded-xl shadow-lg border border-white/20">
            <div className="relative">
              <Mail className="absolute left-3 top-3 text-white/60 w-5 h-5" />
              <input
                type="email"
                placeholder="Email"
                className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-3 text-white/60 w-5 h-5" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 pr-4 py-3 bg-white/20 border border-white/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50 transition"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-white text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}