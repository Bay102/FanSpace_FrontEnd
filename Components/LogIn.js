import { Button, Text, TextInput, TouchableHighlight } from 'react-native';
import { View } from 'react-native-animatable';
import { styles } from './Styles/Styles';

export const Login = ({ navigation }) => {
  return (
    <View style={styles.loginContainer}>
      <View style={styles.inputsContainer}>
        <Text style={styles.signInText}>Sign In</Text>
        <TextInput
          style={{
            width: 200,
            height: 40,
            marginBottom: 10,
            borderRadius: 5,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          onChangeText={null}
          value={null}
          placeholder="Username"
        />
        <TextInput
          style={{
            width: 200,
            height: 40,
            borderRadius: 5,
            borderColor: 'gray',
            borderWidth: 1,
          }}
          onChangeText={null}
          value={null}
          placeholder="Password"
        />
      </View>
      {/* <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> */}
    </View>
  );
};
