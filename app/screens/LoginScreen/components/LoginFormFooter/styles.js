import { StyleSheet } from 'react-native';

import { bp } from '../../../../project/utils/relativeUnitUtils';
import { fontStylePicker } from '../../../../project/utils/styleUtils';
import { FONT_FAMILY, FONT_WEIGHT } from '../../../../project/constants';

export default StyleSheet.create({
    mainContainer: {
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    forgottenLinkText: {
        ...fontStylePicker(FONT_FAMILY.NUNITO, FONT_WEIGHT.MEDIUM),
        fontSize: bp(12),
        lineHeight: bp(15),
        color: '#2805FF',
    }
})