/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-reanimated';
import { enableLayoutAnimations } from 'react-native-reanimated';

// Enable reanimated layout animations
enableLayoutAnimations(true);

AppRegistry.registerComponent(appName, () => App);
