import { View, ActivityIndicator, Text, Image, StyleSheet } from 'react-native';
import { logoutUser } from '../../../services/authServices';
import React, { useState } from 'react';
import { useNavigation, useTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigateReset } from '../../../navigator/navigationRef';
import { images } from '../../../assets/images';
import fonts from '../../../constants/fonts';
import ProfileMenuTile from '../../../components/profileMenuTile';
import styles from './styles';



const ProfileScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
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
    setLoading(true); // Start loading

    const { error } = await logoutUser(); // Call the logout function

    if (error) {
      setLoading(false); // Stop loading if there's an error
      setErrorMessage(error.message); // Show error message on logout failure
    } else {
      await AsyncStorage.removeItem('session'); // Clear session
      console.log('Logout successful');
      navigateReset('AuthStack', { screen: 'Login' }); // Navigate to login screen
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.avatar(colors)}>
        <Image source={images.profileIcon} style={styles.imgStyle} />
      </View>

      <Text style={styles.name(colors)}>Joseph</Text>

      <View style={styles.body}>
        <ProfileMenuTile userIcon={images.userIcon} name='Account' />
        <ProfileMenuTile userIcon={images.notificationIcon2} name='Notifications' />
        <ProfileMenuTile userIcon={images.settingIcon} name='Settings' />
        <ProfileMenuTile userIcon={images.helpIcon} name='Help' />

        <View style={{}}>
          {errorMessage ? (
            <Text style={{ color: 'red', marginBottom: 10 }}>{errorMessage}</Text>
          ) : null}

          <ProfileMenuTile
            userIcon={images.logoutIcon}
            name={loading ? 'Logging Out...' : 'Logout'}
            onPress={!loading ? logout : null} // Disable the button while loading
          />
        </View>

        <ProfileMenuTile userIcon={images.tokenIcon} name='Get Token' onPress={getStoredToken} />
      </View>
    </View>
  );
};



export default ProfileScreen;

