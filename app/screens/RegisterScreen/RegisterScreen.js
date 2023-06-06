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
    const { error } = useStore((state) => state.user);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSignInPress = () => {
        navigation.navigate(Screens.LOGIN);
    };

    const onContinuePress = async () => {
        await register({
            email,
            password,
            firstName,
            lastName,
        });
        if(error !== null) {
            navigation.navigate(Screens.VERIFY, {
                registerUser: () => undefined,
                email
            })
        }
    }

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ErrorModal />
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
