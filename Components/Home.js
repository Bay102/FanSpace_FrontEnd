import { Button, Text, View } from 'react-native';
import { styles } from './Styles/Styles';
import { SideNav } from './SideNav';
import { BottomNav } from './BottomNav';
import { useNavigationProvider } from '../Providers/NavigationProvider';
import { TeamPage } from './TeamPage/TeamPage';

export const Home = () => {
  const { showSideNav, showBottomNav , showTeamPage} = useNavigationProvider();

  return (
    <View style={styles.HomeContainer}>
      <View style={styles.homeContent}>
         {/* Team Page would be rendered by a users team button they click on sideNav */}
        {showTeamPage && <TeamPage />}
      </View>
      {showSideNav && <SideNav />}
      {showBottomNav && <BottomNav />}
    </View>
  );
};
