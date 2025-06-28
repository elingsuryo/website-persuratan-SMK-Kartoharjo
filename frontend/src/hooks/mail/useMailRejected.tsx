import { useMutation } from "@tanstack/react-query";
import Api from "../../services/api";
import Cookies from "js-cookie";

interface MailRequest {
  note: string;
}

// Hook untuk update user
export const useMailRejected = () => {
  return useMutation({
    // Mutation untuk update user
    mutationFn: async ({ id, data }: { id: number; data: MailRequest }) => {
      // Ambil token dari cookies
      const token = Cookies.get("token");

      // Gunakan service API untuk melakukan update user
      const response = await Api.put(`/api/v1/mails/reject/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      // Mengembalikan response data
      return response.data;
    },
  });
};
