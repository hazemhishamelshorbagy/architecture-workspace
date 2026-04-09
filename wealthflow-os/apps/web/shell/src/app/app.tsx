import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import NxWelcome from './nx-welcome';

// 1. تحميل التطبيقات البعيدة بشكل Lazy (تحسين الأداء)
// 'dashboard/Module' هو الاسم المعرف في ملف module-federation.config.js للداشبورد
const Dashboard = React.lazy(() => import('dashboard/Module'));

export function App() {
  return (
    // 2. Suspense ضروري للتعامل مع وقت تحميل الموديولات عبر الشبكة
    <React.Suspense
      fallback={
        <div className="flex h-screen items-center justify-center">
          Loading WealthFlow OS...
        </div>
      }
    >
      {/* 3. هيكل الصفحة (Layout) */}
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-slate-900 p-4 text-white shadow-md">
          <ul className="flex gap-6 container mx-auto">
            <li>
              <Link
                to="/"
                className="hover:text-blue-400 transition-colors font-medium"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard"
                className="hover:text-blue-400 transition-colors font-medium"
              >
                Main Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/assets"
                className="hover:text-blue-400 transition-colors font-medium"
              >
                Assets Management
              </Link>
            </li>
          </ul>
        </nav>

        {/* 4. منطقة عرض المحتوى (Main Content Area) */}
        <main className="container mx-auto mt-8 p-4">
          <Routes>
            {/* الصفحة الرئيسية للـ Shell */}
            <Route
              path="/"
              element={<NxWelcome title="WealthFlow OS Shell" />}
            />

            {/* توجيه مسارات الداشبورد:
               نستخدم /* لنقول للـ Router: 
               "أي مسار يبدأ بـ /dashboard، اتركه لـ موديول Dashboard ليتعامل معه داخلياً"
            */}
            <Route path="/dashboard/*" element={<Dashboard />} />

            {/* صفحة 404 بسيطة */}
            <Route
              path="*"
              element={
                <div className="text-center py-20 text-xl text-gray-500">
                  404 - Page Not Found
                </div>
              }
            />
          </Routes>
        </main>
      </div>
    </React.Suspense>
  );
}

export default App;
