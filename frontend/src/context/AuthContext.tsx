import React, { createContext, useState, useEffect, ReactNode } from "react";
import Cookies from "js-cookie";

interface User {
  role: string;
}

interface AuthContextType {
  [x: string]: any;
  isAuthenticated: boolean;
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  syncAuthState: () => void; // ⬅️ Tambahkan fungsi sync
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(
    !!Cookies.get("token")
  );
  const [user, setUser] = useState<User | null>(null);

  const syncAuthState = () => {
    const token = Cookies.get("token");
    const storedRole = localStorage.getItem("role");

    const validRoles = ["admin", "headmaster", "dvpersuratan"];
    if (token && storedRole && validRoles.includes(storedRole)) {
      setIsAuthenticated(true);
      setUser({ role: storedRole });
    } else {
      setIsAuthenticated(false);
      setUser(null);
    }
  };

  useEffect(() => {
    syncAuthState(); // ⬅️ jalankan pertama kali
    window.addEventListener("storage", syncAuthState); // ⬅️ saat tab lain update

    return () => {
      window.removeEventListener("storage", syncAuthState);
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        user,
        setUser,
        syncAuthState,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
