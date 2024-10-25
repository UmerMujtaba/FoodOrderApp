import { ToastAndroid } from "react-native";
import { navigate, navigateReset } from "../../navigator/navigationRef";
import { ScreenNames } from "../../constants/string";
import { supabase } from "../supabase";
//handle forgot password function for screen forgot password screen

export const handleForgotPassword = async (setLoading, email) => {
    if (!email) {
        ToastAndroid.show('Please enter your email', ToastAndroid.SHORT);
        return;
    }

    setLoading(true);

    try {
        const { error } = await supabase.auth.resetPasswordForEmail(email);

        if (error) {
            ToastAndroid.show(error.message, ToastAndroid.SHORT);
        } else {
            ToastAndroid.show('Check your email for the password reset link!', ToastAndroid.SHORT);
            // Optionally navigate to another screen after sending the email
            navigate(ScreenNames.Login) // Adjust this if you have a different navigation flow
        }
    } catch (error) {
        console.error('Forgot password error:', error);
        ToastAndroid.show('Something went wrong. Please try again.', ToastAndroid.SHORT);
    } finally {
        setLoading(false);
    }
};





//send OTP, Verify OTP, timer, phone formatter for screen phone screen

export const formatPhoneNumber = (phone) => {
    return phone.slice(0, 8) + '****';
};

// Function to send OTP to user's phone
export const sendOtp = async (setOtpSent, setTimeLeft, setTimerActive,phoneNumber) => {
    try {
        const { data, error } = await supabase.auth.signInWithOtp({
            phone: phoneNumber,
        });

        if (error) {
            ToastAndroid.show('Failed to send OTP.', ToastAndroid.SHORT);
            console.error(error);
        } else {
            ToastAndroid.show('OTP sent! Please check your phone.', ToastAndroid.SHORT);
            setOtpSent(true);
            setTimeLeft(120); // Reset the timer
            setTimerActive(true); // Restart the timer
        }
    } catch (error) {
        console.error('Error sending OTP:', error);
        ToastAndroid.show('Error sending OTP.', ToastAndroid.SHORT);
    }
};

// Function to format the timer in MM:SS format
export const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};



// Function to verify the OTP
export const verifyOtp = async (setSession,value,phoneNumber) => {
    const completeOtp = value; // Directly use the value state for the OTP
    try {
        const { data: { session }, error } = await supabase.auth.verifyOtp({
            phone: phoneNumber,
            token: completeOtp,
            type: 'sms',
        });

        if (error) {
            ToastAndroid.show('Invalid OTP. Please try again.', ToastAndroid.SHORT);
            console.error(error);
        } else {
            ToastAndroid.show('Logged in successfully!', ToastAndroid.SHORT);
            navigateReset('BottomStack', { screen: ScreenNames.Home });
            setSession(session);
        }
    } catch (error) {
        console.error('Error verifying OTP:', error);
        ToastAndroid.show('Error during OTP verification.', ToastAndroid.SHORT);
    }
};



//fun to fetch order history for order History Screen
export const fetchOrderHistory = async (setOrderHistory,setLoading) => {
    const { data: sessionData, error: sessionError } = await supabase.auth.getSession();

    if (sessionError || !sessionData?.session) {
        console.error("🚀 ~ Error fetching session or no session available:", sessionError);

        setTimeout(() => {
            navigateReset('AuthStack', { screen: ScreenNames.Login });
        }, 2000);     
        return;
    }
    setLoading(true);
    try {
        const { data: userData, error: userError } = await supabase.auth.getUser();

        if (userError || !userData?.user) {
            console.error("🚀 ~ Error fetching user:", userError);
            return;
        }

        const userId = userData.user.id;

        // Fetch order history for this specific user
        const { data: orders, error } = await supabase
            .from('order_history')
            .select('*')
            .eq('user_id', userId);

        if (error) {
            console.error("🚀 ~Error fetching order history:", error.message);
        } else {
            console.log("🚀 ~ HistoryOrderScreen ~ orderHistory:", orders)
            setOrderHistory(orders);
        }
    } catch (err) {
        console.error("🚀 ~ Unexpected error during order history fetch:", err);
    }
    setLoading(false);
};


