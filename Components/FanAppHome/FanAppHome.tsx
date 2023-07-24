import { Button, ScrollView, Text, View } from 'react-native';
import { FanAppStyles } from './FanAppStyles';
import React, { useCallback, useState } from 'react';
import { useAuthProvider } from '../../Providers/AuthProvider';
import { Channel } from '../../types';
import { useChannelsProvider } from '../../Providers/ChannelsProvider';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import {
  ABeeZee_400Regular,
  ABeeZee_400Regular_Italic,
} from '@expo-google-fonts/abeezee';
import { Roboto_700Bold } from '@expo-google-fonts/roboto';
import { SideNav } from '../SideNav';
import { BottomNav } from '../BottomNav';
import { useNavigationProvider } from '../../Providers/NavigationProvider';

SplashScreen.preventAutoHideAsync();

export const FanAppHome = () => {
  const { user } = useAuthProvider();
  const { allChannels } = useChannelsProvider();

  const { showSideNav, showBottomNav } = useNavigationProvider();

  // //* ///// Font / Splash-Screen /////
  const [fontsLoaded] = useFonts({
    ABeeZee_400Regular,
    ABeeZee_400Regular_Italic,
    Roboto_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={FanAppStyles.mainContainer}>
      <View style={FanAppStyles.container} onLayout={onLayoutRootView}>
        <View style={FanAppStyles.headerContainer}>
          <Text style={FanAppStyles.headerText}>FAN SPACE</Text>
          <Text style={FanAppStyles.beta}>BETA</Text>
          {/* <Text style={FanAppStyles.nameText}>Welcome {user?.user.email}</Text> */}
        </View>
        <View style={FanAppStyles.notificationsContainer}>
          <Text style={FanAppStyles.notificationHeader}>NOTIFICATIONS</Text>
          <View style={FanAppStyles.channels}>
            {allChannels?.map((channel: Channel, index: number) => (
              <View style={FanAppStyles.channelCircle} key={index}>
                <Text style={FanAppStyles.circleText}>{channel.name}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={FanAppStyles.TBDcontainer}>
          <ScrollView>
            <Text>Home</Text>
          </ScrollView>
        </View>
      </View>
      {user && showSideNav && <SideNav />}
      {showBottomNav && <BottomNav />}
    </View>
  );
};
