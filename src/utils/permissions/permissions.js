
import { PermissionsAndroid } from 'react-native';
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


  export const requestAudioPermission = async () => {
    try {
      console.log('Requesting audio permission...');  // Add this line to check
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Audio permission granted');
      } else {
        console.log('Audio permission denied');
      }
    } catch (err) {
      console.warn('Error requesting permission:', err);
    }
  };
  

export  const requestCameraPermission = async () => {
  try {
      const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
              title: 'Camera Permission',
              message: 'This app needs access to your camera to take photos.',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
          }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          return true; // Permission granted
      } else if (granted === PermissionsAndroid.RESULTS.DENIED) {
          return false; // Permission denied, but can still ask
      } else if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
          return 'blocked'; // Permission permanently denied
      }
  } catch (err) {
      console.warn(err);
      return false;
  }
};


export  const requestNotificationPermission = async () => {
  try {
      const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
              title: 'Camera Permission',
              message: 'This app needs access to your camera to take photos.',
              buttonNeutral: 'Ask Me Later',
              buttonNegative: 'Cancel',
              buttonPositive: 'OK',
          }
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          return true; // Permission granted
      } else if (granted === PermissionsAndroid.RESULTS.DENIED) {
          return false; // Permission denied, but can still ask
      } else if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
          return 'blocked'; // Permission permanently denied
      }
  } catch (err) {
      console.warn(err);
      return false;
  }
};


export const openCamera = async (setImagePath) => {
 

  if (permission === true) {
      // Launch the camera
      launchCamera(
          {
              mediaType: 'photo',
              includeBase64: false,
              quality: 1,
          },
          (response) => {
              console.log('Camera Response:', response);

              if (response && !response.didCancel && !response.error) {
                  if (response.assets && response.assets.length > 0) {
                      const uri = response.assets[0].uri;
                      setImagePath(uri); // Set the captured image path
                  } else {
                      console.error('No assets found in camera response:', response);
                  }
              } else if (response.didCancel) {
                  console.log('User cancelled camera');
              } else if (response.error) {
                  console.error('Camera Error: ', response.error);
              }
          }
      );
  } else if (permission === 'blocked') {
      // Show alert to go to settings after second rejection
      Alert.alert(
          'Camera Permission Required',
          'You have denied camera permission. Please go to settings and allow camera access to continue.',
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
      console.log('Camera permission denied');
  }
};