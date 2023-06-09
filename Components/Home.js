import { View } from 'react-native';
import { styles } from './Styles/Styles';
import { SideNav } from './SideNav';
import { BottomNav } from './BottomNav';
import { useNavigationProvider } from '../Providers/NavigationProvider';

import { FanAppHome } from './FanAppHome/FanAppHome';
import { VegasGoldenKnights } from './TeamPages/VegasGoldenKnights/VegasGoldenKnights';
import { VegasRaiders } from './TeamPages/VegasRaiders/VegasRaiders';
import { useCallback } from 'react';

import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Inter_900Black } from '@expo-google-fonts/inter';

SplashScreen.preventAutoHideAsync();

export const Home = () => {
  const { activePage, showSideNav, showBottomNav } = useNavigationProvider();

  //> ////////////////// Font / Splashscreen ///////////////////////
  const [fontsLoaded] = useFonts({
    Inter_900Black,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  //> //////////////////////////////////////////////////*

  const RenderPage = {
    FanApp: <FanAppHome />,
    VGK: <VegasGoldenKnights />,
    RAIDERS: <VegasRaiders />,
  };

  return (
    <View style={styles.HomeContainer} onLayout={onLayoutRootView}>
      <View style={styles.homeContent}>{RenderPage[activePage]}</View>
      {showSideNav && <SideNav />}
      {showBottomNav && <BottomNav />}
    </View>
  );
};
