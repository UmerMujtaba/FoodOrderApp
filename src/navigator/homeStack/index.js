// bottomStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from '../../components/buttomTab';
import VeganScreen from '../../screens/buttom/vegenScreen';
import DrinkScreen from '../../screens/buttom/drinkScreen';
import FastFoodScreen from '../../screens/buttom/fastFoodScreen';
import SidesScreen from '../../screens/buttom/sidesScreen';
import DashboardScreen from '../../screens/buttom/dashboardScreen';


const HomeStack = createNativeStackNavigator();

const Home = () => { 
  return (
    <HomeStack.Navigator >
        <HomeStack.Screen name='Dashboard' component={DashboardScreen} options={{headerShown: false}}/>
      <HomeStack.Screen name="Vegan" component={VeganScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="Fastfood" component={FastFoodScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="Drink" component={DrinkScreen} options={{ headerShown: false }} />
      <HomeStack.Screen name="Sides" component={SidesScreen} options={{ headerShown: false }} />
     
    </HomeStack.Navigator>
  );
};  

export default Home;