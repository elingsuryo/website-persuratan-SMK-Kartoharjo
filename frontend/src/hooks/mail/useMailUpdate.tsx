import { useMutation, useQueryClient } from "@tanstack/react-query";
import Api from "../../services/api";
import Cookies from "js-cookie";

interface MailUpdate {
  id: number;
  judul: string;
  deskripsi: string;
  kategori: string;
  tgl_upload: string;
  file: string;
  accept: boolean;
}

export const useMailUpdate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, data }: { id: number; data: FormData }) => {
      const token = Cookies.get("token");
      const response = await Api.put(`/api/v1/mails/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data as MailUpdate;
    },
    onSuccess: () => {
      // Pastikan queryKey-nya sesuai dengan yang digunakan di useMail()
      queryClient.invalidateQueries({ queryKey: ["mails"] });
    },
  });
};
