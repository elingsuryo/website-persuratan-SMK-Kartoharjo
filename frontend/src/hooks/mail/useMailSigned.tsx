import { useMutation, useQueryClient } from "@tanstack/react-query";
import Api from "../../services/api";
import Cookies from "js-cookie";

interface MailSigned {
  id: number;
  file: string;
  accept: boolean;
}

export const useMailSigned = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ id }: { id: number }) => {
      const token = Cookies.get("token");
      const response = await Api.put(`/api/v1/mails/signed/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return response.data as MailSigned;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["mails"] });
    },
  });
};
