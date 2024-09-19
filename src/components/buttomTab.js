import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Image, Text } from 'react-native';
import { images } from '../assets/images';
import DashboardScreen from '../screens/buttom/dashboardScreen';
import ProfileScreen from '../screens/buttom/profileScreen';
import CartScreen from '../screens/buttom/cartScreen';
import ChatScreen from '../screens/buttom/chatScreen';
import fonts from '../constants/fonts';

const Tab = createBottomTabNavigator();

const TabBarIconWithLabel = ({ focused, iconSource, label }) => (
  <View style={[
    styles.iconContainer,
    { backgroundColor: focused ? '#B9F6CA' : 'transparent' } // Change background color when focused
  ]}>
    <Image
      source={iconSource}
      resizeMode="contain"
      style={[
        styles.icon,
        { tintColor: focused ? 'green' : 'lightgreen' } // Change icon color when focused
      ]}
    />
    {focused && (
      <Text style={styles.label}>
        {label}
      </Text>
    )}
  </View>
);

const Tabs = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarStyle: {
        borderRadius: 20,
        borderTopWidth: 0,
        height: 75,
        margin: 10,
      },
      tabBarLabel: () => null, // Hide default labels
    }}
  >
    <Tab.Screen
      name="Home"
      component={DashboardScreen}
      options={{
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabBarIconWithLabel
            focused={focused}
            iconSource={images.homeIcon}
            label="Home"
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

const styles = StyleSheet.create({
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    paddingTop:14,
    paddingBottom: 14,
    width: 78,
    justifyContent:'center'
  },
  icon: {
    width: 20, // Adjust size as needed
    height: 20, // Adjust size as needed
  },
  label: {
    marginLeft: 8,
    color: '#000000',
    fontSize: 13,
    fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold, // Adjust font as needed
  },
});

export default Tabs;
