import { Dimensions, StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  HomeContainer: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height + 10,
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: 'black',
  },

  PopOutNav: {
    backgroundColor: '#CCA154',
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    height: Dimensions.get('window').height ,
    top: 35,
    left: 0,
  },

  BottomNav: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width,
    height: 70,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'grey',
    zIndex: 1,
  },
 
  popOutNavItemCircle: {
    width: 50,
    height: 50,
    borderWidth: 2,
    borderRadius: 25,
    backgroundColor: 'white',
    marginTop: 10,
    marginBottom: 10,
  }
});
