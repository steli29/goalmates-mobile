import { StyleSheet } from 'react-native';

import { bp } from '../../../../project/utils/relativeUnitUtils';

export default StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',

        width: bp(47),
        height: bp(65),

        borderColor: '#CDCED1',
        borderWidth: bp(1),
        borderRadius: bp(6),

        backgroundColor: '#F5F6F7',
    },
    symbolTextStyle: {
        fontFamily: 'Nunito',
        fontSize: bp(36),
        fontWeight: '300',
    }
});
