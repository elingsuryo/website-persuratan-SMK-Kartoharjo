import { FC } from "react";
import { Link } from "react-router";

import "../../index.css";
import logo from "../../assets/logo_smk.png";
import bg1 from "../../assets/background.png";

const Home: FC = () => {
  return (
    <div
      className="h-screen w-screen bg-cover bg-center bg-no-repeat flex flex-col"
      style={{
        backgroundImage: `url(${bg1})`,
      }}
    >
      {/* Navbar */}
      <nav className="bg-[#325389]">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={logo} className="h-8" alt="Logo SMK" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              SMK N Kartoharjo
            </span>
          </a>
          <div className="flex items-center gap-x-3">
            <Link to="/register" className="btn btn-primary btn-lg text-white">
              REGISTER
            </Link>
            <Link to="/login" className="btn btn-secondary btn-lg text-white">
              LOGIN
            </Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center text-white text-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Selamat Datang di
          </h1>
          <h2 className="text-2xl md:text-4xl font-light mb-4">
            Sistem Kearsipan Surat
          </h2>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#325389] text-white text-xl text-center py-2">
        Powered by Tenfold
      </footer>
    </div>
  );
};

export default Home;
