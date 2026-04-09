export default function OverviewPage() {
  const x = 1111;
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome back, Hazem</h1>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-slate-500 text-sm">Total Net Worth</h3>
          <p className="text-3xl font-bold mt-2">$142,500.00</p>
          <span className="text-emerald-500 text-sm font-medium">
            ↑ 12% from last month
          </span>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-slate-500 text-sm">Gold Weight</h3>
          <p className="text-3xl font-bold mt-2">
            450 <span className="text-lg font-normal">g</span>
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h3 className="text-slate-500 text-sm">Crypto Portfolio</h3>
          <p className="text-3xl font-bold mt-2">
            0.85 <span className="text-lg font-normal">BTC</span>
          </p>
        </div>
      </div>
    </div>
  );
}
