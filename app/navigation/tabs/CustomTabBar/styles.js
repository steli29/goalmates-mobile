import { Platform, StyleSheet } from "react-native";
import { bp } from "../../../project/utils/relativeUnitUtils";

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
        fontFamily: "Nunito",
        fontWeight: "700",
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