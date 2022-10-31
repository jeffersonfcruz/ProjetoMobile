import { ScrollView, View } from "react-native";
import Content from "./Content";
import Header from "./Header";

export default function Detalhes({route}) {
    const {idproduto}= route.params;

    return (
        <View style={{flex:1}}>
            	<Header/>
            <ScrollView>
            	<Content idproduto={idproduto} />
            </ScrollView>
        </View>
    )
}