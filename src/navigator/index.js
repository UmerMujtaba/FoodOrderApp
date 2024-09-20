// NavigationCheck.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Auth from './authStack';
import Buttom from './buttomStack';
import Home from './homeStack';


const NavigationStack = createNativeStackNavigator();

export const NavigationCheck = () => {
  return (
    <NavigationContainer>
      <NavigationStack.Navigator initialRouteName="AuthStack">
        <NavigationStack.Screen name="AuthStack" component={Auth} options={{ headerShown: false }} />
        <NavigationStack.Screen name="BottomStack" component={Buttom} options={{ headerShown: false }} />
        <NavigationStack.Screen name="HomeStack" component={Home} options={{ headerShown: false }} />

      </NavigationStack.Navigator>
    </NavigationContainer>
  );
};