import messaging from '@react-native-firebase/messaging';

export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log('Authorization status:', authStatus);
    //return getFCMToken();
  }
};

export const getFCMToken = async () => {
  try {
    const token = await messaging().getToken();
   // console.log('FCM Token:', token);
    // Save this token to your backend server for sending notifications
   return token;
  } catch (error) {
    console.log('Error fetching FCM token:', error);

  
  }
};


export const removeFCMToken = async () => {
  try {
    const token = await messaging().deleteToken();
    
    console.log("🚀 ~ removeFCMToken ~ deleteToken:", token)
   // console.log('FCM Token:', token);
    // Save this token to your backend server for sending notifications
   return token;
  } catch (error) {
    console.log('Error fetching FCM token:', error);

  
  }
};