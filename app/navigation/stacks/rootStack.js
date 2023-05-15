import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Screens } from '../../project/constants';
import { getSession } from '../../project/api/helpers';
import { useStore } from '../../zustand/root-reducer';

import TabNavigation from '../tabs/tabs';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';
import RegisterScreen from '../../screens/RegisterScreen/RegisterScreen';
import VerifyScreen from '../../screens/VerifyScreen/VerifyScreen';

const RootStackNavigator = createNativeStackNavigator();

const RootStack = () => {
    const [isSignedIn, setIsSignedIn] = useState(null);
    const user = useStore((state) => state.user);

    useEffect(() => {
        getSession().then((data) => {
            setIsSignedIn(data);
        });
    }, [user]);
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
                </>
            )}
        </RootStackNavigator.Navigator>
    );
};

export default RootStack;
