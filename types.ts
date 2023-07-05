export type AuthTypes = {
 user: User | null;
 setUser: React.Dispatch<React.SetStateAction<User | null >> 
}

export type User = {
  id: number;
  name: string;
  email: string;
  passwordHash: string,
  pages: any     //! FIX ANY
}

export type NavigationProviderTypes = {
  showSideNav: boolean;
  toggleSideNav: () => void;
  showBottomNav: boolean;
  setShowBottomNav: React.Dispatch<React.SetStateAction<boolean>>;
  activePage: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
};

export type NavItem = {
  id: number;
  title: JSX.Element;
  onPress: () => void;
};

export type TeamPageProps = {
  teamName: string;
};

export type PagesProps = {
  [key: string]: string | JSX.Element;
};

export type NewUser = {
   [key: string]: string
} 

export type LoginParams = {
  [key: string]: string
}