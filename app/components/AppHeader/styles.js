import { Platform, StyleSheet } from 'react-native';

import { bp } from '../../project/utils/relativeUnitUtils';

export default StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

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
    shadowEffect: {
        zIndex: 9999,

        ...Platform.select({
            ios: {
                shadowOffset: {
                    width: -bp(1),
                    height: bp(3),
                },
                shadowOpacity: 0.3,
                shadowColor: 'rgba(0,0,0,0.3)',
            },
            android: {
                elevation: 6,
            },
        }),

        backgroundColor: '#fff',
    }
})