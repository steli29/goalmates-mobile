import { StyleSheet } from 'react-native';

import { bp } from '../../project/utils/relativeUnitUtils';
import { fontStylePicker } from '../../project/utils/styleUtils';
import { FONT_FAMILY, FONT_WEIGHT } from '../../project/constants';

export default StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',

        width: '100%',
        height: bp(43),

        borderRadius: bp(6),

        backgroundColor: '#7B61FF',
    },
    labelTextStyle: {
        ...fontStylePicker(FONT_FAMILY.NUNITO, FONT_WEIGHT.SEMI_BOLD),
        fontSize: bp(14),
        color: '#FFFFFF',
    },
});
