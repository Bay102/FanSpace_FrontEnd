import { Image, ImageBackground, ScrollView, Text, View } from 'react-native';
import { styles } from './Styles/Styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import { useNavigationProvider } from '../Providers/NavigationProvider';
import VGK from '../assets/VGK.png';
import RAIDERS from '../assets/RAIDERS.png';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCommentDollar, faHouse } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const SideNav = () => {
  const { setActivePage } = useNavigationProvider();

  //* Realistically nav icons will be rendered based on User Data / Backend
  const [userChannels, setUserChannels] = useState(null)
  //* 

  const navItems = [
    {
      id: '1',
      title: '',
      icon: <Ionicons name="chatbubbles-outline" size={28} color="white" />,
      // onPress: '',
    },
    {
      id: '2',
      title: '',
      icon: <FontAwesomeIcon icon={faCommentDollar} size={25} color="white" />,
      // onPress: '',
    },
    { id: '3', title: '', image: VGK, onPress: () => setActivePage('VGK') },
    {
      id: '4',
      title: '',
      image: RAIDERS,
      onPress: () => setActivePage('RAIDERS'),
    },
    {
      id: '5',
      title: '',
      icon: <FontAwesomeIcon icon={faHouse} size={25} color="white" />,
      onPress: () => setActivePage('FanApp'),
    },
  ];

  return (
    <>
      <Animatable.View
        animation={'slideInRight'}
        duration={550}
        style={{ height: '100%', backgroundColor: 'black' }}
      >
        <View style={styles.sideNav}>
          <ScrollView>
            {navItems.map((item) => (
              <View style={styles.sideNavCircle} key={item.id}>
                <Text onPress={item.onPress}>
                  {item.icon && item.icon}
                  {item.image && (
                    <Image
                      source={item.image}
                      style={{ width: 30, height: 30 }}
                    ></Image>
                  )}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </Animatable.View>
    </>
  );
};
