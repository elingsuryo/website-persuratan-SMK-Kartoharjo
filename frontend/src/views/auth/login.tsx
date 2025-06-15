// import FC from react
import { FC, useState, useContext, FormEvent } from "react";

//import hook useNavigate from react router
import { useNavigate } from "react-router";

//import custom  hook useLogin from hooks
import { useLogin } from "../../hooks/auth/useLogin";

//import js-cookie
import Cookies from "js-cookie";

//import context
import { AuthContext } from "../../context/AuthContext";

import bg1 from "../../assets/bg1.png";

//interface for validation errors
interface ValidationErrors {
  [key: string]: string;
}

export const Login: FC = () => {
  //initialize navigate
  const navigate = useNavigate();

  //initialize useLogin
  const { mutate, isPending } = useLogin();

  //destruct auth context "setIsAuthenticated"
  const { setIsAuthenticated } = useContext(AuthContext)!;

  //define state
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  //define state for errors
  const [errors, setErrors] = useState<ValidationErrors>({});

  // Handle submit form
  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    // Call the login mutation
    mutate(
      {
        email,
        password,
      },
      {
        onSuccess: (data: any) => {
          //set token to cookie
          Cookies.set("token", data.data.token);

          //set role to localStorage
          localStorage.setItem("role", data.data.role);

          //set user to cookie
          Cookies.set(
            "user",
            JSON.stringify({
              id: data.data.id,
              fullname: data.data.fullname,
              email: data.data.email,
              role: data.data.role,
            })
          );

          //set isAuthenticated to true
          setIsAuthenticated(true);

          // Redirect to dashboard page
          const roleRoutes: Record<string, string> = {
            admin: "/admin/dashboard",
            headmaster: "/kepalasekolah/dashboard",
            dvPersuratan: "/dvpersuratan/dashboard",
          };

          const route = roleRoutes[data.data.role];

          if (route) {
            navigate(route);
          } else {
            navigate("/unauthorized");
          }
        },
        onError: (error: any) => {
          //set errors to state "errors"
          setErrors(error.response.data.errors);
        },
      }
    );
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${bg1})`,
      }}
    >
      <hr />
      {errors.Error && (
        <div className="alert alert-danger mt-2 rounded-4">
          Username or Password is incorrect
        </div>
      )}
      <form
        className="max-w-sm w-full bg-white p-6 rounded-lg"
        onSubmit={handleLogin}
      >
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
            placeholder="email"
            required
          />
          {errors.Username && (
            <div className="alert alert-danger mt-2 rounded-4">
              {errors.Username}
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
          {isPending ? "Loading..." : "LOGIN"}
        </button>
      </form>
    </div>
  );
};

export default Login;
