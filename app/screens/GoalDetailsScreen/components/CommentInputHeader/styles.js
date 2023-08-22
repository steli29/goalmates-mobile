import { StyleSheet } from 'react-native';

import { bp } from '../../../../project/utils/relativeUnitUtils';
import { fontStylePicker } from '../../../../project/utils/styleUtils';
import { FONT_FAMILY, FONT_WEIGHT } from '../../../../project/constants';

export default StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',

        paddingTop: bp(10),
        paddingHorizontal: bp(10),
        paddingBottom: bp(5),

        backgroundColor: '#fff',
        borderTopColor: 'rgba(0, 0, 0, 0.2)',
        borderTopWidth: bp(1),
    },
    imageContainer: {
        flexDirection: 'row',
    },
    imageStyle: {
        width: bp(60),
        height: bp(60),
        borderRadius: bp(10),
    },
    closeButtonStyle: {
        bottom: bp(5),
    },
    titleInputContainer: {
        flex: 1,
        alignSelf: 'flex-end',

        marginLeft: bp(10),
        marginRight: bp(10),
        paddingHorizontal: bp(10),
        height: bp(30),

        borderRadius: bp(10),
        borderColor: 'rgba(196, 196, 196, 0.5)',
        borderWidth: bp(1),
    },
    titleInputStyle: {
        flex: 1,
        ...fontStylePicker(FONT_FAMILY.NUNITO, FONT_WEIGHT.NORMAL),
        fontSize: bp(15),
        lineHeight: bp(20),
        letterSpacing: bp(-0.23),
        paddingTop: bp(-2),
    },
});
