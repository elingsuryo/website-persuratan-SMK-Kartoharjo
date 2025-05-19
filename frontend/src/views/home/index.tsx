// import FC from react
import { FC } from "react";

// import Link from react-router
import { Link } from "react-router";

import "../../index.css";

const Home: FC = () => {
  return (
    <nav
      className="bg-white border-gray-200"
      style={{ backgroundColor: "#325389" }}
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="https://flowbite.com/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="../../assets/logo smk.png"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            SMK N Kartoharjo
          </span>
        </a>
        <hr />
        <Link to="/register" className="btn btn-primary btn-lg me-3">
          REGISTER
        </Link>
        <Link to="/login" className="btn btn-secondary btn-lg">
          LOGIN
        </Link>
      </div>
    </nav>
  );
};

export default Home;
