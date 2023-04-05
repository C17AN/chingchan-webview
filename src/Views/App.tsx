/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {WebView} from 'react-native-webview';
import {SERVICE_URL} from '../constants/service';

function App(): JSX.Element {
  return <WebView source={{uri: SERVICE_URL}} style={{flex: 1}} />;
}
export default App;
