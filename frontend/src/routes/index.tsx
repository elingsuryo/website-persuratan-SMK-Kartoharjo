//import useContext
import { useContext } from "react";

//import context
import { AuthContext } from "../context/AuthContext";

//import react router dom
import { Routes, Route, Navigate } from "react-router";

//import view home
import Home from "../views/home/index.tsx";

//import view register
import Register from "../views/auth/register.tsx";

//import view login
import Login from "../views/auth/login.tsx";

import DvPersuratan from "../views/dashboard/dvPersuratan.tsx";

import AdminDashboard from "../views/dashboard/admin.tsx";

import HeadmasterDashboard from "../views/dashboard/headmaster.tsx";

import SuratMasukDv from "../views/suratMasuk/dvPersuratan.tsx";

export default function AppRoutes() {
  // Menggunakan useContext untuk mendapatkan nilai dari AuthContext
  const auth = useContext(AuthContext);

  // Menggunakan optional chaining untuk menghindari error jika auth tidak ada
  const isAuthenticated = auth?.isAuthenticated ?? false;

  return (
    <Routes>
      {/* route "/" */}
      <Route path="/" element={<Home />} />

      {/* route "/register" */}
      <Route
        path="/register"
        element={
          isAuthenticated ? (
            auth?.user?.role === "admin" ? (
              <Navigate to="/admin/dashboard" />
            ) : auth?.user?.role === "headmaster" ? (
              <Navigate to="/kepalasekolah/dashboard" />
            ) : auth?.user?.role === "dvPersuratan" ? (
              <Navigate to="/dvpersuratan/dashboard" />
            ) : null
          ) : (
            <Register />
          )
        }
      />

      {auth?.user?.role === "headmaster" && (
        <Route
          path="/kepalasekolah/dashboard"
          element={<HeadmasterDashboard />}
        />
      )}

      {auth?.user?.role === "admin" && (
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
      )}

      {auth?.user?.role === "dvPersuratan" && (
        <Route path="/dvpersuratan/dashboard" element={<DvPersuratan />} />
      )}

      {/* route "/login" */}
      <Route
        path="/login"
        element={
          isAuthenticated ? (
            auth?.user?.role === "admin" ? (
              <Navigate to="/admin/dashboard" />
            ) : auth?.user?.role === "headmaster" ? (
              <Navigate to="/kepalasekolah/dashboard" />
            ) : auth?.user?.role === "dvPersuratan" ? (
              <Navigate to="/dvpersuratan/dashboard" />
            ) : null
          ) : (
            <Login />
          )
        }
      />

      <Route path="dvpersuratan/suratmasuk" element={<SuratMasukDv />} />
    </Routes>
  );
}
