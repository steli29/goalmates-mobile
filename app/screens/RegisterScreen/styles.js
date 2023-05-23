import { StyleSheet } from 'react-native';

import { bp } from '../../project/utils/relativeUnitUtils';

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'space-between',

        paddingLeft: bp(24),
        paddingRight: bp(24),

        backgroundColor: '#FFFFFF',
    },
    registerTextHeader: {
        marginTop: bp(65),
        marginBottom: bp(36),
    },
    buttonContainerStyle: {
        marginTop: bp(51),
    },
});
