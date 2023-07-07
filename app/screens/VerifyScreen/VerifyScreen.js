import React from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PropTypes from 'prop-types';

import Button from '../../components/Button/Button';
import BottomLink from '../../components/BottomLink/BottomLink';
import AuthHeadLine from '../../components/AuthHeadLine/AuthHeadLine';
import CodeVerification from './components/CodeVerification/CodeVerification';

import styles from './styles';

const VerifyScreen = ({ route }) => {
    const { registerUser, email } = route.params;

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
                    onButtonPress={registerUser}
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

VerifyScreen.propTypes = {
    route: PropTypes.object,
}

export default VerifyScreen;
