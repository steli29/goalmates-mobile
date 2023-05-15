import { StyleSheet } from 'react-native';

import { bp } from '../../project/utils/relativeUnitUtils';

export default StyleSheet.create({
    mainContainer: {
        width: bp(335),
        
        paddingHorizontal: bp(19),

        borderRadius: bp(10),

        backgroundColor: 'rgba(196, 196, 196, 0.2)',
    },
    rowContainer: {
        flexDirection: 'row',
    },
    nameAndDateContainer: {
        marginLeft: bp(7),
    },
    cardHeaderContainer: {
        marginTop: bp(10),
        marginBottom: bp(11),
    },
    nameText: {
        fontFamily: 'Poppins',
        fontSize: bp(15),
        fontWeight: '600',
        lineHeight: bp(22.5),
        color: '#000000',
        fontStyle: 'normal',
    },
    datePostedText: {
        fontFamily: 'Poppins',
        fontSize: bp(12),
        fontWeight: '500',
        lineHeight: bp(18),
        color: '#000000',
        fontStyle: 'normal',
    },
    goalCardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        marginVertical: bp(10),
    },
    commentIconContainer: {
        alignItems: 'center',
    },
    commentsLengthText: {
        marginLeft: bp(3),

        fontFamily: 'Poppins',
        fontSize: bp(14),
        fontWeight: '700',
        color: '#000000',
        fontStyle: 'normal',
    },
    viewCommentsButtonText: {
        fontFamily: 'Poppins',
        fontSize: bp(14),
        fontWeight: '400',
        color: 'rgba(0, 0, 0, 0.5)',
        fontStyle: 'normal',  
    }
});
