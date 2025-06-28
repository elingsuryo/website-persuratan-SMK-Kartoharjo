import "../../index.css";

import SidebarMenu from "../../component/sidebarMenu";
import { Mail, useMail } from "../../hooks/mail/useMail";
import { Link } from "react-router";

const DvPersuratan = () => {
  const { data: mails = [] } = useMail();
  const now = new Date();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(now.getDate() - 7);
  const jumlahDitolak = mails.filter(
    (mail) =>
      mail.keterangan === "Ditolak" && new Date(mail.tgl_upload) >= oneWeekAgo
  ).length;
  const jumlahDiproses = mails.filter(
    (mail) =>
      mail.keterangan === "Diproses" && new Date(mail.tgl_upload) >= oneWeekAgo
  ).length;
  const jumlahDiterima = mails.filter(
    (mail) =>
      mail.keterangan === "Diterima" && new Date(mail.tgl_upload) >= oneWeekAgo
  ).length;

  return (
    <>
      <aside className="fixed z-40 w-64 h-screen">
        <SidebarMenu />
      </aside>
      <main className="flex-1 bg-[#f5f7fa] min-h-screen sm:ml-64 p-6">
        {/* HEADER */}
        <header className="flex justify-between items-center mb-6 border-b pb-4">
          <h1 className="text-2xl font-bold font-poppins text-[#2c3e50]">
            Dashboard Divisi Surat
          </h1>
          <div className="flex items-center gap-3 font-semibold text-[#555]">
            <span>Divisi Surat</span>
            <img
              src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80' fill='none'><circle cx='40' cy='40' r='40' fill='%23E2E8F0'/><circle cx='40' cy='28' r='14' fill='%23CBD5E0'/><path d='M20 62c0-11.046 8.954-20 20-20s20 8.954 20 20' fill='%23CBD5E0'/></svg>"
              alt="Profile"
              className="rounded-full w-10 h-10"
            />
          </div>
        </header>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Statistik */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">
              Statistik Surat Minggu Ini
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Ditolak */}
              <div className="text-center border p-4 rounded-xl shadow-sm">
                <p className="text-3xl font-bold text-red-600">
                  {jumlahDitolak}
                </p>
                <span className="mt-2 inline-block bg-red-100 text-red-600 px-4 py-1 rounded-full text-sm">
                  Ditolak
                </span>
              </div>
              {/* Diproses */}
              <div className="text-center border p-4 rounded-xl shadow-sm">
                <p className="text-3xl font-bold text-yellow-500">
                  {jumlahDiproses}
                </p>
                <span className="mt-2 inline-block bg-yellow-100 text-yellow-600 px-4 py-1 rounded-full text-sm">
                  Diproses
                </span>
              </div>
              {/* Diterima */}
              <div className="text-center border p-4 rounded-xl shadow-sm">
                <p className="text-3xl font-bold text-green-600">
                  {jumlahDiterima}
                </p>
                <span className="mt-2 inline-block bg-green-100 text-green-600 px-4 py-1 rounded-full text-sm">
                  Selesai
                </span>
              </div>
            </div>
          </div>

          {/* Upload Dokumen */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6 flex flex-col justify-between">
            <div>
              <p className="text-lg font-semibold">Tambah Dokumen</p>
              <p className="text-sm text-gray-400 mt-2">
                Upload file dokumen ke sistem surat
              </p>
            </div>
            <Link
              to="/dvpersuratan/uploadsurat"
              className="mt-6 self-end bg-[#325389] hover:bg-[#274571] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
            >
              <svg
                width="40"
                height="40"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30 45V30M22.5 37.5H37.5M35 5H15C13.67 5 12.4 5.53 11.46 6.46C10.53 7.4 10 8.67 10 10V50C10 51.33 10.53 52.6 11.46 53.53C12.4 54.47 13.67 55 15 55H45C46.33 55 47.6 54.47 48.53 53.53C49.47 52.6 50 51.33 50 50V20L35 5ZM35 5V20H50"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>

          {/* Surat Sudah Ditandatangani */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">
              Surat Sudah Ditandatangani
            </h2>
            <div className="space-y-3 max-h-[300px] overflow-y-auto">
              {mails.filter((mail) => mail.keterangan === "Diterima").length ===
                0 && (
                <p className="text-sm text-gray-400 italic">
                  Belum ada surat yang ditandatangani.
                </p>
              )}
              {mails
                .filter((mail) => mail.keterangan === "Diterima")
                .sort(
                  (a, b) =>
                    new Date(b.tgl_upload).getTime() -
                    new Date(a.tgl_upload).getTime()
                )
                .map((mail: Mail) => (
                  <div
                    key={mail.id}
                    className="flex items-center justify-between border rounded-xl p-3 hover:bg-gray-50"
                  >
                    <div>
                      <p className="font-semibold">{mail.judul}</p>
                      <p className="text-xs text-gray-500">
                        Diunggah:{" "}
                        {new Date(mail.tgl_upload).toLocaleDateString("id-ID")}
                      </p>
                    </div>
                    <div className="text-green-500 text-sm font-medium">
                      Ditandatangani
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {/* Revisi Surat */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow p-6">
            <h2 className="text-lg font-semibold mb-4">Revisi Surat</h2>
            <div className="space-y-3 max-h-[300px] overflow-y-auto">
              {mails.filter((mail) => mail.keterangan === "Ditolak").length ===
                0 && (
                <p className="text-sm text-gray-400 italic">
                  Tidak ada surat direvisi.
                </p>
              )}
              {mails
                .filter((mail) => mail.keterangan === "Ditolak")
                .map((mail: Mail) => (
                  <div
                    key={mail.id}
                    className="flex items-center justify-between border rounded-xl p-3 hover:bg-gray-50"
                  >
                    <div>
                      <p className="font-semibold">{mail.judul}</p>
                      <p className="text-xs text-gray-500">{mail.note}</p>
                    </div>
                    <div className="text-red-500 text-sm font-medium">
                      Revisi
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DvPersuratan;
