import 'react-native-gesture-handler';
import * as React from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';

import Welcome from './screens/Welcome';
import GetStarted from './screens/GetStarted';
import SignIn from './screens/SignIn';
import Search from './screens/Search';
import Profile from './screens/Profile';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={Welcome}
      options={{ headerShown:false }} />
      <Stack.Screen name="Get started" component={GetStarted} 
      options={{ headerShown:false }} />
      <Stack.Screen name="Sign in" component={SignIn} 
      options={{ headerShown:false }} />
      <Stack.Screen name="Search" component={Search}
      options={{ headerShown:false }} />
      <Stack.Screen name="Profile" component={Profile}
      options={{ headerShown:false }} />
    </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;

