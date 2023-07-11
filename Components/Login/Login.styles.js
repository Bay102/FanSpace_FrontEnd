import {
  ABeeZee_400Regular,
  ABeeZee_400Regular_Italic,
} from '@expo-google-fonts/abeezee';
import { StyleSheet } from 'react-native';

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
    width: 280,
    height: 350,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 200,
    gap: 10,
  },

  input: {
    width: 230,
    height: 40,
    marginBottom: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderTopWidth: 0,
    // backgroundColor: '#e3e0e1'
  },

  submit: {
    borderWidth: 1,
    borderRadius: 8,
    width: 170,
    padding: 6,
    textAlign: 'center',
    backgroundColor: 'black',
    color: 'white',
    marginTop: 10,
  },

  loginTxt: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Inter_900Black',
  },

  not: {
    marginTop: 15,
    fontSize: 13,
  },

  become: {
    width: 150,
    borderWidth: 1,
    borderRadius: 18,
    padding: 5,
  },

  becomeTxt: {
    textAlign: 'center',
    fontWeight: 600,
  },
});
