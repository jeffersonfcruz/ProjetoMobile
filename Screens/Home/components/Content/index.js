import { useEffect, useState } from "react";
import { ScrollView, Text, View, ActivityIndicator } from "react-native";
import { content } from "./css/style";

export default function Content(props) {
	const [carregando, setcarregando] = useState(true);
  	const [produtos, setProdutos] = useState([
    {
      idproduto: "",
      nomeproduto: "",
      preco: "",
      foto1: "foto1.jpg",
    },
  ]);

  /*useEffect(() => {
    fetch(`${ipspring}/api/produto/listar`)
      .then((response) => response.json())
      .then((rs) => {
        setProdutos(rs);
        setcarregando(false);
      })
      .catch((erro) => console.error(`Erro ao executar a api -> ${erro}`));
  }, []);
  */ 
  
  return (
    <View style={{ flex: 2, justifyContent: "center", alignContent: "center" }}>
      {carregando ? (
        <ActivityIndicator size={300} color={"#0c0031"} />
      ) : (
        produtos.map((itens, ix) => (
          <View key={ix} style={content.viewprodutos}>
				<View style={content.produtos}>
            		<TouchableOpacity onPress={()=>props.tela.navigate("Detalhes",{idproduto:itens.idproduto})}>
              			<Image
              			source={{ uri: itens.foto1 }}
              			style={content.imageprod}/>
            			<Text style={content.txtprod}>{itens.nomeproduto}</Text>
            			<Text style={content.txtprod}>{itens.preco}</Text>
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
