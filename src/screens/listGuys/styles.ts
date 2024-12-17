import { colors } from "@/src/util/colors";
import { StyleSheet } from "react-native";



export const styles = StyleSheet.create ({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        backgroundColor: colors.WHITE,
        width: "100%",
    },
    image: {
        width: 20, 
        height: 20, 
        borderRadius: 20
    },
    text: {
        fontFamily: 'Nunito',
        fontSize: 18,
        fontWeight: "bold",
        alignItems: "center",
        color: colors.BLACK,
        marginBottom: 24,
        height: 65,
        width: 300,
        textAlign: 'center',
        marginHorizontal: 10,
        marginVertical: 30,
      }

})