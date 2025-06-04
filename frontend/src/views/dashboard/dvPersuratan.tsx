import "../../index.css";

import SidebarMenu from "../../component/sidebarMenu";

const DvPersuratan = () => {
  return (
    <>
      <aside className="fixed z-40 w-64 h-screen">
        <SidebarMenu />
      </aside>
      <main className="flex-1 overflow-auto p-4 sm:ml-64">
        <header className="flex mb-6 border-b w-full">
          <div className="flex items-center justify-between w-full px-8 py-4">
            <h1 className="text-2xl font-bold font-poppins">Surat Masuk</h1>
            <div className="flex items-center gap-3 font-poppins font-semibold">
              <span>Divisi Surat</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="rounded-full w-8 h-8"
              >
                <g id="User_profile" data-name="User profile">
                  <path
                    d="M47 24A23 23 0 1 1 12.81 3.91 23 23 0 0 1 47 24z"
                    fill="#374f68"
                  />
                  <path
                    d="M47 24a22.91 22.91 0 0 1-8.81 18.09A22.88 22.88 0 0 1 27 45C5.28 45-4.37 17.34 12.81 3.91A23 23 0 0 1 47 24z"
                    fill="#425b72"
                  />
                  <path
                    d="M39.2 35.39a19 19 0 0 1-30.4 0 17 17 0 0 1 10.49-8.73 8.93 8.93 0 0 0 9.42 0 17 17 0 0 1 10.49 8.73z"
                    fill="#6fabe6"
                  />
                  <path
                    d="M39.2 35.39a19 19 0 0 1-4.77 4.49 19 19 0 0 1-15.13-1 7.08 7.08 0 0 1-.51-12.18c.1-.07 0-.05.5-.05a9 9 0 0 0 9.42 0 17 17 0 0 1 10.49 8.74z"
                    fill="#82bcf4"
                  />
                  <path
                    d="M33 19a9 9 0 1 1-12.38-8.34A9 9 0 0 1 33 19z"
                    fill="#6fabe6"
                  />
                  <path
                    d="M33 19a9 9 0 0 1-2.6 6.33c-9.13 3.74-16.59-7.86-9.78-14.67A9 9 0 0 1 33 19z"
                    fill="#82bcf4"
                  />
                </g>
              </svg>
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
    </>
  );
};

export default DvPersuratan;
