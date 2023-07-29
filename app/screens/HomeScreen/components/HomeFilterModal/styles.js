import { StyleSheet } from "react-native";

import {bp} from "../../../../project/utils/relativeUnitUtils";
import { fontStylePicker } from '../../../../project/utils/styleUtils';
import { FONT_FAMILY, FONT_WEIGHT } from '../../../../project/constants';

export default StyleSheet.create({
    modalContainer: {
        justifyContent: 'flex-end',

        margin: 0,
    },
    mainContainer: {
        justifyContent: 'center',
        height: bp(230),

        paddingHorizontal: bp(25),

        borderTopLeftRadius: bp(28),
        borderTopRightRadius: bp(28),

        backgroundColor: '#EBEBF0',
    },
    headerContainer: {
        marginBottom: bp(30),
    },
    closeIconsStyle: {
        alignSelf: 'flex-end',
    },
    headerTitleStyle: {
        alignSelf: 'center',
        position: 'absolute',

        ...fontStylePicker(FONT_FAMILY.NUNITO, FONT_WEIGHT.MEDIUM),
		fontSize: bp(14),
    }
})