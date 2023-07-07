import { StyleSheet } from 'react-native';

import { bp } from '../../../../project/utils/relativeUnitUtils';

export default StyleSheet.create({
    mainContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row'

    },
    forgottenLinkText: {
        fontFamily: 'Nunito',
        fontSize: bp(12),
        lineHeight: bp(15),
        fontWeight: '500',
        color: '#2805FF',
    }
})