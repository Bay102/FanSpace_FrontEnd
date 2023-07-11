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
import { NavItem } from '../types';
import { useNavigation } from '@react-navigation/native';

export const SideNav = () => {
  const { user } = useAuthProvider();
  const { setActivePage } = useNavigationProvider();
  const { usersChannels } = useChannelsProvider();
  const navigation: any = useNavigation();
  const [navChannels, setNavChannels] = useState<any>(null);

  useEffect(() => {
    if (user) {
      const channels = usersChannels?.map((channel) => ({
        id: channel.id,
        name: channel.name,
        image: '',
        onPress: () => navigation.navigate('Channel', { channelData: channel }),
      }));
      setNavChannels(channels);
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
      id: '3000',
      name: 'fanapp',
      image: <FontAwesomeIcon icon={faHouse} size={25} color="white" />,
      // onPress: () => setActivePage('FanApp'),
      onPress: () => navigation.navigate('FanSpaceHome'),
    },
  ];

  return (
    <Animatable.View
      animation={'slideInRight'}
      duration={275}
      style={{ height: '100%', backgroundColor: 'black' }}
    >
      <View style={styles.sideNav}>
        <ScrollView>
          {navItems.map((channel) => (
            <View style={styles.channelCircle} key={channel.id}>
              <Text onPress={channel.onPress}>{channel.image && channel.image}</Text>
            </View>
          ))}
          {navChannels &&
            navChannels.map((channel: NavItem) => (
              <View style={styles.channelCircle} key={channel.id}>
                <Text onPress={channel.onPress} style={styles.channelName}>
                  {channel.name}
                </Text>
              </View>
            ))}
        </ScrollView>
      </View>
    </Animatable.View>
  );
};
