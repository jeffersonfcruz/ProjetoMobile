import {Image, View, Text, TouchableOpacity, Button, StyleSheet } from "react-native";
import { detalhes } from "./css/Styles";

export default function Content() {

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
  
	useEffect(() => {
	  fetch(`${ipspring}/api/produto/pesquisar/${idproduto}`)
		.then((response) => response.json())
		.then((rs) => {
		  setProdutos(rs);
		  setcarregando(false);
		  console.log(rs);
		})
		.catch((erro) => console.error(`Erro ao executar a api -> ${erro}`));
	}, []);
  

	return (
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
    )
}