import { useEffect, useState } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from "react-native";
import { ipnode } from "../../../../config/ip";
import { headercategoria } from "../css/styles";

export default function Content(props) {
  const [carregando, setcarregando] = useState(true);
  const [searchWord, setSearchWord] = useState("");
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
        console.log(rs.output);
      })
      .catch((erro) => console.error(`Erro ao executar a api -> ${erro}`));
  }, []);

  return (
    <View style={headercategoria.viewprincipal}>
      <View style={headercategoria.viewfind}>
        <Image
          source={require("../../../../assets/search_icon.png")}
          style={headercategoria.search}
        />
        <TextInput
          style={headercategoria.input}
          placeholder="Pesquisar"
          keyboardType="default"
          onChangeText={setSearchWord}
        />
      </View>
      <ScrollView
        horizontal={false}
        contentContainerStyle={headercategoria.scrollview}
      >
        {carregando ? (
          <ActivityIndicator
            size={100}
            color={"#0c0031"}
            style={{ paddingTop: 200 }}
          />
        ) : (
          produtos
            .filter((val) => {
              if (searchWord == "") {
                return val;
              } else if (
                val.produto.toLowerCase().includes(searchWord.toLowerCase())
              ) {
                return val;
              }
            })
            .map((itens, ix) => (
              <View key={ix} style={headercategoria.viewprodutos}>
                <View style={headercategoria.produtos}>
                  <TouchableOpacity
                    onPress={() =>
                      props.tela.navigate("Detalhes", { codigo: itens.codigo })
                    }
                  >
                    <Image
                      source={{ uri: `${itens.foto1}` }}
                      style={headercategoria.imageprod}
                    />
                    <Text style={headercategoria.txtprod}>
                      R$: {itens.venda}
                    </Text>
                    <Text style={headercategoria.txtprod1}>
                      {itens.produto}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))
        )}
      </ScrollView>
    </View>
  );
}
