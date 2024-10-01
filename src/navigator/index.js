import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator, View, StyleSheet, useColorScheme, Image } from 'react-native';
import Auth from './authStack';
import Bottom from './buttomStack';
import { NavigationContainer } from '@react-navigation/native';
import { lightTheme, darkTheme } from '../theme/themes';
import { navigationRef } from './navigationRef';
import { ScreenNames } from '../constants/string';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { images } from '../assets/images';

const NavigationStack = createNativeStackNavigator();

export const NavigationCheck = () => {
  const scheme = useColorScheme(); // To detect light or dark mode
  const [isAuthenticatedLocally, setIsAuthenticatedLocally] = useState(null); // Session state
  const [isLoading, setIsLoading] = useState(true); // Loader state

  useEffect(() => {
    const checkSession = async () => {
      try {
        const sessionString = await AsyncStorage.getItem('session');
        console.log("🚀 ~ checkSession ~ sessionString:", sessionString);

        if (sessionString) {
          const session = JSON.parse(sessionString);
          if (session) {
            setIsAuthenticatedLocally(true);  // User is authenticated
          } else {
            setIsAuthenticatedLocally(false); // No valid session found
          }
        } else {
          setIsAuthenticatedLocally(false);   // No session found
        }
      } catch (error) {
        console.error('Error checking session:', error);
        setIsAuthenticatedLocally(false);    
      } finally {
        setIsLoading(false); // Session check complete, hide the loader
      }
    };

    checkSession();
  }, []);

  // Show logo and loading spinner while checking session
  if (isLoading) {
    return (
      <View style={[styles.loaderContainer, { backgroundColor: scheme === 'dark' ? 'black' : 'white' }]}>
        {/* App logo */}
        <Image
          source={images.appLogo} // Ensure this path is correct in your project
          style={styles.logo}
          resizeMode="contain"
        />
        {/* Loader */}
        <ActivityIndicator size="large" color={scheme === 'dark' ? '#ffffff' : '#0000ff'} /> 
      </View>
    );
  }

  return (
    <NavigationContainer theme={scheme === 'dark' ? darkTheme : lightTheme} ref={navigationRef}>
      <NavigationStack.Navigator initialRouteName={isAuthenticatedLocally ? ScreenNames.BottomStack : ScreenNames.AuthStack}>
        <NavigationStack.Screen name={ScreenNames.AuthStack} component={Auth} options={{ headerShown: false }} />
        <NavigationStack.Screen name={ScreenNames.BottomStack} component={Bottom} options={{ headerShown: false }} />
      </NavigationStack.Navigator>
    </NavigationContainer>
  );
};

// Styles for loader container
const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150, // Adjust the size of the logo
    height: 150, // Adjust the size of the logo
    marginBottom: 20, // Space between the logo and the loader
  },
});
