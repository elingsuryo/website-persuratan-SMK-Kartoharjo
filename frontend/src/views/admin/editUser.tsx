import "../../index.css";
import { FormEvent, useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router";
import { useUserById } from "../../hooks/user/useUserById";
import { useUserUpdate } from "../../hooks/user/useUserUpdate";
import SidebarMenu from "../../component/sidebarMenu";

interface ValidationErrors {
  [key: string]: string;
}

const EditUser = () => {
  const { id } = useParams();
  //define state user
  const [email, setEmail] = useState<string>("");
  const [full_name, setName] = useState<string>("");
  const [whatsapp, setWhatsapp] = useState<string>("");
  const [role, setRole] = useState<string>("");

  //define state errors
  const [errors, setErrors] = useState<ValidationErrors>({});

  // Inisialisasi useUserCreate
  const { data: user } = useUserById(Number(id));

  useEffect(() => {
    if (user) {
      setName(user.full_name);
      setEmail(user.email);
      setWhatsapp(user.whatsapp);
      setRole(user.role);
    }
  }, [user]);

  const { mutate, isPending } = useUserUpdate();

  const updateUser = async (e: FormEvent) => {
    e.preventDefault();

    // Call the user update mutation
    mutate(
      {
        id: Number(id),
        data: {
          full_name,
          email,
          whatsapp,
          role,
        },
      },
      {
        onSuccess: () => {
          // Redirect to users index
          <Navigate to="/admin/kelola-user" />;
        },
        onError: (error: any) => {
          //set errors to state "errors"
          setErrors(error.response.data.errors);
        },
      }
    );
  };

  return (
    <div className="fixed top-0 z-50 w-full">
      <aside className="fixed z-40 w-64 h-screen">
        <SidebarMenu />
      </aside>
      <div className="flex-1 overflow-auto p-4 sm:ml-64">
        <header className="flex mb-6 border-b w-full">
          <div className="flex items-center justify-between w-full px-8 py-4">
            <h1 className="text-2xl font-bold font-poppins">Kelola kontak</h1>
            <div className="flex items-center gap-3 font-poppins font-semibold">
              <span>Admin</span>
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
            <p className="mb-2 text-2xl font-bold">Tambah Kontak</p>
          </div>
          <form onSubmit={updateUser}>
            <div className="grid grid-cols-12 items-center gap-4 mb-4">
              <label
                className="col-span-2 text-base font-normal text-black"
                htmlFor="nomorSurat"
              >
                Nama
              </label>
              <input
                type="text"
                value={full_name}
                onChange={(e) => setName(e.target.value)}
                className="col-span-5 border border-gray-300 rounded-md py-2 px-3 text-[#B3B3B3] text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan Nama"
              />
              {errors.Full_name && (
                <div className="alert alert-danger mt-2 rounded-4">
                  {errors.Full_name}
                </div>
              )}
            </div>
            <div className="grid grid-cols-12 items-center gap-4 mb-4">
              <label
                className="col-span-2 text-base font-normal text-black"
                htmlFor="nomorSurat"
              >
                Email
              </label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="col-span-5 border border-gray-300 rounded-md py-2 px-3 text-[#B3B3B3] text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Masukkan email"
              />
              {errors.Full_name && (
                <div className="alert alert-danger mt-2 rounded-4">
                  {errors.Full_name}
                </div>
              )}
            </div>
            <div className="grid grid-cols-12 items-center gap-4 mb-4">
              <label
                className="col-span-2 text-base font-normal text-black"
                htmlFor="pengirim"
              >
                Whatsapp
              </label>
              <input
                type="text"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="col-span-5 border border-gray-300 rounded-md py-2 px-3 text-[#B3B3B3] text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="grid grid-cols-12 items-center gap-4 mb-4">
              <label
                className="col-span-2 text-base font-normal text-black"
                htmlFor="pengirim"
              >
                Role
              </label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="col-span-5 border border-gray-300 rounded-md py-2 px-3 text-[#B3B3B3] text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="bg-[#325389] text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
              disabled={isPending}
            >
              {isPending ? "Memperbarui..." : "Perbarui"}
            </button>
            <button
              type="submit"
              className="bg-[#E80004] text-white m-4 px-9 py-2 rounded-md hover:bg-red-700 transition"
            >
              <Link to="/admin/kelola-user">Batal</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
