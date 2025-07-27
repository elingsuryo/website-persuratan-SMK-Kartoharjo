import "../../index.css";
import SidebarMenu from "../../component/sidebarMenu";
import { useMailCreate } from "../../hooks/mail/useMailCreate";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router";

interface ValidationErrors {
  [key: string]: string;
}

const DvPersuratan = () => {
  const navigate = useNavigate();
  // Inisialisasi state
  const [judul, setJudul] = useState<string>("");
  const [deskripsi, setDeskripsi] = useState<string>("");
  const [kategori, setKategori] = useState<string>("");
  const [tgl_upload, setTglUpload] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  const [errors, setErrors] = useState<ValidationErrors>({});

  // Inisialisasi useUserCreate
  const { mutate } = useMailCreate();

  // Handle submit form
  const storeMail = async (e: FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("judul", judul);
    formData.append("deskripsi", deskripsi);
    formData.append("kategori", kategori);
    formData.append("tgl_upload", tgl_upload);

    if (file) {
      formData.append("file", file); // penting! gunakan key yg sama dgn di backend
    } else {
      setErrors({ file: "File harus diunggah" });
      return;
    }

    mutate(formData, {
      onSuccess: () => {
        navigate("/dvpersuratan/suratmasuk");
      },
      onError: (error: any) => {
        setErrors(error.response?.data?.errors || {});
      },
    });
  };

  return (
    <>
      <div className="fixed top-0 z-50 w-full">
        <aside className="fixed z-40 w-64 h-screen">
          <SidebarMenu />
        </aside>
        <div className="flex-1 overflow-auto p-4 sm:ml-64">
          <header className="flex mb-6 border-b w-full">
            <div className="flex items-center justify-between w-full px-8 py-4">
              <h1 className="text-2xl font-bold font-poppins">Surat Masuk</h1>
              <div className="flex items-center gap-3 font-poppins font-semibold">
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
            </div>
          </header>
          <div className="bg-white drop-shadow-xl shadow-black shadow- rounded-md p-6 w-[90%] m-auto">
            <div className="mb-4  border-b border-solid">
              <p className="mb-2 text-2xl font-bold">Tambah Dokumen</p>
            </div>
            <form onSubmit={storeMail}>
              <div className="grid grid-cols-12 items-center gap-4 mb-4">
                <label
                  className="col-span-2 text-base font-normal text-black"
                  htmlFor="nomorSurat"
                >
                  Judul Dokumen
                </label>
                <input
                  type="text"
                  value={judul}
                  onChange={(e) => setJudul(e.target.value)}
                  className="col-span-5 border border-gray-300 rounded-md py-2 px-3 text-[#B3B3B3] text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan Judul Dokumen"
                />
                {errors.judul && (
                  <div className="alert alert-danger mt-2 rounded-4">
                    {errors.judul}
                  </div>
                )}
              </div>
              <div className="grid grid-cols-12 items-center gap-4 mb-4">
                <label
                  className="col-span-2 text-base font-normal text-black"
                  htmlFor="pengirim"
                >
                  Deskripsi
                </label>
                <textarea
                  rows={4}
                  value={deskripsi}
                  onChange={(e) => setDeskripsi(e.target.value)}
                  className="col-span-5 border border-gray-300 rounded-md py-2 px-3 text-[#B3B3B3] text-base resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Masukkan deskripsi"
                />
              </div>
              <div className="grid grid-cols-12 items-center gap-4 mb-4">
                <label
                  className="col-span-2 text-base font-normal text-black"
                  htmlFor="pengirim"
                >
                  Kategori
                </label>
                <select
                  value={kategori}
                  onChange={(e) => setKategori(e.target.value)}
                  className="col-span-5 border border-gray-300 rounded-md py-2 px-3 text-[#B3B3B3] text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option disabled selected>
                    pilih opsi
                  </option>
                  <option value={"Surat Masuk"}>Surat Keterangan</option>
                  <option value={"Surat Keluar"}>Surat Pelatihan</option>
                </select>
              </div>
              <div className="grid grid-cols-12 items-center gap-4 mb-4">
                <label
                  className="col-span-2 text-base font-normal text-black"
                  htmlFor="tanggal"
                >
                  Tanggal Masuk
                </label>
                <input
                  type="date"
                  value={tgl_upload}
                  onChange={(e) => setTglUpload(e.target.value)}
                  className="col-span-5 border border-gray-300 rounded-md py-2 px-3 text-[#B3B3B3] text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="grid grid-cols-12 items-center gap-4 mb-12">
                <label
                  className="col-span-2 text-base font-normal text-black"
                  htmlFor="file"
                >
                  File
                </label>
                <label
                  htmlFor="file-upload"
                  className="col-span-2 flex items-center gap-2 bg-[#0DC300] hover:bg-green-600 text-white font-semibold rounded-md py-2 px-4 cursor-pointer select-none"
                >
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.625 14V6.86875L7.35 9.14375L6.125 7.875L10.5 3.5L14.875 7.875L13.65 9.14375L11.375 6.86875V14H9.625ZM5.25 17.5C4.76875 17.5 4.35677 17.3286 4.01406 16.9859C3.67135 16.6432 3.5 16.2312 3.5 15.75V13.125H5.25V15.75H15.75V13.125H17.5V15.75C17.5 16.2312 17.3286 16.6432 16.9859 16.9859C16.6432 17.3286 16.2312 17.5 15.75 17.5H5.25Z"
                      fill="white"
                    />
                  </svg>
                  <input
                    accept="application/pdf"
                    type="file"
                    id="file-upload"
                    name="file"
                    className="hidden"
                    onChange={(e) => setFile(e.target.files?.[0] || null)}
                  />
                </label>
              </div>
              <button
                type="submit"
                className="bg-[#325389] text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
              >
                Upload
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DvPersuratan;
