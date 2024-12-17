import Header from "@/src/components/header";
import { HomeScreen } from "@/src/screens/home/";
import { Stack } from "expo-router";
import Entypo from '@expo/vector-icons/Entypo';
import { colors } from "@/src/util/colors";


export default function Home () {
    return(
        
        <>
            <Stack.Screen
                options={{
                    headerShown: false,
                    headerTitle: "HOME",
                    headerTitleStyle: {
                        fontSize: 30
                    },
                    headerTintColor: colors.WHITE,
                    headerStyle: {
                        backgroundColor: colors.PRIMARY,
                    },
                    headerTitleAlign: "center",
                    
                }}
                
            />
            <Header/>
            <HomeScreen/>
        </>
    )
}