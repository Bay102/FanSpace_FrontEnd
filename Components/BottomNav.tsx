import { Text, View } from 'react-native';
import { styles } from './Styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigationProvider } from '../Providers/NavigationProvider';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { NavItem } from '../types';
import { useAuthProvider } from '../Providers/AuthProvider';

export const BottomNav = () => {
  const { showSideNav, toggleSideNav } = useNavigationProvider();
  const { user } = useAuthProvider();

  const navigation = useNavigation();

  const handleUserIconClick = () => {
    if (user) {
      navigation.navigate('UserProfile' as never);
    }
    if (!user) {
      navigation.navigate('Login' as never);
    }
  };

  const navButtonDirection = showSideNav
    ? 'chevron-forward-circle-outline'
    : 'chevron-back-circle-outline';

  const navItems: NavItem[] = [
    {
      id: 1,
      name: <Ionicons name="person-circle-outline" size={35} color="white" />,
      onPress: () => handleUserIconClick(),
    },
    {
      id: 2,
      name: <Ionicons name="search-circle-outline" size={40} color="white" />,
      onPress: () => '',
    },
    {
      id: 3,
      name: <Ionicons name={navButtonDirection} size={35} color="white" />,
      onPress: toggleSideNav,
    },
  ];

  return (
    <>
      <View style={styles.BottomNav}>
        {navItems.map((item: NavItem) => (
          <View style={styles.bottomNavItemContainer} key={item.id}>
            <Text onPress={item.onPress}>{item.name}</Text>
          </View>
        ))}
      </View>
    </>
  );
};
