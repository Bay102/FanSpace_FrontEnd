import { StyleSheet } from 'react-native';

export const FanAppStyles = StyleSheet.create({
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
    borderWidth: 1,
    // borderColor: 'red',
  },
  headerText: {
    fontFamily: 'ABeeZee_400Regular',
    fontSize: 30,
  },

  buttonsContainer: {
    width: '100%',
    height: 100,
    borderWidth: 1,
    // borderColor: 'yellow',
  },

  channelsContainer: {
    width: '100%',
    height: 800,
    borderWidth: 2,
    // borderColor: 'blue',
    alignItems: 'center',
    // justifyContent: 'flex-start'
  },
});
