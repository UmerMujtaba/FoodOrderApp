// NavigationCheck.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from './authStack';
import Buttom from './buttomStack';
import Home from './homeStack';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { useColorScheme } from 'react-native';
import { lightTheme, darkTheme } from '../theme/themes'; // Import themes


const NavigationStack = createNativeStackNavigator();

export const NavigationCheck = () => {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={scheme === 'dark' ? darkTheme : lightTheme}>
      <NavigationStack.Navigator initialRouteName="AuthStack">
        <NavigationStack.Screen name="AuthStack" component={Auth} options={{ headerShown: false }} />
        <NavigationStack.Screen name="BottomStack" component={Buttom} options={{ headerShown: false }} />
        <NavigationStack.Screen name="HomeStack" component={Home} options={{ headerShown: false }} />

      </NavigationStack.Navigator>
    </NavigationContainer>
  );
};