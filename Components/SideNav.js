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

export const SideNav = () => {
  const { showSideNav } = useNavigationProvider();

  //* Realistically nav icons will be rendered from User Data / Backend

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
        animation={'slideInRight'}
        duration={800}
        style={{ width: 70, height: '100%', backgroundColor: 'black' }}
      >
        <View style={styles.sideNav}>
          <ScrollView>
            {navItems.map((item) => (
              <View style={styles.sideNavCircle} key={item.id}>
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
