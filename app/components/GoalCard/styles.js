import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainContainer: {
        width: 335,
        
        paddingHorizontal: 19,

        borderRadius: 10,

        backgroundColor: 'rgba(196, 196, 196, 0.2)',
    },
    rowContainer: {
        flexDirection: 'row',
    },
    nameAndDateContainer: {
        marginLeft: 7,
    },
    cardHeaderContainer: {
        marginTop: 10,
        marginBottom: 11,
    },
    nameText: {
        fontFamily: 'Poppins',
        fontSize: 15,
        fontWeight: '600',
        lineHeight: 22.5,
        color: '#000000',
        fontStyle: 'normal',
    },
    datePostedText: {
        fontFamily: 'Poppins',
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 18,
        color: '#000000',
        fontStyle: 'normal',
    },
    goalCardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        marginVertical: 10,
    },
    commentIconContainer: {
        alignItems: 'center',
    },
    commentsLengthText: {
        marginLeft: 3,

        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '700',
        color: '#000000',
        fontStyle: 'normal',
    },
    viewCommentsButtonText: {
        fontFamily: 'Poppins',
        fontSize: 14,
        fontWeight: '400',
        color: 'rgba(0, 0, 0, 0.5)',
        fontStyle: 'normal',  
    }
});
