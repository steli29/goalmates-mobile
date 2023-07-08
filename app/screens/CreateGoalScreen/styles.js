import { StyleSheet } from 'react-native';

import { bp } from '../../project/utils/relativeUnitUtils';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,

        paddingHorizontal: bp(16),
        paddingVertical: bp(25),

        backgroundColor: '#fff',
    },
    labelTextStyle: {
        marginBottom: bp(2),

        fontFamily: 'Nunito',
        fontSize: bp(14),
        fontWeight: '600',
        color: '#312E49',
    },
    dropDownBorderStyle: {
        borderWidth: bp(1),
		borderColor: '#A2A2A6',
		borderRadius: bp(4)
    },
    dropDownPickerStyle: {
        backgroundColor: '#F2F2F2',
    },
    uploadButtonContainerStyle: {
        marginTop: bp(30),
    }
});
