import { useEffect, useState } from "react";
import { Text, View, ActivityIndicator, TouchableOpacity } from "react-native";
import { content } from "./css/style";
import { ipnode } from "../../../../config/ip";

export default function Content(props) {
	const [carregando, setcarregando] = useState(true);
  	const [produtos, setProdutos] = useState([
    {
      codigo: "",
      produto: "",
      categoria: "",
      venda: "",
    },
  ]);

  useEffect(() => {
    fetch(`${ipnode}/api/produtos/listar`)
      .then((response) => response.json())
      .then((rs) => {
        setProdutos(rs.output);
        setcarregando(false);
		console.log(rs.output);
      })
      .catch((erro) => console.error(`Erro ao executar a api -> ${erro}`));
  }, []);
  
  return (
    <View style={{ flex: 2, justifyContent: "center", alignContent: "center"}}>
      {carregando ? (
        <ActivityIndicator size={100} color={"#0c0031"} />
      ) : (
        produtos.map((itens, ix) => (
          <View key={ix} style={content.viewprodutos}>
				<View style={content.produtos}>
            		<TouchableOpacity onPress={()=>props.tela.navigate("Detalhes",{codigo:itens.codigo})}>
            			<Text style={content.txtprod}>{itens.produto}</Text>
            			<Text style={content.txtprod}>{itens.venda}</Text>
            		</TouchableOpacity>
				</View>
          </View>
        ))
      )}
    </View>
  );
 
  /* return (
		<View style={content.viewprincipal}>
			<View style={content.viewlista}>
				<Text style={content.txthome}>LANCAMENTOS</Text>
			</View>
			<View style={content.banner}>
				
			</View>
				<View style={content.viewprodutos}>
					<ScrollView horizontal={false} contentContainerStyle={content.scrollview}>
						<View style={content.produtos}>
							<View style={content.imageprod}></View>
							<Text style={content.txtprod}>Produto1</Text>
						</View>
						<View style={content.produtos}>
							<View style={content.imageprod}></View>
							<Text style={content.txtprod}>Produto1</Text>
						</View>
						<View style={content.produtos}>
							<View style={content.imageprod}></View>
							<Text style={content.txtprod}>Produto1</Text>
						</View>
					</ScrollView>
				</View>
		</View>
	)
	*/
}
