import React from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import { teamStyles } from './TeamStyles';
import { TeamPageProps } from '../../types';

export const TeamPage: React.FC<TeamPageProps> = ({ teamName }) => {
  return (
    <View style={teamStyles.container}>
      <View style={teamStyles.headerContainer}>
        <Text style={teamStyles.headerText}>{teamName}</Text>
      </View>
      <View style={teamStyles.buttonsContainer}>
        {/* <Button title="im a button" onPress={''} /> */}
      </View>

      <View style={teamStyles.channels}>
        <ScrollView>
          <Text>Hello</Text>
        </ScrollView>
      </View>
    </View>
  );
};
