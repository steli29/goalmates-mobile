import { StyleSheet } from "react-native";

export default StyleSheet.create({
	mainContainer: {
		flexDirection: "column",
		alignItems: "flex-start",

		marginBottom: 8,
	},
	textInputStyle: {
		width: 250,

		paddingHorizontal: 4,

		borderWidth: 1,
		borderColor: '#000',
		borderRadius: 5
	},
	labelTextStyle: {
		fontSize: 16,
		fontWeight: '400',
	}
});
