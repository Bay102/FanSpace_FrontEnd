export type AuthTypes = {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
};

export type ChannelsTypes = {
  allChannels: Channel[];
  usersChannels: Channel[] | null;
  setUsersChannels: React.Dispatch<React.SetStateAction<Channel[] | null>>;
};

export type User = {
  id: number;
  name: string;
  email: string;
  passwordHash: string;
  channels?: Channel[];
};

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
  name: JSX.Element;
  image: string;
  onPress: () => void;
};

export type PagesProps = {
  [key: string]: JSX.Element;
};

export type TeamPageProps = {
  teamName: string;
};

export type Channel = {
  [key: string | number]: string | number;
};

export type NewUser = {
  [key: string]: string;
};

export type LoginParams = {
  [key: string]: string;
};
