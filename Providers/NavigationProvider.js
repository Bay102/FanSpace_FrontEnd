import { createContext, useContext, useState } from 'react';

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  
   const [showSideNav, setShowSideNav] = useState(true);

  const toggleSideNav = () => {
    showSideNav ? setShowSideNav(false) : setShowSideNav(true);
  };

  return (
    <>
      <NavigationContext.Provider value={{ showSideNav, toggleSideNav }}>
        {children}
      </NavigationContext.Provider>
    </>
  );
};

export const useNavigationProvider = () => useContext(NavigationContext);
