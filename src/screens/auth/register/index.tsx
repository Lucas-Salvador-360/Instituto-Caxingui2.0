import { ButtonCustom } from "@/src/components/buttonCustom"
import { Text, View } from "react-native"
import {styles} from "./styles"
import { InputWithTitle } from "@/src/components/inputWithTitle"
import { useState } from "react"
import { colors } from "@/src/util/colors"
import { router } from "expo-router"
import { Api, registerApi } from "@/src/server/api"

export const RegisterScreen = () => {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [confSenha, setConfirmar] = useState("")

    const handleRegister = async () => {
        const payload = { 
            name: nome, 
            email, 
            password: senha, 
            confirmpassword: confSenha 
        }
        if(!nome) {
            return console.log("Nome obrigadtorio!");
        }
    
        if(!email) {
            return console.log("E-mail obrigadtorio!")
        }
    
        if(!senha) {
            return console.log("Senha obrigadtorio!")
        }
        if(senha!== confSenha) {
            return console.log("Senhas não conferem!")
        }

        const emailCheckResponse = await Api.post("/auth/register", { email: email })
        if (emailCheckResponse.data.exists) {
              return console.log("Este e-mail já está em uso.");
            }

            try {
                const registerResponse = await registerApi(payload);

                if (registerResponse && registerResponse.status === 200) { 
                    console.log("SUCESSO@@@@@@@@@@@@@@@@");
                    router.push("/(app)/auth/login");
                } 
                else {
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
                setText={setNome}
                title="Nome:"
            />
            <InputWithTitle
                setText={setEmail}
                title="E-mail:"
            />
            <InputWithTitle
                setText={setSenha}
                title="Senha:"
            />
            <InputWithTitle
                setText={setConfirmar}
                title="Confirmar Senha:"
            />
            <ButtonCustom
            titleButton="LOGIN"
            styleContainer={{
                backgroundColor: colors.WHITE,
                position: "absolute",
                bottom: 150,
                width: 100, 
                height: 40
            }}
            styleText={{
                color: colors.PRIMARY
            }}
            handleClick={() => router.navigate("/(app)/auth/login")}
            />
        </View>
    )
}