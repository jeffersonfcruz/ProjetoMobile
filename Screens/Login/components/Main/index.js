import { TextInput, View, Text, Pressable } from "react-native";
import { login } from "../../css/Styles";

import { MaterialCommunityIcons } from '@expo/vector-icons';

import { useTogglePasswordVisibility } from '../../hooks/useTogglePasswordVisibility';
import React, { useState } from 'react';

export default function Main(props) {

	const { passwordVisibility, rightIcon, handlePasswordVisibility } =
    	useTogglePasswordVisibility();
  	const [ password, setPassword ] = useState('');

	return (
		<View style={login.viewtela}>
			<View style={login.viewlogin}>
				<Text style={login.txtlogin}>LOGIN</Text>
				<Pressable style={login.btncadastro} onPress={alert}>
      				<Text style={login.txtcadastro}>CADASTRE-SE</Text>
    			</Pressable>
			</View>
			<View style={login.input1}>
				<TextInput
        			style={login.inputlogin}
        			placeholder="Usuario"
        			keyboardType="email-address"/>
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
          				value={password}
          				enablesReturnKeyAutomatically
          				onChangeText={text => setPassword(text)}/>
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