import { ButtonCustom } from "@/src/components/buttonCustom"
import { Dimensions, Image, Platform, StyleSheet, Text, View } from "react-native"
import { style } from "./styles"
import { router } from "expo-router"
import { colors } from "@/src/util/colors"

export const InputScreen = () => {

    return(
      <View
        style={style.containerStyle}
      >
       
        <Image
          source={require("../../components/img/image-removebg.png")}    
          style={style.styleImage}  
          resizeMode="cover"
        />
         <Text
          style={style.styleTitle}
        >INSTITUTO CAXINGUI</Text>
        <ButtonCustom
          titleButton="REGISTER"
          handleClick={() => router.navigate("/(app)/auth/register")}
          styleContainer= {{
            marginTop: 40,
            marginBottom: 32,
            width: 200, 
            height: 80,
            position: 'absolute',
            bottom: 250
          }}
          styleText={{
            color: colors.PRIMARY,
            fontSize: 30
          }}
        />
        <ButtonCustom
          titleButton="LOGIN"
          handleClick={() => router.navigate("/(app)/auth/login")}
          styleContainer= {{
            marginTop: 40,
            marginBottom: 32,
            width: 200, 
            height: 80,
            position: 'absolute',
            bottom: 150
          }}
          styleText={{
            color: colors.PRIMARY,
            fontSize: 30
          }}
        />
      </View>
    )
}