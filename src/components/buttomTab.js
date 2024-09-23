import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Image, Text } from 'react-native';
import { images } from '../assets/images';
import DashboardScreen from '../screens/buttom/dashboardScreen';
import ProfileScreen from '../screens/buttom/profileScreen';
import CartScreen from '../screens/buttom/cartScreen';
import ChatScreen from '../screens/buttom/chatScreen';
import fonts from '../constants/fonts';
import Home from '../navigator/homeStack';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

const TabBarIconWithLabel = ({ focused, iconSource, label, cartCount }) => {
  return (
    <View style={[
      styles.iconContainer,
      { 
        backgroundColor: focused ? '#B9F6CA' : 'transparent',
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



const Tabs = () => {
  const cartItems = useSelector((state) => state.cart.cartItems); 
  
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          borderRadius: 20,
          borderTopWidth: 0,
          height: 75,
          margin: 10,
          flexDirection: 'row', // Ensure horizontal layout
          justifyContent: 'space-between', // Space between tabs
        },
        tabBarLabel: () => null, // Hide default labels
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
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
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
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
        name="Cart"
        component={CartScreen}
        options={{
          headerShown: false,
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
        name="Chat"
        component={ChatScreen}
        options={{
          headerShown: false,
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



export default Tabs;
