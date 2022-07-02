import React, { createContext, ReactNode, useContext, useState } from "react";

export interface AuthContextType {
  // isLoadingUser: boolean;
  // login: (values: any) => Promise<void>; //@TODO fix type
  // logout: () => void;
  user?: any; //@TODO fix type
}

const initialState = {
  // isLoadingUser: true,
  // // eslint-disable-next-line unicorn/no-useless-undefined
  // login: async () => undefined,
  // logout: async () => {
  //   // init
  // },
  user: undefined,
};

const AuthContext = createContext<AuthContextType>(initialState);

interface Properties {
  children: ReactNode;
}

export const AuthProvider = ({children}: Properties) => {
  const [user, setUser] = useState(null);

  

  return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext);
