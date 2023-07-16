import { StyleSheet } from 'react-native';

import { bp } from '../../project/utils/relativeUnitUtils';
import { fontStylePicker } from '../../project/utils/styleUtils';
import { FONT_FAMILY, FONT_WEIGHT } from '../../project/constants';

export default StyleSheet.create({
    modalContainer: {
        justifyContent: 'flex-end',

        margin: 0,
    },
    mainContainer: {
        backgroundColor: '#fff',
        paddingVertical: bp(30),
        paddingHorizontal: bp(16),

        borderTopLeftRadius: bp(28),
        borderTopRightRadius: bp(28),
    },
    buttonsContainerWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    headerTextStyle: {
        ...fontStylePicker(FONT_FAMILY.POPPINS, FONT_WEIGHT.SEMI_BOLD),
        fontSize: bp(19),
        lineHeight: bp(25),
        textAlign: 'center',

        marginBottom: bp(20),
    },
    messageTextStyle: {
        ...fontStylePicker(FONT_FAMILY.POPPINS, FONT_WEIGHT.NORMAL),
        fontSize: bp(14),
        lineHeight: bp(20),
        textAlign: 'center',
        
        marginBottom: bp(20),
    },
    buttonStyle: {
        width: bp(130),
    },
    discarButtonStyle: {
        backgroundColor: 'rgba(196, 196, 196, 0.8)',
    },
    discardButtonTextStyle: {
        color: 'rgba(0, 0, 0, 0.5)',
    }
})