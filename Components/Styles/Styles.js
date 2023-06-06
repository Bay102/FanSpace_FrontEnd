import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  HomeContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height + 10,
    backgroundColor: 'black',
    borderWidth: 2,
    // borderColor: 'white',
  },

  PopOutNav: {
    backgroundColor: 'grey',
    // backgroundColor: '#CCA154',
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'relative',
    height: Dimensions.get('window').height,
    // top: 35,
    // left: 100,
  },

  popOutNavItemCircle: {
    width: 50,
    height: 50,
    borderWidth: 2,
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
    alignItems: 'flex-start',
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
    height: 70,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'grey',
    color: 'white',
  },

  bottomNavItemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15
  }
});
