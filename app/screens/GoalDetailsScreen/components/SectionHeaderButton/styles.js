import { StyleSheet } from 'react-native';
import { fontStylePicker } from '../../../../project/utils/styleUtils';
import { FONT_FAMILY, FONT_WEIGHT } from '../../../../project/constants';
import { bp } from '../../../../project/utils/relativeUnitUtils';

export default StyleSheet.create({
    mainContainer: {
        height: bp(30),
        width: bp(150),

        justifyContent: 'center',
        alignItems: 'center',

        borderRadius: bp(10),
    },
    buttonLabelStyle: {
        ...fontStylePicker(FONT_FAMILY.POPPINS, FONT_WEIGHT.NORMAL),
        fontSize: bp(16),
    },
    selectedButtonBackground: {
        backgroundColor: 'rgba(196, 196, 196, 0.5)',
	},
})