// import hook useQuery from react-query
import { useMutation } from "@tanstack/react-query";

//import service Api
import Api from "../../services/api";

// import js-cookie
// import Cookies from "js-cookie";

//interface User
export interface MailRequest {
  // whatsapp: number;
  judul: string;
  deskripsi: string;
  kategori: string;
  tgl_upload: string;
  file?: string;
}

//hook useUsers dengan return type User
export const useMailCreate = () => {
  return useMutation({
    // mutation untuk create user
    mutationFn: async (data: MailRequest) => {
      //get token from cookies
      // const token = Cookies.get("token");

      //menggunakan service API untuk register
      const response = await Api.post("/api/v1/mails", data);

      //mengembalikan response data
      return response.data;
    },
  });
};
