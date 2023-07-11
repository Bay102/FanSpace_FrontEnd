import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAllChannels } from '../Api/get-all-channels';
import { useAuthProvider } from './AuthProvider';
import { Channel, ChannelsTypes } from '../types';

const ChannelsContext = createContext({} as ChannelsTypes);

export const ChannelsProvider = ({ children }: { children: JSX.Element }) => {
  const { user } = useAuthProvider();

  const [allChannels, setAllChannels] = useState([]);
  const [usersChannels, setUsersChannels] = useState<Channel[] | null>([]);

  useEffect(() => {
    const fetchData = async () => {
      const channels = await getAllChannels();
      setAllChannels(channels);
      setUsersChannels(user?.channels as Channel[]);
    };

    fetchData();
  }, [user]);

  return (
    <ChannelsContext.Provider
      value={{ allChannels, usersChannels, setUsersChannels }}
    >
      {children}
    </ChannelsContext.Provider>
  );
};

export const useChannelsProvider = () => useContext(ChannelsContext);
