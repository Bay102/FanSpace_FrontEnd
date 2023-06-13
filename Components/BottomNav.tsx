import { Text, View } from 'react-native';
import { styles } from './Styles/Styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigationProvider } from '../Providers/NavigationProvider';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { BottomNavItemsTypes, NavItem } from '../types';

export const BottomNav = () => {
  const { showSideNav, toggleSideNav } = useNavigationProvider();

  const navigation = useNavigation();

  const navItems: NavItem[] = [
    {
      id: 1,
      title: <Ionicons name="person-circle-outline" size={35} color="white" />,
      onPress: () => navigation.navigate('LogIn'),
    },
    {
      id: 2,
      title: <Ionicons name="search-circle-outline" size={40} color="white" />,
      onPress: () => '',
    },
    {
      id: 3,
      title: (
        <Ionicons
          name={
            showSideNav
              ? 'chevron-forward-circle-outline'
              : 'chevron-back-circle-outline'
          }
          size={35}
          color="white"
        />
      ),
      onPress: toggleSideNav,
    },
  ];

  return (
    <>
      <View style={styles.BottomNav}>
        {navItems.map((item: NavItem) => (
          <View style={styles.bottomNavItemContainer} key={item.id}>
            <Text onPress={item.onPress}>{item.title}</Text>
          </View>
        ))}
      </View>
    </>
  );
};
