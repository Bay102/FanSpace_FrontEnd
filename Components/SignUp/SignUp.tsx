import React, { useState } from 'react';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SignUpStyles } from './SignUp.styles';
import { createUser } from '../../Api/create-user';
import Toast from 'react-native-root-toast';

export const SignUp = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const matchPasswords = password === confirmPassword ? true : false;

  const handleSignUp = async () => {
    try {
      if (!email.includes('@')) {
        throw new Error('Invalid Email Format');
      }
      if (!matchPasswords) {
        throw new Error("Passwords Don't Match");
      }
      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters');
      }

      await createUser({ name, email, password });

      setEmail('');
      setName('');
      setPassword('');
      setConfirmPassword('');
      navigation.navigate('Login');

      Toast.show('Account Created', {
        duration: Toast.durations.LONG,
        backgroundColor: 'green',
        position: 205,
      });
    } catch (e) {
      Toast.show(`${e}`, {
        duration: Toast.durations.LONG,
        backgroundColor: '#f04545',
        position: 130,
        shadowColor: 'black',
        textColor: 'black',
      });
    }
  };

  return (
    // <ScrollView>

    <View style={SignUpStyles.Container}>
      <View style={SignUpStyles.inputsContainer}>
        {/* <Text style={SignUpStyles.header}>Sign Up</Text> */}

        <TextInput
          style={SignUpStyles.inputs}
          onChangeText={setEmail}
          value={email.toLocaleLowerCase()}
          keyboardType="email-address"
          placeholder="Email"
          placeholderTextColor={'gray'}
        />

        <TextInput
          style={SignUpStyles.inputs}
          value={name}
          onChangeText={setName}
          placeholder="Name"
          placeholderTextColor={'gray'}
        />

        <TextInput
          style={SignUpStyles.inputs}
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          placeholderTextColor={'gray'}
        />

        <TextInput
          style={SignUpStyles.inputs}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          returnKeyType="done"
          placeholder="Confirm Password"
          placeholderTextColor={'gray'}
        />
        <TouchableOpacity style={SignUpStyles.submit} onPress={handleSignUp}>
          <Text style={{ color: 'white' }}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
    // </ScrollView>
  );
};
