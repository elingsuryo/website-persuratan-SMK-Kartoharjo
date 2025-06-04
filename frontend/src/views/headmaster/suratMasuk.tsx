import "../../index.css";

import SidebarMenu from "../../component/sidebarMenu";

const suratMasuk = () => {
  return (
    <div className="top-0 z-50 w-full">
      <aside className="fixed z-40 w-64 h-screen">
        <SidebarMenu />
      </aside>
      <main className="flex-1 overflow-auto p-4 sm:ml-64">
        <header className="flex mb-6 border-b w-full">
          <div className="flex items-center justify-between w-full px-8 py-4">
            <h1 className="text-2xl font-bold font-poppins">
              Konfirmasi Surat
            </h1>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="px-4 py-1.5 rounded-full border border-gray-300 focus:outline-none bg-[#2E3334] text-white"
              />
            </div>
            <div className="flex items-center gap-3 font-poppins font-semibold">
              <span>Kepala Sekolah</span>
              {/* <img
                src="https://via.placeholder.com/32"
                className="rounded-full w-8 h-8"
                alt="Profile"
              /> */}
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

        <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white">
          <div className="px-5 py-2.5 me-2 mb-2 text-[#899290] flex items-center gap-2">
            <svg
              width="8"
              height="4"
              viewBox="0 0 8 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 4L7.4641 0.25H0.535898L4 4Z" fill="#D9D9D9" />
            </svg>
            Filter
          </div>
        </div>
        <div className="relative overflow-x-auto sm:rounded-lg drop-shadow-2xl backdrop-blur-3xl">
          <table className="w-full text-sm text-left rtl:text-right">
            <thead className="text-xs text-bold uppercase bg-[#D9E8FF] backdrop-blur-2xl drop-shadow-md">
              <tr>
                <th scope="col" className="p-4 border-e border-[#8F8F8F]">
                  No
                </th>
                <th scope="col" className="px-6 py-3 border-e border-[#8F8F8F]">
                  Judul
                </th>
                <th scope="col" className="px-6 py-3 border-e border-[#8F8F8F]">
                  Deskripsi
                </th>
                <th scope="col" className="px-6 py-3 border-e border-[#8F8F8F]">
                  Tgl Upload
                </th>
                <th scope="col" className="px-6 py-3 border-e border-[#8F8F8F]">
                  File
                </th>
                <th scope="col" className="px-6 py-3">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b  border-[#8F8F8F]">
                <td className="w-4 p-3 border-e border-[#8F8F8F]">1</td>
                <th className=" px-6 py-3 whitespace-nowrap font-semibold border-e border-[#8F8F8F]">
                  Surat A
                </th>
                <td className="px-6 py-3 border-e border-[#8F8F8F]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </td>
                <td className="px-6 py-3 border-e border-[#8F8F8F]">
                  29/05/2025
                </td>
                <td className="px-6 py-3 border-e border-[#8F8F8F]">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.6667 3.33331H10.0001C9.11603 3.33331 8.26818 3.6845 7.64306 4.30962C7.01794 4.93474 6.66675 5.78259 6.66675 6.66665V33.3333C6.66675 34.2174 7.01794 35.0652 7.64306 35.6903C8.26818 36.3155 9.11603 36.6666 10.0001 36.6666H30.0001C30.8841 36.6666 31.732 36.3155 32.3571 35.6903C32.9822 35.0652 33.3334 34.2174 33.3334 33.3333V15M21.6667 3.33331L33.3334 15M21.6667 3.33331V15H33.3334"
                      stroke="#1E1E1E"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </td>
                <td className="px-6 py-3">
                  <button
                    type="button"
                    className="focus:outline-none flex items-center gap-2 text-white bg-[#0DC300] hover:bg-[#7dc878] focus:ring-4 focus:ring-green-300 font-small rounded-lg text-sm px-5 py-2.5 me-1 mb-2 dark:bg-[#0DC300] dark:hover:bg-[#7dc878] dark:focus:ring-green-800"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.3334 5.5L8.25008 15.5833L3.66675 11"
                        stroke="#F3F3F3"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Terima
                  </button>
                  <br />
                  <button
                    type="button"
                    className="focus:outline-none flex items-center gap-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-small rounded-lg text-sm px-5 py-2.5 me-1 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 5.5L5.5 16.5M5.5 5.5L16.5 16.5"
                        stroke="#F3F3F3"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Tolak
                  </button>
                </td>
              </tr>
              <tr className="bg-white border-b  border-[#8F8F8F]">
                <td className="w-4 p-3 border-e border-[#8F8F8F]">1</td>
                <th className=" px-6 py-3 whitespace-nowrap font-semibold border-e border-[#8F8F8F]">
                  Surat A
                </th>
                <td className="px-6 py-3 border-e border-[#8F8F8F]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </td>
                <td className="px-6 py-3 border-e border-[#8F8F8F]">
                  29/05/2025
                </td>
                <td className="px-6 py-3 border-e border-[#8F8F8F]">
                  <svg
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.6667 3.33331H10.0001C9.11603 3.33331 8.26818 3.6845 7.64306 4.30962C7.01794 4.93474 6.66675 5.78259 6.66675 6.66665V33.3333C6.66675 34.2174 7.01794 35.0652 7.64306 35.6903C8.26818 36.3155 9.11603 36.6666 10.0001 36.6666H30.0001C30.8841 36.6666 31.732 36.3155 32.3571 35.6903C32.9822 35.0652 33.3334 34.2174 33.3334 33.3333V15M21.6667 3.33331L33.3334 15M21.6667 3.33331V15H33.3334"
                      stroke="#1E1E1E"
                      stroke-width="4"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </td>
                <td className="px-6 py-3">
                  <button
                    type="button"
                    className="focus:outline-none flex items-center gap-2 text-white bg-[#0DC300] hover:bg-[#7dc878] focus:ring-4 focus:ring-green-300 font-small rounded-lg text-sm px-5 py-2.5 me-1 mb-2 dark:bg-[#0DC300] dark:hover:bg-[#7dc878] dark:focus:ring-green-800"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.3334 5.5L8.25008 15.5833L3.66675 11"
                        stroke="#F3F3F3"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Terima
                  </button>
                  <br />
                  <button
                    type="button"
                    className="focus:outline-none flex items-center gap-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-small rounded-lg text-sm px-5 py-2.5 me-1 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M16.5 5.5L5.5 16.5M5.5 5.5L16.5 16.5"
                        stroke="#F3F3F3"
                        stroke-width="4"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Tolak
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default suratMasuk;
