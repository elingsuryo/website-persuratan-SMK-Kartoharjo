import { useMutation } from "@tanstack/react-query";
import Api from "../../services/api";
import Cookies from "js-cookie";

export const useMailCreate = () => {
  return useMutation({
    mutationFn: async (data: FormData) => {
      const token = Cookies.get("token");
      const response = await Api.post("/api/v1/mails", data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    },
  });
};
