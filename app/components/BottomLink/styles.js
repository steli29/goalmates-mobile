import { StyleSheet } from 'react-native';

import { bp } from '../../project/utils/relativeUnitUtils';
import { fontStylePicker } from '../../project/utils/styleUtils';
import { FONT_FAMILY, FONT_WEIGHT } from '../../project/constants';

export default StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        alignSelf: 'center',

        marginBottom: bp(40),
    },
    textStyle: {
        ...fontStylePicker(FONT_FAMILY.NUNITO, FONT_WEIGHT.MEDIUM),
        fontSize: bp(12),
        lineHeight: bp(15),
    },
    headLineTextStyle: {
        color: '#747980',
    },
    buttonLabelText: {
        color: '#2805FF',
    },
});
