// bottomStack.js
import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ScreenNames, Strings } from '../../constants/string';
import { images } from '../../assets/images';
import { View, Image, Text, StyleSheet } from 'react-native';
import fonts from '../../constants/fonts';
import Home from './homeStack';
import ProfileScreen from '../../screens/buttom/profileScreen';
import CartScreen from '../../screens/buttom/cartScreen';
import { useSelector } from 'react-redux';
import { useTheme } from '@react-navigation/native';
import RecommendationScreen from '../../screens/buttom/recommendationScreen';
import Cart from './cartStack';
import { hp, rfs, rhp, rwp, wp } from '../../constants/dimensions';


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
          backgroundColor: focused ? 'rgba(21, 190, 119, 0.5)' : 'transparent',
          width: focused ? rwp(80) : rwp(55)
        }
      ]}>

        <Image
          source={iconSource}
          resizeMode="contain"
          style={[
            styles.icon,
            { tintColor: focused ? 'lightgreen' : 'lightgreen' }
          ]}
        />
        {focused && (
          <Text style={styles.label(colors)}>
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
          backgroundColor: colors.tabBackgroundColor,
          height: rhp(85),
          margin: 10,
          marginHorizontal:rwp(10),
          marginVertical: rhp(10),
          flexDirection: 'row', // Ensure horizontal layout
          justifyContent: 'space-between', // Space between tabs
          animation: 'shift',
          animationEnabled: true,
        },
        tabBarLabel: () => null, // Hide default labels
      }}
    >
      <Tab.Screen
        name={ScreenNames.Home}
        component={Home}
        options={{
          headerShown: false,
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
          headerShown: false,
          animationEnabled: true,

          tabBarIcon: ({ focused }) => (
            <TabBarIconWithLabel
              focused={focused}
              iconSource={images.userIcon}
              label="Profile"

            />
          ),
        }}
      /> 
      <Tab.Screen
        name={ScreenNames.Cart}
        component={Cart}
        options={{
          headerShown: false,

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
        name={ScreenNames.Recommendation}
        component={RecommendationScreen}
        options={{
          headerShown: false,
          animationEnabled: true,

          tabBarIcon: ({ focused }) => (
            <TabBarIconWithLabel
              focused={focused}
              iconSource={images.chatIcon}
              label="Liked"

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
    paddingTop: rhp(16),
    paddingBottom: rhp(16),
   
    justifyContent: 'center',
  },
  icon: {
    width: rwp(25),
    height: rhp(25),
  },
  label: (colors) => ({
    marginLeft: rwp(5),
    color: colors.text,
    fontSize: rfs(16),
    fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,
  }),
  cartBadge: {
    position: 'absolute',
    top: rhp(-5),
    right: rwp(-10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: 'white',
    fontSize: rfs(12),
    fontWeight: 'bold',
    fontFamily: fonts.SF_PRO_TEXT.Spectral.Bold,
    backgroundColor: 'red',
    borderRadius: 12,
    paddingHorizontal: rwp(6),
    paddingVertical: rhp(2),
  },
  redDot: {
    backgroundColor: 'red',
    width: rwp(8),
    height: rhp(8),
    borderRadius: 4, // Make it a circle
  },
});