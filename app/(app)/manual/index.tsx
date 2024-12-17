import { ManualScreen } from "@/src/screens/manual/list";
import { View } from "react-native";
import Constants from "expo-constants";
import { Stack } from "expo-router";
import { colors } from "@/src/util/colors";

const StatusBarHeight = Constants.statusBarHeight

export default function Manual () {
    return(
        <>
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerTitle: "YOUR STUDY MANUAL",
                    headerTitleStyle: {
                        fontSize: 20
                    },
                    headerTintColor: colors.WHITE,
                    headerStyle: {
                        backgroundColor: colors.PRIMARY,
                    },
                    headerTitleAlign: "center",
                }}
            />
            <View
          style={{
            justifyContent: "center",
            width: '100%',
            height: '100%', 
            paddingHorizontal: 8,        
            backgroundColor: colors.WHITE,
          }}
        >  
        <ManualScreen/>
        </View>
           
        </>
    )
}