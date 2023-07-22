import { Dimensions, StyleSheet } from 'react-native';

export const FanAppStyles = StyleSheet.create({
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
    height: 120,
    marginTop: 20,
    // borderColor: 'red',
  },
  headerText: {
    fontFamily: 'ABeeZee_400Regular',
    fontSize: 30,
    marginTop: 12,
  },

  nameText: {
    fontSize: 15,
  },

  channelsContainer: {
    width: '100%',
    height: 100,
    borderWidth: 1,
    // borderColor: 'yellow',
    justifyContent: 'center',
  },

  TBDcontainer: {
    width: '100%',
    height: 800,
    borderWidth: 2,
    // borderColor: 'blue',
    alignItems: 'center',
    // justifyContent: 'flex-start'
  },

  channels: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  channelCircle: {
    width: 70,
    height: 70,
    borderRadius: 100,
    borderWidth: 2,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },

  circleText: {
    textAlign: 'center',
  },
});
