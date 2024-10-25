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
import { StripeProvider } from '@stripe/stripe-react-native';



const PUBLISHABLE_KEY = 'pk_test_51QAq8RK1kXItCSo2ahkx6MQj2Q85q4MuHbdR2wVIgTCJcOQWuvUFDfzYm327S6u5dF8xCBGDoiB6SIWeJJf5Ims800JZIYR1pf';

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
       <StripeProvider publishableKey={PUBLISHABLE_KEY}>
      <Provider store={store}>
        <NavigationCheck />
      </Provider>
      </StripeProvider>
    </GestureHandlerRootView>
  );
};

export default App;
