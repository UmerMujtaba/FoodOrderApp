import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashboardScreen from '../../../screens/buttom/dashboardScreen';
import { TransitionPresets } from '@react-navigation/stack';
import { ScreenNames } from '../../../constants/string';
import CartScreen from '../../../screens/buttom/cartScreen';
import OrderConfirmationScreen from '../../../screens/buttom/orderConfirmationScreen';


const CartStack = createNativeStackNavigator();

const navigationOptions = () => ({
  headerShown: false,
  animationEnabled: true,
  animationTypeForReplace: 'push',
  animation: 'slide_from_right'

});

const Cart = () => {
  return (
    <CartStack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,  // Hide headers globally
      }}
    >
      <CartStack.Screen name={ScreenNames.Cart} component={CartScreen} options={navigationOptions} />
      <CartStack.Screen name={ScreenNames.OrderConfirmation} component={OrderConfirmationScreen} options={navigationOptions} />
      
    </CartStack.Navigator>
  );
};

export default Cart;
