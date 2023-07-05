import { Button, ScrollView, Text, View } from 'react-native';
import { FanAppStyles } from './FanAppStyles';
import React from 'react';
import { getUserPages } from '../../Api/get-user-pages';
import { useAuthProvider } from '../../Providers/AuthProvider';

export const FanAppHome = () => {
  const { user } = useAuthProvider();

  // console.log(user);

  const test = async () => {
    if (user) {
      await getUserPages(user.id)

     
    }
  };

  return (
    <View style={FanAppStyles.container}>
      <View style={FanAppStyles.headerContainer}>
        <Text style={FanAppStyles.headerText}>FanApp!</Text>
      </View>
      <View style={FanAppStyles.buttonsContainer}>
        <Button title="im a button" onPress={test} />
      </View>
      <View style={FanAppStyles.channelsContainer}>
        <ScrollView>
          <Text>Hello</Text>
        </ScrollView>
      </View>
    </View>
  );
};
