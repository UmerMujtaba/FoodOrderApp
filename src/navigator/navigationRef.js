import * as React from 'react';
import {
  CommonActions,
  DrawerActions,
  StackActions,
} from '@react-navigation/native';
//import { reset } from '../redux/scanSlice/scanSlice';
//import { reset as clear } from '../redux/authSlice/logInSlice';
export const navigationRef = React.createRef();

export async function navigateReset(name, params) {
  
  
  console.log("🚀 ~ navigateReset ~ navigateReset ~ name:", name, '  params => ', params)
  
 
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: name,
          params: params,
        },
      ],
    }),
  );
}
export async function navigateResetStoreClear(name, reduxDispatch) {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [
        {
          name: name,
        },
      ],
    }),
  );
  reduxDispatch(reset());
  reduxDispatch(clear());
}
export async function navigateBack(name, params) {
  navigationRef.current?.dispatch(
    CommonActions.goBack(),
  );
}

export function getRouteName() {
  return navigationRef.current?.getCurrentRoute()?.name;
}

export async function navigate(name, params) {
  console.log("🚀 ~ navigateReset ~ navigateReset ~ name:", name, '  params => ', params)
 
  navigationRef.current?.navigate(name, params);
}
export async function popScreen() {
  const popAction = StackActions.pop();
  navigationRef.current?.dispatch(popAction);
}

export async function openDrawer() {
  console.log("Yess");
  try {
    DrawerActions.openDrawer();
    // navigationRef.current.dispatch();
  } catch(error) {
    console.log(":rocket: ~ file: navigationRef.js:41 ~ openDrawer ~ error:", error);
  }
}
export async function closeDrawer() {
  navigationRef.current.dispatch(DrawerActions.closeDrawer());
}