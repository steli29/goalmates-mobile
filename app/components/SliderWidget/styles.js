import { StyleSheet } from 'react-native';
import { fontStylePicker } from '../../project/utils/styleUtils';
import { FONT_FAMILY, FONT_WEIGHT } from '../../project/constants';
import { bp } from '../../project/utils/relativeUnitUtils';

export default StyleSheet.create({
    countText: {
        ...fontStylePicker(FONT_FAMILY.POPPINS, FONT_WEIGHT.NORMAL),
        fontSize: bp(12),
    },
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})