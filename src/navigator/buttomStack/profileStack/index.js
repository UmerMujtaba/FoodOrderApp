import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TransitionPresets } from '@react-navigation/stack';
import { ScreenNames } from '../../../constants/string';
import ProfileScreen from '../../../screens/buttom/profileScreen';
import CallScreen from '../../../screens/buttom/callScreen';
import UserDetailScreen from '../../../screens/buttom/userDetailScreen';
import MapScreen from '../../../screens/buttom/mapScreen';


const ProfileStack = createNativeStackNavigator();

const navigationOptions = () => ({
  headerShown: false,
  animationEnabled: true,
  animationTypeForReplace: 'push',
  animation: 'slide_from_right'

});

const StackProfile = () => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        gestureEnabled: true,
        headerShown: false,  // Hide headers globally
      }}
    >
      <ProfileStack.Screen name={ScreenNames.ProfileScreen} component={ProfileScreen} options={navigationOptions} />
      <ProfileStack.Screen name={ScreenNames.MapScreen} component={MapScreen} options={navigationOptions} />
    </ProfileStack.Navigator>
  );
};

export default StackProfile;
