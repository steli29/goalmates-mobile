import 'react-native-gesture-handler';
import {AppRegistry, LogBox} from 'react-native';
import App from './app/App';
import {name as appName} from './app.json';

LogBox.ignoreAllLogs(true);


AppRegistry.registerComponent(appName, () => App);
