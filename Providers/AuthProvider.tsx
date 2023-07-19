import React, { createContext, useContext, useState } from 'react';
import { AuthTypes, UserType } from '../types';

// import { restoreSession } from "../Supabase.config";

const AuthContext = createContext({} as AuthTypes);

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState<UserType | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
  );
};

export const useAuthProvider = () => useContext(AuthContext);
