import React from "react";
import "../index.css";
import { useLogout } from "../hooks/auth/useLogout";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react"; // Optional icons

const sidebarMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const logout = useLogout();
  return (
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
                href="/dvpersuratan/dashboard"
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
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <div className="flex items-center">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.5 17.5C3.01875 17.5 2.60313 17.3323 2.25313 16.9969C1.91771 16.6469 1.75 16.2313 1.75 15.75V5.25C1.75 4.76875 1.91771 4.36042 2.25313 4.025C2.60313 3.675 3.01875 3.5 3.5 3.5H17.5C17.9813 3.5 18.3896 3.675 18.725 4.025C19.075 4.36042 19.25 4.76875 19.25 5.25V15.75C19.25 16.2313 19.075 16.6469 18.725 16.9969C18.3896 17.3323 17.9813 17.5 17.5 17.5H3.5ZM10.5 11.375L17.5 7V5.25L10.5 9.625L3.5 5.25V7L10.5 11.375Z"
                      fill="#FEF7FF"
                    />
                  </svg>
                  <span className="ms-3">Arsip Surat</span>
                </div>
                {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {isOpen && (
                <ul className="ml-8 mt-2 space-y-1">
                  <li>
                    <a
                      href="/dvpersuratan/suratmasuk"
                      className="block px-2 py-1 text-sm text-gray-700 rounded-md hover:bg-gray-200 dark:text-white dark:hover:bg-gray-600"
                    >
                      Surat Masuk
                    </a>
                  </li>
                  <li>
                    <a
                      href="/dvpersuratan/suratkeluar"
                      className="block px-2 py-1 text-sm text-gray-700 rounded-md hover:bg-gray-200 dark:text-white dark:hover:bg-gray-600"
                    >
                      Surat Keluar
                    </a>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <a
                href="/dvpersuratan/suratkeluar"
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

                <span className="ms-3">Kirim Surat</span>
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
  );
};

export default sidebarMenu;
