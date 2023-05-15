import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PropTypes from 'prop-types';

import { useStore } from '../../zustand/root-reducer';
import { Screens } from '../../project/constants';

import LabelWithTextInput from '../../components/LabelWithTextInput/LabelWithTextInput';
import Button from '../../components/Button/Button';
import BottomLink from '../../components/BottomLink/BottomLink';
import AuthHeadLine from '../../components/AuthHeadLine/AuthHeadLine';

import styles from './styles';

const LoginScreen = ({ navigation }) => {
    const login = useStore((state) => state.login);
    const error = useStore((state) => state.error);
    const clearError = useStore((state) => state.clearError);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onSignUpPress = () => {
        navigation.navigate(Screens.REGISTER);
    };

    const onLoginPress = async () => {
        await login({
            email,
            password,
        });
    };

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View>
                <AuthHeadLine headline='Login' additionalStyle={styles.loginTextHeader} />
                <LabelWithTextInput
                    label='E-mail'
                    inputField={email}
                    onChangeInputField={setEmail}
                    onFocus={clearError}
                />
                <LabelWithTextInput
                    label='Password'
                    inputField={password}
                    onChangeInputField={setPassword}
                    isPassword
                    onFocus={clearError}
                />

                <Button
                    label='Login'
                    onButtonPress={onLoginPress}
                    buttonContainerStyle={styles.buttonContainerStyle}
                />
                {error && <Text style={styles.errorMessage}>{error}</Text>}
            </View>
            <BottomLink
                buttonLabel='Signup'
                headline="Don't have an account?"
                onLabelPress={onSignUpPress}
            />
        </SafeAreaView>
    );
};

LoginScreen.propTypes = {
    navigation: PropTypes.object,
};

export default LoginScreen;
