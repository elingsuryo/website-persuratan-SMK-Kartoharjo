// import useMutation dari '@tanstack/react-query';
import { useMutation } from "@tanstack/react-query";

//import service API
import Api from "../../services/api";

// import js-cookie
// import Cookies from "js-cookie";

//interface UserRequest untuk update
interface MailRequest {
  judul?: string;
  deskripsi?: string;
  kategori?: string;
  tgl_upload?: string;
  file?: string;
}

// Hook untuk update Mail
export const useMailUpdate = () => {
  return useMutation({
    // Mutation untuk update Mail
    mutationFn: async ({ id, data }: { id: number; data: MailRequest }) => {
      // Ambil token dari cookies
      // const token = Cookies.get("token");

      // Gunakan service API untuk melakukan update user
      const response = await Api.put(`/api/v1/mails/${id}`, data);

      // Mengembalikan response data
      return response.data;
    },
  });
};
