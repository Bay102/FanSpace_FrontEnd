import React from 'react';
import {
  Button,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import { View } from 'react-native-animatable';
import { styles } from '../Styles';
import { LoginStyles } from './Login.styles';

const handleLogin = () => {
  ('');
};

export const Login = ({ navigation }: any) => {
  return (
    <View style={LoginStyles.loginContainer}>
      <View style={LoginStyles.inputsContainer}>
        <Text style={LoginStyles.signInText}>Sign In</Text>
        <TextInput
          style={{
            width: 200,
            height: 40,
            marginBottom: 10,
            borderRadius: 5,
            borderWidth: 1,
          }}
          // onChangeText={''}
          // value={''}
          placeholder="Email"
        />
        <TextInput
          style={{
            width: 200,
            height: 40,
            borderRadius: 5,
            borderWidth: 1,
          }}
          // onChangeText={null}
          // value={null}
          placeholder="Password"
        />
        <TouchableOpacity style={LoginStyles.submit} onPress={handleLogin}>
          <Text style={{ color: 'white' }}>Login</Text>
        </TouchableOpacity>
        <Text>or</Text>
        <TouchableOpacity
          style={LoginStyles.submit}
          onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={{ color: 'white' }}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
