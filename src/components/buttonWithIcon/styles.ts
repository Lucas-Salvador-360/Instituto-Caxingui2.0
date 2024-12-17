import { colors } from "@/src/util/colors";
import { Dimensions, StyleSheet } from "react-native";


export const style = StyleSheet.create({
    button: {
        backgroundColor: colors.WHITE,
        height: 53,
        width: "90%",
        borderRadius: 8,
        elevation: 5,
        shadowColor: colors.BLACK,
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        textAlign: "center",
    }
})