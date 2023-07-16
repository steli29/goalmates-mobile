import { StyleSheet } from 'react-native';

import { bp } from '../../project/utils/relativeUnitUtils';
import { fontStylePicker } from '../../project/utils/styleUtils';
import { FONT_FAMILY, FONT_WEIGHT } from '../../project/constants';

export default StyleSheet.create({
    mainContainer: {
        paddingTop: bp(20),
        paddingBottom: bp(50),
        paddingHorizontal: bp(28),

        backgroundColor: '#FFFFFF',
    },
    topRowWithNamedContainer: {
        flexDirection: 'row',
        alignItems: 'center',

        marginBottom: bp(12),
    },
    nameLabel: {
        marginLeft: bp(15),

        ...fontStylePicker(FONT_FAMILY.POPPINS, FONT_WEIGHT.SEMI_BOLD),
        fontSize: bp(18),
        lineHeight: bp(27),

        color: '#000000'
    },
    settingsButtonStyle: {
        position: 'absolute',
        right: 0,
    },
    labelBoxContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',

        width: '100%',

        marginTop: bp(20),
    },
    divider: {
        borderWidth: bp(1),
    },
    postsLabelText: {
        marginTop: bp(20),

        ...fontStylePicker(FONT_FAMILY.POPPINS, FONT_WEIGHT.SEMI_BOLD),
        fontSize: bp(14),
        lineHeight: bp(21),

        color: '#000000'
    },
    goalCardStyle: {
        alignItems: 'center',
    },
    separatorStyle: {
        height: bp(25),
    },
    loadingSpinnerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})