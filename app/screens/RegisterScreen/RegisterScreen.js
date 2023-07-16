import React, { useState } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useStore } from '../../zustand/root-reducer';
import { Screens } from '../../project/constants';

import LabelWithTextInput from '../../components/LabelWithTextInput/LabelWithTextInput';
import Button from '../../components/Button/Button';
import BottomLink from '../../components/BottomLink/BottomLink';
import AuthHeadLine from '../../components/AuthHeadLine/AuthHeadLine';
import ErrorModal from '../../components/ErrorModal/ErrorModal';

import styles from './styles';

const RegisterScreen = ({ navigation }) => {
    const register = useStore((state) => state.register);
    const { error } = useStore((state) => state.myUser);
    const clearError = useStore((state) => state.clearError);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSignInPress = () => {
        navigation.navigate(Screens.LOGIN);
    };

    const onContinuePress = async () => {
        
        if(error !== null) {
            navigation.navigate(Screens.VERIFY, {
                registerUser,
                email
            })
        }
    }
    
    const registerUser = () => {
        register({
            email,
            password,
            firstName,
            lastName,
        });
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ErrorModal 
                error={error}
                onErrorClear={clearError}
            />
            <View>
                <AuthHeadLine 
                    headline="Register"
                    additionalStyle={styles.registerTextHeader}
                />
                <LabelWithTextInput
                    label='First Name'
                    inputField={firstName}
                    onChangeInputField={setFirstName}
                />
                <LabelWithTextInput
                    label='Last Name'
                    inputField={lastName}
                    onChangeInputField={setLastName}
                />
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
                <Button 
                    label='Continue' 
                    onButtonPress={onContinuePress} 
                    buttonContainerStyle={styles.buttonContainerStyle}
                />
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
