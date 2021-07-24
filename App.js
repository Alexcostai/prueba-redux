import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
//Redux

import store from './src/Store';
import { Provider as StoreProvider } from 'react-redux';
//Screens
import Home from './src/components/Home';
import Subjects from './src/components/Subjects';

const Stack = createStackNavigator();

export default function App() {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={Home}
          />
          <Stack.Screen
            name="Subjects"
            component={Subjects}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  )
}
