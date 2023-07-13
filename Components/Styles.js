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
  },

  sideNavContainer: {
    flex: 1,
    borderWidth: 1,
  },

  sideNav: {
    backgroundColor: '#3a3a3d',
    // borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: 56,
    height: Dimensions.get('window').height,
    color: 'white',
  },

  channelCircle: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 48,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 25,
    backgroundColor: 'black',
    marginTop: 35,
    marginBottom: 0,
  },

  channelName: {
    color: 'white',
    fontSize: 11,
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
