import { View, ActivityIndicator, Text, Image, StyleSheet, useColorScheme } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useFocusEffect, useNavigation, useTheme } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate, navigateReset } from '../../../navigator/navigationRef';
import { images } from '../../../assets/images';
import ProfileMenuTile from '../../../components/profileMenuTile';
import styles from './styles';
import { ScreenNames } from '../../../constants/string';
import { constructImageUrl, fetchUserData, fetchUserImagePath, fetchUserName, getFullImageUrl, getStoredToken, logout } from '../../../utils/helper/logoutHelper';



const ProfileScreen = () => {

  const [errorMessage, setErrorMessage] = useState('');
  const [username, setUsername] = useState('Joseph');
  const [fetchLoading, setFetchLoading] = useState(true); 
  const [logoutLoading, setLogoutLoading] = useState(false);
  const { colors } = useTheme();
  const { scheme } = useColorScheme();
  const [imageUrl, setImageUrl] = useState(null);

  useFocusEffect(
    React.useCallback(() => {
      setFetchLoading(true); 
      fetchUserName(setUsername, setFetchLoading); 
    }, [])
  );




  useEffect(() => {
    const fetchImage = async () => {
      const sessionEmail = await AsyncStorage.getItem('active_email');
      const imagePath = await fetchUserImagePath(sessionEmail);
      if (imagePath) {
       
        const url = constructImageUrl(imagePath);
        setImageUrl(url); 
      }
    };
    
    fetchImage();
  });



  return (
    <View style={styles.container}>

      
        
          <View style={styles.avatar(colors)}>
            <Image
              source={imageUrl ? { uri: imageUrl } : images.manImage}
              style={styles.imgStyle}
            />
          </View>
          <Text style={styles.name(colors)}>{username}</Text>
        
      


      <View style={styles.body}>
        <ProfileMenuTile userIcon={images.userIcon} name='Account' onPress={() => navigate(ScreenNames.UserScreen)} />
        <ProfileMenuTile userIcon={images.notificationIcon2} name='Notifications' />
        <ProfileMenuTile userIcon={images.promotionIcon} name='Promotions' onPress={() => navigate(ScreenNames.PromotionScreen)} />
        {/* <ProfileMenuTile userIcon={images.helpIcon} name='Help' onPress={() => navigate(ScreenNames.MapScreen)} /> */}
        <ProfileMenuTile userIcon={images.historyIcon} name='Order History' onPress={() => navigate(ScreenNames.OrderHistoryScreen)} />
        <ProfileMenuTile userIcon={images.helpIcon} name='Help' />
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
            disabled={logoutLoading}  
          />

        </View>

        <ProfileMenuTile userIcon={images.tokenIcon} name='Get Token' onPress={getStoredToken} />
      </View>
    </View>
  );
};



export default ProfileScreen;

