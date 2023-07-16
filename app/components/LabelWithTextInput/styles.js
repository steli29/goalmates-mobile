import { StyleSheet } from "react-native";

import { bp } from '../../project/utils/relativeUnitUtils';
import { fontStylePicker } from '../../project/utils/styleUtils';
import { FONT_FAMILY, FONT_WEIGHT } from '../../project/constants';

export default StyleSheet.create({
	mainContainer: {
		alignItems: "flex-start",

		marginBottom: bp(10),
	},
	textInputStyle: {
		width: '100%',
		height: bp(43),

		paddingVertical: bp(6),
		paddingHorizontal: bp(12),
		gap: bp(17),

		backgroundColor: '#F2F2F2',

		borderWidth: bp(1),
		borderColor: '#A2A2A6',
		borderRadius: bp(4)
	},
	textInputStyleMultiline: {
		height: bp(110),
	},
	labelTextStyle: {
		marginBottom: bp(2),

		...fontStylePicker(FONT_FAMILY.NUNITO, FONT_WEIGHT.SEMI_BOLD),
		fontSize: bp(14),
		color: "#312E49",
	},
});
