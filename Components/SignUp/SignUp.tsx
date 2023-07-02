import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SignUpStyles } from './SignUp.styles';
import { createUser } from '../../Api/create-user';
import { getUsers } from '../../Api/get-users';

export const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');



  const handleSignUp = async () => {
    await createUser({ name, email, password })
    .catch((error) => console.log(error));
  };

  return (
    <View style={SignUpStyles.Container}>
      <View style={SignUpStyles.inputsContainer}>
        <Text style={SignUpStyles.header}>Sign Up</Text>
        <TextInput
          style={SignUpStyles.inputs}
          onChangeText={setEmail}
          placeholder="Email"
        />
        <TextInput
          style={SignUpStyles.inputs}
          onChangeText={setName}
          placeholder="Name"
        />
        <TextInput
          style={SignUpStyles.inputs}
          onChangeText={setPassword}
          placeholder="Password"
        />
        <TextInput
          style={SignUpStyles.inputs}
          onChangeText={setConfirmPassword}
          placeholder="Confirm Password"
        />
        <TouchableOpacity style={SignUpStyles.submit} onPress={handleSignUp}>
        {/* <TouchableOpacity style={SignUpStyles.submit} onPress={getUsers}> */}
          <Text style={{ color: 'white' }}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
