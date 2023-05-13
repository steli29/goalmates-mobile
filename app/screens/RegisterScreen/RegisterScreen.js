import React, { useState } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native-safe-area-context';
import LabelWithTextInput from '../../components/LabelWithTextInput/LabelWithTextInput';
import Button from '../../components/Button/Button';
import styles from './styles';
import { useStore } from '../../zustand/root-reducer';

const RegisterScreen = ({ navigation }) => {
    const register = useStore((state) => state.register);
    const error = useStore((state) => state.error);
    const clearError = useStore((state) => state.clearError);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [userName, setUserName] = useState('');

    const onSignInPress = () => {
        navigation.navigate('Login');
    };

    const onRegisterPress = async () => {
        await register({
            email,
            password,
            firstName,
            lastName,
            userName,
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
                onFocus={clearError}
                isPassword
            />
            <LabelWithTextInput
                label="First Name"
                inputField={firstName}
                onChangeInputField={setFirstName}
                onFocus={clearError}
            />
            <LabelWithTextInput
                label="Last Name"
                inputField={lastName}
                onChangeInputField={setLastName}
                onFocus={clearError}
            />
            <LabelWithTextInput
                label="User Name"
                inputField={userName}
                onChangeInputField={setUserName}
                onFocus={clearError}
            />
            <Text style={styles.signUpLinkText} onPress={onSignInPress}>
                Have and account? Sign In.
            </Text>
            <Button label="Register" onButtonPress={onRegisterPress} />
            {error && <Text style={styles.errorMessage}>{error}</Text>}
        </SafeAreaView>
    );
};

RegisterScreen.propTypes = {
    navigation: PropTypes.object,
};

export default RegisterScreen;
