import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import TabNavigation from '../tabs/tabs';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../../screens/RegisterScreen/RegisterScreen';

const RootStackNavigator = createNativeStackNavigator();

const RootStack = () => {
  return (
    <RootStackNavigator.Navigator>
      <RootStackNavigator.Screen
        name="Login"
        component={LoginScreen}
        options={({ route }) => ({
          animationEnabled: false,
          headerShown: false,
        })}
      />
      <RootStackNavigator.Screen
        name="Register"
        component={RegisterScreen}
        options={({ route }) => ({
          animationEnabled: false,
          headerShown: false,
        })}
      />
      <RootStackNavigator.Screen
        name="Tabs"
        component={TabNavigation}
        options={({ route }) => ({
          animationEnabled: false,
          headerShown: false,
        })}
      />
    </RootStackNavigator.Navigator>
  );
};

export default RootStack;
