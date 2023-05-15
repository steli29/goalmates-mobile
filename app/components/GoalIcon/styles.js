import { StyleSheet } from 'react-native';

import { bp } from '../../project/utils/relativeUnitUtils';

export default StyleSheet.create({
    mainContainer: {
        justifyContent: 'center',
        alignItems: 'center',

        width: bp(53),
        height: bp(53),

        borderRadius: bp(10),

        backgroundColor: '#FFFFFF',
    },
});
