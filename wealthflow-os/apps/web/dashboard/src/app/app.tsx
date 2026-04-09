import { Route, Routes } from 'react-router-dom';
import AssetsPage from './assets/page';

// مكون فرعي بسيط للرئيسية
const DashboardHome = () => (
  <div className="p-4 bg-white rounded shadow">
    <h2 className="text-xl font-semibold">Overview</h2>
    <p>Welcome to WealthFlow Dashboard Main View.</p>
  </div>
);

export default function App() {
  return (
    <div className="dashboard-container">
      {/* هنا نضع الـ Routes الداخلية فقط */}
      <Routes>
        <Route path="/" element={<DashboardHome />} />
        <Route path="assets" element={<AssetsPage />} />

        {/* حل احتياطي: إذا لم يعمل ما سبق، جرب المسار الكامل */}
        <Route path="/dashboard/assets" element={<AssetsPage />} />
      </Routes>
    </div>
  );
}
