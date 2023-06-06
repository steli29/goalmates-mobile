import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import SettingsScreen from '../../screens/SettingsScreen/SettingsScreen';
import { CustomAppHeader } from './headers/headers';

const HomeScreenStack = createNativeStackNavigator();
export const HomeStack = () => {
    return (
        <HomeScreenStack.Navigator>
            <HomeScreenStack.Screen
                name='Home'
                component={HomeScreen}
                options={{
                    headerShown: false,
                }}
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
                options={({ navigation, route }) => {
                  if (!route.params) route.params = {};
                  route.params.isBackButtonHidden = false;
                    return {
                        header: () =>
                            CustomAppHeader({
                                title: 'My Profile',
                                navigation,
                                route,
                                isBackButtonHidden: true,
                            }),
                    };
                }}
            />
        </ProfileScreenStack.Navigator>
    );
};

const SettingsScreenStack = createNativeStackNavigator();
export const SettingsStack = () => {
    return (
        <SettingsScreenStack.Navigator>
            <SettingsScreenStack.Screen name='Settings' component={SettingsScreen} />
        </SettingsScreenStack.Navigator>
    );
};
