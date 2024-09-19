
// authStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TutorialScreen from '../../screens/auth/tutorialScreen';
import StartScreen from '../../screens/auth/startScreen';
import LoginScreen from '../../screens/auth/loginScreen';

const AuthStack = createNativeStackNavigator();

const Auth = () => {
  return (
    <AuthStack.Navigator initialRouteName="Tutorial">
      <AuthStack.Screen name="Tutorial" component={TutorialScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <AuthStack.Screen name="Start" component={StartScreen} options={{ headerShown: false }} />
    </AuthStack.Navigator>
  );
};

export default Auth;