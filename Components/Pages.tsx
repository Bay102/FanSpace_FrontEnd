import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './Home';
import { Login } from './LogIn';
import { NavigationProvider } from '../Providers/NavigationProvider';
const Stack = createNativeStackNavigator();

//! Ask Jon about if everything component in home and login are considered
//! "children" and has access too everything here

export const Pages = () => {
  return (
    <>
      <NavigationContainer>
        <NavigationProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: 'FanApp', headerShown: false }}
            />
            <Stack.Screen
              name="LogIn"
              component={Login}
              options={{ title: 'Login' }}
            />
          </Stack.Navigator>
        </NavigationProvider>
      </NavigationContainer>
    </>
  );
};
