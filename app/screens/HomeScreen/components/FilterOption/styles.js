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
	mainContainerSelected: {
		backgroundColor: 'rgba(123,97,255, 0.1)',
		borderWidth: bp(1),
		borderColor: '#7b61ff',

		borderRadius: bp(20),
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