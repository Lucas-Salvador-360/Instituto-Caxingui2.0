import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { ListGuys } from ".";
import { Api } from "@/src/server/api";


export interface ListProps{
    id: string,
    name: string,
    image: string
}

export function List () {
    const [lista, setLista] = useState<ListProps[]>([]);
    const [error, setError] = useState<string | null>(null); 

    useEffect(() => {
        async function getLista() {
            try {
                const response = await Api.get("/auth/login/home/listGuys");
                setLista(response.data); 
            } catch (err) {
                console.error(err);
                setError("Erro ao carregar as lista de presença."); 
            }
        }
        
        getLista();
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
            data={lista}
            renderItem={({ item }) => <ListGuys lista={item} />}
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