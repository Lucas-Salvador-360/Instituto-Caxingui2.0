import { Image, Pressable, Text, View } from "react-native";
import { ListProps } from "./listGuys";
import Ionicons from '@expo/vector-icons/Ionicons';
import { styles } from "./styles";
import { colors } from "@/src/util/colors";


export function ListGuys ({lista}: {lista: ListProps}) {
    return( 
        <Pressable style={styles.container}>
            <Image
            source={ { uri: lista.image }}
            style = {styles.image}
            />
            <View style={{
                flexDirection: "column",
                justifyContent: 'space-around', 
                alignItems: "center", 
                marginBottom: 24,
                backgroundColor: colors.WHITE
            }}>
                <Text style = {styles.text}
                >
                {lista.name}
                </Text>
            </View>
        </Pressable>
)
}