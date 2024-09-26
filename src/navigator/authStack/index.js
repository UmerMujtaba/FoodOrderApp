
// authStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TutorialScreen from '../../screens/auth/tutorialScreen';
import StartScreen from '../../screens/auth/startScreen';
import LoginScreen from '../../screens/auth/loginScreen';
import Register from '../../screens/auth/signUpScreen';
import ConfirmationScreen from '../../screens/auth/confimationScreen';
import { ScreenNames } from '../../constants/string';
const AuthStack = createNativeStackNavigator();


const Auth = () => {
  return (
    <AuthStack.Navigator initialRouteName={ScreenNames.Tutorial}>
      <AuthStack.Screen name={ScreenNames.Tutorial} component={TutorialScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name={ScreenNames.Start} component={StartScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name={ScreenNames.Registeration} component={Register} options={{ headerShown: false }} />
      <AuthStack.Screen name={ScreenNames.Login} component={LoginScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name={ScreenNames.Confirmation} component={ConfirmationScreen} options={{ headerShown: false }} />
    </AuthStack.Navigator>
  );
};

export default Auth;