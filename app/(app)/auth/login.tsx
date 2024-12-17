import { LoginScreen } from "@/src/screens/auth/login";
import { colors } from "@/src/util/colors";
import { Stack } from "expo-router";


export default function Login () {
    return(
        
        <>
            
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerTitle: "LOGIN",
                    headerTitleStyle: {
                        fontSize: 30
                    },
                    headerTintColor: colors.WHITE,
                    headerStyle: {
                        backgroundColor: colors.PRIMARY,
                    },
                    headerTitleAlign: "center"
                }}
            />
            <LoginScreen/>
        </>
    )
}