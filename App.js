import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Calculator from './app/pages/calculator';
import HomePage from './app/pages/home';
import UserList from './app/pages/user-list';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomePage}
        />
        <Stack.Screen
          name="Calculator"
          component={Calculator}
        />
        <Stack.Screen name="Users" component={UserList} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}

