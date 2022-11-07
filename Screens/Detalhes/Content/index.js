import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Pressable,
} from "react-native";
import { detalhes } from "./css/Styles";
import { useEffect, useState } from "react";
import { ipnode } from "../../../config/ip";

export default function Content(props) {
  const { codigo } = props;

  const [carregando, setcarregando] = useState(true);

  const [produtos, setProdutos] = useState({
    codigo: "",
    produto: "",
    descricao: "",
    categoria: "",
    quantidade: 0,
    venda: "",
    foto1: "",
    foto2: "",
    foto3: "",
    foto4: "",
  });

  useEffect(() => {
    fetch(`${ipnode}/api/produtos/listar/${codigo}`)
      .then((response) => response.json())
      .then((rs) => {
        setProdutos(rs.output);
        setcarregando(false);
        console.log(rs.output);
      })
      .catch((erro) => console.error(`Erro ao executar a api -> ${erro}`));
  }, []);

  return (
    <View style={detalhes.teladetalhes}>
      {carregando ? (
        <ActivityIndicator size={100} color={"#0c0031"} />
      ) : (
        <View>
          <ScrollView
            horizontal={true}
            contentContainerStyle={detalhes.scrollview}
          >
            <Image
              source={{
                uri: "https://cuplovershop.cdn.plataformaneo.com.br/produto/614190253_VTM146-1_614190253.jpg",
              }}
              style={detalhes.roupa}
            />
            <Image
              source={{
                uri: "https://cuplovershop.cdn.plataformaneo.com.br/produto/614190253_VTM146-1_614190253.jpg",
              }}
              style={detalhes.roupa}
            />
            <Image
              source={{
                uri: "https://cuplovershop.cdn.plataformaneo.com.br/produto/614190253_VTM146-1_614190253.jpg",
              }}
              style={detalhes.roupa}
            />
            <Image
              source={{ uri: `${produtos.foto4}` }}
              style={detalhes.roupa}
            />
          </ScrollView>

          <Text style={detalhes.nomeroupa}>{produtos.produto} </Text>
          <Text style={detalhes.descricao}>{produtos.descricao} </Text>
          <Text>{produtos.categoria} </Text>
          <Text>{produtos.quantidade} </Text>
          <Text style={detalhes.precoroupa}>{produtos.venda} </Text>
          <Pressable style={detalhes.btnadicionar}>
            <Text style={detalhes.txtadicionar}> Adicionar ao Carrinho </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}
