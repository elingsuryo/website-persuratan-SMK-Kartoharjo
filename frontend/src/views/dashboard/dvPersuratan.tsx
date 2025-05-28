import "../../index.css";

const DvPersuratan = () => {
  return (
    <div>
      <main className="flex-1 p-6 overflow-auto">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-1.5 rounded-full border border-gray-300 focus:outline-none"
              />
            </div>
            <div className="flex items-center gap-3">
              <span>📬</span>
              <span>🔔</span>
              <span>Divisi Surat</span>
              <img
                src="https://via.placeholder.com/32"
                className="rounded-full w-8 h-8"
                alt="Profile"
              />
            </div>
          </div>
        </header>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="p-4 bg-white rounded-xl shadow text-center">
            <p className="text-3xl font-bold text-red-600">9</p>
            <p className="text-sm">Ditolak</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow text-center">
            <p className="text-3xl font-bold text-yellow-500">5</p>
            <p className="text-sm">Diproses</p>
          </div>
          <div className="p-4 bg-white rounded-xl shadow text-center">
            <p className="text-3xl font-bold text-green-600">4</p>
            <p className="text-sm">Selesai</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 p-4 bg-white rounded-xl shadow">
            <h2 className="font-semibold mb-2">Kategori</h2>

            <div className="w-full h-64 bg-gray-100 flex items-center justify-center rounded">
              <p>Chart Placeholder</p>
            </div>
            <div className="flex justify-around mt-4 text-sm text-gray-600">
              <span className="text-blue-900">■ Surat A</span>
              <span className="text-blue-700">■ Surat B</span>
              <span className="text-blue-500">■ Surat C</span>
              <span className="text-blue-300">■ Surat D</span>
            </div>
          </div>

          <div className="p-4 bg-white rounded-xl shadow overflow-y-auto">
            <h2 className="font-semibold mb-2">Filter</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between border rounded-xl p-2">
                <div>
                  <p className="font-semibold">Surat B</p>
                  <p className="text-xs text-gray-500">Saving Funds #B</p>
                </div>
                <div className="text-green-600 text-sm">Selesai</div>
              </div>
              <div className="flex items-center justify-between border rounded-xl p-2">
                <div>
                  <p className="font-semibold">Surat A</p>
                  <p className="text-xs text-gray-500">Emergency #D</p>
                </div>
                <div className="text-green-600 text-sm">Selesai</div>
              </div>
              <div className="flex items-center justify-between border rounded-xl p-2">
                <div>
                  <p className="font-semibold">Surat C</p>
                  <p className="text-xs text-gray-500">Saving Funds #A</p>
                </div>
                <div className="text-yellow-500 text-sm">Diproses</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DvPersuratan;
