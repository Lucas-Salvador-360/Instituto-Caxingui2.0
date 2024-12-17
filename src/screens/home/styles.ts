import { colors } from "@/src/util/colors";
import { StyleSheet } from "react-native";




export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.PRIMARY,
        width: "100%"
    },
    Title: {
        fontFamily: 'Nunito',
        fontSize: 30,
        fontWeight: "bold",
        justifyContent: 'center',
        alignItems: 'center',
        color: colors.WHITE,
        marginBottom: 24,
        position: "absolute",
        bottom: 450
    },
})