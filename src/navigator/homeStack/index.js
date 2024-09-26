import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from '../../components/buttomTab';
import VeganScreen from '../../screens/buttom/vegenScreen';
import DrinkScreen from '../../screens/buttom/drinkScreen';
import FastFoodScreen from '../../screens/buttom/fastFoodScreen';
import SidesScreen from '../../screens/buttom/sidesScreen';
import DashboardScreen from '../../screens/buttom/dashboardScreen';
import { TransitionPresets } from '@react-navigation/stack';
import { ScreenNames } from '../../constants/string';

const HomeStack = createNativeStackNavigator();

const Home = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{

        gestureEnabled: true,
        // ...TransitionPresets.SlideFromRightIOS,
        headerShown: false,  // Hide headers globally
      }}
    >
      <HomeStack.Screen name={ScreenNames.Dashboard} component={DashboardScreen} options={{}} />
      <HomeStack.Screen name={ScreenNames.Vegan} component={VeganScreen} options={{
        animationTypeForReplace: 'push',
        animation: 'slide_from_right'
      }} />
      <HomeStack.Screen name={ScreenNames.Fastfood} component={FastFoodScreen} options={{
        animationTypeForReplace: 'push',
        animation: 'slide_from_right'
      }} />
      <HomeStack.Screen name={ScreenNames.Drink} component={DrinkScreen} options={{
        animationTypeForReplace: 'push',
        animation: 'slide_from_right'
      }} />
      <HomeStack.Screen name={ScreenNames.Sides} component={SidesScreen} options={{
        animationTypeForReplace: 'push',
        animation: 'slide_from_right'
      }} />
    </HomeStack.Navigator>
  );
};

export default Home;
