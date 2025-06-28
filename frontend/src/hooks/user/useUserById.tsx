// import hook useQuery from react-query
import { useQuery } from "@tanstack/react-query";

//import service Api
import Api from "../../services/api";

// import js-cookie
import Cookies from "js-cookie";

//interface User
export interface User {
  id: number;
  email: string;
  full_name: string;
  whatsapp: string;
  role: string;
}

//hook useUserById dengan parameter id dan return type User
export const useUserById = (id: number) => {
  return useQuery<User, Error>({
    //query key, disesuaikan dengan ID user untuk caching
    queryKey: ["users", id],

    //query function
    queryFn: async () => {
      //get token from cookies
      const token = Cookies.get("token");

      const response = await Api.get(`/api/v1/users/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      //return data
      return response.data.data as User;
    },
  });
};
