import { StyleSheet } from 'react-native';

import { bp } from '../../project/utils/relativeUnitUtils';
import { fontStylePicker } from '../../project/utils/styleUtils';
import { FONT_FAMILY, FONT_WEIGHT } from '../../project/constants';

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
        ...fontStylePicker(FONT_FAMILY.POPPINS, FONT_WEIGHT.SEMI_BOLD),
        fontSize: bp(15),
        lineHeight: bp(22.5),
        color: '#000000',
    },
    datePostedText: {
        ...fontStylePicker(FONT_FAMILY.POPPINS, FONT_WEIGHT.MEDIUM),
        fontSize: bp(12),
        lineHeight: bp(18),
        color: '#000000',
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

        ...fontStylePicker(FONT_FAMILY.POPPINS, FONT_WEIGHT.BOLD),
        fontSize: bp(14),
        color: '#000000',
    },
    viewCommentsButtonText: {
        ...fontStylePicker(FONT_FAMILY.POPPINS, FONT_WEIGHT.NORMAL),
        fontSize: bp(14),
        color: 'rgba(0, 0, 0, 0.5)',
    }
});
