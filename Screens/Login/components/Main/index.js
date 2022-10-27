import { TextInput, View, Text, Pressable } from "react-native";
import { login } from "../css/Styles";

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useTogglePasswordVisibility } from './hooks/useTogglePasswordVisibility';
import React, { useState } from 'react';

export default function Main(props) {
	const [usuario, setUsuario] = useState("");
	const [senha, setSenha] = useState("");

	const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    	useTogglePasswordVisibility();

	return (
		<View style={login.viewtela}>
			<View style={login.viewlogin}>
				<Text style={login.txtlogin}>LOGIN</Text>
				<Pressable style={login.btncadastro} onPress={() => props.acao.navigate("Cadastro")}>
      				<Text style={login.txtcadastro}>CADASTRE-SE</Text>
    			</Pressable>
			</View>
			<View style={login.input1}>
				<TextInput
        			style={login.inputlogin}
        			placeholder="Usuário"
        			keyboardType="default"
        			value={usuario}
        			onChangeText={(value) => setUsuario(value)}
				/>
			</View>
			<View style={login.input1}>
				<View style={login.safe}>
					<TextInput
          				style={login.inputsenha}
         				name="Senha"
          				placeholder="Senha"
          				autoCapitalize="none"
          				autoCorrect={false}
          				textContentType="newPassword"
          				secureTextEntry={passwordVisibility}
          				value={senha}
          				enablesReturnKeyAutomatically
          				onChangeText={(value) => setSenha(value)}/>
						<Pressable onPress={handlePasswordVisibility}>
          					<MaterialCommunityIcons name={rightIcon} size={26} color="#232323" />
        				</Pressable>
				</View>
					<View style={login.viewentrar}>
						<Pressable style={login.btnentrar} onPress={() => {
          				// efetuarLogin(usuario, senha); 
		  				props.acao.navigate("Home");}}>
      						<Text style={login.txtentrar}>Entrar</Text>
    					</Pressable>
					</View>
			</View>
		</View>
	)
}

/*function efetuarLogin(usuario: any, senha: any) {
	if (usuario == "" || senha == "") {
	  return Alert.alert("Erro", "Você deve preecher todos os campos");
	}
  
	fetch (`${ipnode}/api/usuarios/login`, {
	  method: "POST",
	  headers: {
		accept: "application/json",
		"content-type": "application/json",
	  },
	  body: JSON.stringify({
		nomeusuario: usuario,
		senha: senha,
	  }),
	})
	  .then((response) => response.json())
	  .then((rs) => console.log(rs))
	  .catch((err) => console.error(`Erro -> ${err}`));
  }*/