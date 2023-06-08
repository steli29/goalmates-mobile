import { StyleSheet } from 'react-native';

import { bp } from '../../project/utils/relativeUnitUtils';

export default StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        paddingTop: bp(40),
        paddingBottom: bp(10),
        paddingHorizontal: bp(25),
    },
    headerText: {
        flex: 1,
        textAlign: 'center',

        right: bp(10),

        fontFamily: 'Nunito',
        fontWeight: '700',
        fontSize: bp(23),
        
        color: '#000000',
    },
})