import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Button from '../../components/Button/Button';
import BottomLink from '../../components/BottomLink/BottomLink';

import styles from './styles';
import AuthHeadLine from '../../components/AuthHeadLine/AuthHeadLine';
import CodeVerification from '../../components/CodeVerification/CodeVerification';

const VerifyScreen = () => {
    const email = 'test@gmail.com';
    return (
        <SafeAreaView style={styles.mainContainer}>
            <View>
                <AuthHeadLine
                    headline='Check your Mail'
                    additionalStyle={styles.checkMailHeaderTextStyle}
                />
                <View style={styles.confirmationMessageContainer}>
                    <Text style={[styles.mainTextStyle, styles.confirmationMessageTextStyle]}>
                        <Text>We've sent a 6-digit confirmation code to </Text>
                        <Text style={styles.emailTextStyle}>{email}</Text>
                        <Text>. Make sure you enter correct code.</Text>
                    </Text>
                </View>
                <CodeVerification />
                <Button
                    label='Verify'
                    onButtonPress={() => undefined}
                    buttonContainerStyle={styles.buttonContainerStyle}
                />
            </View>
            <BottomLink
                headline="Didn't recieve code?"
                buttonLabel='Resend Code'
                onLabelPress={() => undefined}
            />
        </SafeAreaView>
    );
};

export default VerifyScreen;
