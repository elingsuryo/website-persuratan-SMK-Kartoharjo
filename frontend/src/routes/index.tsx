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

import UpSurat from "../views/dvpersuratan/uploadSurat.tsx";

import KelolaUser from "../views/admin/user.tsx";

import SuratMasukKS from "../views/headmaster/suratMasuk.tsx";

import SuratMasukDV from "../views/dvpersuratan/suratMasuk.tsx";

export default function AppRoutes() {
  // Menggunakan useContext untuk mendapatkan nilai dari AuthContext
  const auth = useContext(AuthContext);

  // Menggunakan optional chaining untuk menghindari error jika auth tidak ada
  const isAuthenticated = auth?.isAuthenticated ?? false;

  return (
    <Routes>
      {/* route "/" */}
      <Route path="/" element={<Home />} />

      <Route path="/admin/kelola-user" element={<KelolaUser />} />

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

      <Route
        path="/kepalasekolah/dashboard"
        element={<HeadmasterDashboard />}
      />

      <Route path="/admin/dashboard" element={<AdminDashboard />} />

      <Route path="/dvpersuratan/dashboard" element={<DvPersuratan />} />

      <Route path="/kepalasekolah/suratmasuk" element={<SuratMasukKS />} />

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

      <Route path="/dvpersuratan/uploadsurat" element={<UpSurat />} />

      <Route path="/dvpersuratan/suratmasuk" element={<SuratMasukDV />} />
    </Routes>
  );
}
