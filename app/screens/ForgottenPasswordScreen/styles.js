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
    backButtonContainer: {
        marginTop: bp(28),
    },
    forgottenPasswordTextHeader: {
        marginTop: bp(13),
        marginBottom: bp(36),
    },
    mainTextStyle: {
        marginBottom: bp(32),

        fontFamily: 'Nunito',
		fontSize: bp(14),
		color: "#312E49",
    },
    buttonContainerStyle: {
        marginTop: bp(64),
    },
    buttonContainerInactiveStyle: {
        backgroundColor: '#D9D9D9',
    },
});
