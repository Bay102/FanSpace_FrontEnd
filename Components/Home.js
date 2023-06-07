import { Button, ScrollView, Text, View } from 'react-native';
import { styles } from './Styles/Styles';
import { SideNav } from './SideNav';
import { BottomNav } from './BottomNav';
import { useNavigationProvider } from '../Providers/NavigationProvider';

import { FanAppHome } from './FanAppHome/FanAppHome';
import { TeamPage } from './TeamPageComponent/TeamPage';

export const Home = () => {
  const { showSideNav, showBottomNav, showTeamPage, showFanApp, activePage } =
    useNavigationProvider();

  const RenderPage = {
    FanApp: <FanAppHome />,
    VGK: <TeamPage />,
    // RAIDERS: '',
  };


  return (
    <View style={styles.HomeContainer}>
      <View style={styles.homeContent}>
        {RenderPage[activePage]}
        </View>
      {showSideNav && <SideNav />}
      {showBottomNav && <BottomNav />}
    </View>
  );
};
