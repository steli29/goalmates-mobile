import { Platform, StyleSheet } from 'react-native';

import { bp } from '../../project/utils/relativeUnitUtils';
import { fontStylePicker } from '../../project/utils/styleUtils';
import { FONT_FAMILY, FONT_WEIGHT } from '../../project/constants';

export default StyleSheet.create({
    safeAreaContainer: {
        backgroundColor: '#fff',
    },
    internalContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',

        height: bp(60),
        
        paddingHorizontal: bp(25),
    },
    headerText: {
        flex: 1,

        right: bp(10),

        textAlign: 'center',
        ...fontStylePicker(FONT_FAMILY.NUNITO, FONT_WEIGHT.BOLD),
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
    },
});
