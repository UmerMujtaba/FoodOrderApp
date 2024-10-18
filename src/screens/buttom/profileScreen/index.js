import { View, ActivityIndicator, Text, Image, StyleSheet } from 'react-native';
import { logoutUser } from '../../../services/authServices';
import React, { useEffect, useState } from 'react';
import { useFocusEffect, useNavigation, useTheme } from '@react-navigation/native';
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
import { fetchUserData, getStoredToken, logout } from '../../../utils/helper/logoutHelper';



const ProfileScreen = () => {

  const [errorMessage, setErrorMessage] = useState('');
  const [is_logged_in, set_is_logged_in] = useState(false);
  const [activeEmail, setActiveEmail] = useState('');
  const [username, setUsername] = useState('Joseph');
  const [imagePath, setImagePath] = useState('');
  const [fetchLoading, setFetchLoading] = useState(true); // Loading state for fetching user data
  const [logoutLoading, setLogoutLoading] = useState(false);
  const { colors } = useTheme();



  useFocusEffect(
    React.useCallback(() => {
      setFetchLoading(true); // Reset loading state before fetching data
      fetchUserData(setUsername, setImagePath, setFetchLoading); // Fetch user data every time the screen comes into focus
    }, [])
  );



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
              source={imagePath ? { uri: imagePath } : images.manImage} // If imagePath exists, use it; else, use manIcon
              style={styles.imgStyle}
            />
          </View>
          <Text style={styles.name(colors)}>{username}</Text>
        </>
      )}
      {/* <Text style={styles.name(colors)}>{activeEmail}</Text> */}

      <View style={styles.body}>
        <ProfileMenuTile userIcon={images.userIcon} name='Account' onPress={() => navigate(ScreenNames.UserScreen)} />
        <ProfileMenuTile userIcon={images.notificationIcon2} name='Notifications' />
        <ProfileMenuTile userIcon={images.promotionIcon} name='Promotions' onPress={() => navigate(ScreenNames.PromotionScreen)} />
        <ProfileMenuTile userIcon={images.helpIcon} name='Help'  onPress={() => navigate(ScreenNames.MapScreen)}/>

        {/* <ProfileMenuTile userIcon={images.callIcon} name='Call' onPress={() => navigate(ScreenNames.CallScreen)} /> */}

        <View style={{}}>
          {errorMessage ? (
            <Text style={{ color: 'red', marginBottom: 10 }}>{errorMessage}</Text>
          ) : null}

          <ProfileMenuTile
            userIcon={images.logoutIcon}
            name={logoutLoading ? 'Logging Out...' : 'Logout'}
            onPress={!logoutLoading ? () => logout(setLogoutLoading, setErrorMessage) : null}
            style={styles.button}
            disabled={logoutLoading}  // Disable button during loading
          />

        </View>

        <ProfileMenuTile userIcon={images.tokenIcon} name='Get Token' onPress={getStoredToken} />
      </View>
    </View>
  );
};



export default ProfileScreen;

