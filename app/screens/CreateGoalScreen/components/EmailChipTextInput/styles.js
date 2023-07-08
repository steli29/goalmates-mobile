import { Platform, StyleSheet } from 'react-native';

import { bp } from '../../../../project/utils/relativeUnitUtils';

export default StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        
        paddingHorizontal: bp(10),
        paddingVertical: bp(4),

        borderWidth: bp(1),
		borderColor: '#A2A2A6',
		borderRadius: bp(4),

        backgroundColor: '#F2F2F2',
    },
    textInputStyle: {
        fontFamily: 'Nunito',
		fontSize: bp(14),
		fontWeight: '600',
		color: "#312E49",
    },
    textInputContainer: {
        marginVertical: Platform.OS === 'ios' ? 10 : -2,
    },
    tagContainerStyle: {
        paddingVertical: 0,
    }
});
