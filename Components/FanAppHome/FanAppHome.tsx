import { Button, ScrollView, Text, View } from 'react-native';
import { FanAppStyles } from './FanAppStyles';
import React, { useCallback } from 'react';
import { getUserPages } from '../../Api/get-user-pages';
import { useAuthProvider } from '../../Providers/AuthProvider';
import { useUserProvider } from '../../Providers/UserProvider';
import { Channel } from '../../types';
import { useChannelsProvider } from '../../Providers/ChannelsProvider';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Inter_900Black } from '@expo-google-fonts/inter';
import {
  ABeeZee_400Regular,
  ABeeZee_400Regular_Italic,
} from '@expo-google-fonts/abeezee';
import { SideNav } from '../SideNav';
import { BottomNav } from '../BottomNav';
import { useNavigationProvider } from '../../Providers/NavigationProvider';

SplashScreen.preventAutoHideAsync();

export const FanAppHome = () => {
  const { user } = useAuthProvider();
  const { allChannels } = useChannelsProvider();
  const { activePage, showSideNav, showBottomNav } = useNavigationProvider();


  // //* ///// Font / Splash-Screen /////
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

  return (
    <View style={FanAppStyles.mainContainer}>
      <View style={FanAppStyles.container} onLayout={onLayoutRootView}>
        <View style={FanAppStyles.headerContainer}>
          <Text style={FanAppStyles.headerText}>FAN SPACE</Text>
          <Text style={FanAppStyles.nameText}>Welcome {user?.name}</Text>
        </View>
        <View style={FanAppStyles.channelsContainer}>
          <View style={FanAppStyles.channels}>
            {allChannels?.map((channel: Channel) => (
              <View style={FanAppStyles.channelCircle} key={channel.id}>
                <Text style={FanAppStyles.circleText}>{channel.name}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={FanAppStyles.TBDcontainer}>
          <ScrollView>
            <Text>Hello</Text>
          </ScrollView>
        </View>
      </View>
      
      {user && showSideNav && <SideNav />}
      {showBottomNav && <BottomNav />}

    </View>
  );
};

// <Button title="button" onPress={() => console.log(allChannels)}></Button>
