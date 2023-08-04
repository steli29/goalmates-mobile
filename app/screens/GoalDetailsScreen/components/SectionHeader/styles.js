import { StyleSheet } from 'react-native';

import { bp } from '../../../../project/utils/relativeUnitUtils';

export default StyleSheet.create({
    mainContainer: {
        flexDirection: 'row',
        
        marginVertical: bp(15),
        
        borderRadius: bp(11),
        borderWidth: bp(1),
        borderColor: 'rgba(196, 196, 196, 0.5)',
    },
});
