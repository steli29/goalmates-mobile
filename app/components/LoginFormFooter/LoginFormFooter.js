import React from 'react';
import { Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import PropTypes from 'prop-types';

import { Screens } from '../../project/constants';

import styles from './styles';

const LoginFormFooter = ({ isCheckBoxPressed, onCheckBoxPress, navigation }) => {

    const onForgottenPasswordPress = () => {
        navigation.navigate(Screens.FORGOTTEN_PASSWORD);
    }

    return (
        <View style={[styles.rowContainer, styles.mainContainer]}>
            <View style={[styles.rowContainer, styles.checkBoxContainer]}>
                <CheckBox 
                    boxType='square' 
                    onAnimationType='bounce' 
                    offAnimationType='bounce'
                    tintColor='#667085'
                    value={isCheckBoxPressed}
                    onValueChange={onCheckBoxPress}
                    style={styles.checkboxStyle}
                />
                <Text style={[styles.mainTextStyle, styles.rememberMeText]}>Remember Me</Text>
            </View>
            <Text 
                style={[styles.mainTextStyle, styles.forgottenLinkText]}
                onPress={onForgottenPasswordPress}
            >
                Forgot Password?
            </Text>
        </View>
    )
}

LoginFormFooter.propTypes = {
    isCheckBoxPressed: PropTypes.bool,
    onCheckBoxPress: PropTypes.func,
}

export default LoginFormFooter;