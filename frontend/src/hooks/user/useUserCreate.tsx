// import useMutation dari '@tanstack/react-query';
import { useMutation } from "@tanstack/react-query";

//import service API
import Api from "../../services/api";
// import Cookies from "js-cookie";

//interface UserRequest
interface UserRequest {
  email: string;
  password: string;
  full_name: string;
  whatsapp: string;
  role: string;
}

export const useUserCreate = () => {
  return useMutation({
    // mutation untuk create user
    mutationFn: async (data: UserRequest) => {
      //get token from cookies
      const token = localStorage.get("token");

      //menggunakan service API untuk register
      const response = await Api.post("/api/v1/users", data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      //mengembalikan response data
      return response.data;
    },
  });
};
