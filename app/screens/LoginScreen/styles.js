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
    loginTextHeader: {
        marginTop: bp(65),
        marginBottom: bp(36),
    },
    buttonContainerStyle: {
        marginTop: bp(64),
    },
    errorMessage: {
        marginTop: bp(10),
        fontSize: bp(15),
        fontWeight: '600',
        color: '#C30010',
    },
});
