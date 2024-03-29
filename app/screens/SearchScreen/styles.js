import { NativeModules, Platform, StyleSheet } from 'react-native';

import { bp } from '../../project/utils/relativeUnitUtils';
import { fontStylePicker } from '../../project/utils/styleUtils';
import { FONT_FAMILY, FONT_WEIGHT } from '../../project/constants';

const { StatusBarManager } = NativeModules;
const statusBarHeight = StatusBarManager.HEIGHT;

export const containerMargin = bp(3);

export default StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    searchBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        height: bp(40),
        marginTop: (Platform.OS === 'android' ? 0 : statusBarHeight) + bp(32),
        marginHorizontal: bp(16),
        marginBottom: bp(16),
        borderRadius: bp(6),

        backgroundColor: '#ecebeb',
    },
    searchIcon: {
        marginHorizontal: bp(8),
    },
    textInputStyle: {
        width: bp(240),

        ...fontStylePicker(FONT_FAMILY.NUNITO, FONT_WEIGHT.NORMAL),
		fontSize: bp(14),
        color: '#171717',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    closeIcon: {
        right: bp(8),
        tintColor: '#171717',
    },
    profileContainer: {
        marginHorizontal: bp(16),
        marginVertical: bp(10),
        flexDirection: 'row',
        alignItems: 'center',
    },
    errorMessage: {
        ...fontStylePicker(FONT_FAMILY.NUNITO, FONT_WEIGHT.NORMAL),
		fontSize: bp(16),
        color: '#171717',
    },
    nameLabel: {
        marginLeft: bp(15),

        ...fontStylePicker(FONT_FAMILY.POPPINS, FONT_WEIGHT.NORMAL),
        fontSize: bp(14),
        lineHeight: bp(27),

        color: '#000000'
    },
});
