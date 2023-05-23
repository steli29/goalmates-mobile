import { StyleSheet } from 'react-native';

import { bp } from '../../project/utils/relativeUnitUtils';

export default StyleSheet.create({
    mainContainer: {
        justifyContent: 'space-between',
    },
    rowContainer: {
        flexDirection: 'row'
    },
    checkBoxContainer: {
        justifyContent: 'center',
    },
    checkboxStyle: {
        width: bp(15),
        height: bp(15),
    },
    mainTextStyle: {
        fontFamily: 'Nunito',
        fontSize: bp(12),
        lineHeight: bp(15),
        fontWeight: '500',
    },
    rememberMeText: {
        marginLeft: bp(8),

        color: '#747980',
    },
    forgottenLinkText: {
        color: '#2805FF',
    }
})