import { StyleSheet } from 'react-native';

import { fontStylePicker } from '../../project/utils/styleUtils';
import { FONT_FAMILY, FONT_WEIGHT } from '../../project/constants';
import { bp } from '../../project/utils/relativeUnitUtils';

export default StyleSheet.create({
    mainContainer: {
        backgroundColor: '#ffffff',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    contentContainerStyle: {
        padding: bp(20),
    },
    notificationRowContainer: {
        justifyContent: 'center',

        marginLeft: bp(7),
    },
    userNameTextStyle: {
        width: bp(250),

        ...fontStylePicker(FONT_FAMILY.POPPINS, FONT_WEIGHT.SEMI_BOLD),
        fontSize: bp(15),
        color: '#000',
    },
    notificationTextStyle: {
        ...fontStylePicker(FONT_FAMILY.POPPINS, FONT_WEIGHT.MEDIUM),
        fontSize: bp(15),
        color: '#000',
    },
    dateText: {
        ...fontStylePicker(FONT_FAMILY.POPPINS, FONT_WEIGHT.MEDIUM),
        fontSize: bp(12),
        color: '#000',
    },
    separator: {
        height: bp(21),
    },
});
