import { StyleSheet } from "react-native";

import { bp } from '../../project/utils/relativeUnitUtils';

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

		borderWidth: bp(1),
		borderColor: '#A2A2A6',
		borderRadius: bp(4)
	},
	labelTextStyle: {
		marginBottom: bp(2),

		fontFamily: 'Nunito',
		fontSize: bp(14),
		fontWeight: '600',
		color: "#312E49",
	}
});
