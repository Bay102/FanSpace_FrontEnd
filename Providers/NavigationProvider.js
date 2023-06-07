import { createContext, useContext, useState } from 'react';

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
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
