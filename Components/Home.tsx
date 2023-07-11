import React from 'react';
import { useCallback } from 'react';
import { View } from 'react-native';
import { styles } from './Styles';
import { SideNav } from './SideNav';
import { BottomNav } from './BottomNav';
import { useNavigationProvider } from '../Providers/NavigationProvider';

import { FanAppHome } from './FanAppHome/FanAppHome';
import { VegasGoldenKnights } from './TeamPages/VegasGoldenKnights/VegasGoldenKnights';
import { VegasRaiders } from './TeamPages/VegasRaiders/VegasRaiders';

import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Inter_900Black } from '@expo-google-fonts/inter';
import {
  ABeeZee_400Regular,
  ABeeZee_400Regular_Italic,
} from '@expo-google-fonts/abeezee';
import { PagesProps } from '../types';
import { useAuthProvider } from '../Providers/AuthProvider';

SplashScreen.preventAutoHideAsync();

export const Home = () => {
  const { user } = useAuthProvider();
  const { activePage, showSideNav, showBottomNav } = useNavigationProvider();

  //* ///// Font / Splash-Screen /////
  const [fontsLoaded] = useFonts({
    Inter_900Black,
    ABeeZee_400Regular,
    ABeeZee_400Regular_Italic,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  //* ///////////////////////////////////

  //* render default components here,
  const RenderChannel: PagesProps = {
    FanApp: <FanAppHome />,
  };

  return (
    <View style={styles.HomeContainer} onLayout={onLayoutRootView}>
      <View style={styles.homeContent}>{RenderChannel[activePage]}</View>
      {user && showSideNav && <SideNav />}
      {showBottomNav && <BottomNav />}
    </View>
  );
};
