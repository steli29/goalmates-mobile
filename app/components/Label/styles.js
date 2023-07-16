import { StyleSheet } from 'react-native';

import { bp } from '../../project/utils/relativeUnitUtils';
import { fontStylePicker } from '../../project/utils/styleUtils';
import { FONT_FAMILY, FONT_WEIGHT } from '../../project/constants';

export default StyleSheet.create({
    labelTextStyle: {
		marginBottom: bp(2),

		...fontStylePicker(FONT_FAMILY.NUNITO, FONT_WEIGHT.SEMI_BOLD),
		fontSize: bp(14),
		color: "#312E49",
	}
})