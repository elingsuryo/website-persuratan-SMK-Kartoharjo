import React from "react";
import "../index.css";

const sidebarMenu: React.FC = () => {
  return (
    <div
      aria-label="Sidebar menu with logo, menu items, and preferences"
      className="w-[251px] h-[832px] bg-[#32538a] flex flex-col text-white select-none"
    >
      <div className="p-6 border-b border-[#2a4773] flex justify-center">
        <img
          src="https://storage.googleapis.com/a1aa/image/ab762e5e-842c-4ec0-a861-732f07da5906.jpg"
          alt="White letter G logo on blue background"
          className="object-contain"
          width={40}
          height={40}
        />
      </div>
      <nav className="flex-1 flex flex-col justify-between">
        <div>
          <p className="text-[10px] font-light px-6 pt-4 pb-1 text-[#2a4773]">
            Menu
          </p>
          <ul className="text-[12px] font-light">
            <li className="px-6 py-2 flex items-center gap-2 text-[#4a8bd1] cursor-default">
              <i className="fas fa-th-large text-[14px]"></i>
              Dashboard
            </li>
            <li className="px-6 py-1 flex flex-col gap-0.5 cursor-default">
              <span className="flex items-center gap-2 text-[#7ea7d9]">
                <i className="far fa-envelope"></i>
                Kearsipan Surat
                <span className="text-[10px] font-normal text-[#7ea7d9] ml-1">
                  -
                </span>
              </span>
              <ul className="pl-8 text-[10px] font-light text-[#7ea7d9]">
                <li>Surat Masuk</li>
                <li>Surat Keluar</li>
              </ul>
            </li>
            <li className="px-6 py-2 flex items-center gap-2 cursor-default text-[#7ea7d9]">
              <i className="fas fa-play"></i>
              Kirim Surat
            </li>
          </ul>
        </div>
        <div>
          <p className="text-[10px] font-light px-6 pt-4 pb-1 text-[#2a4773]">
            Preferences
          </p>
          <ul className="text-[12px] font-light">
            <li className="px-6 py-2 flex items-center gap-2 cursor-default">
              <i className="fas fa-user"></i>
              My Profile
            </li>
            <li className="px-6 py-2 flex items-center gap-2 cursor-default">
              <i className="fas fa-cog"></i>
              Settings
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default sidebarMenu;
