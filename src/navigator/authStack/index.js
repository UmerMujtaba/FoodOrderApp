
// authStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TutorialScreen from '../../screens/auth/tutorialScreen';
import StartScreen from '../../screens/auth/startScreen';
import LoginScreen from '../../screens/auth/loginScreen';
import Register from '../../screens/auth/signUpScreen';
import ConfirmationScreen from '../../screens/auth/confimationScreen';
import { ScreenNames } from '../../constants/string';
import { LayoutAnimationType } from 'react-native-reanimated';

const AuthStack = createNativeStackNavigator();

const navigationOptions = () => ({
  headerShown: false,
  animationEnabled: true,
  animationTypeForReplace: 'push',
  animation: 'slide_from_right'

});

const Auth = () => {
  return (
    <AuthStack.Navigator initialRouteName={ScreenNames.Tutorial}>
      <AuthStack.Screen name={ScreenNames.Tutorial} component={TutorialScreen} options={navigationOptions} />
      <AuthStack.Screen name={ScreenNames.Start} component={StartScreen} options={navigationOptions} />
      <AuthStack.Screen name={ScreenNames.Registeration} component={Register} options={navigationOptions} />
      <AuthStack.Screen name={ScreenNames.Login} component={LoginScreen} options={navigationOptions} />
      <AuthStack.Screen name={ScreenNames.Confirmation} component={ConfirmationScreen} options={navigationOptions} />

    </AuthStack.Navigator>
  );
};

export default Auth;