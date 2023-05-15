import React, { useState } from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useStore } from '../../zustand/root-reducer';
import { Screens } from '../../project/constants';

import LabelWithTextInput from '../../components/LabelWithTextInput/LabelWithTextInput';
import Button from '../../components/Button/Button';
import BottomLink from '../../components/BottomLink/BottomLink';
import AuthHeadLine from '../../components/AuthHeadLine/AuthHeadLine';

import styles from './styles';

const RegisterScreen = ({ navigation }) => {
    const register = useStore((state) => state.register);
    const error = useStore((state) => state.error);
    const clearError = useStore((state) => state.clearError);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSignInPress = () => {
        // navigation.navigate(Screens.LOGIN);
        navigation.navigate(Screens.VERIFY)
    };

    const onRegisterPress = async () => {
        await register({
            email,
            password,
            firstName,
            lastName,
        });
    };

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View>
                <AuthHeadLine 
                    headline="Register"
                    additionalStyle={styles.registerTextHeader}
                />
                <LabelWithTextInput
                    label='First Name'
                    inputField={firstName}
                    onChangeInputField={setFirstName}
                    onFocus={clearError}
                />
                <LabelWithTextInput
                    label='Last Name'
                    inputField={lastName}
                    onChangeInputField={setLastName}
                    onFocus={clearError}
                />
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
                    onFocus={clearError}
                    isPassword
                />
                <Button 
                label='Register' 
                onButtonPress={onRegisterPress} 
                buttonContainerStyle={styles.buttonContainerStyle}
                />
                {error && <Text style={styles.errorMessage}>{error}</Text>}
            </View>
            <BottomLink
                headline='Already signed up?'
                buttonLabel='Login'
                onLabelPress={onSignInPress}
            />
        </SafeAreaView>
    );
};

RegisterScreen.propTypes = {
    navigation: PropTypes.object,
};

export default RegisterScreen;
