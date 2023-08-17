"use client";
import {
  useState,
  useEffect,
  createContext,
  useContext,
  ReactNode,
} from "react";
import { UserResponse } from "@supabase/supabase-js";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";

// Definición de tipos
interface UserContextProps {
  userData: UserResponse | null;
  setUserData?: React.Dispatch<React.SetStateAction<UserResponse | null>>;
}

interface UserComponentProps {
  children: ReactNode;
}

// Creación del contexto
export const UserContext = createContext<UserContextProps | null>(null);

// Componente UserComponent
export const UserComponent = ({ children }: UserComponentProps) => {
  const [userData, setUserData] = useState<UserResponse | null>(null);
  const supabase = createClientComponentClient<Database>();

  useEffect(() => {
    const getUserData = async () => {
      const user = await supabase.auth.getUser();
      if (user) {
        setUserData(user);
      }
    };
    getUserData();
  }, []);

  const value = {
    userData,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// Hook useUser
export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserContextProvider");
  }
  return context;
};
