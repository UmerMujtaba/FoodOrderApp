import React, {useEffect} from 'react';
import {Provider} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import {Alert} from 'react-native';
import {NavigationCheck} from './src/navigator';
import {useColorScheme} from 'react-native';
import store from './src/redux/store';
import {supabase} from './src/utils/supabase'; // Supabase client
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import messaging from '@react-native-firebase/messaging';
import {requestUserPermission} from './src/utils/helper/firebaseServies';
import notifiee, {AndroidImportance, EventType} from '@notifee/react-native';

const App = () => {
  const scheme = useColorScheme();
  //const {joinChannel} = useInitializeAgora(); // Agora hook for joining the channel

 


  useEffect(() => {
    SplashScreen.hide();

    //Subscribe to call invitations in Supabase
  });

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      const {title, body} = remoteMessage.notification;

      // Handle the notification here
      console.log('🚀 ~ Notification ~ title, body:', title, body);

      displayNotification(title, body);
    });

    return unsubscribe; // Return the unsubscribe function for cleanup
  }, []);

  const displayNotification = async (title, body) => {
    await notifiee.requestPermission();

    const channelId = await notifiee.createChannel({
      id: 'default',
      name: 'Default Channel',
      vibration: true,
      importance: AndroidImportance.HIGH,
      vibrationPattern: [300, 500],
    });

    await notifiee.displayNotification({
      title: title,
      body: body,
      //sound: "ringtone.mp3",
      android: {
        channelId,
        importance: AndroidImportance.HIGH,
        pressAction: {
          id: 'default',
        },
      },
    });
  };

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <NavigationCheck />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
