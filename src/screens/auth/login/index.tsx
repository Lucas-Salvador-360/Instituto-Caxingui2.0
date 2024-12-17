import { ButtonCustom } from "@/src/components/buttonCustom"
import { Text, View } from "react-native"
import {styles} from "./styles"
import { InputWithTitle } from "@/src/components/inputWithTitle"
import { useState } from "react"
import { colors } from "@/src/util/colors"
import { router } from "expo-router"
import { loginApi } from "@/src/server/api"
import { storeToken } from "@/src/server/AsyncStorage/loginStorage"

export const LoginScreen = () => {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")


    const handleLogin = async () => {
        const payload = { email, password: senha }
        try {
          const response = await loginApi(payload);
          
          if (response && response.status === 200) {
            await storeToken(response.data.token);
            console.log("SUCESSO@@@@@@@@@@@@@@@@");
            router.push("/(app)/home/home");
          } else {
            console.log("Falha no login. Tente novamente.");
          }
        } catch (error) {
            console.log("Erro na comunicação com o servidor.");
          console.log("Erro:", error);
        }
      }
    return(
        <View
            style={styles.container}
        >
            <Text style = {styles.title}>
                
            </Text>
            <InputWithTitle
                setText={setEmail}
                title="E-mail:"
            />
            <InputWithTitle
                setText={setSenha}
                title="Senha:"
            />
            <ButtonCustom
                titleButton="LOGIN"
                styleContainer={{
                    backgroundColor: colors.WHITE,
                    position: "absolute",
                    bottom: 300,
                    width: 100, 
                    height: 40
                }}
                styleText={{
                    color: colors.PRIMARY
                }}
                handleClick={handleLogin}            />
            <ButtonCustom
                titleButton="esqueci minha senha"
                styleContainer={{
                    backgroundColor: colors.PRIMARY,
                    position: "absolute",
                    bottom: 370,
                    width: 400, 
                    height: 40
                }}
                styleText={{
                    color: colors.WHITE
                }}
                handleClick={() => {}}
            />
        </View>
    )
}