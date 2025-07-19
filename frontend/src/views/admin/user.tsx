import "../../index.css";

import { FC } from "react";

import { useUsers, User } from "../../hooks/user/useUsers";

import { useUserDelete } from "../../hooks/user/useUserDelete";
import { useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router";
import { useLogout } from "../../hooks/auth/useLogout";

const KelolaUser: FC = () => {
  const logout = useLogout();
  const { data: users } = useUsers();

  //initialize useQueryClient
  const queryClient = useQueryClient();

  //initialize useUserDelete
  const { mutate, isPending } = useUserDelete();

  //handle delete user
  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this user?")) {
      //call useUserDelete
      mutate(id, {
        onSuccess: () => {
          //refetch data
          queryClient.invalidateQueries({ queryKey: ["users"] });
        },
      });
    }
  };
  return (
    <div className="top-0 z-50 w-full">
      <aside className="fixed z-40 w-64 h-screen">
        <div className="w-[251px] h-[832px] bg-[#32538a] flex flex-col text-white select-none">
          <div className="p-6 border-[#2a4773] flex justify-center">
            <svg
              width="57"
              height="72"
              viewBox="0 0 57 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M47.9296 62.5483C53.0096 57.2597 56.1603 49.9458 56.1603 41.8755V30.3337H56.1443V22.9074H28.0723V35.5417H44.0229V41.8603H44.0083C44.0083 46.441 42.2163 50.5886 39.3443 53.5951C36.4563 56.6017 32.4723 58.4492 28.0723 58.4492V45.8135C23.6713 45.8135 19.6875 43.966 16.8 40.9594C13.9125 37.9542 12.1369 33.8066 12.1369 29.2246C12.1369 24.6425 13.9281 20.4963 16.8 17.4897C19.6875 14.4831 23.6713 12.6342 28.0723 12.6342V-0.000106812C20.3208 -0.000106812 13.3104 3.27853 8.23027 8.56851C3.15 13.8571 0 21.1543 0 29.2246C0 37.2949 3.15 44.6087 8.23027 49.8973C13.3104 55.1859 20.3364 58.4659 28.0883 58.4659V71.1016C34.0176 71.1016 39.5296 69.1888 44.0696 65.9088C45.4443 64.9122 46.7416 63.7864 47.9296 62.5483Z"
                fill="white"
              />
            </svg>
          </div>
          <nav className="flex-1 flex flex-col gap-60">
            <div className="ml-4">
              <p className="text-[10px] font-light px-6 py-6 pt-4 pb-1 text-white border-b border-[#2E3334]">
                Menu
              </p>
              <ul className="space-y-2 font-medium mt-3">
                <li>
                  <a
                    href="/admin/dashboard"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <svg
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.99532 0.193312H6.85104C7.14327 0.193312 7.42444 0.25161 7.69457 0.366821C7.9621 0.480366 8.20514 0.647381 8.40963 0.858208C8.61449 1.06905 8.77679 1.31956 8.8872 1.59529C8.99881 1.8729 9.05461 2.16162 9.05461 2.46284V6.43412C9.05461 6.73533 8.99881 7.02409 8.8872 7.30309C8.77505 7.58071 8.616 7.82637 8.40963 8.03875C8.20484 8.24955 7.9619 8.417 7.69457 8.53156C7.42706 8.64531 7.14045 8.70376 6.85104 8.70364H2.99532C2.7031 8.70364 2.42192 8.64538 2.1518 8.53156C1.88168 8.41496 1.64363 8.25112 1.43673 8.03875C1.23191 7.82842 1.0696 7.5784 0.959163 7.30309C0.84816 7.02768 0.79126 6.73231 0.791751 6.43412V2.46284C0.791751 2.16162 0.847556 1.8729 0.959163 1.59529C1.06957 1.31956 1.23188 1.06905 1.43673 0.858208C1.64123 0.647381 1.88426 0.480366 2.1518 0.366821C2.42192 0.25161 2.7031 0.193312 2.99532 0.193312ZM12.3601 0.193312H16.2165C16.5087 0.193312 16.7894 0.25161 17.0595 0.366821C17.327 0.480366 17.57 0.647383 17.7744 0.858208C17.9795 1.06886 18.1418 1.31942 18.252 1.59529C18.3636 1.8729 18.4199 2.16162 18.4199 2.46284V6.43412C18.4199 6.73533 18.3636 7.02409 18.252 7.30309C18.1404 7.58071 17.9809 7.82637 17.7744 8.03875C17.5697 8.24954 17.3268 8.417 17.0595 8.53156C16.7922 8.64531 16.5057 8.70376 16.2165 8.70364H12.3601C12.0679 8.70364 11.7867 8.64538 11.5167 8.53156C11.2471 8.41496 11.0086 8.25112 10.8022 8.03875C10.597 7.82859 10.4345 7.57854 10.3241 7.30309C10.2131 7.02768 10.1562 6.73231 10.1567 6.43412V2.46284C10.1567 2.16162 10.2125 1.8729 10.3241 1.59529C10.4345 1.31942 10.597 1.06887 10.8022 0.858208C11.0065 0.64739 11.2493 0.480371 11.5167 0.366821C11.7867 0.25161 12.0679 0.193312 12.3601 0.193312ZM2.99532 9.8377H6.85104C7.14327 9.8377 7.42444 9.896 7.69457 10.0112C7.9621 10.1248 8.20514 10.2918 8.40963 10.5026C8.61445 10.7129 8.77677 10.963 8.8872 11.2383C8.9982 11.5137 9.0551 11.809 9.05461 12.1072V16.0785C9.05461 16.3797 8.99881 16.6685 8.8872 16.9475C8.77505 17.2251 8.616 17.4694 8.40963 17.6831C8.20514 17.894 7.9621 18.061 7.69457 18.1745C7.42725 18.2889 7.14052 18.3475 6.85104 18.3467H2.99532C2.7031 18.3467 2.42192 18.2897 2.1518 18.1745C1.88426 18.061 1.64123 17.894 1.43673 17.6831C1.2322 17.4726 1.06992 17.2226 0.959163 16.9475C0.84816 16.6721 0.79126 16.3767 0.791751 16.0785V12.1072C0.791751 11.806 0.847556 11.5173 0.959163 11.2383C1.07131 10.9607 1.23036 10.715 1.43673 10.5026C1.64123 10.2918 1.88426 10.1248 2.1518 10.0112C2.42192 9.896 2.7031 9.8377 2.99532 9.8377ZM12.3601 9.8377H16.2165C16.5087 9.8377 16.7894 9.896 17.0595 10.0112C17.327 10.1248 17.57 10.2918 17.7744 10.5026C17.9795 10.7127 18.1418 10.9629 18.252 11.2383C18.3632 11.5137 18.4202 11.809 18.4199 12.1072V16.0785C18.4199 16.3797 18.3636 16.6685 18.252 16.9475C18.1404 17.2251 17.9809 17.4694 17.7744 17.6831C17.57 17.894 17.327 18.061 17.0595 18.1745C16.7924 18.2889 16.5058 18.3475 16.2165 18.3467H12.3601C12.0679 18.3467 11.7867 18.2897 11.5167 18.1745C11.2471 18.0593 11.0086 17.8955 10.8022 17.6831C10.5972 17.4727 10.4347 17.2226 10.3239 16.9472C10.2131 16.6718 10.1563 16.3766 10.1567 16.0785V12.1072C10.1567 11.806 10.2125 11.5173 10.3241 11.2383C10.4362 10.9607 10.5953 10.715 10.8022 10.5026C11.0065 10.2918 11.2493 10.1248 11.5167 10.0112C11.7867 9.896 12.0679 9.8377 12.3601 9.8377Z"
                        fill="white"
                      />
                    </svg>

                    <span className="ms-3">Dashboard</span>
                  </a>
                </li>
                <li>
                  <a
                    href="/admin/kelola-user"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <svg
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.875 19.1666V3.83325L21.0833 11.4999L2.875 19.1666ZM4.79167 16.2916L16.1479 11.4999L4.79167 6.70825V10.0624L10.5417 11.4999L4.79167 12.9374V16.2916ZM4.79167 16.2916V11.4999V6.70825V10.0624V12.9374V16.2916Z"
                        fill="white"
                      />
                    </svg>

                    <span className="ms-3">Kelola User</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="ml-4">
              <p className="text-[10px] font-light px-6 py-6 pt-4 pb-1 text-white border-b border-[#2E3334]">
                Preferences
              </p>
              <ul className="space-y-2 font-medium mt-3">
                <a
                  onClick={logout}
                  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" y1="12" x2="9" y2="12" />
                  </svg>

                  <span className="ms-3">Log Out</span>
                </a>
              </ul>
            </div>
          </nav>
        </div>
      </aside>

      <main className="flex-1 overflow-auto p-4 sm:ml-64">
        <header className="flex mb-6 border-b w-full">
          <div className="flex items-center justify-between w-full px-8 py-4">
            <h1 className="text-2xl font-bold font-poppins">Kelola User</h1>
            <div className="flex items-center gap-3 font-poppins font-semibold">
              <span>Admin</span>
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
                      <Link to={`/admin/edit-user/${user.id}`}>Edit Data</Link>
                    </button>
                    <br />
                    <button
                      type="button"
                      onClick={() => handleDelete(user.id)}
                      disabled={isPending}
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
                      {isPending ? "Menghapus..." : "Hapus Data"}
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

export default KelolaUser;
