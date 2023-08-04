import { StyleSheet } from 'react-native';

import { bp } from '../../project/utils/relativeUnitUtils';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,

        paddingHorizontal: bp(16),
        paddingVertical: bp(25),

        backgroundColor: '#fff',
    },
    editButtonContainerStyle: {
        marginTop: bp(30),
    }
});