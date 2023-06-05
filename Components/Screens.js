import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './Home';
import { Login } from './LogIn';
const Stack = createNativeStackNavigator();

export const Screens = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: 'FanApp' , headerShown: false}}
          />
          <Stack.Screen
            name="LogIn"
            component={Login}
            options={{ title: 'Login' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
