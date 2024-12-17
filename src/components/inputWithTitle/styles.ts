import { colors } from "@/src/util/colors";
import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";



export const styles = StyleSheet.create({
    container: {
        width:"100%",
        flexDirection:"column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 12

    },
    title: {
        color: colors.WHITE,
        textAlign: "left",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 8
    },
    styleInput:{
        backgroundColor: colors.WHITE,
        height: 53,
        width: "90%",
        justifyContent: "center",
        alignItems: "flex-start",
        borderRadius: 8,
        borderWidth:1,
        borderColor: colors.WHITE,
        paddingLeft: 15,
    }
})