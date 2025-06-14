// import hook useQuery from react-query
import { useQuery } from "@tanstack/react-query";

//import service Api
import Api from "../../services/api";

// import js-cookie
// import Cookies from "js-cookie";

//interface User
export interface Mail {
  id: number;
  judul: string;
  deskripsi: string;
  kategori: string;
  tgl_upload: string;
  file: string;
}

//hook useMailById dengan parameter id dan return type Mail
export const useMailById = (id: number) => {
  return useQuery<Mail, Error>({
    //query key, disesuaikan dengan ID Mail untuk caching
    queryKey: ["mail", id],

    //query function
    queryFn: async () => {
      //get token from cookies
      // const token = Cookies.get("token");

      //get user by id from api
      //

      const response = await Api.get(`/api/v1/mails/${id}`);

      //return data
      return response.data.data as Mail;
    },
  });
};
