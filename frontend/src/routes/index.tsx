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

import SuratKeluarDV from "../views/dvpersuratan/suratKeluar.tsx";

import EditSurat from "../views/dvpersuratan/editSurat.tsx";

import TambahUser from "../views/admin/tambahUser.tsx";

import EditUser from "../views/admin/editUser.tsx";

const LoginRoute = () => {
  const auth = useContext(AuthContext);

  if (!auth) return null; // Optional: bisa kasih loading atau fallback

  const { isAuthenticated, user } = auth;

  console.log("Auth context:", auth);

  if (isAuthenticated && user) {
    console.log("Role:", user.role);
    switch (user.role) {
      case "admin":
        return <Navigate to="/admin/dashboard" />;
      case "headmaster":
        return <Navigate to="/kepalasekolah/dashboard" />;
      case "dvPersuratan":
        return <Navigate to="/dvpersuratan/dashboard" />;
      default:
        return <Navigate to="/unauthorized" />;
    }
  }

  return <Login />;
};

export default function AppRoutes() {
  // Menggunakan useContext untuk mendapatkan nilai dari AuthContext
  const auth = useContext(AuthContext);

  const isAuthenticated = auth?.isAuthenticated ?? false;

  return (
    <Routes>
      {/* route "/" */}
      <Route path="/" element={<Home />} />

      {/* route "/login" */}
      <Route path="/login" element={<LoginRoute />} />

      {/* route "/register" */}
      <Route
        path="/register"
        element={isAuthenticated ? <Navigate to="/login" /> : <Register />}
      />

      {/* route admin */}
      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route
        path="/admin/kelola-user"
        element={isAuthenticated ? <KelolaUser /> : <LoginRoute />}
      />
      <Route path="/admin/tambah-user" element={<TambahUser />} />
      <Route path="/admin/edit-user/:id" element={<EditUser />} />

      {/* route headmaster */}
      <Route
        path="/kepalasekolah/dashboard"
        element={<HeadmasterDashboard />}
      />
      <Route path="/kepalasekolah/suratmasuk" element={<SuratMasukKS />} />

      {/* route dvpersuratan */}
      <Route path="/dvpersuratan/dashboard" element={<DvPersuratan />} />
      <Route path="/dvpersuratan/uploadsurat" element={<UpSurat />} />
      <Route path="/dvpersuratan/editsurat/:id" element={<EditSurat />} />
      <Route path="/dvpersuratan/suratmasuk" element={<SuratMasukDV />} />
      <Route path="/dvpersuratan/suratkeluar" element={<SuratKeluarDV />} />
    </Routes>
  );
}
