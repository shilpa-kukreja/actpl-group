// components/Navbar.js
'use client';

import { useAuth } from '../../context/AuthContext';
import { LogOut, User } from 'lucide-react';

export default function Navbar() {
  const { logout } = useAuth();

  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200/50 px-6 py-3 flex justify-between items-center sticky top-0 z-10">
      <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
        Admin Panel
      </h1>
      <div className="flex items-center gap-4">
        <span className="text-sm text-gray-600 hidden sm:inline">Admin</span>
        <User className="w-5 h-5 text-gray-600" />
        <button
          onClick={logout}
          className="flex items-center gap-2 bg-red-500/10 text-red-600 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition-all duration-200"
        >
          <LogOut className="w-4 h-4" />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </nav>
  );
}