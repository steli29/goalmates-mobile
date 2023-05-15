import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
    mainContainer: {
        alignItems: 'center',

        width: 298,
        minHeight: 75,

        padding: 11,

        borderRadius: 12,

        backgroundColor: '#F5F8FF',
    },
    row: {
        flexDirection: 'row',
    },
    shadowEffect: {
        ...Platform.select({
            ios: {
                shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.3,
                shadowColor: 'rgba(0, 0, 0, 0.08)',
            },
            android: {
                elevation: 6,
            },
        }),
        zIndex: 999999,
    },
    textContainer: {
        flex: 1,
        marginLeft: 8,
    },
    titleTextStyle: {
        fontFamily: 'Nunito',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 21.82,
        color: '#212529',
    },
    descriptionTextStyle: {
        fontFamily: 'Poppins',
        fontSize: 12,
        fontWeight: '300',
        lineHeight: 18,
        color: '#6C757D',
    },
    deadlineContainer: {
        flexDirection: 'column',

        width: '100%',

        marginTop: 12,
    },
    divider: {
        width: '100%',

        marginBottom: 6,
    
        borderWidth: 2,
        borderRadius: 2,
        borderColor: '#E0E0E0',
    },
    deadlineText: {
        marginLeft: 25.25,
        marginRight: 18,
    },
});
