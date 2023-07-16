import { StyleSheet } from 'react-native';
import { bp } from '../../../../project/utils/relativeUnitUtils';
import { fontStylePicker } from '../../../../project/utils/styleUtils';
import { FONT_FAMILY, FONT_WEIGHT } from '../../../../project/constants';

export default StyleSheet.create({
	mainContainer: {
		flexDirection: "row",
		justifyContent: 'space-between',
		alignItems: "center",
		
		height: bp(30),

		marginBottom: bp(10),
	},
    buttonLabelStyle: {
		...fontStylePicker(FONT_FAMILY.NUNITO, FONT_WEIGHT.NORMAL),
		fontSize: bp(14),
		lineHeight: bp(20),
	},
	buttonLabelSelectedStyle: {
		...fontStylePicker(FONT_FAMILY.NUNITO, FONT_WEIGHT.BOLD),
		fontSize: bp(16),
	},
})