import { StyleSheet } from 'react-native';

import { bp } from '../../project/utils/relativeUnitUtils';
import { fontStylePicker } from '../../project/utils/styleUtils';
import { FONT_FAMILY, FONT_WEIGHT } from '../../project/constants';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        padding: bp(10),
    },
    commentContainer: {
        flex: 1,
        backgroundColor: '#EFEFEF',
        borderRadius: bp(10),
        padding: bp(10),
        marginLeft: bp(10),
    },
    userInfoContainer: {
        alignSelf: 'flex-start',
        marginRight: bp(10),
    },
    userName: {
        ...fontStylePicker(FONT_FAMILY.POPPINS, FONT_WEIGHT.BOLD),
        fontSize: bp(14),
    },
    commentContent: {
        flex: 1,
    },
    commentText: {
        ...fontStylePicker(FONT_FAMILY.POPPINS, FONT_WEIGHT.NORMAL),
        fontSize: bp(12),
        marginBottom: bp(5),
    },
    commentImage: {
        width: '100%',
        height: bp(200),
        resizeMode: 'cover',
        borderRadius: bp(10),
    },
    likeCountText: {
        marginRight: bp(5),

        ...fontStylePicker(FONT_FAMILY.POPPINS, FONT_WEIGHT.NORMAL),
        fontSize: bp(12),
    },
    likeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    deleteContainer: {
        position: 'absolute',
        right: 10,
        top: 10,
    }
});
