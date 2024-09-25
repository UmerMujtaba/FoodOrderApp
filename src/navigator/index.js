import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from './authStack';
import Bottom from './buttomStack';
import { NavigationContainer } from '@react-navigation/native';
import { lightTheme, darkTheme } from '../theme/themes';
import { useColorScheme } from 'react-native';

const NavigationStack = createNativeStackNavigator();

export const NavigationCheck = ({ session }) => {
  const scheme = useColorScheme();

  return (
    <NavigationContainer theme={scheme === 'dark' ? darkTheme : lightTheme}>
      <NavigationStack.Navigator initialRouteName={session ? 'BottomStack' : 'AuthStack'}>
        <NavigationStack.Screen name="AuthStack" component={Auth} options={{ headerShown: false }} />
        <NavigationStack.Screen name="BottomStack" component={Bottom} options={{ headerShown: false }} />
      </NavigationStack.Navigator>
    </NavigationContainer>
  );
};
