// import hook useQuery from react-query
import { useQuery } from "@tanstack/react-query";

//import service Api
import Api from "../../services/api";

// import js-cookie
import Cookies from "js-cookie";

//interface User
export interface User {
  last_login: string | number | Date;
  // whatsapp: number;
  id: number;
  full_name: string;
  whatsapp: string;
  role: string;
}

//hook useUsers dengan return type User
export const useUsers = () => {
  return useQuery<User[], Error>({
    //query key
    queryKey: ["users"],

    //query function
    queryFn: async () => {
      //get token from cookies
      const token = Cookies.get("token");

      //get users from api
      const response = await Api.get("/api/v1/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      //return data
      return response.data.data as User[];
    },
  });
};
