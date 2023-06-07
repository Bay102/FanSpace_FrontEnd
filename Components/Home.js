import { Button, View } from 'react-native';
import { styles } from './Styles/Styles';
import { SideNav } from './SideNav';
import { BottomNav } from './BottomNav';
import { useNavigationProvider } from '../Providers/NavigationProvider';

export const Home = ({ navigation }) => {
  const { showSideNav } = useNavigationProvider();

  return (
    <>
      <View style={styles.HomeContainer}>
        {showSideNav && <SideNav />}
        <BottomNav />
      </View>
    </>
  );
};
