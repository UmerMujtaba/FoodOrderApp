import AsyncStorage from "@react-native-async-storage/async-storage";
import { registerUser } from "../../services/authServices";
import { supabase } from "../supabase";
import { ToastAndroid } from "react-native";
import { getFCMToken } from "./firebaseServies";
import { navigate } from "../../navigator/navigationRef";
import { ScreenNames } from "../../constants/string";




//funcs for sign up screen
const saveCredentials = async (email, password, rememberMe) => {
    try {
        if (rememberMe) {
            await AsyncStorage.setItem('email', email);
            await AsyncStorage.setItem('password', password);
            await AsyncStorage.setItem('rememberMe', 'true');
        } else {
            await AsyncStorage.setItem('email', email);
            await AsyncStorage.setItem('password', password);
            await AsyncStorage.setItem('rememberMe', 'false');
        }
    } catch (error) {
        console.error('Error saving credentials:', error);
    }
};

export const handleCheckboxPress = (isChecked,setRememberMe) => {
    setRememberMe(isChecked);
    console.log('Keep me signed in is checked:', isChecked);
};


// const handleCheckboxSecondPress = (isCheckedSecond) => {
//     console.log('Checkbox 2 is checked:', isCheckedSecond);
// };


export const handleRegister = async (setErrorMessage, email, username, phoneNo, password, rememberMe = false) => {
    try {
        const { user, error: registrationError } = await registerUser(email, password);

        // Check if registration failed due to the user already existing
        if (registrationError) {
            if (registrationError.message === 'User already exists') {
                // Show toast if the user already exists
                ToastAndroid.showWithGravity(
                    'User already exists. Please log in.',
                    ToastAndroid.LONG,
                    ToastAndroid.TOP
                );
            } else {
                // Handle other registration errors
                setErrorMessage(registrationError.message);
                console.error('Registration error:', registrationError);
            }
            return; // Exit if there's a registration error
        }

        const fcm_token = await getFCMToken(); // Ensure this function returns the token
        console.log("🚀 ~ handleRegister ~ fcm_token:", fcm_token);

        await AsyncStorage.setItem('fcm_token', fcm_token);

        // Attempt to upsert the user data in Supabase
        const { data, error: upsertError } = await supabase
            .from('registered_user')
            .upsert({
                email: email, // Primary key (unique) for upsert
                username: username, // User's name
                phone_number: phoneNo, // User's phone number
                fcm_token: fcm_token, // FCM token
                remember_me_flag: rememberMe ? true : false,
                updated_at: new Date().toISOString(), // Timestamp for last update
            }, {
                onConflict: ['email'] // Conflict resolution based on email
            });

        if (upsertError) {
            console.error('Error inserting user data:', upsertError);
            ToastAndroid.showWithGravity(
                'Failed to save user data.',
                ToastAndroid.LONG,
                ToastAndroid.TOP
            );
        } else {
            console.log('User data saved successfully during registration!');
            console.log('Registration successful:', user);
            saveCredentials(email, password, rememberMe); // Save credentials locally
            navigate(ScreenNames.Confirmation); // Navigate to the confirmation screen
        }

    } catch (error) {
        // Handle unexpected errors and show toast for existing user
        if (error.message === 'User already exists') {
            ToastAndroid.showWithGravity(
                'User already exists. Please log in.',
                ToastAndroid.LONG,
                ToastAndroid.TOP
            );
        } else {
            console.error('Unexpected error during registration:', error);
            ToastAndroid.showWithGravity(
                'An unexpected error occurred. Please try again.',
                ToastAndroid.LONG,
                ToastAndroid.TOP
            );
            setErrorMessage('An unexpected error occurred. Please try again.');
        }
    }
};