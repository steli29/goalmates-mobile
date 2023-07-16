import { StyleSheet } from 'react-native';

import { bp } from '../../project/utils/relativeUnitUtils';
import { fontStylePicker } from '../../project/utils/styleUtils';
import { FONT_FAMILY, FONT_WEIGHT } from '../../project/constants';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'space-between',

        paddingLeft: bp(24),
        paddingRight: bp(24),

        backgroundColor: '#FFFFFF',
    },
    confirmationMessageContainer: {
        marginBottom: bp(48),
    },
    checkMailHeaderTextStyle: {
        marginTop: bp(65),
        marginBottom: bp(8),
    },
    mainTextStyle: {
        ...fontStylePicker(FONT_FAMILY.NUNITO, FONT_WEIGHT.MEDIUM),
		fontSize: bp(14),
		color: "#312E49",
    },
    emailTextStyle: {
        ...fontStylePicker(FONT_FAMILY.NUNITO, FONT_WEIGHT.BOLD),
    },
    buttonContainerStyle: {
        marginTop: bp(74),
    }
})