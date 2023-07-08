import { StyleSheet } from 'react-native';
import { bp } from '../../../../project/utils/relativeUnitUtils';

export default StyleSheet.create({
	mainContainer: {
		flexDirection: "row",
		justifyContent: 'space-between',
		alignItems: "center",
		
		height: bp(30),

		marginBottom: bp(10),
	},
    buttonLabelStyle: {
		fontFamily: "Nunito",
		fontWeight: "400",
		fontSize: bp(14),
		lineHeight: bp(20),
	},
	buttonLabelSelectedStyle: {
		fontWeight: "700",
		fontSize: bp(16),
	},
})