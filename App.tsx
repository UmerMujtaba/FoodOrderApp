import React, { useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationCheck } from './src/navigator';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import store from './src/redux/store';
import { supabase } from './src/utils/supabase';

const App = () => {
  const scheme = useColorScheme();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  useEffect(() => {
    // Check if token exists in AsyncStorage
    const checkStoredToken = async () => {
      try {
        const token = await AsyncStorage.getItem('access_token');
        console.log('checkStoredToken ~ token:', token);
        if (token) {
          setIsAuthenticated(true); // Set authenticated if token exists
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error('Error retrieving token:', error);
      }
    };
    checkStoredToken();
  }, []);

  

  useEffect(() => {
      const checkAuth = async () => {
          const session = await AsyncStorage.getItem('session');
          const accessToken = await AsyncStorage.getItem('access_token');

          if (session && accessToken) {
              // If session and token are available, the user is authenticated
              setIsAuthenticated(true);
              console.log("User is authenticated");
          } else {
              setIsAuthenticated(false);
              console.log("User is not authenticated");
          }
      };

      checkAuth();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationCheck isAuthenticated={isAuthenticated} />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
