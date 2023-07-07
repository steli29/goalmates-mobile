import { StyleSheet } from 'react-native';

import { bp } from '../../../../project/utils/relativeUnitUtils';

export default StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelTextStyle: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontSize: bp(14),

        color: '#000000'
    },
    numberTextStyle: {
        fontFamily: 'Poppins',
        fontWeight: '600',
        fontSize: bp(14),
        lineHeight: bp(21),

        color: '#000000'
    },
})