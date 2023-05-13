import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Screens, TabNames } from '../../project/constants';

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
            initialRouteName={TabNames.HOME}
        >
            <Tab.Screen
                name={TabNames.HOME}
                component={HomeStack}
                options={{
                    tabBarTestID: Screens.HOME,
                    tabBarAccessibilityLabel: Screens.HOME,
                    tabBarLabel: Screens.HOME,
                }}
            />
            <Tab.Screen
                name={TabNames.PROFILE}
                component={ProfileStack}
                options={{
                    tabBarTestID: Screens.PROFILE,
                    tabBarAccessibilityLabel: Screens.PROFILE,
                    tabBarLabel: Screens.PROFILE,
                }}
            />
            <Tab.Screen
                name={TabNames.SETTINGS}
                component={SettingsStack}
                options={{
                    tabBarTestID: Screens.SETTINGS,
                    tabBarAccessibilityLabel: Screens.SETTINGS,
                    tabBarLabel: Screens.SETTINGS,
                }}
            />
        </Tab.Navigator>
    );
};

export default TabNavigation;
