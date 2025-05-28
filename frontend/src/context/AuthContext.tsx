import React, { createContext, useState, useEffect, ReactNode } from "react";
import Cookies from "js-cookie";

interface User {
  role: "admin" | "headmaster" | "dvPersuratan";
}

// Menentukan tipe dari context value
interface AuthContextType {
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

// Membuat context dengan default value undefined
export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

// Menentukan tipe props untuk AuthProvider
interface AuthProviderProps {
  children: ReactNode;
}

// Komponen provider untuk konteks otentikasi
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!Cookies.get("token")
  );
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const token = Cookies.get("token");
    const storedRole = localStorage.getItem("role");

    const handleTokenChange = () => {
      setIsAuthenticated(!!Cookies.get("token"));
    };

    if (token && storedRole) {
      setUser({ role: storedRole as User["role"] });
    }

    window.addEventListener("storage", handleTokenChange);
    return () => {
      window.removeEventListener("storage", handleTokenChange);
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, user, setUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
