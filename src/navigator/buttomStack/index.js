// bottomStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from '../../components/buttomTab';


const BottomStack = createNativeStackNavigator();

const Bottom = () => { 
  return (
    <BottomStack.Navigator initialRouteName="tabs">
      <BottomStack.Screen name="tabs" component={Tabs} options={{ headerShown: false }} />
     
     
    </BottomStack.Navigator>
  );
};

export default Bottom;