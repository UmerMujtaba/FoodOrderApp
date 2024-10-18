
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { requestCameraPermission } from '../permissions/permissions';
import { Alert, Linking } from 'react-native';

// Function to open the camera
export const openCamera = async (setImagePath) => {
    const permission = await requestCameraPermission();

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

// Function to open the gallery
export const openGallery = (setImagePath) => {
    launchImageLibrary(
        {
            mediaType: 'photo',
            includeBase64: false,
        },
        (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.error('ImagePicker Error: ', response.error);
            } else {
                const uri = response.assets[0].uri;
                setImagePath(uri); // Set the selected image path
            }
        }
    );
};