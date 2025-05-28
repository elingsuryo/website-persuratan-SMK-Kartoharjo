// import FC from react
import { FC } from "react";

// import Link from react-router
import { Link } from "react-router";

import "../../index.css";

import logo from "../../assets/logo smk.png";

const Home: FC = () => {
  return (
    <>
      <div>
        <nav
          className="bg-white border-gray-200"
          style={{ backgroundColor: "#325389" }}
        >
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a
              href="https://flowbite.com/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={logo} className="h-8" alt="Logo SMK" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                SMK N Kartoharjo
              </span>
            </a>
            <hr />
            <div className="flex items-center gap-x-3">
              <Link
                to="/register"
                className="btn btn-primary btn-lg text-white"
              >
                REGISTER
              </Link>
              <Link to="/login" className="btn btn-secondary btn-lg text-white">
                LOGIN
              </Link>
            </div>
          </div>
        </nav>
        <div className="min-h-screen flex items-center bg-white px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-16">
            {/* Kiri */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold mb-2 text-black">
                Selamat Datang di!
              </h1>
              <h2 className="text-2xl md:text-3xl font-light text-[#3a5a59] mb-4">
                Sistem Kearsipan Surat
              </h2>
              <p className="text-sm md:text-base text-gray-600 max-w-md mx-auto md:mx-0 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
            </div>

            {/* Kanan */}
            <div className="w-full md:w-1/2">
              <img
                src="https://storage.googleapis.com/a1aa/image/fb9dead9-b40b-48f2-a189-f828973e6ed2.jpg"
                alt="School bus"
                className="w-full h-64 md:h-[400px] object-cover rounded"
              />
            </div>
          </div>
        </div>
        <div className="bg-[#325389] text-white text-xl text-center py-2 mt-6">
          Powered by Tenfold
        </div>
      </div>
    </>
  );
};

export default Home;
