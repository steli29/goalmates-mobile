import { StyleSheet } from 'react-native';
import { bp } from '../../../../project/utils/relativeUnitUtils';
import { fontStylePicker } from '../../../../project/utils/styleUtils';
import { FONT_FAMILY, FONT_WEIGHT } from '../../../../project/constants';

export default StyleSheet.create({
    mainContainer: {
        flexDirection: "row",
		alignItems: "flex-end",

		marginBottom: bp(14),
		marginLeft: bp(15),
		marginRight: bp(15),
    },
    sendCommentContainer: {
        justifyContent: "center",
		
		height: bp(44),

		marginLeft: bp(10),
    },
    commentInputContainer: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",

		marginLeft: bp(10),
		paddingTop: bp(13),
		paddingHorizontal: bp(17),
		paddingBottom: bp(11),

		borderRadius: bp(30),
        borderColor: 'rgba(196, 196, 196, 0.5)',
		borderWidth: bp(1),

        ...fontStylePicker(FONT_FAMILY.NUNITO, FONT_WEIGHT.NORMAL),
		fontSize: bp(15),
		lineHeight: bp(20),
		letterSpacing: bp(-0.23),
	},
})