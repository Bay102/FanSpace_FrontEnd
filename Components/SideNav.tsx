import React, { useEffect } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './Styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCommentDollar, faHouse } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { useNavigationProvider } from '../Providers/NavigationProvider';
import { useChannelsProvider } from '../Providers/ChannelsProvider';
import { useAuthProvider } from '../Providers/AuthProvider';
import { useNavigation } from '@react-navigation/native';
import { log } from '../App';
import { getUserChannels } from '../Api/get-user-channels';
import { getImageUrl } from '../Api/get-ImageUrl';
import { Channel } from '../types';

export const SideNav = () => {
  const navigation: any = useNavigation();

  const { user } = useAuthProvider();
  const { setActivePage } = useNavigationProvider();
  const { usersChannels } = useChannelsProvider();

  const [navChannels, setNavChannels] = useState<any>(null);

  useEffect(() => {
    const fetchChannels = async () => {
      if (user) {
        const channels = await getUserChannels(user.user.id);

        const loadedChannels = channels.map((channel: any) => ({
          name: channel.channel_name,
          image: getImageUrl('channel_icons', `${channel.channel_name}.png`),
          onPress: () => navigation.navigate('Channel', { channelData: channel }),
        }));

        setNavChannels(loadedChannels);
      }
    };

    fetchChannels();
  }, [usersChannels]);

  const navItems = [
    {
      id: '1',
      name: 'chat',
      image: <Ionicons name="chatbubbles-outline" size={28} color="white" />,
      onPress: () => setActivePage('FanApp'),
    },
    {
      id: '2',
      name: 'fanapp',
      image: <FontAwesomeIcon icon={faHouse} size={25} color="white" />,
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
            <View style={styles.channelCircle} key={channel.name}>
              <Text onPress={channel.onPress}>{channel.image && channel.image}</Text>
            </View>
          ))}
          {navChannels &&
            navChannels.map((channel: Channel, index: number) => (
              <TouchableOpacity key={index} onPress={channel.onPress}>
                <View style={styles.channelCircle} key={index}>
                  <Image
                    source={{ uri: `${channel.image}` }}
                    style={{ width: 45, height: 45, borderRadius: 25 }}
                  />
                </View>
              </TouchableOpacity>
            ))}
        </ScrollView>
      </View>
    </Animatable.View>
  );
};
