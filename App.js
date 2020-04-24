/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ImageBackground,
  Text,
  TextInput,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import Login from './Login';
import Register from './Register';
import Translator from './Translator';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App: () => React$Node = () => {
  

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{title: '', headerShown: false} } />
        <Stack.Screen name="Translator" component={Translator} options={{title: '', headerTintColor: '#d92c2b',}} />
        <Stack.Screen name="Register" component={Register} options={{title: '', headerTintColor: '#d92c2b'}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};



export default App;
