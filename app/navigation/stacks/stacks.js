import React from 'react';
import { Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import SettingsScreen from '../../screens/SettingsScreen/SettingsScreen';

const HomeScreenStack = createNativeStackNavigator();
export const HomeStack = () => {
  return (
    <HomeScreenStack.Navigator>
      <HomeScreenStack.Screen
        name='Home'
        component={HomeScreen}
        // options={({ navigation, route }) => {
        //   return {
        //     header: () => (<Text>Test</Text>)
        //   }
        // }}
      />
    </HomeScreenStack.Navigator>
  );
};

const ProfileScreenStack = createNativeStackNavigator();
export const ProfileStack = () => {
  return (
    <ProfileScreenStack.Navigator>
      <ProfileScreenStack.Screen
        name='Profile'
        component={ProfileScreen}
      />
    </ProfileScreenStack.Navigator>
  );
};

const SettingsScreenStack = createNativeStackNavigator();
export const SettingsStack = () => {
  return (
    <SettingsScreenStack.Navigator>
      <SettingsScreenStack.Screen
        name='Settings'
        component={SettingsScreen}
      />
    </SettingsScreenStack.Navigator>
  );
};
