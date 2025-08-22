// import hook useQuery from react-query
import { useQuery } from "@tanstack/react-query";

//import service Api
import Api from "../../services/api";

// import js-cookie
import Cookies from "js-cookie";

//interface User
export interface Mail {
  id: number;
  judul: string;
  deskripsi: string;
  kategori: string;
  tgl_upload: string;
  file: string;
  tujuan: string;
  note: string;
}

//hook useMailById dengan parameter id dan return type Mail
export const useMailById = (id: number) => {
  return useQuery<Mail, Error>({
    //query key, disesuaikan dengan ID Mail untuk caching
    queryKey: ["mails", id],

    //query function
    queryFn: async () => {
      //get token from cookies
      const token = Cookies.get("token");

      //get user by id from api
      //

      const response = await Api.get(`/api/v1/mails/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      //return data
      return response.data.data as Mail;
    },
  });
};
