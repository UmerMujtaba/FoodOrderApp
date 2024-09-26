// bottomStack.js
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tabs from '../../components/buttomTab';
import { ScreenNames, Strings } from '../../constants/string';
import { navigationOptions } from '../../services/animation';
import { images } from '../../assets/images';
import { View,Image,Text,StyleSheet } from 'react-native';
import fonts from '../../constants/fonts';
import Home from './homeStack';
import ProfileScreen from '../../screens/buttom/profileScreen';
import CartScreen from '../../screens/buttom/cartScreen';
import ChatScreen from '../../screens/buttom/chatScreen';
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';


const Tab = createBottomTabNavigator();

const Bottom = () => { 
  const cartItems = useSelector((state) => state.cart.cartItems); 
    const { colors } = useTheme(); // Use useTheme to access the current theme colors
  

  const TabBarIconWithLabel = ({ focused, iconSource, label, cartCount }) => {
    //const { colors } = useTheme(); // Use useTheme to access the current theme colors
  
    
    return (
      <View style={[
        styles.iconContainer,
        { 
          backgroundColor: focused ? '#B9F6CA' : 'transparent',
          width: focused ? 78 : 50
        } 
      ]}>
        <Image
          source={iconSource}
          resizeMode="contain"
          style={[
            styles.icon,
            { tintColor: focused ? 'green' : 'lightgreen' } 
          ]}
        />
        {focused && (
          <Text style={styles.label}>
            {label}
          </Text>
        )}
        {cartCount > 0 && (
          <View style={styles.cartBadge}>
            {focused ? (
              <Text style={styles.cartBadgeText}>{cartCount}</Text>
            ) : (
              <View style={styles.redDot} />
            )}
          </View>
        )}
      </View>
    );
  };
  
  
  

  
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            borderRadius: 20,
            borderTopWidth: 0,
            backgroundColor:colors.tabBackgroundColor,
            height: 75,
            margin: 10,
            flexDirection: 'row', // Ensure horizontal layout
            justifyContent: 'space-between', // Space between tabs
          },
          tabBarLabel: () => null, // Hide default labels
        }}
      >
        <Tab.Screen
          name={ScreenNames.Home}
          component={Home}
          options={{
            headerShown:false,
            animationEnabled: true,
            tabBarIcon: ({ focused }) => (
              <TabBarIconWithLabel
                focused={focused}
                iconSource={images.homeIcon}
                label="Home"
                 // Pass cart count to Home tab
              />
            ),
          }}
        />
        <Tab.Screen
          name={ScreenNames.Profile}
          component={ProfileScreen}
          options={{
            headerShown:false,
            animationEnabled: true,
            tabBarIcon: ({ focused }) => (
              <TabBarIconWithLabel
                focused={focused}
                iconSource={images.profileIcon}
                label="Profile"
                
              />
            ),
          }}
        />
        <Tab.Screen
          name={ScreenNames.Cart}
          component={CartScreen}
          options={{
            headerShown:false,
            animationEnabled: true,
            tabBarIcon: ({ focused }) => (
           
              <TabBarIconWithLabel
                focused={focused}
                iconSource={images.cartIcon}
                label="Cart"
                cartCount={cartItems.length} 
              />
            ),
          }}
        />
        <Tab.Screen
          name={ScreenNames.Chat}
          component={ChatScreen}
          options={{
            headerShown:false,
            animationEnabled: true,
            tabBarIcon: ({ focused }) => (
              <TabBarIconWithLabel
                focused={focused}
                iconSource={images.chatIcon}
                label="Chat"
             
              />
            ),
          }}
        />
      </Tab.Navigator>
    );

  
};

export default Bottom;
const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    paddingTop: 14,
    paddingBottom: 14,
    width: 78,
    justifyContent: 'center',
  },
  icon: {
    width: 20, 
    height: 20, 
  },
  label: {
    marginLeft: 8,
    color: '#000000',
    fontSize: 13,
    fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,
  },
  cartBadge: {
    position: 'absolute',
    top: -5,
    right: -10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
    fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,
    backgroundColor: 'red',
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  redDot: {
    backgroundColor: 'red',
    width: 8,
    height: 8,
    borderRadius: 4, // Make it a circle
  },
});