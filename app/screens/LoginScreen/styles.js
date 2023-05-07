import { StyleSheet } from "react-native";

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: "center",
    },
    signUpLinkText: {
        color: '#5579C6',
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
        textDecorationColor: '#5579C6',
    },
    errorMessage: {
        marginTop: 10,
        fontSize: 15,
        fontWeight: '600',
        color: '#C30010',
    }
});
