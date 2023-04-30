import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeStack, ProfileStack, SettingsStack} from '../stacks/stacks';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home-Tab"
        component={HomeStack}
        options={{
          // unmountOnBlur: true,
          tabBarTestID: 'Home',
          tabBarAccessibilityLabel: 'Home',
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Profile-Tab"
        component={ProfileStack}
        options={{
          // unmountOnBlur: true,
          tabBarTestID: 'Profile',
          tabBarAccessibilityLabel: 'Profile',
          tabBarLabel: 'Profile',
        }}
      />
      <Tab.Screen
        name="Settings-Tab"
        component={SettingsStack}
        options={{
          // unmountOnBlur: true,
          tabBarTestID: 'Settings',
          tabBarAccessibilityLabel: 'Settings',
          tabBarLabel: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
