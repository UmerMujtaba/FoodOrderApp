// NavigationCheck.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Auth from './authStack';
import Bottom from './buttomStack';

const NavigationStack = createNativeStackNavigator();

export const NavigationCheck = () => {
  return (
    <NavigationContainer>
      <NavigationStack.Navigator initialRouteName="AuthStack">
        <NavigationStack.Screen name="AuthStack" component={Auth} options={{ headerShown: false }} />
        <NavigationStack.Screen name="BottomStack" component={Bottom} options={{ headerShown: false }} />
      </NavigationStack.Navigator>
    </NavigationContainer>
  );
};