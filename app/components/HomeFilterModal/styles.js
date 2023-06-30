import { StyleSheet } from "react-native";

import {bp} from "../../project/utils/relativeUnitUtils";

export default StyleSheet.create({
    modalContainer: {
        justifyContent: 'flex-end',

        margin: 0,
    },
    mainContainer: {
        justifyContent: 'center',
        height: bp(250),

        paddingHorizontal: bp(25),

        borderTopLeftRadius: bp(28),
        borderTopRightRadius: bp(28),

        backgroundColor: '#EBEBF0',
    },
    headerContainer: {
        marginBottom: bp(40),
    },
    closeIconsStyle: {
        alignSelf: 'flex-end',
    },
    headerTitleStyle: {
        alignSelf: 'center',
        position: 'absolute',

        fontFamily: "Nunito",
		fontWeight: "500",
		fontSize: bp(14),
    }
})