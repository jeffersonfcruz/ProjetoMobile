import { View } from "react-native";

export default function Header() {
	return (
		<View style={telaheader.header}>
                <TouchableNativeFeedback
                    onPress={(alert)}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <Image source={require("../../../../assets/heart_icon.png")} style={telaheader.fav}/>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={(alert)}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <Image source={require("../../../../assets/logo.png")} style={telaheader.logo}/>
                </TouchableNativeFeedback>
                <TouchableNativeFeedback
                    onPress={(alert)}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <Image source={require("../../../../assets/cart_icon.png")} style={telaheader.cart}/>
                </TouchableNativeFeedback>
            </View>
	)
}