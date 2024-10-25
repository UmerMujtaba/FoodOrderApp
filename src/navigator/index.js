import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ActivityIndicator, View, StyleSheet, useColorScheme } from 'react-native';
import Auth from './authStack';
import Bottom from './buttomStack';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './navigationRef';
import { ScreenNames } from '../constants/string';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserDetailScreen from '../screens/buttom/userDetailScreen';
import PromotionsScreen from '../screens/buttom/promotionScreen';
import { darkTheme, lightTheme } from '../utils/theme/themes';
import ChoosePaymentScreen from '../screens/buttom/choosePaymentScreen';
import CardPaymentScreen from '../screens/buttom/cardPaymentScreen';
import JazzCashForm from '../screens/buttom/jazzCashScreen';

const NavigationStack = createNativeStackNavigator();

export const NavigationCheck = () => {
  const scheme = useColorScheme(); // To detect light or dark mode
  const [isAuthenticatedLocally, setIsAuthenticatedLocally] = useState(null); // Session state
  const [isLoading, setIsLoading] = useState(true); // Loader state

  useEffect(() => {
    const checkSession = async () => {
      try {
        const sessionString = await AsyncStorage.getItem('session');

        //    console.log("🚀 ~ checkSession ~ sessionString:", sessionString?.user?.email)
        if (sessionString) {
          const session = JSON.parse(sessionString);
          // console.log("🚀 ~ checkSession ~ session:", session)
          const email = session.user?.email;
          console.log("🚀 ~ email checking from session ~ email:", email)

          await AsyncStorage.setItem('active_email', email);



          if (session && session.is_logged_in) {
            setIsAuthenticatedLocally(true);
          } else {
            setIsAuthenticatedLocally(false);
          }
        } else {
          setIsAuthenticatedLocally(false);
        }
      } catch (error) {
        console.error('Error checking session:', error);
        setIsAuthenticatedLocally(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkSession();
  }, []);

  if (isLoading) {
    return (
      <View style={[styles.loaderContainer, { backgroundColor: scheme === 'dark' ? 'black' : 'white' }]}>
        <ActivityIndicator size="large" color={scheme === 'dark' ? '#ffffff' : '#0000ff'} />
      </View>
    );
  }

  return (
    <NavigationContainer theme={scheme === 'dark' ? darkTheme : lightTheme} ref={navigationRef}>
      <NavigationStack.Navigator initialRouteName={isAuthenticatedLocally ? ScreenNames.BottomStack : ScreenNames.AuthStack}>
        <NavigationStack.Screen name={ScreenNames.AuthStack} component={Auth} options={{ headerShown: false }} />
        <NavigationStack.Screen name={ScreenNames.BottomStack} component={Bottom} options={{ headerShown: false }} />
        <NavigationStack.Screen name={ScreenNames.UserScreen} component={UserDetailScreen} options={{ headerShown: false }} />
        <NavigationStack.Screen name={ScreenNames.PromotionScreen} component={PromotionsScreen} options={{ headerShown: false }} />
        <NavigationStack.Screen name={ScreenNames.ChoosePaymentScreen} component={ChoosePaymentScreen} options={{ headerShown: false }} />
        <NavigationStack.Screen name={ScreenNames.CardPaymentScreen} component={CardPaymentScreen} options={{ headerShown: false }} />
        <NavigationStack.Screen name={ScreenNames.JazzCashScreen} component={JazzCashForm} options={{ headerShown: false }} />




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
