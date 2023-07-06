import React, { createContext, useContext, useState } from "react";
import { AuthTypes, User } from "../types";

const AuthContext = createContext({} as AuthTypes);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {

   const [user, setUser] = useState<User | null>(null);
   // console.log(user)
   

   return(
      <AuthContext.Provider value={{user, setUser}}>
       {children}
      </AuthContext.Provider>
   )
}

export const useAuthProvider = () => useContext(AuthContext);
