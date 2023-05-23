import { StyleSheet } from 'react-native';
import { bp } from '../../project/utils/relativeUnitUtils';

export default StyleSheet.create({
    mainContainer: {
        alignItems: 'center',
        alignSelf: 'center',

        width: bp(302),
        minHeight: bp(158),

        paddingTop: bp(24),
        paddingBottom: bp(10),
        paddingHorizontal: bp(12),

        borderRadius: bp(24),

        backgroundColor: '#FFFFFF',
    },
    errorHeaderText: {
        marginBottom: bp(8),

        fontFamily: 'Nunito',
        fontSize: bp(16),
        fontWeight: '700',
        color: '#000000',
    },
    errorDetailsText: {
        fontFamily: 'Nunito',
        fontSize: bp(14),
        fontWeight: '400',
        color: '#000000',
    },
    divider: {
        width: '100%',
        borderWidth: bp(1),
        borderColor: "#EBEBEB",
    },
    closeButton: {
        justifyContent: 'center',
        alignItems: 'center',

        width: bp(210),
        height: bp(43),
    },
    closeButtonText: {
        fontFamily: 'Nunito',
        fontSize: bp(16),
        fontWeight: '700',
        color: '#232323',
    },
    errorFooterContainer: {
        alignItems: 'center',

        position: 'absolute',
        bottom: bp(0),

        width: '100%',

    }
})