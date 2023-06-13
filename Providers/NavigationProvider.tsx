import { createContext, useContext, useState } from 'react';
import React from 'react';
import { NavigationProviderTypes } from '../types';

const NavigationContext = createContext({} as NavigationProviderTypes);

export const NavigationProvider = ({ children }: { children: JSX.Element }) => {
  const [showSideNav, setShowSideNav] = useState(true);
  const [showBottomNav, setShowBottomNav] = useState(true);

  const [activePage, setActivePage] = useState('FanApp');

  const toggleSideNav = () => {
    showSideNav ? setShowSideNav(false) : setShowSideNav(true);
  };

  return (
    <>
      <NavigationContext.Provider
        value={{
          showSideNav,
          toggleSideNav,
          showBottomNav,
          setShowBottomNav,
          activePage,
          setActivePage,
        }}
      >
        {children}
      </NavigationContext.Provider>
    </>
  );
};

export const useNavigationProvider = () => useContext(NavigationContext);
