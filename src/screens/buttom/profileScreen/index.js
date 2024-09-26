import { View, ActivityIndicator } from 'react-native';
import { logoutUser } from '../../../services/authServices';
import React, { useState } from 'react';
import GradientButton from '../../../components/gradientButton';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';



const ProfileScreen = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');


  const logout = async () => {

    setLoading(true); // Start loading
    const { error } = await logoutUser();
    setLoading(false);
    if (error) {
      setLoading(false);
      setErrorMessage(error.message);
    } else {
      await AsyncStorage.removeItem('session'); // Remove session from AsyncStorage
      console.log('Logout successful');
      navigation.navigate('AuthStack', { screen: 'Login' });
    }
  };

  return (
    <View style={{ flex: 1 ,justifyContent:'center',alignSelf:'center'}}>
      <View style={{}}>

    
      {errorMessage ? (
        <Text style={{ color: 'red', marginBottom: 10 }}>{errorMessage}</Text>
      ) : null}
      {loading ? (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <GradientButton
          onPress={logout}
          buttonText="Logout"
          textStyle={{ fontSize: 18 }}
        />
      )}
        </View>
    </View>
  );
};

export default ProfileScreen;
