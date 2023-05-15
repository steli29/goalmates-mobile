import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useStore } from '../../zustand/root-reducer';

const SettingsScreen = () => {
    const logout = useStore((state) => state.logout);

    const onLogoutPress = () => {
        logout();
    };

    return (
        <View>
            <TouchableOpacity onPress={onLogoutPress}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    );
};

export default SettingsScreen;
