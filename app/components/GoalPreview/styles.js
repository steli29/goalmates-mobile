import { Platform, StyleSheet } from 'react-native';

import { bp } from '../../project/utils/relativeUnitUtils';

export default StyleSheet.create({
    mainContainer: {
        alignItems: 'center',

        minHeight: bp(75),

        padding: bp(11),

        borderRadius: bp(12),

        backgroundColor: '#F5F8FF',
    },
    shadowEffect: {
        ...Platform.select({
            ios: {
                shadowOffset: {
                    width: bp(0),
                    height: bp(2),
                },
                shadowOpacity: 0.3,
                shadowColor: 'rgba(0, 0, 0, 0.08)',
            },
            android: {
                elevation: 6,
            },
        }),
    },
    row: {
        flexDirection: 'row',
    },
    textContainer: {
        flex: 1,
        marginLeft: bp(8),
    },
    titleTextStyle: {
        fontFamily: 'Nunito',
        fontSize: bp(16),
        lineHeight: bp(21.82),
        fontWeight: '400',
        color: '#212529',
    },
    descriptionTextStyle: {
        fontFamily: 'Poppins',
        fontSize: bp(12),
        lineHeight: bp(18),
        fontWeight: '300',
        color: '#6C757D',
    },
    progressBarContainer: {
        flexDirection: 'column',

        width: '100%',

        marginTop: bp(12),
    },
    divider: {
        width: '100%',

        marginBottom: bp(6),
    
        borderWidth: bp(2),
        borderRadius: bp(2),
        borderColor: '#E0E0E0',
    },
    deadlineText: {
        marginLeft: bp(25.25),
        marginRight: bp(18),
    },
});
