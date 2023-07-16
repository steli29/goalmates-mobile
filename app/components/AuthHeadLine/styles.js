import { StyleSheet } from 'react-native';

import { bp } from '../../project/utils/relativeUnitUtils';
import { fontStylePicker } from '../../project/utils/styleUtils';
import { FONT_FAMILY, FONT_WEIGHT } from '../../project/constants';

export default StyleSheet.create({
    textStyle: {
        ...fontStylePicker(FONT_FAMILY.POPPINS, FONT_WEIGHT.SEMI_BOLD),
        fontSize: bp(28),
        lineHeight: bp(34.3),
        color: "#312E49",
    }
})