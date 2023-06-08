import { Button, ScrollView, Text, View } from 'react-native';
import { FanAppStyles } from './FanAppStyles';

export const FanAppHome = () => {
  return (
    <>
      <View style={FanAppStyles.container}>
        <View style={FanAppStyles.headerContainer}>
          <Text style={FanAppStyles.headerText}>FanApp Home</Text>
        </View>
        <View style={FanAppStyles.buttonsContainer}>
          <Button title="im a button" onPress={''} />
        </View>

        <View style={FanAppStyles.channels}>
          <ScrollView>
            <Text>Hello</Text>
          </ScrollView>
        </View>
      </View>
    </>
  );
};
