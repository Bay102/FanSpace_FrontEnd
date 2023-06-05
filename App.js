import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'red' }}>Hello, world!</Text>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={''} style={{ backgroundColor: 'blue', padding: 10 }}>
        <Text style={{ color: 'white' }}>Press Me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    color: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
