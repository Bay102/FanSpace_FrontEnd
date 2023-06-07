import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  HomeContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height + 10,
    backgroundColor: '#2c303b',
    borderWidth: 2,
    // borderColor: 'white',
  },

  sideNav: {
    backgroundColor: '#141420',
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'relative',
    height: Dimensions.get('window').height,
  },

  sideNavCircle: {
    width: 50,
    height: 50,
    borderWidth: 3,
    borderRadius: 25,
    backgroundColor: 'white',
    marginTop: 30,
    marginBottom: 20,
  },

  navIcon: {
    textAlign: 'center',
  },

  BottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: 5,
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

  loginContainer: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputsContainer: {
    flex: 0,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius:30,
    width: 300,
    height: 300,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
