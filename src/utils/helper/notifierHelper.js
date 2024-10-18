// utils/helper/notifierHelper.js

import { Alert, Linking } from 'react-native';
import notifiee, { AndroidImportance } from '@notifee/react-native';
import { requestNotificationPermission } from '../permissions/permissions';

// Function to display notification
export const displayNotification = async (title, body) => {
  const permission = await requestNotificationPermission();

  if (permission === true) {
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
      android: {
        channelId,
        importance: AndroidImportance.HIGH,
        pressAction: {
          id: 'default',
        },
      },
    });
  } else if (permission === 'blocked') {
    // Show alert to go to settings after second rejection
    Alert.alert(
      'Notifications Permission Required',
      'You have denied notification permission. Please go to settings and allow notifications to continue.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Open Settings',
          onPress: () => Linking.openSettings(),
        },
      ],
      { cancelable: false }
    );
  } else {
    console.log('Notifications permission denied');
  }
};
