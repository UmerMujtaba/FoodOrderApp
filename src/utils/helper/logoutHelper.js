import AsyncStorage from "@react-native-async-storage/async-storage";
import { logoutUser } from "../../services/authServices";
import { supabase } from "../supabase";
import { navigateReset } from "../../navigator/navigationRef";



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
        await AsyncStorage.removeItem('active_email'); // Clear session
        await AsyncStorage.removeItem('email'); // Clear session
        //await AsyncStorage.clear(); // Clear session
        console.log('Logout successful');
        navigateReset('AuthStack', { screen: 'Login' }); // Navigate to login screen
    }
};

export const fetchUserData = async (setUsername, setImagePath, setFetchLoading) => {
    try {
        setFetchLoading(true); // Set loading to true at the start

        const sessionString = await AsyncStorage.getItem('session');
        if (sessionString) {
            const session = JSON.parse(sessionString);
            const savedEmail = session.user?.email;

            console.log("🚀 ~ checkSession ~ email:", savedEmail);

            // Store active email in AsyncStorage
            await AsyncStorage.setItem('active_email', savedEmail);

            if (savedEmail) {
                const { data, error } = await supabase
                    .from('registered_user')
                    .select('*')
                    .eq('email', savedEmail)
                    .single();

                if (error) {
                    console.error('Error fetching user data:', error.message);
                } else {
                    console.log('Fetched user data:', data);
                    setUsername(data?.username || '');
                    setImagePath(data?.imagePath || '');
                }
            } else {
                console.warn('No saved email found.');
            }
        } else {
            console.warn('No session string found.');
        }
    } catch (err) {
        console.error('Error checking session:', err);
    } finally {
        setFetchLoading(false); // Ensure loading is set to false at the end
    }
};