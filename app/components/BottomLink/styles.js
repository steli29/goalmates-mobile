import { StyleSheet } from 'react-native';

import { bp } from '../../project/utils/relativeUnitUtils';

export default StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        alignSelf: 'center',

        marginBottom: bp(40),
    },
    textStyle: {
        fontFamily: 'Nunito',
		fontSize: bp(12),
        lineHeight: bp(15),
		fontWeight: '500',
    },
    headLineTextStyle: {
		color: "#747980",
    },
    buttonLabelText: {
		color: "#2805FF", 
    }
});
