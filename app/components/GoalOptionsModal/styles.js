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

        paddingHorizontal: bp(20),
        paddingVertical: bp(30),

        borderTopRightRadius: bp(10),
        borderTopLeftRadius: bp(10),

    },
    optionsContainer: {
        borderRadius: bp(10),

        backgroundColor: 'rgba(0, 0, 0, 0.06)',
    },
    optionBoxStyle: {
        justifyContent: 'center',

        height: bp(35),

        paddingHorizontal: bp(15),
    },
    borderBoxStyle: {
        borderBottomColor: '#FFFFFF',
        borderBottomWidth: bp(1),
    },
    optionTextStyle: {
        ...fontStylePicker(FONT_FAMILY.NUNITO, FONT_WEIGHT.SEMI_BOLD),
        fontSize: bp(15),
    },
    lastOptionTextColor: {
        color: '#FF1919',
    }
})