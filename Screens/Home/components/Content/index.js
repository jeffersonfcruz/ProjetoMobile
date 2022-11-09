import { useEffect, useState } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
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
      foto1: "",
    },
  ]);

  useEffect(() => {
    fetch(`${ipnode}/api/produtos/listar`)
      .then((response) => response.json())
      .then((rs) => {
        setProdutos(rs.output);
        setcarregando(false);
      })
      .catch((erro) => console.error(`Erro ao executar a api -> ${erro}`));
  }, []);

  return (
    <View style={content.viewprincipal}>
      <View style={content.banner}>
        <Image source={require("../../../../assets/nova.jpg")} style={content.imgbanner}/>
      </View>
      <ScrollView horizontal={false} contentContainerStyle={content.scrollview}>
        {carregando ? (
          <ActivityIndicator size={100} color={"#0c0031"} style={{paddingTop: 200}}/>
        ) : (
          produtos.map((itens, ix) => (
            <View key={ix} style={content.viewprodutos}>
              <View style={content.produtos}>
                <TouchableOpacity
                  onPress={() =>
                    props.tela.navigate("Detalhes", { codigo: itens.codigo })
                  }
                >
                  <Image
                    source={{ uri: `${itens.foto1}` }}
                    style={content.imageprod}
                  />
                  <Text style={content.txtprod}>R$: {itens.venda}</Text>
                  <Text style={content.txtprod1}>{itens.produto}</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))
        )}
      </ScrollView>
    </View>
  );
}
