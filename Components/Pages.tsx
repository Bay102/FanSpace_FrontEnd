import React from 'react';
import { Home } from './Home';
import { Login } from './Login/LogIn';
import { SignUp } from './SignUp/SignUp';
import { NavigationProvider } from '../Providers/NavigationProvider';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthProvider } from '../Providers/AuthProvider';
import { UserProvider } from '../Providers/UserProvider';
import { ChannelsProvider } from '../Providers/ChannelsProvider';

const Stack = createNativeStackNavigator();

export const Pages = () => {
  return (
    <>
      <NavigationProvider>
        <AuthProvider>
          <UserProvider>
            <ChannelsProvider>

              <NavigationContainer>
                <Stack.Navigator>
                  <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ title: 'FanApp', headerShown: false }}
                  />
                  <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ title: 'Login' }}
                  />
                  <Stack.Screen name="SignUp" component={SignUp} />
                </Stack.Navigator>
              </NavigationContainer>
              
            </ChannelsProvider>
          </UserProvider>
        </AuthProvider>
      </NavigationProvider>
    </>
  );
};
