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

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <NavigationCheck/>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
