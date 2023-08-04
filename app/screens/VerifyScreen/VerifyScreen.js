import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import PropTypes from 'prop-types';

import { useStore } from '../../zustand/root-reducer';
import { Screens } from '../../project/constants';

import Button from '../../components/Button/Button';
import BottomLink from '../../components/BottomLink/BottomLink';
import AuthHeadLine from '../../components/AuthHeadLine/AuthHeadLine';
import CodeVerification from './components/CodeVerification/CodeVerification';

import styles from './styles';
import ErrorModal from '../../components/ErrorModal/ErrorModal';

const VerifyScreen = ({ route, navigation }) => {
    const verify = useStore((state) => state.verify);
    const myUser = useStore((state) => state.myUser);
    const clearError = useStore((state) => state.clearError);

    const [code, setCode] = useState('');

    const { email } = route.params;

    const verifyUser = async () => {
        await verify(email, code);
    }

    useEffect(() => {
        if(myUser.status === 'ok from verify') {
            navigation.navigate(Screens.LOGIN);
        }
    }, [myUser]);

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ErrorModal 
                error={myUser.error}
                onErrorClear={clearError}
            />
            <View>
                <AuthHeadLine
                    headline='Check your Mail'
                    additionalStyle={styles.checkMailHeaderTextStyle}
                />
                <View style={styles.confirmationMessageContainer}>
                    <Text style={styles.mainTextStyle}>
                        <Text>We've sent a 6-digit confirmation code to </Text>
                        <Text style={styles.emailTextStyle}>{email}</Text>
                        <Text>. Make sure you enter correct code.</Text>
                    </Text>
                </View>
                <CodeVerification
                    value={code}
                    setValue={setCode}
                />
                <Button
                    label='Verify'
                    onButtonPress={verifyUser}
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
