// bottomStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from '../../components/buttomTab';
import VeganScreen from '../../screens/buttom/vegenScreen';
import DrinkScreen from '../../screens/buttom/drinkScreen';
import AddonsScreen from '../../screens/buttom/sidesScreen';
import FastFoodScreen from '../../screens/buttom/fastFoodScreen';
import SidesScreen from '../../screens/buttom/sidesScreen';


const BottomStack = createNativeStackNavigator();

const Bottom = () => { 
  return (
    <BottomStack.Navigator initialRouteName="tabs">
      <BottomStack.Screen name="tabs" component={Tabs} options={{ headerShown: false }} />
      <BottomStack.Screen name="Vegan" component={VeganScreen} options={{ headerShown: false }} />
      <BottomStack.Screen name="Fastfood" component={FastFoodScreen} options={{ headerShown: false }} />
      <BottomStack.Screen name="Drink" component={DrinkScreen} options={{ headerShown: false }} />
      <BottomStack.Screen name="Sides" component={SidesScreen} options={{ headerShown: false }} />
     
    </BottomStack.Navigator>
  );
};

export default Bottom;