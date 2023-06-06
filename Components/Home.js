// import { Button } from "react-native/types";

import { Button, Text, View } from 'react-native';
import { styles } from './Styles/Styles';
import { PopOutNav } from './PopOutNav';
import { BottomNav } from './BottomNav';

export const Home = ({ navigation }) => {
  return (
    <>
      <View style={styles.HomeContainer}>
        {/* <Button
          title="Login | SignUp"
          onPress={() => navigation.navigate('LogIn')}
        /> */}
        <PopOutNav />
        <BottomNav />
      </View>
    </>
  );
};
