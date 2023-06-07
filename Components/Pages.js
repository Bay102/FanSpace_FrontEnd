import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './Home';
import { Login } from './LogIn';
import { NavigationProvider } from '../Providers/NavigationProvider';
import { BottomNav } from './BottomNav';
const Stack = createNativeStackNavigator();

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
