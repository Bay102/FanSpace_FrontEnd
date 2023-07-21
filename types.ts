import { Session, User } from '@supabase/gotrue-js';
import { GestureResponderEvent } from 'react-native';

export type AuthTypes = {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
};

export type ChannelsTypes = {
  allChannels: Channel[] | null;
  usersChannels: Channel[] | null;
  setUsersChannels: React.Dispatch<React.SetStateAction<Channel[] | null>>;
};

export type UserType = {
  user: User;
  session: Session;
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
  image?: string;
  onPress: () => void | undefined;
};

export type PagesProps = {
  [key: string]: JSX.Element;
};

export type ChannelProps = {
  channelName: string;
};

export type Channel = {
  name: string;
  image: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
};

export type NewUser = {
  [key: string]: string;
};

export type LoginParams = {
  [key: string]: string;
};
