import {
  FlatList,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { styles } from './Styles/Styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigationProvider } from '../Providers/NavigationProvider';

export const BottomNav = () => {
  const { toggleSideNav } = useNavigationProvider();

  const navItems = [
    {
      id: '1',
      title: (
        <Ionicons name="chevron-back-circle-outline" size={40} color="black" />
      ),
      onPress: toggleSideNav,
    },
    {
      id: '2',
      title: <Ionicons name="search-circle-outline" size={45} color="black" />,
      onPress: '',
    },
    {
      id: '3',
      title: <Ionicons name="" size={40} color="black" />,
      onPress: '',
    },
    {
      id: '4',
      title: <Ionicons name="person-circle-outline" size={40} color="black" />,
      onPress: '',
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
