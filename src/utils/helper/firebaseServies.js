import messaging from '@react-native-firebase/messaging';

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