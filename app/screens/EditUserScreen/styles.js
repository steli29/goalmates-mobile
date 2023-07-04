import { StyleSheet } from 'react-native';
import { bp } from '../../project/utils/relativeUnitUtils';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        
        paddingTop: bp(20),
        paddingHorizontal: bp(27),

        backgroundColor: '#fff',
    },
    avatarAndEditButtonContainerStyle: {
        width: bp(67),
        height: bp(67),

        marginBottom: bp(20),
    },
    editPhotoButtonStyle: {
        position: 'absolute',
        bottom: 0,
        right: 0,
    },
    buttonContainerStyle: {
        marginTop: bp(38),

        backgroundColor: '#006175',
    }
});
