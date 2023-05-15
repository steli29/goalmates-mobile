import { StyleSheet } from 'react-native';

import { bp } from '../../project/utils/relativeUnitUtils';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'space-between',

        paddingLeft: bp(24),
        paddingRight: bp(24),

        backgroundColor: '#FFFFFF',
    },
    confirmationMessageContainer: {
        marginBottom: bp(48),
    },
    checkMailHeaderTextStyle: {
        marginTop: bp(65),
        marginBottom: bp(8),
    },
    mainTextStyle: {
        fontFamily: 'Nunito',
		fontSize: bp(14),
		color: "#312E49",
    },
    confirmationMessageTextStyle: {
		fontWeight: '500',
    },
    emailTextStyle: {
		fontWeight: '700',
    },
    buttonContainerStyle: {
        marginTop: bp(74),
    }
})