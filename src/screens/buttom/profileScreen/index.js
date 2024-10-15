import { View, ActivityIndicator, Text, Image, StyleSheet } from 'react-native';
import { logoutUser } from '../../../services/authServices';
import React, { useEffect, useState } from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate, navigateReset } from '../../../navigator/navigationRef';
import { images } from '../../../assets/images';
import fonts from '../../../constants/fonts';
import ProfileMenuTile from '../../../components/profileMenuTile';
import styles from './styles';
import { ScreenNames } from '../../../constants/string';
import messaging from '@react-native-firebase/messaging';
import { supabase } from '../../../utils/supabase';
import { useSelector } from 'react-redux';



const ProfileScreen = () => {

  const [errorMessage, setErrorMessage] = useState('');
  const [is_logged_in, set_is_logged_in] = useState(false);
  const [activeEmail, setActiveEmail] = useState('');
  const [username, setUsername] = useState('Joseph');
  const [imagePath, setImagePath] = useState('');
  const [fetchLoading, setFetchLoading] = useState(true); // Loading state for fetching user data
  const [logoutLoading, setLogoutLoading] = useState(false);
  const { colors } = useTheme();


  const getStoredToken = async () => {
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

  const logout = async () => {
    setLogoutLoading(true); // Start loading for logout

    const { error: logoutError } = await logoutUser(); // Call the logout function

    if (logoutError) {
      setLogoutLoading(false); // Stop loading if there's an error
      setErrorMessage(logoutError.message); // Show error message on logout failure
    } else {
      await AsyncStorage.removeItem('session'); // Clear session
      console.log('Logout successful');
      navigateReset('AuthStack', { screen: 'Login' }); // Navigate to login screen
    }
  };


  useEffect(() => {
    const checkSession = async () => {
      try {
        const active = await AsyncStorage.getItem('active_email');
        console.log("🚀 ~ checkSession ~ activeEmail:", active);

        if (active) {
          // Fetch user data from 'registered_user' using the email
          const { data, error } = await supabase
            .from('registered_user')
            .select('*')  // Fetch all columns
            .eq('email', active)
            .single();

          if (error) {
            console.error('Error fetching user data:', error.message);
          } else {
            console.log('Fetched user data:', data);
            setUsername(data?.username || '');
            setImagePath(data?.imagePath || '');
          }
        }
      } catch (err) {
        console.error('Error checking session:', err);
      } finally {
        setFetchLoading(false); // Hide loader when data is fetched or error occurs
      }
    };

    checkSession();
  }, []);



  return (
    <View style={styles.container}>
      {fetchLoading ? (
        // Show loader while loading
        <ActivityIndicator size="large" color={colors.primary} />
      ) : (
        // Show user data after loading is complete
        <>
          <View style={styles.avatar(colors)}>
            <Image
              source={imagePath ? { uri: imagePath } : images.manIcon} // If imagePath exists, use it; else, use manIcon
              style={styles.imgStyle}
            />
          </View>
          <Text style={styles.name(colors)}>{username}</Text>
        </>
      )}
      {/* <Text style={styles.name(colors)}>{activeEmail}</Text> */}

      <View style={styles.body}>
        <ProfileMenuTile userIcon={images.userIcon} name='Account' />
        <ProfileMenuTile userIcon={images.notificationIcon2} name='Notifications' />
        <ProfileMenuTile userIcon={images.settingIcon} name='Settings' onPress={() => navigate(ScreenNames.UserScreen)} />
        <ProfileMenuTile userIcon={images.helpIcon} name='Help' />

        {/* <ProfileMenuTile userIcon={images.callIcon} name='Call' onPress={() => navigate(ScreenNames.CallScreen)} /> */}

        <View style={{}}>
          {errorMessage ? (
            <Text style={{ color: 'red', marginBottom: 10 }}>{errorMessage}</Text>
          ) : null}

          <ProfileMenuTile
            userIcon={images.logoutIcon}
            name={logoutLoading ? 'Logging Out...' : 'Logout'}
            onPress={!logoutLoading ? logout : null} // Disable the button while loading
          />
        </View>

        <ProfileMenuTile userIcon={images.tokenIcon} name='Get Token' onPress={getStoredToken} />
      </View>
    </View>
  );
};



export default ProfileScreen;

