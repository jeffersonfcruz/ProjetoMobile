import * as React from 'react';
import { View, TouchableNativeFeedback, Image, Text, TouchableOpacity } from "react-native";
import { footer } from "./css/style";

export default function Footer (props) {
    return (
        <View style={footer.container}>
            <View style={footer.options}>
                <TouchableOpacity
                    onPress={()=>{
						props.tela.navigate("Inicio")
					}}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <Image source={require("../../../../assets/shopping_icon.png")} style={footer.imgfooter}/>
                    <Text style={footer.txtfooter}>Loja</Text>
                    </TouchableOpacity>
            </View>
            <View style={footer.options}>            
                <TouchableOpacity
                    onPress={(alert)}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <Image source={require("../../../../assets/search_icon_f.png")} style={footer.imgfooter}/>
                    <Text style={footer.txtfooter}>Categoria</Text>
                </TouchableOpacity>
            </View>
            <View style={footer.options}>   
                <TouchableOpacity
                    onPress={(alert)}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <Image source={require("../../../../assets/dress_icon.png")} style={footer.imgfooter}/>
                    <Text style={footer.txtfooter}>Novidade</Text>
                </TouchableOpacity>
            </View>
            <View style={footer.options}>
                <TouchableOpacity
                    onPress={(alert)}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <Image source={require("../../../../assets/price_promotion.png")} style={footer.imgfooter}/>
                    <Text style={footer.txtfooter}>Promoção</Text>
                </TouchableOpacity>
            </View>
            <View style={footer.options}>
                <TouchableOpacity
                    onPress={()=>{
						props.tela.navigate("Perfil")
					}}
                    background={TouchableNativeFeedback.SelectableBackground()}>
                    <Image source={require("../../../../assets/perfil.png")} style={footer.imgfooter}/>
                    <Text style={footer.txtfooter}>Perfil</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}