import React, { useLayoutEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Screens } from '../../project/constants';

import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import { CustomAppHeader } from './headers/headers';
import EditUserScreen from '../../screens/EditUserScreen/EditUserScreen';
import CreateGoalScreen from '../../screens/CreateGoalScreen/CreateGoalScreen';
import NotificationsScreen from '../../screens/NotificationScreen/NotificationsScreen';
import SearchScreen from '../../screens/SearchScreen/SearchScreen';
import GoalDetailsScreen from '../../screens/GoalDetailsScreen/GoalDetailsScreen';
import EditGoalScreen from '../../screens/EditGoalScreen/EditGoalScreen';

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
            <HomeScreenStack.Screen
                name={Screens.PROFILE}
                component={ProfileScreen}
                options={({ navigation, route }) => {
                    const { isFromTabs = false, user } = route.params;
                    const title = isFromTabs ? 'My Profile' : `${user.firstName} ${user.lastName}`;
                    return {
                        header: () =>
                            CustomAppHeader({
                                title,
                                route,
                                navigation,
                                isBackButtonHidden: isFromTabs,
                            }),
                    };
                }}
            />
            <HomeScreenStack.Screen
                name={Screens.EDIT_USER}
                component={EditUserScreen}
                options={({ navigation, route }) => {
                    return {
                        header: () =>
                            CustomAppHeader({
                                title: 'Edit Profile',
                                navigation,
                                route,
                                isBackButtonHidden: false,
                            }),
                    };
                }}
            />
            <HomeScreenStack.Screen
                name={Screens.GOAL_DETAILS}
                component={GoalDetailsScreen}
                options={({ navigation, route }) => {
                    return {
                        header: () =>
                            CustomAppHeader({
                                title: 'Goal Details',
                                navigation,
                                route,
                                isBackButtonHidden: false,
                            }),
                    };
                }}
            />
            <HomeScreenStack.Screen
                name={Screens.EDIT_GOAL}
                component={EditGoalScreen}
                options={({ navigation, route }) => {
                    return {
                        header: () =>
                            CustomAppHeader({
                                title: 'Edit Goal',
                                navigation,
                                route,
                                isBackButtonHidden: false,
                            }),
                    };
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
                    const { isFromTabs = false, user } = route.params;
                    const title = isFromTabs ? 'My Profile' : `${user.firstName} ${user.lastName}`;
                    return {
                        header: () =>
                            CustomAppHeader({
                                title,
                                navigation,
                                route,
                                isBackButtonHidden: isFromTabs,
                            }),
                    };
                }}
            />
            <ProfileScreenStack.Screen
                name={Screens.EDIT_USER}
                component={EditUserScreen}
                options={({ navigation, route }) => {
                    return {
                        header: () =>
                            CustomAppHeader({
                                title: 'Edit Profile',
                                navigation,
                                route,
                                isBackButtonHidden: false,
                            }),
                    };
                }}
            />
            <ProfileScreenStack.Screen
                name={Screens.GOAL_DETAILS}
                component={GoalDetailsScreen}
                options={({ navigation, route }) => {
                    return {
                        header: () =>
                            CustomAppHeader({
                                title: 'Goal Details',
                                navigation,
                                route,
                                isBackButtonHidden: false,
                            }),
                    };
                }}
            />
            <ProfileScreenStack.Screen
                name={Screens.EDIT_GOAL}
                component={EditGoalScreen}
                options={({ navigation, route }) => {
                    return {
                        header: () =>
                            CustomAppHeader({
                                title: 'Edit Goal',
                                navigation,
                                route,
                                isBackButtonHidden: false,
                            }),
                    };
                }}
            />
        </ProfileScreenStack.Navigator>
    );
};

const SearchScreenStack = createNativeStackNavigator();
export const SearchStack = () => {
    return (
        <SearchScreenStack.Navigator screenOptions={{ headerTopInsetEnabled: false }}>
            <SearchScreenStack.Screen
                name={Screens.SEARCH}
                component={SearchScreen}
                options={{
                    headerShown: false,
                }}
            />
            <SearchScreenStack.Screen
                name={Screens.PROFILE}
                component={ProfileScreen}
                options={({ navigation, route }) => {
                    const { isFromTabs = false, user } = route.params;
                    const title = isFromTabs ? 'My Profile' : `${user.firstName} ${user.lastName}`;
                    return {
                        header: () =>
                            CustomAppHeader({
                                title,
                                navigation,
                                route,
                                isBackButtonHidden: isFromTabs,
                            }),
                    };
                }}
            />
            <SearchScreenStack.Screen
                name={Screens.EDIT_USER}
                component={EditUserScreen}
                options={({ navigation, route }) => {
                    return {
                        header: () =>
                            CustomAppHeader({
                                title: 'Edit Profile',
                                navigation,
                                route,
                                isBackButtonHidden: false,
                            }),
                    };
                }}
            />
            <SearchScreenStack.Screen
                name={Screens.GOAL_DETAILS}
                component={GoalDetailsScreen}
                options={({ navigation, route }) => {
                    return {
                        header: () =>
                            CustomAppHeader({
                                title: 'Goal Details',
                                navigation,
                                route,
                                isBackButtonHidden: false,
                            }),
                    };
                }}
            />
            <SearchScreenStack.Screen
                name={Screens.EDIT_GOAL}
                component={EditGoalScreen}
                options={({ navigation, route }) => {
                    return {
                        header: () =>
                            CustomAppHeader({
                                title: 'Edit Goal',
                                navigation,
                                route,
                                isBackButtonHidden: false,
                            }),
                    };
                }}
            />
        </SearchScreenStack.Navigator>
    );
};

const CreateGoalScreenStack = createNativeStackNavigator();
export const CreateGoalStack = (props) => {
    useLayoutEffect(() => {
        // eslint-disable-next-line react/destructuring-assignment
        props.navigation.setOptions({
            tabBarVisible: false,
        });
    }, []);
    return (
        <CreateGoalScreenStack.Navigator screenOptions={{ headerTopInsetEnabled: false }}>
            <CreateGoalScreenStack.Screen
                name={Screens.CREATE_GOAL}
                component={CreateGoalScreen}
                options={({ navigation, route }) => {
                    return {
                        header: () =>
                            CustomAppHeader({
                                title: 'Create Goal',
                                navigation,
                                route,
                                isBackButtonHidden: false,
                            }),
                    };
                }}
            />
        </CreateGoalScreenStack.Navigator>
    );
};

const NotificationsScreenStack = createNativeStackNavigator();
export const NotificationStack = () => {
    return (
        <NotificationsScreenStack.Navigator screenOptions={{ headerTopInsetEnabled: false }}>
            <NotificationsScreenStack.Screen
                name={Screens.NOTIFICATIONS}
                component={NotificationsScreen}
                options={({ navigation, route }) => {
                    return {
                        header: () =>
                            CustomAppHeader({
                                title: 'Notifications',
                                navigation,
                                route,
                                isBackButtonHidden: true,
                            }),
                    };
                }}
            />
        </NotificationsScreenStack.Navigator>
    );
};
