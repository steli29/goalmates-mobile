import { StyleSheet } from 'react-native';
import { bp } from '../../../../project/utils/relativeUnitUtils';

export default StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',

        height: bp(72),
        width: '100%',

        paddingHorizontal: bp(16),

        borderRadius: bp(12),

        backgroundColor: '#F5F8FF',
    },
    mainContainerWithDropDown: {
        paddingHorizontal: 0,
    },
    textLabelStyle: {
        fontFamily: 'Nunito',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: bp(12),
        color: '#6C757D',
    },
    textValueStyle: {
        fontFamily: 'Poppins',
        fontWeight: '400',
        fontStyle: 'normal',
        fontSize: bp(16),
        color: '#333',
    },
    dropDownMainStyle: {
        // borderWidth: 0,
        // backgroundColor: 'red',
        // backgroundColor: '#F5F8FF',
    },
    dropDownDropContainerStyle: {
        borderWidth: 0,
        // backgroundColor: 'red',
        // backgroundColor: '#F5F8FF',
    },
    dropDownContainerStyle: {
        paddingHorizontal: 0,
    }
});
