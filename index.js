/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

/*
Importar o componente App (do app.js) e renderizar na tela do app como componente principal
*/
AppRegistry.registerComponent(appName, () => App);
