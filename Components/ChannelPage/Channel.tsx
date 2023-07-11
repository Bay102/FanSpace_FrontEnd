import React from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import { ChannelStyles } from './ChannelStyles';
import { ChannelProps } from '../../types';
import { SideNav } from '../SideNav';
import { useNavigationProvider } from '../../Providers/NavigationProvider';
import { BottomNav } from '../BottomNav';
import { useAuthProvider } from '../../Providers/AuthProvider';

export const Channel = ({ route }: any) => {
  const { user } = useAuthProvider();
  const { activePage, showSideNav, showBottomNav } = useNavigationProvider();

  const { channelData } = route.params;
  console.log(channelData);

  return (
    <>
      <View style={ChannelStyles.mainContainer}>
        <View style={ChannelStyles.container}>
          <View style={ChannelStyles.headerContainer}>
            <Text style={ChannelStyles.headerText}>{channelData.name}</Text>
          </View>
          <View style={ChannelStyles.buttonsContainer}>
            {/* <Button title="im a button" onPress={''} /> */}
          </View>

          <View style={ChannelStyles.channels}>
            <ScrollView>
              <Text>Hello</Text>
            </ScrollView>
          </View>
        </View>

        {user && showSideNav && <SideNav />}
        {showBottomNav && <BottomNav />}
      </View>
    </>
  );
};
