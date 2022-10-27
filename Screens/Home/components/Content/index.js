import { ScrollView, Text, View } from "react-native";
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

  useEffect(() => {
    fetch(`${ipspring}/api/produto/listar`)
      .then((response) => response.json())
      .then((rs) => {
        setProdutos(rs);
        setcarregando(false);
      })
      .catch((erro) => console.error(`Erro ao executar a api -> ${erro}`));
  }, []);
  
  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      <Text>Conteúdo</Text>
      {carregando ? (
        <ActivityIndicator size={100} color={"#ft04"} />
      ) : (
        produtos.map((itens, ix) => (
          <View key={ix}>
            <TouchableOpacity onPress={()=>props.tela.navigate("Detalhes",{idproduto:itens.idproduto})}>
              <Image
              source={{ uri: itens.foto1 }}
              style={{ width: 100, height: 100, resizeMode: "cover" }}/>
            <Text>{itens.nomeproduto}</Text>
            <Text>{itens.preco}</Text>
            </TouchableOpacity>
          </View>
        ))
      )}
    </View>
  );
 
 
 
 
 
 
 
  /*return (
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
							<Text style={content.txtprod}>Produto9</Text>
						</View>
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
							<Text style={content.txtprod}>Produto9</Text>
						</View>
					</ScrollView>
				</View>
		</View>
	)*/
}
