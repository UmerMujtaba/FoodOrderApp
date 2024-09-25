import React, { useEffect, useState } from 'react';
import { Provider, useDispatch } from 'react-redux';
import SplashScreen from 'react-native-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { NavigationCheck } from './src/navigator';
import { useColorScheme, View, Text } from 'react-native';
import store from './src/redux/store';
import { supabase } from './src/utils/supabase'; // Import Supabase client

const App = () => {
  const scheme = useColorScheme(); 
  const [session, setSession] = useState(null);

  
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  
  useEffect(() => {
  // Subscribe to auth state changes
  const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
    console.log('Auth state changed:', event, session);
   
  });
  return () => {
    if (authListener) {
      authListener.subscription.unsubscribe(); 
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
