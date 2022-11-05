import { useState } from "react";
import { Alert, ScrollView, Text, TextInput, Pressable, View } from "react-native";
import { styles } from "./css/style";

export default function Main() {
    
    const [nome,setNome] = useState("");
    const [email,setEmail] = useState("");
    const [cpf,setCpf] = useState("");
    const [usuario,setUsuario] = useState("");
    const [senha,setSenha] = useState("");    
    
    return (
        <ScrollView horizontal={false} contentContainerStyle={styles.scrollview}>
            <View style={styles.viewinput}>
                <TextInput style={styles.caixa} placeholder="Nome" value={nome} onChangeText={(value)=> setNome(value)}/>
			</View>
            <View style={styles.viewinput}> 
				<TextInput style={styles.caixa} placeholder="Email" keyboardType="email-address" value={email} onChangeText={(value)=> setEmail(value)}/>
			</View>
			<View style={styles.viewinput}>
                <TextInput style={styles.caixa} placeholder="CPF" keyboardType="number-pad" value={cpf} onChangeText={(value)=> setCpf(value)}/>
			</View>
			<View style={styles.viewinput}>
                <TextInput style={styles.caixa} placeholder="Usuário" value={usuario} onChangeText={(value)=> setUsuario(value)}/>
			</View>
			<View style={styles.viewinput}>
                <TextInput style={styles.caixa} placeholder="Senha" secureTextEntry value={senha} onChangeText={(value)=> setSenha(value)}/>
            </View>
            <View style={styles.viewinput}>  
				<Pressable style={styles.btntccadastrar} onPress={() => {
                    efetuarCadastro(nome,email,cpf,usuario,senha);
                }}>
                    <Text style={styles.txtcadastrar}>Cadastrar</Text>
                </Pressable>
			</View>
        </ScrollView>
    )
}
function efetuarCadastro() {
    if (
        nome == "" || 
        email == "" || 
        cpf == "" || 
        login == "" || 
        senha == "" ) {
            return Alert.alert("Erro","Você deve preencher todos os campos");
        }
        fetch("http://192.168.1.190/api/clientes/cadastro", {
            method: "POST",
            headers: {
                accept: "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                login: usuario,
                email: email,
                cpf: cpf,
                nomecompleto: nome,
                senha: senha
        })
    })
    .then((response) => response.json())
    .then((rs)=> console.log(rs))
    .catch((erro)=> console.error(`Erro -> ${erro}`))
}