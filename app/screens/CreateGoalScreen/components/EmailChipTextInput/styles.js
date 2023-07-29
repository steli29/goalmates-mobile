import { Platform, StyleSheet } from 'react-native';

import { bp } from '../../../../project/utils/relativeUnitUtils';
import { fontStylePicker } from '../../../../project/utils/styleUtils';
import { FONT_FAMILY, FONT_WEIGHT } from '../../../../project/constants';

export default StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        
        paddingHorizontal: bp(10),
        paddingVertical: bp(4),

        borderWidth: bp(1),
		borderColor: '#A2A2A6',
		borderRadius: bp(4),

        backgroundColor: '#F2F2F2',
    },
    textInputStyle: {
        ...fontStylePicker(FONT_FAMILY.NUNITO, FONT_WEIGHT.SEMI_BOLD),
		fontSize: bp(14),
		color: "#312E49",
    },
    textInputContainer: {
        marginVertical: Platform.OS === 'ios' ? 10 : -2,
        marginHorizontal: Platform.OS === 'android' ? -2 : 0,
    },
    tagContainerStyle: {
        paddingVertical: 0,
    }
});
