// import { Button } from "react-native/types"

import { Button, TouchableHighlight } from "react-native"

export const Login = ({navigation}) => {

   return (
      <>
      <Button
         title="Go to Home"
         onPress={() => navigation.navigate('Home')}
      />
      </>
   )
}