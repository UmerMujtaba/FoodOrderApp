
// App.js
import React, { useEffect } from 'react';
import { Text } from 'react-native';

import SplashScreen from 'react-native-splash-screen';
import TutorialScreen from './src/screens/auth/tutorialScreen';
// import { NavigationCheck } from './src/navigator';

const App = () => {
  useEffect(() => {
    SplashScreen.hide(); // Hide the splash screen when the app is ready
  }, []);

  return (
   
   <TutorialScreen></TutorialScreen>
  );
};

export default App;
