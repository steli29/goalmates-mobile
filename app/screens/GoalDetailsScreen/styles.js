import { StyleSheet } from 'react-native';
import { bp } from '../../project/utils/relativeUnitUtils';

export default StyleSheet.create({
    mainContainer: {
        alignItems: 'center',

        paddingVertical: bp(15),

        backgroundColor: '#fff',
    },
    loadingSpinnerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})