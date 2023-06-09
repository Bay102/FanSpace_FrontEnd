import { Button, ScrollView, Text, View } from 'react-native';
import { FanAppStyles } from './FanAppStyles';
// import { Inter_900Black } from '@expo-google-fonts/inter';

export const FanAppHome = () => {
 
  return (
    <>
      <View style={FanAppStyles.container}>
        <View style={FanAppStyles.headerContainer}>
          <Text style={FanAppStyles.headerText}>FanApp!</Text>
        </View>
        <View style={FanAppStyles.buttonsContainer}>
          <Button title="im a button" onPress={''} />
        </View>
        <View style={FanAppStyles.channels}>
          <ScrollView>
            <Text style={{fontFamily: "Inter_900Black"}}>Hello</Text>
          </ScrollView>
        </View>
      </View>
    </>
  );
};
