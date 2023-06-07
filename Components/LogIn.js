import { Button, TextInput, TouchableHighlight } from 'react-native';
import { View } from 'react-native-animatable';
import { styles } from './Styles/Styles';

export const Login = ({ navigation }) => {
  return (
    <>
      <View style={styles.loginContainer}>
        <View style={styles.inputsContainer}>
          <TextInput
            style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={null}
            value={null}
            placeholder="Username"
          />
          <TextInput
            style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1 }}
            onChangeText={null}
            value={null}
            placeholder="Password"
          />
        </View>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </>
  );
};
