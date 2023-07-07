import { Button, ScrollView, Text, View } from 'react-native';
import { FanAppStyles } from './FanAppStyles';
import React from 'react';
import { getUserPages } from '../../Api/get-user-pages';
import { useAuthProvider } from '../../Providers/AuthProvider';
import { useUserProvider } from '../../Providers/UserProvider';
import { Channel } from '../../types';
import { useChannelsProvider } from '../../Providers/ChannelsProvider';

export const FanAppHome = () => {
  const { user } = useAuthProvider();
  const { allChannels } = useChannelsProvider();

  
  return (
    <View style={FanAppStyles.container}>
      <View style={FanAppStyles.headerContainer}>
        <Text style={FanAppStyles.headerText}>FAN SPACE</Text>
      </View>
      <View style={FanAppStyles.channelsContainer}>
        <View style={FanAppStyles.channels}>
          {allChannels?.map(
            (
              channel: Channel,
              index: number //! Change this to key being the channels ID
            ) => (
              <View style={FanAppStyles.channelCircle} key={index}>
                <Text style={FanAppStyles.circleText}>{channel.name}</Text>
              </View>
            )
          )}
        </View>
      </View>
      <View style={FanAppStyles.TBDcontainer}>
        <ScrollView>
          <Text>Hello</Text>
        </ScrollView>
      </View>
    </View>
  );
};

// <Button title="button" onPress={() => console.log(allChannels)}></Button>
