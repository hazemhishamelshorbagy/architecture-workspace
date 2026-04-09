export default function GoldPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Gold Assets (إدارة الذهب)</h1>
        <button className="bg-amber-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-amber-600 transition">
          + Add Purchase
        </button>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden">
        <table className="w-full text-left border-collapse">
          <thead className="bg-slate-50 border-b border-slate-200 font-medium text-slate-600">
            <tr>
              <th className="p-4">Type</th>
              <th className="p-4">Weight (g)</th>
              <th className="p-4">Karat</th>
              <th className="p-4 text-right">Current Value</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-slate-100">
              <td className="p-4 font-medium">Gold Coin (جنيه ذهب)</td>
              <td className="p-4">8.00</td>
              <td className="p-4">21K</td>
              <td className="p-4 text-right">$640.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
