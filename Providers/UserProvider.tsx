import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAuthProvider } from './AuthProvider';

const UserContext = createContext({} as any);

export const UserProvider = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuthProvider();


  return (
    <UserContext.Provider value={{}}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserProvider = () => useContext(UserContext);
