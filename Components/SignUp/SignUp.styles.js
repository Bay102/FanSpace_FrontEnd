import { StyleSheet } from 'react-native';

export const SignUpStyles = StyleSheet.create({
  Container: {
    flex: 1,
    borderWidth: 1,
    // borderColor: 'white',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

  header: {
   fontSize: 23,
   marginBottom: 15,
  },

  inputsContainer: {
    flex: 0,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 30,
    width: 300,
    height: 400,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 300
  },

  inputs: {
    width: 230,
    height: 40,
    marginBottom: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderTopWidth: 0
  },

  submit: {
   borderWidth: 1,
   borderRadius: 8,
   padding: 6,
   backgroundColor: 'black',
   color: 'white',
   marginTop: 10
  }
});
