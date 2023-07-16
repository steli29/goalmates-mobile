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
    backButtonContainer: {
        marginTop: bp(28),
    },
    forgottenPasswordTextHeader: {
        marginTop: bp(13),
        marginBottom: bp(36),
    },
    mainTextStyle: {
        marginBottom: bp(32),

        ...fontStylePicker(FONT_FAMILY.NUNITO, FONT_WEIGHT.NORMAL),
		fontSize: bp(14),
		color: "#312E49",
    },
    buttonContainerStyle: {
        marginTop: bp(64),
    },
    buttonContainerInactiveStyle: {
        backgroundColor: '#D9D9D9',
    },
});
