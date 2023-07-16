import { StyleSheet } from 'react-native';

import { bp } from '../../../../project/utils/relativeUnitUtils';
import { fontStylePicker } from '../../../../project/utils/styleUtils';
import { FONT_FAMILY, FONT_WEIGHT } from '../../../../project/constants';

export default StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelTextStyle: {
        ...fontStylePicker(FONT_FAMILY.POPPINS, FONT_WEIGHT.NORMAL),
        fontSize: bp(14),

        color: '#000000'
    },
    numberTextStyle: {
        ...fontStylePicker(FONT_FAMILY.POPPINS, FONT_WEIGHT.SEMI_BOLD),
        fontSize: bp(14),
        lineHeight: bp(21),

        color: '#000000'
    },
})