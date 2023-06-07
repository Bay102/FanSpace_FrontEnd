import { Text, View } from 'react-native';
import { styles } from './Styles/Styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigationProvider } from '../Providers/NavigationProvider';
import { useNavigation } from '@react-navigation/native';

export const BottomNav = () => {
  const { toggleSideNav } = useNavigationProvider();
  const navigation = useNavigation();

  const navItems = [
    {
      id: '1',
      title: (
        <Ionicons name="chevron-back-circle-outline" size={35} color="white" />
      ),
      onPress: toggleSideNav,
    },
    {
      id: '2',
      title: <Ionicons name="search-circle-outline" size={40} color="white" />,
      onPress: '',
    },
    {
      id: '3',
      title: <Ionicons name="person-circle-outline" size={35} color="white" />,
      onPress: () => navigation.navigate('LogIn'),
    },
  ];

  return (
    <>
      <View style={styles.BottomNav}>
        {navItems.map((item) => (
          <View style={styles.bottomNavItemContainer} key={item.id}>
            <Text onPress={item.onPress} style={styles.navIcon}>
              {item.title}
            </Text>
          </View>
        ))}
      </View>
    </>
  );
};
