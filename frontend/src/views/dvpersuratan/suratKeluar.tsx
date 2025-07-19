import "../../index.css";

import { FC } from "react";

import SidebarMenu from "../../component/sidebarMenu";

import { useUsers, User } from "../../hooks/user/useUsers";

import { Link } from "react-router";

const suratKeluar: FC = () => {
  const { data: users } = useUsers();

  //initialize useQueryClient

  //initialize useUserDelete

  //handle delete user

  return (
    <div className="top-0 z-50 w-full">
      <aside className="fixed z-40 w-64 h-screen">
        <SidebarMenu />
      </aside>
      <main className="flex-1 overflow-auto p-4 sm:ml-64">
        <header className="flex mb-6 border-b w-full">
          <div className="flex items-center justify-between w-full px-8 py-4">
            <h1 className="text-2xl font-bold font-poppins">Kirim Surat</h1>
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
              <Link to="/admin/tambah-user">Tambah Data</Link>
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
                  Name
                </th>
                <th scope="col" className="px-6 py-3 border-e border-[#8F8F8F]">
                  Whatsapp
                </th>
                <th scope="col" className="px-6 py-3 border-e border-[#8F8F8F]">
                  Keterangan
                </th>
                <th scope="col" className="px-6 py-3">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user: User) => (
                <tr
                  className="bg-white border-b  border-[#8F8F8F]"
                  key={user.id}
                >
                  <td className="w-4 p-3 border-e border-[#8F8F8F]">
                    {users.indexOf(user) + 1}
                  </td>
                  <th className=" px-6 py-3 border-e border-[#8F8F8F]">
                    {user.full_name}
                  </th>
                  <td className="px-6 py-3  border-e border-[#8F8F8F]">
                    {user.whatsapp}
                  </td>
                  <td className="px-6 py-3 border-e border-[#8F8F8F]">
                    {user.role}
                  </td>
                  <td className="px-6 py-3">
                    <button
                      type="button"
                      className="focus:outline-none flex items-center gap-2 text-white bg-[#0DC300] hover:bg-[#7dc878] focus:ring-4 focus:ring-green-300 font-small rounded-lg text-sm px-5 py-2.5 me-1 mb-2 dark:bg-[#0DC300] dark:hover:bg-[#7dc878] dark:focus:ring-green-800"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M9.99984 6.66663C11.6387 6.66663 13.2533 6.99649 14.8436 7.65621C16.4339 8.31593 17.8471 9.30552 19.0832 10.625C19.2498 10.7916 19.3332 10.9861 19.3332 11.2083C19.3332 11.4305 19.2498 11.625 19.0832 11.7916L17.1665 13.6666C17.0137 13.8194 16.8366 13.9027 16.6353 13.9166C16.4339 13.9305 16.2498 13.875 16.0832 13.75L13.6665 11.9166C13.5554 11.8333 13.4721 11.7361 13.4165 11.625C13.3609 11.5138 13.3332 11.3888 13.3332 11.25V8.87496C12.8054 8.70829 12.2637 8.57635 11.7082 8.47913C11.1526 8.3819 10.5832 8.33329 9.99984 8.33329C9.4165 8.33329 8.84706 8.3819 8.2915 8.47913C7.73595 8.57635 7.19428 8.70829 6.6665 8.87496V11.25C6.6665 11.3888 6.63873 11.5138 6.58317 11.625C6.52761 11.7361 6.44428 11.8333 6.33317 11.9166L3.9165 13.75C3.74984 13.875 3.56581 13.9305 3.36442 13.9166C3.16303 13.9027 2.98595 13.8194 2.83317 13.6666L0.916504 11.7916C0.749837 11.625 0.666504 11.4305 0.666504 11.2083C0.666504 10.9861 0.749837 10.7916 0.916504 10.625C2.13873 9.30552 3.54845 8.31593 5.14567 7.65621C6.74289 6.99649 8.36095 6.66663 9.99984 6.66663Z"
                          fill="white"
                        />
                      </svg>
                      <Link to={"https://wa.me/" + user.whatsapp}>Hubungi</Link>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default suratKeluar;
