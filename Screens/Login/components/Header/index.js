import { View, Image } from "react-native";
import { login } from "../css/Styles";

export default function Header(){
	return (
		<View style={login.viewlogo}>
			<Image source={require("../../../../assets/logo.png")} style={login.logo}/>
		</View>
	)
}