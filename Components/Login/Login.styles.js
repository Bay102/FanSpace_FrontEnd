import { StyleSheet } from "react-native";

export const LoginStyles = StyleSheet.create({

   signInText: {
      fontSize: 25,
      marginBottom: 10,
    },
  
    loginContainer: {
      flex: 1,
      borderWidth: 1,
      // borderColor: 'white',
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
    },
  
    inputsContainer: {
      flex: 0,
      backgroundColor: 'white',
      borderWidth: 1,
      borderRadius: 30,
      width: 250,
      height: 250,
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },

    submit: {
      borderWidth: 1,
      borderRadius: 8,
      padding: 6,
      backgroundColor: 'black',
      color: 'white',
      marginTop: 10
     }

})