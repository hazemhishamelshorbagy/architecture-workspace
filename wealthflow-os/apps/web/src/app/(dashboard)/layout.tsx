import React from 'react';
import Link from 'next/link';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900">
      {/* 1. Sidebar الثابت */}
      <aside className="w-64 bg-slate-900 text-white fixed h-full hidden md:flex flex-col">
        <div className="p-6 text-2xl font-bold border-b border-slate-800">
          WealthFlow <span className="text-blue-400">OS</span>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link
            href="/"
            className="block p-3 hover:bg-slate-800 rounded-lg transition"
          >
            Overview
          </Link>
          <div className="pt-4 pb-2 text-xs font-semibold text-slate-500 uppercase">
            Assets
          </div>
          <Link
            href="/assets/gold"
            className="block p-3 hover:bg-slate-800 rounded-lg transition"
          >
            Gold (الذهب)
          </Link>
          <Link
            href="/assets/crypto"
            className="block p-3 hover:bg-slate-800 rounded-lg transition"
          >
            Crypto (كريبتو)
          </Link>
        </nav>
        <div className="p-4 border-t border-slate-800 text-xs text-slate-500">
          v1.0.0 - Senior Frontend Eng.
        </div>
      </aside>

      {/* 2. منطقة المحتوى */}
      <div className="flex-1 md:ml-64 flex flex-col">
        {/* Navbar علوي بسيط */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">
          <div className="font-medium text-slate-500">Dashboard / Overview</div>
          <div className="flex items-center gap-4">
            <div className="h-8 w-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
              HH
            </div>
          </div>
        </header>

        {/* المحتوى الفعلي للصفحة */}
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
