// components/Sidebar.js
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { PlusCircle, List } from 'lucide-react';

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: '/admin/dashboard/add-blog', label: 'Add Blog', icon: PlusCircle },
    { href: '/admin/dashboard/blog-list', label: 'Blog List', icon: List },
  ];

  return (
    <aside className="w-64 bg-white/70 backdrop-blur-sm border-r border-gray-200/50 min-h-[calc(100vh-4rem)] p-4 hidden md:block">
      <ul className="space-y-2">
        {links.map(({ href, label, icon: Icon }) => {
          const active = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  active
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-gray-100/80'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}