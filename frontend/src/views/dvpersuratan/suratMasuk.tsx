import "../../index.css";
import SidebarMenu from "../../component/sidebarMenu";
import { Mail, useMail } from "../../hooks/mail/useMail";
import { useMailDelete } from "../../hooks/mail/useMailDelete"; // Pastikan import ini benar
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router";
const BASE_FILE_URL = "http://localhost:8081/read/";

const SuratMasuk = () => {
  const { data: mails } = useMail();
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMailDelete();
  const [search] = useState("");

  const handleDelete = (id: number) => {
    if (confirm("Are you sure you want to delete this mail?")) {
      mutate(id, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["mails"] });
        },
      });
    }
  };

  const filteredMails = mails?.filter((mail: Mail) =>
    mail.judul.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="top-0 z-50 w-full">
      <aside className="fixed z-40 w-64 h-screen">
        <SidebarMenu />
      </aside>
      <main className="flex-1 overflow-auto p-4 sm:ml-64">
        <header className="flex mb-6 border-b w-full">
          <div className="flex items-center justify-between w-full px-8 py-4">
            <h1 className="text-2xl font-bold font-poppins">
              Konfirmasi Surat
            </h1>
            <div className="flex items-center gap-3 font-poppins font-semibold">
              <span>Divisi Surat</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="rounded-full w-8 h-8"
              >
                {/* ... SVG user profile ... */}
              </svg>
            </div>
          </div>
        </header>

        {/* Tombol Tambah Data */}
        <div className="flex items-center justify-between flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white">
          <div className="px-5 py-2.5 me-2 mb-2 text-[#899290] flex items-center gap-2">
            <svg width="8" height="4" viewBox="0 0 8 4" fill="none">
              <path d="M4 4L7.4641 0.25H0.535898L4 4Z" fill="#D9D9D9" />
            </svg>
            Filter
          </div>
          <div className="relative">
            <button
              onClick={() =>
                (window.location.href = "/dvpersuratan/uploadsurat")
              }
              type="button"
              className="focus:outline-none flex items-center gap-2 text-white bg-[#0DC300] font-small rounded-[5px] text-sm px-5 py-2.5"
            >
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path
                  d="M10.5 4.375V16.625M4.375 10.5H16.625"
                  stroke="white"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Upload Surat
            </button>
          </div>
        </div>

        {/* Tabel Surat */}
        <div className="relative overflow-x-auto sm:rounded-lg drop-shadow-2xl backdrop-blur-3xl">
          <table className="w-full text-sm text-left">
            <thead className="text-xs uppercase bg-[#D9E8FF]">
              <tr>
                <th className="p-4 border-e border-[#8F8F8F]">No</th>
                <th className="px-6 py-3 border-e border-[#8F8F8F]">Judul</th>
                <th className="px-6 py-3 border-e border-[#8F8F8F]">
                  Deskripsi
                </th>
                <th className="px-6 py-3 border-e border-[#8F8F8F]">
                  Tgl Upload
                </th>
                <th className="px-6 py-3 border-e border-[#8F8F8F]">File</th>
                <th className="px-6 py-3">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredMails?.map((mail: Mail, index: number) => (
                <tr
                  key={mail.id}
                  className="bg-white border-b border-[#8F8F8F]"
                >
                  <td className="w-4 p-3 border-e border-[#8F8F8F]">
                    {index + 1}
                  </td>
                  <td className="px-6 py-3 border-e border-[#8F8F8F] font-semibold">
                    {mail.judul}
                  </td>
                  <td className="px-6 py-3 border-e border-[#8F8F8F]">
                    {mail.deskripsi}
                  </td>
                  <td className="px-6 py-3 border-e border-[#8F8F8F]">
                    {mail.tgl_upload}
                  </td>
                  <td className="px-6 py-3 border-e border-[#8F8F8F]">
                    {mail.file ? (
                      <a
                        href={`${BASE_FILE_URL}${mail.file}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M21.6667 3.33331H10.0001C9.11603 3.33331 8.26818 3.6845 7.64306 4.30962C7.01794 4.93474 6.66675 5.78259 6.66675 6.66665V33.3333C6.66675 34.2174 7.01794 35.0652 7.64306 35.6903C8.26818 36.3155 9.11603 36.6666 10.0001 36.6666H30.0001C30.8841 36.6666 31.732 36.3155 32.3571 35.6903C32.9822 35.0652 33.3334 34.2174 33.3334 33.3333V15M21.6667 3.33331L33.3334 15M21.6667 3.33331V15H33.3334"
                            stroke="#1E1E1E"
                            stroke-width="4"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </a>
                    ) : (
                      <span className="text-gray-400 italic">
                        Tidak ada file
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-3">
                    <Link to={`/dvpersuratan/editsurat/${mail.id}`}>
                      <button
                        type="button"
                        className="text-white bg-[#0DC300] hover:bg-[#7dc878] rounded-lg text-sm px-5 py-2.5 me-1 mb-2"
                      >
                        Edit Data
                      </button>
                    </Link>
                    <br />
                    <button
                      onClick={() => handleDelete(mail.id)}
                      disabled={isPending}
                      type="button"
                      className="text-white bg-red-700 hover:bg-red-800 rounded-lg text-sm px-5 py-2.5 me-1 mb-2"
                    >
                      {isPending ? "Menghapus..." : "Hapus"}
                    </button>
                  </td>
                </tr>
              ))}
              {filteredMails?.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-6 text-gray-500">
                    Tidak ada data ditemukan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default SuratMasuk;
