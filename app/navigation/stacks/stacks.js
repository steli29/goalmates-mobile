import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Screens} from '../../project/constants';

import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import {CustomAppHeader} from './headers/headers';
import EditUserScreen from '../../screens/EditUserScreen/EditUserScreen';
import CreateGoalScreen from "../../screens/CreateGoalScreen/CreateGoalScreen";
import NotificationsScreen from "../../screens/NotificationScreen/NotificationsScreen";
import SearchScreen from "../../screens/SearchScreen/SearchScreen";

const HomeScreenStack = createNativeStackNavigator();
export const HomeStack = () => {
    return (
        <HomeScreenStack.Navigator screenOptions={{headerTopInsetEnabled: false}}>
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
        <ProfileScreenStack.Navigator screenOptions={{headerTopInsetEnabled: false}}>
            <ProfileScreenStack.Screen
                name={Screens.PROFILE}
                component={ProfileScreen}
                options={({navigation, route}) => {
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
                options={({navigation, route}) => {
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

const SearchScreenStack = createNativeStackNavigator();
export const SearchStack = () => {
    return (
        <SearchScreenStack.Navigator screenOptions={{headerTopInsetEnabled: false}}>
            <SearchScreenStack.Screen name={Screens.SEARCH} component={SearchScreen}/>
        </SearchScreenStack.Navigator>
    );
};

const CreateGoalScreenStack = createNativeStackNavigator();
export const CreateGoalStack = () => {
    return (
        <CreateGoalScreenStack.Navigator screenOptions={{headerTopInsetEnabled: false}}>
            <CreateGoalScreenStack.Screen name={Screens.CREATE_GOAL} component={CreateGoalScreen}/>
        </CreateGoalScreenStack.Navigator>
    )
};

const NotificationsScreenStack = createNativeStackNavigator();
export const NotificationStack = () => {
    return (
        <NotificationsScreenStack.Navigator screenOptions={{headerTopInsetEnabled: false}}>
            <NotificationsScreenStack.Screen name={Screens.NOTIFICATIONS} component={NotificationsScreen}/>
        </NotificationsScreenStack.Navigator>
    )
}
