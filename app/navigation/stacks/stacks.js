import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Screens } from '../../project/constants';

import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import SettingsScreen from '../../screens/SettingsScreen/SettingsScreen';
import { CustomAppHeader } from './headers/headers';
import EditUserScreen from '../../screens/EditUserScreen/EditUserScreen';

const HomeScreenStack = createNativeStackNavigator();
export const HomeStack = () => {
    return (
        <HomeScreenStack.Navigator screenOptions={{ headerTopInsetEnabled: false }}>
            <HomeScreenStack.Screen
                name={Screens.HOME}
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
        <ProfileScreenStack.Navigator screenOptions={{ headerTopInsetEnabled: false }}>
            <ProfileScreenStack.Screen
                name={Screens.PROFILE}
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
                        headerMode: 'screen',
                        animation: 'none',
                    };
                }}
            />
            <ProfileScreenStack.Screen
                name={Screens.EDIT_USER}
                component={EditUserScreen}
                options={({ navigation, route }) => {
                    if (!route.params) route.params = {};
                    route.params.isBackButtonHidden = false;
                    return {
                        header: () =>
                            CustomAppHeader({
                                title: 'Edit Profile',
                                navigation,
                                route,
                                isBackButtonHidden: true,
                            }),
                        headerMode: 'screen',
                        animation: 'none',
                    };
                }}
            />
        </ProfileScreenStack.Navigator>
    );
};

const SettingsScreenStack = createNativeStackNavigator();
export const SettingsStack = () => {
    return (
        <SettingsScreenStack.Navigator screenOptions={{ headerTopInsetEnabled: false }}>
            <SettingsScreenStack.Screen name={Screens.SETTINGS} component={SettingsScreen} />
        </SettingsScreenStack.Navigator>
    );
};
