/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import CustomBar from './CustomBar'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => CustomBar);
