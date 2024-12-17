import { RegisterScreen } from "@/src/screens/auth/register";
import { colors } from "@/src/util/colors";
import { Stack } from "expo-router";


export default function Register () {
    return(
        <>
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerTitle: "REGISTER",
                    headerTitleStyle: {
                        fontSize: 30
                    },
                    headerTintColor: colors.WHITE,
                    headerStyle: {
                        backgroundColor: colors.PRIMARY
                    },
                    headerTitleAlign: "center"
                }}
            />
            <RegisterScreen/>
        </>
    )
}