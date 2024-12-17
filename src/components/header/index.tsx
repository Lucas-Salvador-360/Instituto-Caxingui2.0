import { Image, Pressable, View } from "react-native";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { colors } from "@/src/util/colors";


export default function Header () {
    return(
        <View style={{
            backgroundColor: colors.PRIMARY,
            width: '100%', // w-full
            flex: 0.25, // flex
            flexDirection: 'row-reverse', // flex-row
            alignItems: 'center', // items-center
            justifyContent: 'space-between', // justify-between
        }}>
            <Pressable style={{
                width: 80, // 10 * 4 (1 unidade = 4 pixels por padrão no React Native)
                height: 80, // 10 * 4
                backgroundColor: colors.PRIMARY,
                borderRadius: 20, // Para deixar a borda arredondada
                flexDirection: 'column', // Flex já assume 'column' por padrão
                justifyContent: 'center',
                alignItems: 'center',

            }}>
            <Entypo 
            name="menu"
             size={70} 
             color="#FFF" 
             />
            </Pressable>
            <Image
                source={require("../../components/img/image-removebg.png")}    
                style={{
                    height: 230,
                    width: 200,
                }}  
                resizeMode="cover"
            />
            <Pressable style={{
                width: 80, // 10 * 4 (1 unidade = 4 pixels por padrão no React Native)
                height: 80, // 10 * 4
                backgroundColor: colors.PRIMARY,
                borderRadius: 20, // Para deixar a borda arredondada
                flexDirection: 'column', // Flex já assume 'column' por padrão
                justifyContent: 'center',
                alignItems: 'center',

            }}>
            <FontAwesome 
            name="user" 
            size={70} 
            color="#FFF" />
            </Pressable>
        </View>
    )
}