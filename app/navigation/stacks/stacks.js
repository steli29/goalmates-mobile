import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const HomeScreenStack = createNativeStackNavigator();
export const HomeStack = () => {
  <HomeScreenStack.Navigator>
    <HomeScreenStack.Screen />
  </HomeScreenStack.Navigator>;
};

const ProfileScreenStack = createNativeStackNavigator();
export const ProfileStack = () => {
  <ProfileScreenStack.Navigator>
    <ProfileScreenStack.Screen />
  </ProfileScreenStack.Navigator>;
};

const SettingsScreenStack = createNativeStackNavigator();
export const SettingsStack = () => {
  <SettingsScreenStack.Navigator>
    <SettingsScreenStack.Screen />
  </SettingsScreenStack.Navigator>;
};
