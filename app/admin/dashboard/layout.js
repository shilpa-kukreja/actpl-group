'use client';

import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardLayout({ children }) {
  const { admin, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !admin) {
      router.push('/admin/login');
    }
  }, [admin, loading, router]);

  if (loading) return <div className="flex justify-center items-center h-screen">Loading...</div>;

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 p-6 overflow-y-auto bg-gray-50">
          {children}
        </main>
      </div>
    </div>
  );
}