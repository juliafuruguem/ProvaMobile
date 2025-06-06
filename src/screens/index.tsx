import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

interface Endereco {
    logradouro: string;
    bairro: string;
    localidade: string;
    uf: string;
    }

export const ViaCep = () => {


    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState<Endereco | null>(null);



    const buscarCep = async () => {
       const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
       const data = await response.json();

       setEndereco(data);

    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Digite o cep:</Text>

            <TextInput style={styles.input}
                onChangeText={setCep}
                value={cep}
            />


            <TouchableOpacity style={styles.Button} onPress={buscarCep}>
                Buscar
            </TouchableOpacity>
                {endereco && (
                    <>
                    <View style={styles.info}>
                        <Text style={styles.title}>Rua</Text>
                        <Text>{endereco.logradouro}</Text>
                    </View>

                    <View style={styles.info}>
                        <Text style={styles.title}>Bairro</Text>
                        <Text>{endereco.bairro}</Text>
                    </View>

                    <View style={styles.info}>
                        <Text style={styles.title}>Cidade</Text>
                        <Text>{endereco.localidade}</Text>
                    </View>

                    <View style={styles.info}>
                        <Text style={styles.title}>Estado</Text>
                        <Text>{endereco.uf}</Text>
                    </View>
                    </>
                )}
        </View>
    )
 }