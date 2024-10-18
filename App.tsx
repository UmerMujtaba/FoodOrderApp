import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {Alert, Linking} from 'react-native';
import {NavigationCheck} from './src/navigator';
import {useColorScheme} from 'react-native';
import store from './src/redux/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import messaging from '@react-native-firebase/messaging';
import { displayNotification } from './src/utils/helper/notifierHelper';

const App = () => {
  const scheme = useColorScheme();
  

  useEffect(() => {
    SplashScreen.hide(); // Hide splash screen on app load

    // Handle remote message notifications
    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      const { title, body } = remoteMessage.notification;

      // Display notification using the helper function
      displayNotification(title, body);
    });

    return unsubscribe; // Cleanup the subscription
  }, []);
 

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <NavigationCheck />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
