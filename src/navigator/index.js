import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from './authStack';
import Bottom from './buttomStack';
import { NavigationContainer } from '@react-navigation/native';
import { lightTheme, darkTheme } from '../theme/themes';
import { useColorScheme } from 'react-native';
import { navigationRef } from './navigationRef';
import { ScreenNames } from '../constants/string';

const NavigationStack = createNativeStackNavigator();

export const NavigationCheck = ({ session }) => {

  const scheme = useColorScheme();
 const navigationOptions = () => ({
  headerShown: false,
  animationEnabled: true,
  animationTypeForReplace: 'push',
        animation: 'slide_from_right'
  
});

  return (
    <NavigationContainer theme={scheme === 'dark' ? darkTheme : lightTheme } ref={ navigationRef }>
      <NavigationStack.Navigator initialRouteName={session ? `${ScreenNames.BottomStack}` : `${ScreenNames.AuthStack}`}>
        <NavigationStack.Screen name={ScreenNames.AuthStack} component={Auth} options={navigationOptions} />
        <NavigationStack.Screen name={ScreenNames.BottomStack} component={Bottom} options={navigationOptions } />
      </NavigationStack.Navigator>
    </NavigationContainer>
  );
};
