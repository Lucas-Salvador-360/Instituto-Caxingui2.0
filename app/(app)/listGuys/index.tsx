import { ManualScreen } from "@/src/screens/manual/list";
import { View, ScrollView } from "react-native";
import Constants from "expo-constants";
import { Stack } from "expo-router";
import { colors } from "@/src/util/colors";
import { List } from "@/src/screens/listGuys/listGuys";

const StatusBarHeight = Constants.statusBarHeight

export default function SttendanceList () {
    return(
        <>
            <Stack.Screen
                options={{
                    headerShown: true,
                    headerTitle: "PRESENCE",
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
        <List/>
        </View>
           
        </>
    )
}