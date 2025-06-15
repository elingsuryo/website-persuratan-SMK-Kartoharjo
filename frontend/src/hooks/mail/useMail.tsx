// import hook useQuery from react-query
import { useQuery } from "@tanstack/react-query";

//import service Api
import Api from "../../services/api";

// import js-cookie
// import Cookies from "js-cookie";

//interface User
export interface Mail {
  // whatsapp: number;
  id: number;
  judul: string;
  deskripsi: string;
  kategori: string;
  tgl_upload: string;
  file?: string;
  accept: boolean;
}

//hook useUsers dengan return type User
export const useMail = () => {
  return useQuery<Mail[], Error>({
    //query key
    queryKey: ["mails"],

    //query function
    queryFn: async () => {
      //get token from cookies
      // const token = Cookies.get("token");

      //get users from api
      const response = await Api.get("/api/v1/mails");

      //return data
      return response.data.data as Mail[];
    },
  });
};
