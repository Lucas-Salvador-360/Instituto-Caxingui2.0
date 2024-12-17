import { styles } from "./styles";
import { Text, View } from "react-native";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import { ButtonWithIcon } from "@/src/components/buttonWithIcon";
import { colors } from "@/src/util/colors";
import { router } from "expo-router";

export const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text 
            style={styles.Title}>
            </Text>
            <ButtonWithIcon
                titleButton={"YOUR CLASS"}
                styleContainer={{
                    backgroundColor: colors.WHITE,
                    position: "absolute",
                    bottom: 350,
                    width: 250,
                    height: 200,
                    alignItems: "center",
                    justifyContent: "center",
                }}
                styleText={{
                    color: colors.PRIMARY,
                }} 
                Icon={() => <FontAwesome5 name="users" size={80} color="#5e17eb" />}
                handleClick={() => router.navigate("/(app)/listGuys")}  
            /> 
            <ButtonWithIcon
                titleButton={
                   "YOUR STUDY MANUAL" 
                }
                styleContainer={{
                    backgroundColor: colors.WHITE,
                    position: "absolute",
                    bottom: 100,
                    width: 250,
                    height: 200,
                    alignItems: "center",
                    justifyContent: "center",
                }}
                styleText={{
                    color: colors.PRIMARY, 
                    fontSize: 30,
                    width: "100%",
                    fontWeight: "bold",
                }} 
                Icon={() => <FontAwesome5 name="book-open" size={80} color="#5e17eb" />}
                handleClick={() => router.navigate("/(app)/manual")}            
            />
        </View>
    );
};