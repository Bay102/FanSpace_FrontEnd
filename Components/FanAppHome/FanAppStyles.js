import { Dimensions, StyleSheet } from 'react-native';

export const FanAppStyles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: 'row',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    // backgroundColor: '#141414',
    borderWidth: 2,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    height: '100%',
    // borderWidth: 2,
    backgroundColor: '#1f2323',
  },

  headerContainer: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%',
    height: 100,
    marginTop: 20,
    // borderColor: 'red',
    // backgroundColor: 'white',
  },

  headerText: {
    fontFamily: 'Roboto_700Bold',
    fontSize: 30,
    marginTop: 12,
    color: 'white',
  },

  beta: {
    fontSize: 15,
    fontStyle: 'italic',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 5,
    padding: 3,
    marginTop: 5,
    color: 'white',
    // borderBottomColor: 'green',
  },

  nameText: {
    fontSize: 15,
  },

  notificationsContainer: {
    flex: 0,
    width: '100%',
    height: 110,
    // borderWidth: .2,
    backgroundColor: '#141414',
    justifyContent: 'center',
  },

  notificationHeader: {
    fontSize: 13,
    fontFamily: 'Roboto_700Bold',
    color: 'white',
    position: 'relative',
    top: -8,
    left: 5,
  },

  TBDcontainer: {
    width: '100%',
    height: 800,
    alignItems: 'center',
  },

  channels: {
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
