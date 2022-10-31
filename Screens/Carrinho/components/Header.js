import { AntDesign } from "@expo/vector-icons"
import { Image, Text, View } from "react-native"
import { styles } from "../css/Styles"

export default function Header () {
    return (
                <View style={login.viewlogo}>
					<Image source={require("../../../assets/logo.png")} style={login.logo}/>
				</View>
    )
}