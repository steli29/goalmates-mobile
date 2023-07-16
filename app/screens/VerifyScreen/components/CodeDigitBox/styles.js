import { StyleSheet } from 'react-native';

import { bp } from '../../../../project/utils/relativeUnitUtils';
import { fontStylePicker } from '../../../../project/utils/styleUtils';
import { FONT_FAMILY, FONT_WEIGHT } from '../../../../project/constants';

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
        ...fontStylePicker(FONT_FAMILY.NUNITO, FONT_WEIGHT.LIGHT),
        fontSize: bp(36),
    },
});
