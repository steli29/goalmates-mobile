import { Platform, StyleSheet } from 'react-native';

import { bp } from '../../project/utils/relativeUnitUtils';
import { fontStylePicker } from '../../project/utils/styleUtils';
import { FONT_FAMILY, FONT_WEIGHT } from '../../project/constants';

export default StyleSheet.create({
    mainContainer: {
        alignItems: 'center',

        minHeight: bp(75),

        padding: bp(11),

        borderRadius: bp(12),

        backgroundColor: '#F5F8FF',
    },
    shadowEffect: {
        ...Platform.select({
            ios: {
                shadowOffset: {
                    width: bp(0),
                    height: bp(2),
                },
                shadowOpacity: 0.3,
                shadowColor: 'rgba(0, 0, 0, 0.08)',
            },
            android: {
                elevation: 6,
            },
        }),
    },
    row: {
        flexDirection: 'row',
    },
    textContainer: {
        flex: 1,
        marginLeft: bp(8),
    },
    titleTextStyle: {
        ...fontStylePicker(FONT_FAMILY.NUNITO, FONT_WEIGHT.NORMAL),
        fontSize: bp(16),
        lineHeight: bp(21.82),
        color: '#212529',
    },
    descriptionTextStyle: {
        ...fontStylePicker(FONT_FAMILY.POPPINS, FONT_WEIGHT.LIGHT),
        fontSize: bp(12),
        lineHeight: bp(18),
        color: '#6C757D',
    },
    progressBarContainer: {
        flexDirection: 'column',

        width: '100%',

        marginTop: bp(12),
    },
    divider: {
        width: '100%',

        marginBottom: bp(6),
    
        borderWidth: bp(2),
        borderRadius: bp(2),
        borderColor: '#E0E0E0',
    },
    deadlineText: {
        marginLeft: bp(25.25),
        marginRight: bp(18),
    },
});
