import { FlatList, View, Text } from "react-native";
import { useEffect, useState } from "react";
import { CardHorizontalManual } from ".";
import { Api } from "@/src/server/api";

export interface ManualProps {
    id: string;
    nome: string;
    foto: string;
}

export function ManualScreen() {
    const [manual, setManual] = useState<ManualProps[]>([]);
    const [error, setError] = useState<string | null>(null); 

    useEffect(() => {
        async function getManual() {
            try {
                const response = await Api.get("/auth/login/home/manuais");
                setManual(response.data); 
            } catch (err) {
                console.error(err);
                setError("Erro ao carregar os manuais."); 
            }
        }
        
        getManual();
    }, []);

    if (error) {
        return (
            <View>
                <Text>{error}</Text>
            </View>
        );
    }

    return (
        <FlatList
            data={manual}
            renderItem={({ item }) => <CardHorizontalManual manual={item} />}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ 
                gap: 14, 
                paddingLeft: 16, 
                paddingRight: 16 
            }}
            keyExtractor={(item) => item.id} 
        />
    );
}