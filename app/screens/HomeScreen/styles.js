import { StyleSheet } from 'react-native';
import {bp} from "../../project/utils/relativeUnitUtils";

export default StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
    },
    headerContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        marginTop: bp(20),
        marginBottom: bp(25),
        paddingHorizontal: bp(20),
    },
    separatorStyle: {
        height: bp(25),
    },
    contentContainerStyle: {
        paddingBottom: bp(20),
    }
})