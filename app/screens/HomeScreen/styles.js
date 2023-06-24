import { StyleSheet } from 'react-native';
import {bp} from "../../project/utils/relativeUnitUtils";

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        marginTop: bp(11),
        marginBottom: bp(40),
    },
    separatorStyle: {
        height: bp(25),
    }
})