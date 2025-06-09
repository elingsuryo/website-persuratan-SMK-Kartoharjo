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
              <span>Divisi Surat</span>
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
          <div className="relative">
            <button
              type="button"
              className="focus:outline-none flex items-center gap-2 text-white bg-[#0DC300] focus:ring-4 focus:ring-red-300 font-small rounded-[5px] text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#0DC300] dark:hover:bg-[#0DC300] dark:focus:ring-[#0DC300]"
            >
              <div>
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.5 4.375V16.625M4.375 10.5H16.625"
                    stroke="white"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div>Tambah Data</div>
            </button>
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
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.5 15.5V11.9583L11.5 0.979167C11.6667 0.826389 11.8507 0.708333 12.0521 0.625C12.2535 0.541667 12.4653 0.5 12.6875 0.5C12.9097 0.5 13.125 0.541667 13.3333 0.625C13.5417 0.708333 13.7222 0.833333 13.875 1L15.0208 2.16667C15.1875 2.31944 15.309 2.5 15.3854 2.70833C15.4618 2.91667 15.5 3.125 15.5 3.33333C15.5 3.55556 15.4618 3.76736 15.3854 3.96875C15.309 4.17014 15.1875 4.35417 15.0208 4.52083L4.04167 15.5H0.5ZM12.6667 4.5L13.8333 3.33333L12.6667 2.16667L11.5 3.33333L12.6667 4.5Z"
                        fill="white"
                      />
                    </svg>
                    Edit Data
                  </button>
                  <br />
                  <button
                    type="button"
                    className="focus:outline-none flex items-center gap-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-small rounded-lg text-sm px-5 py-2.5 me-1 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                  >
                    <svg
                      width="16"
                      height="18"
                      viewBox="0 0 16 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.41663 17.25C2.91246 17.25 2.48086 17.0705 2.12183 16.7115C1.76281 16.3524 1.58329 15.9208 1.58329 15.4167V3.5H0.666626V1.66667H5.24996V0.75H10.75V1.66667H15.3333V3.5H14.4166V15.4167C14.4166 15.9208 14.2371 16.3524 13.8781 16.7115C13.5191 17.0705 13.0875 17.25 12.5833 17.25H3.41663ZM5.24996 13.5833H7.08329V5.33333H5.24996V13.5833ZM8.91663 13.5833H10.75V5.33333H8.91663V13.5833Z"
                        fill="#FEF7FF"
                      />
                    </svg>
                    Hapus
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
