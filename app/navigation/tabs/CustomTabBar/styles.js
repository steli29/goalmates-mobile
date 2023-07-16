import { Platform, StyleSheet } from "react-native";
import { bp } from "../../../project/utils/relativeUnitUtils";
import { fontStylePicker } from '../../../project/utils/styleUtils';
import { FONT_FAMILY, FONT_WEIGHT } from '../../../project/constants';

export default StyleSheet.create({
    mainContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-evenly",

        height: bp(85),

        backgroundColor: '#FFF',
    },
    tabWrapper: {
        justifyContent: 'center',
        alignItems: "center",
    },
    labelTextStyle: {
        ...fontStylePicker(FONT_FAMILY.NUNITO, FONT_WEIGHT.BOLD),
        fontSize: bp(14),
        lineHeight: bp(20),
        color: "#1D9BF0",
    },
    shadowEffect: {
        ...Platform.select({
            ios: {
                shadowOffset: {
                    width: 0,
                    height: 0,
                },
                shadowOpacity: 0.2,
                shadowRadius: bp(2),
            },
            android: {
                elevation: 6
            }
        }),
    }
});