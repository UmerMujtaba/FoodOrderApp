import AsyncStorage from "@react-native-async-storage/async-storage";
import { logoutUser } from "../../services/authServices";
import { supabase } from "../supabase";
import { navigateReset } from "../../navigator/navigationRef";
import { url } from "../../constants/key";



export const getStoredToken = async () => {
    try {
        const token = await AsyncStorage.getItem('access_token'); // Retrieve access token
        if (token !== null) {
            // Token exists
            console.log("🚀 ~ Retrieved ~ token:", token)
            return token;
        } else {
            // Token doesn't exist
            console.log('No token found');
            return null;
        }
    } catch (error) {
        console.error('Error retrieving token from AsyncStorage:', error);
        return null;
    }
};

export const logout = async (setLogoutLoading, setErrorMessage) => {
    setLogoutLoading(true); // Start loading for logout

    const { error: logoutError } = await logoutUser(); // Call the logout function

    if (logoutError) {
        setLogoutLoading(false); // Stop loading if there's an error
        setErrorMessage(logoutError.message); // Show error message on logout failure
    } else {
        await AsyncStorage.removeItem('session'); // Clear session
        //await AsyncStorage.removeItem('active_email'); // Clear session
        await AsyncStorage.removeItem('email'); // Clear session
        //await AsyncStorage.clear(); // Clear session
        console.log('Logout successful');
        navigateReset('AuthStack', { screen: 'Login' }); // Navigate to login screen
    }
};

export const fetchUserName = async (setUsername, setFetchLoading) => {
    try {
        setFetchLoading(true);
        const sessionEmail = await AsyncStorage.getItem('active_email');
        console.log("🚀 ~ fetchUserName ~ sessionEmail:", sessionEmail)

        if (sessionEmail) {
            const { data, error } = await supabase
                .from('registered_user')
                .select('username')
                .eq('email', sessionEmail);

            if (error) {
                console.error('Error fetching user data:', error.message);
            } else {
                if (data.length > 0) {
                    const username = data[0]?.username || '';

                    setUsername(username);
                } else {
                    console.warn('No user found for the given email.');
                    setUsername('');
                    setImagePath('');
                }
            }
            return data;

        } else {
            console.warn('🚀 ~ No saved email found.');
        }

    } catch (err) {
        console.error('🚀 ~ Error checking session:', err);
    } finally {
        setFetchLoading(false);
    }
};


export const fetchUserImagePath = async () => {
    const sessionEmail = await AsyncStorage.getItem('active_email');
    try {
        const { data, error } = await supabase
            .from('registered_user')
            .select('imagePath')
            .eq('email', sessionEmail)
            .single();

        if (error) {
            throw error;
        }

        console.log('🚀 ~ Fetched User Image Path from profile screen:', data?.imagePath); // Log the fetched image path
        return data?.imagePath; // Return the image path
    } catch (error) {
        console.error('🚀 ~ Error fetching user image path from profile screen:', error.message);
        return null; // Return null if an error occurs
    }
};



export const constructImageUrl = (imagePath) => {
    const baseUrl = 'https://ypaznvsmysiuhdwhlkux.supabase.co/storage/v1/object/public/userprofileimages/';
    const fullUrl = baseUrl + imagePath; // Ensure the base URL is correct
    console.log('🚀 ~ Constructed Image URL:', fullUrl); // Log the full URL for verification
    return fullUrl;
};