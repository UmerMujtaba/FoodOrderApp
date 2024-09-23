// App.js
import React, {useEffect} from 'react';
import {Provider, useDispatch} from 'react-redux';
import SplashScreen from 'react-native-splash-screen';

import store from './src/redux/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import { NavigationCheck } from './src/navigator';
// import { NavigationCheck } from './src/navigator';

const App = () => {
  useEffect(() => {
    SplashScreen.hide(); // Hide the splash screen when the app is ready
  }, []);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <NavigationCheck />
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
