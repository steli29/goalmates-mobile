import React, { useState } from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PropTypes from 'prop-types';

import { useStore } from '../../zustand/root-reducer';
import { Screens } from '../../project/constants';

import LabelWithTextInput from '../../components/LabelWithTextInput/LabelWithTextInput';
import Button from '../../components/Button/Button';
import BottomLink from '../../components/BottomLink/BottomLink';
import AuthHeadLine from '../../components/AuthHeadLine/AuthHeadLine';
import ErrorModal from '../../components/ErrorModal/ErrorModal';
import LoginFormFooter from '../../components/LoginFormFooter/LoginFormFooter';

import styles from './styles';

const LoginScreen = ({ navigation }) => {
    const login = useStore((state) => state.login);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isCheckBoxPressed, setIsCheckboxPressed] = useState(false);

    const onSignUpPress = () => {
        navigation.navigate(Screens.REGISTER);
    };

    const onCheckBoxPress = () => {
        setIsCheckboxPressed((prev) => !prev);
    }

    const onLoginPress = async () => {
        await login({
            email,
            password,
            isCheckBoxPressed,
        });
    };

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ErrorModal />
            <View>
                <AuthHeadLine headline='Login' additionalStyle={styles.loginTextHeader} />
                <LabelWithTextInput
                    label='E-mail'
                    inputField={email}
                    onChangeInputField={setEmail}
                />
                <LabelWithTextInput
                    label='Password'
                    inputField={password}
                    onChangeInputField={setPassword}
                    isPassword
                />
                <LoginFormFooter 
                    isCheckBoxPressed={isCheckBoxPressed}
                    onCheckBoxPress={onCheckBoxPress}
                    navigation={navigation}
                />
                <Button
                    label='Login'
                    onButtonPress={onLoginPress}
                    buttonContainerStyle={styles.buttonContainerStyle}
                />
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
