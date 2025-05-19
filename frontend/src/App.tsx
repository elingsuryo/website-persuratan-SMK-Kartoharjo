// import FC from react
import { FC } from "react";

//import router
import AppRoutes from "./routes";

import "./index.css";

const App: FC = () => {
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
          <img src="src/logo smk.png" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            SMK N Kartoharjo
          </span>
        </a>

        <div className="container mt-5">
          <AppRoutes />
        </div>
      </div>
    </nav>
  );
};

export default App;
