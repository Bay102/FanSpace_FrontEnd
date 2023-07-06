import React, { useEffect } from 'react';
import { Image, ImageBackground, ScrollView, Text, View } from 'react-native';
import { styles } from './Styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCommentDollar, faHouse } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useNavigationProvider } from '../Providers/NavigationProvider';
import { useChannelsProvider } from '../Providers/ChannelsProvider';
import { useAuthProvider } from '../Providers/AuthProvider';
import { Channel, NavItem } from '../types';

export const SideNav = () => {
  const { user } = useAuthProvider();
  const { setActivePage } = useNavigationProvider();
  const { usersChannels } = useChannelsProvider();

  const [userChans, setUserChans] = useState<any>([]);

  useEffect(() => {
    if (user) {
      const channels = usersChannels?.map((channel) => ({
        id: channel.id,
        name: channel.name,
        // image: '',
        onPress: () => setActivePage(`${channel.name}`),
      }));
      setUserChans(channels);
    }
  }, [usersChannels]);

  const navItems = [
    {
      id: '1000',
      name: 'chat',
      image: <Ionicons name="chatbubbles-outline" size={28} color="white" />,
      onPress: () => setActivePage('FanApp'),
    },
    {
      id: '2000',
      name: 'sell',
      image: <FontAwesomeIcon icon={faCommentDollar} size={25} color="white" />,
      onPress: () => setActivePage('FanApp'),
    },

    {
      id: '5000',
      name: 'fanapp',
      image: <FontAwesomeIcon icon={faHouse} size={25} color="white" />,
      onPress: () => setActivePage('FanApp'),
    },
  ];

  return (
    <>
      <Animatable.View
        animation={'slideInRight'}
        duration={300}
        style={{ height: '100%', backgroundColor: 'black' }}
      >
        <View style={styles.sideNav}>
          <ScrollView>
            {navItems.map((channel) => (
              <View style={styles.sideNavCircle} key={channel.id}>
                <Text onPress={channel.onPress}>{channel.image && channel.image}</Text>
              </View>
            ))}
            {userChans &&
              userChans.map((channel: NavItem) => (
                <View style={styles.sideNavCircle} key={channel.id}>
                  <Text onPress={channel.onPress} style={styles.name}>{channel.name}</Text>
                </View>
              ))}
          </ScrollView>
        </View>
      </Animatable.View>
    </>
  );
};
