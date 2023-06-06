import { FlatList, ScrollView, Text, View } from 'react-native';
import { styles } from './Styles/Styles';
import Ionicons from '@expo/vector-icons/Ionicons';

export const BottomNav = () => {
  const navItems = [
    {
      id: '1',
      title: <Ionicons name="ellipsis-vertical-outline" size={40} color="black" />,
    },
    { id: '2', title: '' },
    { id: '3', title: '' },
    { id: '4', title: '' },
  ];

  return (
    <>
      <View style={styles.BottomNav}>
        {navItems.map((item) => (
          <View style={styles.bottomNavItemContainer} key={item.id}>
            <Text style={styles.navIcon}>{item.title}</Text>
          </View>
        ))}
      </View>
    </>
  );
};
