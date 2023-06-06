import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Button from '../../components/Button/Button';
import AuthHeadLine from '../../components/AuthHeadLine/AuthHeadLine';
import LabelWithTextInput from '../../components/LabelWithTextInput/LabelWithTextInput';

import styles from './styles';
import BackArrowSvg from '../../assets/svgs/BackArrowSvg';

const ForgottenPasswordScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isContentVisible, setIsContentVisible] = useState(true);

    const enterMailMessage =
        'Enter your email address and we will send you instructions to reset your password.';
    const checkMailMessage = `Please check the email address ${email} for instructions to reset your password.`;

    const disabledButtonStyle = !email ? styles.buttonContainerInactiveStyle : null;

    const onResetPasswordPress = () => {
        setMessage(checkMailMessage);
        setIsContentVisible(false);
    };

    const goBack = () => {
        navigation.goBack();
    }

    useEffect(() => {
        setMessage(enterMailMessage);
    }, [])

    return (
        <SafeAreaView style={styles.mainContainer}>
            <View>
                <TouchableOpacity
                    style={styles.backButtonContainer}
                    onPress={goBack}
                >
                    <BackArrowSvg color='#667085'/>
                </TouchableOpacity>
                <AuthHeadLine
                    headline='Forgotten Password'
                    additionalStyle={styles.forgottenPasswordTextHeader}
                />
                <Text style={styles.mainTextStyle}>{message}</Text>
                {isContentVisible ? (
                    <>
                        <LabelWithTextInput
                            label='Email'
                            inputField={email}
                            onChangeInputField={setEmail}
                        />
                        <Button
                            label='Reset Password'
                            onButtonPress={onResetPasswordPress}
                            buttonContainerStyle={[
                                styles.buttonContainerStyle,
                                disabledButtonStyle,
                            ]}
                        />
                    </>
                ) : null}
            </View>
        </SafeAreaView>
    );
};

export default ForgottenPasswordScreen;
