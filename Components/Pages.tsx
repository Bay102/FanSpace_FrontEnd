import React from 'react';
import { Home } from './Home';
import { Login } from './Login/LogIn';
import { SignUp } from './SignUp/SignUp';
import { NavigationProvider } from '../Providers/NavigationProvider';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from '../Providers/AuthProvider';
import { UserProvider } from '../Providers/UserProvider';

const Stack = createNativeStackNavigator();

export const Pages = () => {
  return (
    <>
      <NavigationProvider>
        <AuthProvider>
          <UserProvider>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen
                  name="Home"
                  component={Home}
                  options={{ title: 'FanApp', headerShown: false }}
                />
                <Stack.Screen
                  name="login"
                  component={Login}
                  options={{ title: 'Login' }}
                />
                <Stack.Screen name="SignUp" component={SignUp} />
              </Stack.Navigator>
            </NavigationContainer>
          </UserProvider>
        </AuthProvider>
      </NavigationProvider>
    </>
  );
};
