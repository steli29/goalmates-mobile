import { StyleSheet } from 'react-native';

import { bp } from '../../project/utils/relativeUnitUtils';

export default StyleSheet.create({
    mainContainer: {
        marginTop: bp(20),
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

        fontFamily: 'Poppins',
        fontWeight: '600',
        fontSize: bp(18),
        lineHeight: bp(27),

        color: '#000000'
    },
    settingsButtonStyle: {
        position: 'absolute',
        right: 0,
    },
    buttonStyle: {
        backgroundColor: '#006175',
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

        fontFamily: 'Poppins',
        fontWeight: '600',
        fontSize: bp(14),
        lineHeight: bp(21),

        color: '#000000'
    },
    goalCardStyle: {
        alignItems: 'center',
    },
    separatorStyle: {
        height: bp(25),
    }
})