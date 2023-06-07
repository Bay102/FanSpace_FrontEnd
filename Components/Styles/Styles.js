import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height + 10,
    backgroundColor: '#2c303b',
    borderWidth: 2,
  },

  homeContent: {
    flex: 1,
    borderWidth: 1,
    // borderColor: 'blue'
  },

  sideNavContainer: {
    flex: 1,
    borderWidth: 1,
  },

  sideNav: {
    backgroundColor: '#141420',
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    height: Dimensions.get('window').height,
  },

  sideNavCircle: {
    // flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 53,
    height: 53,
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: 'black',
    marginTop: 40,
    marginBottom: 20,
  },

  BottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
    height: 60,
    borderWidth: 1,
    borderColor: '',
    backgroundColor: '#191919',
    color: 'white',
  },

  bottomNavItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

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
});
