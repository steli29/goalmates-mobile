import React from 'react';
import { Text, View } from 'react-native';

import { Screens } from '../../../../project/constants';

import styles from './styles';

const LoginFormFooter = ({ navigation }) => {

    const onForgottenPasswordPress = () => {
        navigation.navigate(Screens.FORGOTTEN_PASSWORD);
    }

    return (
        <View style={styles.mainContainer}>
            <Text 
                style={styles.forgottenLinkText}
                onPress={onForgottenPasswordPress}
            >
                Forgot Password?
            </Text>
        </View>
    )
}

export default LoginFormFooter;