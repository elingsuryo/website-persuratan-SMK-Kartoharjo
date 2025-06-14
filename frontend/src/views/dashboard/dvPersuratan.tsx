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

        <div className="grid grid-cols-5 grid-rows-5 gap-4 p-4">
          {/* div1: kolom 1–3, baris 1–2 */}
          <div className="col-span-3 row-span-2 bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
            <div className="grid grid-cols-3 gap-4">
              {/* Ditolak */}
              <div className="text-center">
                <div className="text-4xl font-bold text-black">9</div>
                <div className="mt-4">
                  <span className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg text-sm font-semibold">
                    Ditolak
                  </span>
                </div>
              </div>

              {/* Diproses */}
              <div className="text-center">
                <div className="text-4xl font-bold text-black">5</div>
                <div className="mt-4">
                  <span className="inline-block bg-yellow-400 text-white px-6 py-2 rounded-lg text-sm font-semibold">
                    Diproses
                  </span>
                </div>
              </div>

              {/* Selesai */}
              <div className="text-center">
                <div className="text-4xl font-bold text-black">4</div>
                <div className="mt-4">
                  <span className="inline-block bg-green-500 text-white px-6 py-2 rounded-lg text-sm font-semibold">
                    Selesai
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* div2: kolom 1–3, baris 3–4 */}
          <div className="col-span-3 row-span-2 bg-white rounded-2xl shadow-lg p-6 flex justify-between items-center">
            <div>
              <p className="font-semibold text-lg">Tambah Dokumen</p>
              <div className="border-b border-black w-64 my-2"></div>
              <p className="text-sm text-gray-400">upload file dokumen</p>
            </div>

            <div className="w-20 h-20 bg-[#325389] rounded-full flex items-center justify-center">
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M35 5H15C13.6739 5 12.4021 5.52678 11.4645 6.46447C10.5268 7.40215 10 8.67392 10 10V50C10 51.3261 10.5268 52.5979 11.4645 53.5355C12.4021 54.4732 13.6739 55 15 55H45C46.3261 55 47.5979 54.4732 48.5355 53.5355C49.4732 52.5979 50 51.3261 50 50V20M35 5L50 20M35 5V20H50M30 45V30M22.5 37.5H37.5"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* div3: kolom 4–5, baris 1–4 */}
          <div className="col-span-2 row-span-4 bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-start">
            <div className="grid grid-cols-3 gap-4">
              {/* Ditolak */}
              <div className="text-center">
                <div className="text-4xl font-bold text-black">9</div>
                <div className="mt-4">
                  <span className="inline-block bg-red-600 text-white px-6 py-2 rounded-lg text-sm font-semibold">
                    Ditolak
                  </span>
                </div>
              </div>

              {/* Diproses */}
              <div className="text-center">
                <div className="text-4xl font-bold text-black">5</div>
                <div className="mt-4">
                  <span className="inline-block bg-yellow-400 text-white px-6 py-2 rounded-lg text-sm font-semibold">
                    Diproses
                  </span>
                </div>
              </div>

              {/* Selesai */}
              <div className="text-center">
                <div className="text-4xl font-bold text-black">4</div>
                <div className="mt-4">
                  <span className="inline-block bg-green-500 text-white px-6 py-2 rounded-lg text-sm font-semibold">
                    Selesai
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DvPersuratan;
