import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStack, ProfileStack, SettingsStack } from '../stacks/stacks';

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      // tabBar={(props) => (
      //   <>
      //     <CustomTabBar {...props} />
      //   </>
      // )}
      initialRouteName='Home-Tab'
    >
      <Tab.Screen
        name="Home-Tab"
        component={HomeStack}
        options={{
          tabBarTestID: 'Home',
          tabBarAccessibilityLabel: 'Home',
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Profile-Tab"
        component={ProfileStack}
        options={{
          tabBarTestID: 'Profile',
          tabBarAccessibilityLabel: 'Profile',
          tabBarLabel: 'Profile',
        }}
      />
      <Tab.Screen
        name="Settings-Tab"
        component={SettingsStack}
        options={{
          tabBarTestID: 'Settings',
          tabBarAccessibilityLabel: 'Settings',
          tabBarLabel: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
