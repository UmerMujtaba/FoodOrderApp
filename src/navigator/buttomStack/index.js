// bottomStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from '../../components/buttomTab';
import { ScreenNames } from '../../constants/string';


const BottomStack = createNativeStackNavigator();

const Bottom = () => { 
  return (
    <BottomStack.Navigator initialRouteName={ScreenNames.Tabs}>
      <BottomStack.Screen name={ScreenNames.Tabs} component={Tabs} options={{ headerShown: false }} />
     
     
    </BottomStack.Navigator>
  );
};

export default Bottom;