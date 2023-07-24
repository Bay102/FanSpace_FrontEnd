import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height + 10,
    // backgroundColor: '#080808',
    // borderWidth: 2,
  },

  homeContent: {
    flex: 1,
    borderWidth: 1,
  },

  sideNavContainer: {
    flex: 1,
    // borderWidth: 1,
  },

  sideNav: {
    backgroundColor: '#141414',
    alignItems: 'center',
    justifyContent: 'center',
    width: 55,
    height: Dimensions.get('window').height,
    // borderWidth: .2,
    // borderLeftColor: 'white',
    // shadowColor: 'white',
    // shadowOffset: { width: 10, height: 2 },
    // shadowOpacity: 0.1,
    // shadowRadius: 2,
    
  },

  channelCircle: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: 44,
    height: 44,
    borderWidth: .2,
    borderColor: 'white',
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
    color: 'white',
    zIndex: 1,
    borderTopWidth: .3,
    borderTopColor: 'rgba(255, 255, 255, 0.5)',
    backgroundColor: '#141414',
  },

  bottomNavItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
