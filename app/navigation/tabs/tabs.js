import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Screens, TabNames} from '../../project/constants';

import {
    CreateGoalStack,
    HomeStack,
    NotificationStack,
    ProfileStack,
    SearchStack,
} from '../stacks/stacks';
import CustomTabBar from "./CustomTabBar/CustomTabBar";

const Tab = createBottomTabNavigator();
const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{headerShown: false, tabBarHideOnKeyboard: true}}
            tabBar={(props) => (
                <CustomTabBar {...props} />
            )}
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
                name={TabNames.SEARCH}
                component={SearchStack}
                options={{
                    tabBarTestID: Screens.SEARCH,
                    tabBarAccessibilityLabel: Screens.SEARCH,
                    tabBarLabel: Screens.SEARCH,
                }}
            />
            <Tab.Screen
                name={TabNames.CREATE}
                component={CreateGoalStack}
                options={{
                    tabBarTestID: Screens.CREATE_GOAL,
                    tabBarAccessibilityLabel: Screens.CREATE_GOAL,
                    tabBarLabel: Screens.CREATE_GOAL,
                }}
            />
            <Tab.Screen
                name={TabNames.NOTIFICATIONS}
                component={NotificationStack}
                options={{
                    tabBarTestID: Screens.NOTIFICATIONS,
                    tabBarAccessibilityLabel: Screens.NOTIFICATIONS,
                    tabBarLabel: Screens.NOTIFICATIONS,
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
        </Tab.Navigator>
    );
};

export default TabNavigation;
