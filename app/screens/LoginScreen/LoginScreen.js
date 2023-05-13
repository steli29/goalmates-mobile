import React, { useState } from 'react';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PropTypes from 'prop-types';

import LabelWithTextInput from '../../components/LabelWithTextInput/LabelWithTextInput';
import styles from './styles';
import Button from '../../components/Button/Button';
import { useStore } from '../../zustand/root-reducer';

const LoginScreen = ({ navigation }) => {
    const login = useStore((state) => state.login);
    const error = useStore((state) => state.error);
    const clearError = useStore((state) => state.clearError);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSignUpPress = () => {
        navigation.navigate('Register');
    };

    const onLoginPress = async () => {
        await login({
            email,
            password,
        });
    };

    return (
        <SafeAreaView style={styles.mainContainer}>
            <LabelWithTextInput
                label="Email"
                inputField={email}
                onChangeInputField={setEmail}
                onFocus={clearError}
            />
            <LabelWithTextInput
                label="Password"
                inputField={password}
                onChangeInputField={setPassword}
                isPassword
                onFocus={clearError}
            />
            <Text style={styles.signUpLinkText} onPress={onSignUpPress}>
                Don't have and account? Sign Up.
            </Text>
            <Button label="Login" onButtonPress={onLoginPress} />
            {error && <Text style={styles.errorMessage}>{error}</Text>}
        </SafeAreaView>
    );
};

LoginScreen.propTypes = {
    navigation: PropTypes.object,
};

export default LoginScreen;
