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
    borderColor: 'red',
  },
  headerText: {
    borderWidth: 1,
  },

  buttonsContainer: {
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderColor: 'yellow',
  },

  channels: {
    width: '100%',
    height: 800,
    borderWidth: 2,
    borderColor: 'blue',
  },
});
