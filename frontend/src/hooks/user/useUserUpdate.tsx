// import useMutation dari '@tanstack/react-query';
import { useMutation } from "@tanstack/react-query";

//import service API
import Api from "../../services/api";

// import js-cookie
import Cookies from "js-cookie";

//interface UserRequest untuk update
interface UserRequest {
  email?: string;
  full_name?: string;
  whatsapp?: string;
  role?: string;
}

// Hook untuk update user
export const useUserUpdate = () => {
  return useMutation({
    // Mutation untuk update user
    mutationFn: async ({ id, data }: { id: number; data: UserRequest }) => {
      // Ambil token dari cookies
      const token = Cookies.get("token");

      // Gunakan service API untuk melakukan update user
      const response = await Api.put(`/api/v1/users/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Mengembalikan response data
      return response.data;
    },
  });
};
