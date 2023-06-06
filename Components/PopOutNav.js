import {
  Button,
  ScrollView,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { styles } from './Styles/Styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import { useNavigationProvider } from '../Providers/NavigationProvider';

export const PopOutNav = () => {
  const { showSideNav } = useNavigationProvider();

  const navItems = [
    { id: '1', title: '' },
    {
      id: '2',
      title: <Ionicons name="chatbubbles-outline" size={32} color="green" />,
    },
    { id: '3', title: '' },
    { id: '4', title: '' },
    { id: '5', title: '' },
    { id: '6', title: '' },
  ];

  return (
    <>
      <Animatable.View
        animation={'slideInLeft'}
        duration={800}
        style={{ width: 80, height: '100%', backgroundColor: 'black' }}
      >
        <View style={styles.PopOutNav}>
          <ScrollView>
            {navItems.map((item) => (
              <View style={styles.popOutNavItemCircle} key={item.id}>
                <Text style={styles.navIcon} onPress={''}>
                  {item.title}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </Animatable.View>
    </>
  );
};
