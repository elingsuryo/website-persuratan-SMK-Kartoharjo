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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="rounded-full w-8 h-8"
            >
              <g id="User_profile" data-name="User profile">
                <path
                  d="M47 24A23 23 0 1 1 12.81 3.91 23 23 0 0 1 47 24z"
                  fill="#374f68"
                />
                <path
                  d="M47 24a22.91 22.91 0 0 1-8.81 18.09A22.88 22.88 0 0 1 27 45C5.28 45-4.37 17.34 12.81 3.91A23 23 0 0 1 47 24z"
                  fill="#425b72"
                />
                <path
                  d="M39.2 35.39a19 19 0 0 1-30.4 0 17 17 0 0 1 10.49-8.73 8.93 8.93 0 0 0 9.42 0 17 17 0 0 1 10.49 8.73z"
                  fill="#6fabe6"
                />
                <path
                  d="M39.2 35.39a19 19 0 0 1-4.77 4.49 19 19 0 0 1-15.13-1 7.08 7.08 0 0 1-.51-12.18c.1-.07 0-.05.5-.05a9 9 0 0 0 9.42 0 17 17 0 0 1 10.49 8.74z"
                  fill="#82bcf4"
                />
                <path
                  d="M33 19a9 9 0 1 1-12.38-8.34A9 9 0 0 1 33 19z"
                  fill="#6fabe6"
                />
                <path
                  d="M33 19a9 9 0 0 1-2.6 6.33c-9.13 3.74-16.59-7.86-9.78-14.67A9 9 0 0 1 33 19z"
                  fill="#82bcf4"
                />
              </g>
            </svg>
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
                      Dikirim ke : {mail.tujuan}
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
