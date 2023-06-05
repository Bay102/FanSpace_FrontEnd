// import { Button } from "react-native/types";

import { Button, Text, View } from 'react-native';
import { styles } from './Styles/Styles';
import { PopOutNav } from './PopOutNav';

export const Home = ({ navigation }) => {
  return (
    <>
      <Text>Welcome to FanApp</Text>
      <Button
        title="Login|SignUp"
        onPress={() => navigation.navigate('LogIn')}
      />
      <PopOutNav />
    </>
  );
};
