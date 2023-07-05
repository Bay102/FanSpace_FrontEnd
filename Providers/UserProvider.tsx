import React, { createContext, useContext, useEffect, useState } from 'react';
import { getUserPages } from '../Api/get-user-pages';
import { useAuthProvider } from './AuthProvider';

const UserContext = createContext({});

export const UserProvider = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuthProvider();

  const [pages, setPages] = useState<null>(null);
  
  console.log(user?.pages.map((page) => page.name));

  return <UserContext.Provider value={{ pages }}>{children}</UserContext.Provider>;
};

export const useUserProvider = () => useContext(UserContext);
