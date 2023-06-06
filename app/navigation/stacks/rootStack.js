import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import _ from 'lodash';

import { Screens } from '../../project/constants';
import { getSession } from '../../project/api/helpers';
import { useStore } from '../../zustand/root-reducer';

import TabNavigation from '../tabs/tabs';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../../screens/RegisterScreen/RegisterScreen';
import VerifyScreen from '../../screens/VerifyScreen/VerifyScreen';
import ForgottenPasswordScreen from '../../screens/ForgottenPasswordScreen/ForgottenPasswordScreen';

const RootStackNavigator = createNativeStackNavigator();

const RootStack = () => {
    const [isSignedIn, setIsSignedIn] = useState(null);
    const { data } = useStore((state) => state.user);
    const setUser = useStore((state) => state.setUser);

    useEffect(() => {
        getSession().then((response) => {
            if(!_.isEqual(response, data)) {
                setUser(response);
            }
        });
    }, [])

    useEffect(() => {
        getSession().then((response) => {
            setIsSignedIn(response);
        });
    }, [data]);
    return (
        <RootStackNavigator.Navigator>
            {isSignedIn ? (
                <RootStackNavigator.Screen
                    name={Screens.TABS}
                    component={TabNavigation}
                    options={() => ({
                        animationEnabled: false,
                        headerShown: false,
                    })}
                />
            ) : (
                <>
                    <RootStackNavigator.Screen
                        name={Screens.LOGIN}
                        component={LoginScreen}
                        options={() => ({
                            animationEnabled: false,
                            headerShown: false,
                        })}
                    />
                    <RootStackNavigator.Screen
                        name={Screens.REGISTER}
                        component={RegisterScreen}
                        options={() => ({
                            animationEnabled: false,
                            headerShown: false,
                        })}
                    />
                    <RootStackNavigator.Screen
                        name={Screens.VERIFY}
                        component={VerifyScreen}
                        options={() => ({
                            animationEnabled: false,
                            headerShown: false,
                        })}
                    />
                    <RootStackNavigator.Screen
                        name={Screens.FORGOTTEN_PASSWORD}
                        component={ForgottenPasswordScreen}
                        options={() => ({
                            animationEnabled: false,
                            headerShown: false,
                        })}
                    />
                </>
            )}
        </RootStackNavigator.Navigator>
    );
};

export default RootStack;
