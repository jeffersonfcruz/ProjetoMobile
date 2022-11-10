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
import { ipnode } from "../../../../config/ip";
import { v4 as uuidv4 } from 'uuid';


import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("mystore.banco");

let idus = 0;

export default function Content(props) {
  const { codigo } = props;

  const [carregando, setcarregando] = useState(true);

  const [produtos, setProdutos] = useState({
    codigo: "",
    produto: "",
    descricao: "",
    categoria: "",
    tamanho: "",
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
        setProdutos(rs.output[0]);
        setcarregando(false);
      })
      .catch((erro) => console.error(`Erro ao executar a api -> ${erro}`));
  }, []);

  return (
    <View style={detalhes.teladetalhes}>
      {carregando ? (
        <ActivityIndicator size={100} color={"#0c0031"} />
      ) : (
        <View>
          <Text style={detalhes.categoria}>
            Categoria: {produtos.categoria}{" "}
          </Text>
          <ScrollView
            horizontal={true}
            contentContainerStyle={detalhes.scrollview}
          >
            <Image
              source={{ uri: `${produtos.foto1}` }}
              style={detalhes.roupa}
            />
            <Image
              source={{ uri: `${produtos.foto2}` }}
              style={detalhes.roupa}
            />
            <Image
              source={{ uri: `${produtos.foto3}` }}
              style={detalhes.roupa}
            />
            <Image
              source={{ uri: `${produtos.foto4}` }}
              style={detalhes.roupa}
            />
          </ScrollView>

          <Text style={detalhes.nomeroupa}>{produtos.produto} </Text>
          <Text style={detalhes.tamanho}>{produtos.tamanho} </Text>
          <Text style={detalhes.descricao}>{produtos.descricao} </Text>
          <Text style={detalhes.precoroupa}>R$: {produtos.venda} </Text>
          <Pressable onPress={()=>inserircarrinho(produtos.idproduto,produtos.nomeproduto,produtos.preco,produtos.quantidade)} style={detalhes.btnadicionar}>
            <Text style={detalhes.txtadicionar}> Adicionar ao Carrinho </Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

function inserircarrinho(idproduto,nomeproduto,preco,quantidade) {
  obterId();
  fetch(`${ipnode}/api/usuarios/carrinho`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({
      idusuario: idus,
      chavecarrinho: uuidv4(),
      idproduto: idproduto,
      nomeproduto: nomeproduto,
      preco: preco,
      quantidade: quantidade,
      subtotal: (quantidade*preco)
    }),
  })
    .then((response) => response.json())
    .then((rs) => console.log(rs))
    .catch((erro) => console.error(`Erro -> ${erro}`));
}

async function obterId() {
  await db.transaction((ds) => {
    ds.executeSql(
      `select idusuario from dados 
      order by id desc`,
      [],
      (_, { rows }) => {
        console.log(rows._array[0].idcli);
        idus = rows._array[0].idcli;
      }
    );
  });
}
