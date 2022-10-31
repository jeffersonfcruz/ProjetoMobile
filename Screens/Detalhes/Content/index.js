import {Image, View, Text, TouchableOpacity, Button, StyleSheet } from "react-native";
import { detalhes } from "./css/Styles";

export default function Content(props) {

	const {idproduto} = props;
  
	const [carregando, setcarregando] = useState(true);
  
	const [produtos, setProdutos] = useState(
	  {
		idproduto: "",
		nomeproduto: "",
		descricao: "",
		categoria:"",
		quantidade: 0,
		preco: "",
		foto1: "foto1.jpg",
		foto2: "foto2.jpg",
		foto3: "foto3.jpg",
		foto4: "foto4.jpg",
	  },
	);
  
	/*useEffect(() => {
	  fetch(`${ipspring}/api/produto/pesquisar/${idproduto}`)
		.then((response) => response.json())
		.then((rs) => {
		  setProdutos(rs);
		  setcarregando(false);
		  console.log(rs);
		})
		.catch((erro) => console.error(`Erro ao executar a api -> ${erro}`));
	}, []);
*/

	return (
		<View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
		  {carregando ? (
			<ActivityIndicator size={100} color={"#ft04"} />
		  ) : (
			<View> 
			<ScrollView horizontal={true}>
			  <Image source={{uri:`${produtos.foto1}`}} style={{width: 400, height: 300, resizeMode:'cover', margin:20}} />
			  <Image source={{uri:`${produtos.foto2}`}} style={{width: 400, height: 300, resizeMode:'cover', margin:20}} />
			  <Image source={{uri:`${produtos.foto3}`}} style={{width: 400, height: 300, resizeMode:'cover', margin:20}} />
			  <Image source={{uri:`${produtos.foto4}`}} style={{width: 400, height: 300, resizeMode:'cover', margin:20}} />
			</ScrollView>
			<View style={{flex:1, justifyContent:'center'}}/> 
			  <Text>{produtos.nomeproduto} </Text>
			  <Text>{produtos.categoria} </Text>
			  <Text>{produtos.preco} </Text>
			  <Text>{produtos.descricao} </Text>
			  
			  	<Pressable style={detalhes.btnadicionar}>
      				<Text style={detalhes.txtadicionar}> Adicionar ao Carrinho </Text>
    			</Pressable>
			</View>
	
		  )}
		</View>
	  );

  

	/*return (
    <View style={detalhes.teladetalhe}>
        <View style={detalhes.roupa}>
			<Image source={require("../../assets/roupa.png")} style={detalhes.roupa}/>
		</View>
        	<Text style={detalhes.nomeroupa}>
			Pijama Baby Doll
        	</Text>
		<View style={detalhes.ladolado}>
        	<Text style={detalhes.oferta}>
        	Oferta Relâmpago
        	</Text>
        	<Text style={detalhes.precoroupa}>
        	R$20,99
        	</Text>
        </View>

        <View style={detalhes.ladolado}>
        	<Text style={detalhes.envio}>
        	ENVIO NACIONAL
        	</Text>
        	<Text style={detalhes.codroupa}>
        	COD: si2206084031375963
        	</Text>
        </View>
        <Text style={detalhes.descricao}>
        Tamanho: P, M, G, GG
        Cor: preto, branco
        </Text>
        <Text style={detalhes.addcarrinho}>
        ADICIONE AO CARRINHO
        </Text>
    </View>
    )*/
}