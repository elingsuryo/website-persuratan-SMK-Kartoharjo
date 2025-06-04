// import FC from react
import { FC } from "react";

// import Link from react-router
import { Link } from "react-router";

import "../../index.css";

import logo from "../../assets/logo smk.png";

import bg1 from "../../assets/bg1.png";

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
        <div
          className="min-h-screen bg-cover bg-center bg-no-repeat px-4 sm:px-8 flex items-center"
          style={{
            backgroundImage: `url(${bg1})`,
          }}
        >
          <div className="max-w-7xl mx-auto text-white text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Selamat Datang di
            </h1>
            <h2 className="text-2xl md:text-4xl font-light mb-4">
              Sistem Kearsipan Surat
            </h2>
            <p className="text-sm md:text-base max-w-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
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
