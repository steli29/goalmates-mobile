import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { useStore } from '../../zustand/root-reducer';

const SettingsScreen = ({ navigation }) => {
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

SettingsScreen.propTypes = {
    navigation: PropTypes.object,
};

export default SettingsScreen;
