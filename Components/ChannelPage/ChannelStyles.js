import { Dimensions, StyleSheet } from 'react-native';

export const ChannelStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#2c303b',
    borderWidth: 2,
  },

  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    height: '100%',
    borderWidth: 2,
  },

  headerContainer: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    height: 140,
    borderWidth: 1,
    // borderColor: 'red',
  },
  headerText: {
    // borderWidth: 1,
    fontSize: 44,
    fontFamily: 'Cochin',
    marginTop: 20
  },

  buttonsContainer: {
    width: '100%',
    height: 100,
    borderWidth: 1,
    backgroundColor: 'white',
    // borderColor: 'yellow',
  },

  channels: {
    width: '100%',
    height: 800,
    borderWidth: 2,
    // borderColor: 'blue',
  },
});
