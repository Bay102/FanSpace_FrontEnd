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
    backgroundColor: '#b68f45',
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: 65,
    height: Dimensions.get('window').height,
  },

  sideNavCircle: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 25,
    backgroundColor: 'black',
    marginTop: 40,
    marginBottom: 0,
  },

  BottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'absolute',
    bottom: -3,
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

});
