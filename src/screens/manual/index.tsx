import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./styles";
import { ManualProps } from "./list";
import { colors } from "@/src/util/colors";



export function CardHorizontalManual ({manual}: {manual: ManualProps}) {
    return( 
            <Pressable style={styles.container}>
                <Image
                source={ { uri: manual.foto }}
                style = {styles.Image}
                />
                <View style={{
                    flexDirection: "column",
                    justifyContent: 'space-around', 
                    alignItems: "center", 
                    marginBottom: 24,
                    backgroundColor: colors.WHITE
                }}>
                    <Text style = {styles.Title}
                    >
                    {manual.nome}
                    </Text>
                </View>
            </Pressable>
    )
}