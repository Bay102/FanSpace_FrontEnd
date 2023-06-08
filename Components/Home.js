import { Button, ScrollView, Text, View } from 'react-native';
import { styles } from './Styles/Styles';
import { SideNav } from './SideNav';
import { BottomNav } from './BottomNav';
import { useNavigationProvider } from '../Providers/NavigationProvider';

import { FanAppHome } from './FanAppHome/FanAppHome';
import { TeamPage } from './TeamPageComponent/TeamPage';
import { VegasGoldenKnights } from './TeamPages/VegasGoldenKnights/VegasGoldenKnights';
import { VegasRaiders } from './TeamPages/VegasRaiders/VegasRaiders';

export const Home = () => {
  const { activePage, showSideNav, showBottomNav } = useNavigationProvider();

  const RenderPage = {
    FanApp: <FanAppHome />,
    VGK: <VegasGoldenKnights />,
    RAIDERS: <VegasRaiders />,
  };

  return (
    <View style={styles.HomeContainer}>
      <View style={styles.homeContent}>{RenderPage[activePage]}</View>
      {showSideNav && <SideNav />}
      {showBottomNav && <BottomNav />}
    </View>
  );
};
