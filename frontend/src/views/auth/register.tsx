// import FC from react
import { FC, useState, FormEvent } from "react";

//import hook useNavigate from react router
import { useNavigate } from "react-router";

//import custom  hook useRegister from hooks
import { useRegister } from "../../hooks/auth/useRegister";

import "../../index.css";

//interface for validation errors
interface ValidationErrors {
  [key: string]: string;
}

const Register: FC = () => {
  //initialize navigate
  const navigate = useNavigate();

  //initialize useRegister
  const { mutate, isPending } = useRegister();

  //define state
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [full_name, setName] = useState<string>("");

  //define state for errors
  const [errors, setErrors] = useState<ValidationErrors>({});

  // Handle submit form
  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();

    // Call the register mutation
    mutate(
      {
        email,
        password,
        full_name,
      },
      {
        onSuccess: () => {
          // Redirect to login page
          navigate("/login");
        },
        onError: (error: any) => {
          //set errors to state "errors"
          setErrors(error.response.data.errors);
        },
      }
    );
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        className="max-w-sm w-full bg-white p-6 rounded-lg"
        onSubmit={handleRegister}
      >
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-black"
          >
            Nama Lengkap
          </label>
          <input
            type="fullname"
            value={full_name}
            onChange={(e) => setName(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nama Lengkap"
            required
          />
          {errors.Name && (
            <div className="alert alert-danger mt-2 rounded-4">
              {errors.Name}
            </div>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-black"
          >
            Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Email"
            required
          />
          {errors.Email && (
            <div className="alert alert-danger mt-2 rounded-4">
              {errors.Email}
            </div>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-black"
          >
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="••••••••"
            required
          />
          {errors.Password && (
            <div className="alert alert-danger mt-2 rounded-4">
              {errors.Password}
            </div>
          )}
        </div>

        <button
          type="submit"
          className="text-white bg-black hover:bg-neutral-950 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center cursor-pointer"
          disabled={isPending}
        >
          {isPending ? "Loading..." : "REGISTER"}
        </button>
      </form>
    </div>
  );
};

export default Register;
