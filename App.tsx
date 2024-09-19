// App.js
import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {Provider, useDispatch} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import TutorialScreen from './src/screens/auth/tutorialScreen';
import StartScreen from './src/screens/auth/startScreen';
import LoginScreen from './src/screens/auth/loginScreen';
import {NavigationCheck} from './src/navigator';
import store from './src/redux/store';
// import { NavigationCheck } from './src/navigator';

const App = () => {
  useEffect(() => {
    SplashScreen.hide(); // Hide the splash screen when the app is ready
  }, []);

  return (
  <Provider store={store}>
    <NavigationCheck />
  </Provider>
  )
};

export default App;
