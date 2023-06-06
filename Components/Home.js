import { View } from 'react-native';
import { styles } from './Styles/Styles';
import { PopOutNav } from './PopOutNav';
import { BottomNav } from './BottomNav';
import { useNavigationProvider } from '../Providers/NavigationProvider';

export const Home = ({ navigation }) => {
  const { showSideNav } = useNavigationProvider();

  return (
    <>
      <View style={styles.HomeContainer}>
        {showSideNav && <PopOutNav />}
        <BottomNav />
      </View>
    </>
  );
};
