/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App'; // Ensure this path is correct
import { name as appName } from './app.json';
import 'react-native-reanimated';
import { enableLayoutAnimations } from 'react-native-reanimated';
import messaging from '@react-native-firebase/messaging'; // Import messaging

// Enable reanimated layout animations
enableLayoutAnimations(true);
// Register background handler
messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });
AppRegistry.registerComponent(appName,   
 () => App); 