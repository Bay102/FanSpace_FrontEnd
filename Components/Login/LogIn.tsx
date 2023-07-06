import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity } from 'react-native';
import { View } from 'react-native-animatable';
import { LoginStyles } from './Login.styles';
import { login } from '../../Api/login';
import { useAuthProvider } from '../../Providers/AuthProvider';
import Toast from 'react-native-root-toast';

export const Login = ({ navigation }: any) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user, setUser } = useAuthProvider();

  const handleLogin = async () => {
    // if (user) { setUser(null) }
    try {
      if (!email|| !password) {
        throw new Error('Inputs Required');
      }

      await login({ email, password })
      .then((user) => setUser(user));

      Toast.show('LogIn Success', {
        duration: Toast.durations.LONG,
        backgroundColor: 'green',
        position: 385,
      });

      navigation.navigate('Home');
    } catch (e) {
      Toast.show(`${e}`, {
        duration: Toast.durations.LONG,
        backgroundColor: 'red',
        position: 190,
      });
    }
  };

  return (
    <View style={LoginStyles.loginContainer}>
      <View style={LoginStyles.inputsContainer}>
        {/* <Text style={LoginStyles.signInText}>Sign In</Text> */}
        <Text>Email:</Text>
        <TextInput
          style={LoginStyles.input}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
        />
        <Text>Password:</Text>
        <TextInput
          style={LoginStyles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          returnKeyType="go"
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
