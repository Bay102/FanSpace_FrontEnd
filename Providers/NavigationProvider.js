import { createContext, useContext, useState } from 'react';

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [showSideNav, setShowSideNav] = useState(true);
  const [showBottomNav, setShowBottomNav] = useState(true);
  const [teamPage, setTeamPage] = useState(null);
  const [showTeamPage, setShowTeamPage] = useState(false);

  const toggleSideNav = () => {
    showSideNav ? setShowSideNav(false) : setShowSideNav(true);
  };

  const toggleTeamPage = () => {
    showTeamPage ? setShowTeamPage(false) : setShowTeamPage(true)
  }

  return (
    <>
      <NavigationContext.Provider
        value={{
          showSideNav,
          toggleSideNav,
          showBottomNav,
          setShowBottomNav,
          showTeamPage,
          setShowTeamPage,
          toggleTeamPage
        }}
      >
        {children}
      </NavigationContext.Provider>
    </>
  );
};

export const useNavigationProvider = () => useContext(NavigationContext);
