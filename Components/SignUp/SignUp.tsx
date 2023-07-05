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
      navigation.navigate('login');

      Toast.show('Account Created', {
        duration: Toast.durations.LONG,
        backgroundColor: 'green',
        position: 385,
      });
    } catch (e) {
      Toast.show(`${e}`, {
        duration: Toast.durations.LONG,
        backgroundColor: 'red',
        position: 385,
      });
    }
  };

  return (
    // <ScrollView>

    <View style={SignUpStyles.Container}>
      <View style={SignUpStyles.inputsContainer}>
        {/* <Text style={SignUpStyles.header}>Sign Up</Text> */}
        <Text>Email</Text>
        <TextInput
          style={SignUpStyles.inputs}
          onChangeText={setEmail}
          value={email}
          keyboardType="email-address"
          // placeholder="Email"
        />
        <Text>Name</Text>
        <TextInput
          style={SignUpStyles.inputs}
          value={name}
          onChangeText={setName}
          // placeholder="Name"
        />
        <Text>Password</Text>
        <TextInput
          style={SignUpStyles.inputs}
          value={password}
          onChangeText={setPassword}
          // placeholder="Password"
        />
        <Text>Confirm Password</Text>
        <TextInput
          style={SignUpStyles.inputs}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          returnKeyType="done"
          // placeholder="Confirm Password"
        />
        <TouchableOpacity style={SignUpStyles.submit} onPress={handleSignUp}>
          <Text style={{ color: 'white' }}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
    // </ScrollView>
  );
};
