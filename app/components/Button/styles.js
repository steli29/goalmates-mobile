import { StyleSheet } from 'react-native';

import { bp } from '../../project/utils/relativeUnitUtils';

export default StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',

        width: '100%',
        height: bp(43),

        borderRadius: bp(6),

        backgroundColor: "#7B61FF",
    },
    labelTextStyle: {
        fontFamily: 'Nunito',
		fontSize: bp(14),
		fontWeight: '600',
		color: "#FFFFFF",
    }
});
