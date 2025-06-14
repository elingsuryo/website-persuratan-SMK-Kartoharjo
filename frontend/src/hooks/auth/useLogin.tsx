// import useMutation dari '@tanstack/react-query';
import { useMutation } from "@tanstack/react-query";

//import service API
import Api from "../../services/api";

//interface LoginRequest
interface LoginRequest {
  email: string;
  password: string;
}

/*************  ✨ Windsurf Command ⭐  *************/
/*******  e7a0cec8-5e58-4def-8c4b-106d4e67ba77  *******/export const useLogin = () => {
  return useMutation({
    // mutation untuk login
    mutationFn: async (data: LoginRequest) => {
      //menggunakan service API untuk login
      const response = await Api.post("/api/v1/login", data);

      //mengembalikan response data
      return response.data;
    },
  });
};
