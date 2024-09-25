import React, { useEffect, useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationCheck } from './src/navigator';
import { useColorScheme, View, Text } from 'react-native';
import store from './src/redux/store';
import { supabase } from './src/utils/supabase'; // Import Supabase client
import GradientButton from './src/components/GradientButton'; // Assuming GradientButton is a custom component

const App = () => {
  const scheme = useColorScheme(); // Detect system theme
  const [session, setSession] = useState(null); // Track user session
  const [loading, setLoading] = useState(true); // Loading state for authentication

  // Hide the splash screen when the app is ready
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  // Check if user is logged in using Supabase session
  useEffect(() => {
  // Subscribe to auth state changes
  const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
    console.log('Auth state changed:', event, session);
    // Handle the auth state change
  });

  // Cleanup function: unsubscribe when component unmounts
  return () => {
    if (authListener) {
      authListener.subscription.unsubscribe(); // Correct way to unsubscribe
    }
  };
}, []);
 

  

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationCheck session={session} />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
