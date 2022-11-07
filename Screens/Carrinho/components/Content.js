import { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  Text,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Pressable,
} from "react-native";
import { ipnode } from "../../../config/ip";
import { styles } from "../css/Styles";

import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("mystore.banco");

export default function Content(props) {
  const { idusuario } = props;

  const [carregando, setCarregando] = useState(true);

  const [produtos, setProdutos] = useState([
    {
      idcarrinho: "",
      idusuario: "",
      chavecarrinho: "",
      idproduto: "",
      nomeproduto: "",
      preco: "",
      quantidade: "",
      subtotal: "",
    },
  ]);
  //${obterId()}
  useEffect(() => {
    fetch(`${ipnode}/api/clientes/carrinho/2`)
      .then((response) => response.json())
      .then((rs) => {
        setProdutos(rs.output);
        setCarregando(false);
        console.log(rs.output);
      })
      .catch((erro) => console.error(`Erro ao executar a api -> ${erro}`));
  }, []);

  return (
    <View style={styles.viewcarrinho}>
      {carregando ? (
        <ActivityIndicator size={100} color="#0c0031" />
      ) : (
        <View>
          <ScrollView horizontal={false}>
            {produtos.map((itens, ix) => (
              <View key={ix} style={styles.prodcarrinho}>
                <View style={styles.viewprod}>
                  <Text style={styles.produto}>
                    Produto: {itens.nomeproduto}
                  </Text>
                  <Text style={styles.preco}>Preço: R$ {itens.preco}</Text>

                  <Text style={styles.preco}>
                    Subtotal: R$ {itens.subtotal}
                  </Text>

                  <Pressable style={styles.btnremover}>
                    <Text style={styles.txtremover}>Remover</Text>
                  </Pressable>
                </View>
                <View style={styles.viewquant}>
                  <Text style={styles.quantidade}>
                    Quantidade: {itens.quantidade}
                  </Text>
                </View>
              </View>
            ))}

            <TouchableOpacity
              onPress={() => alert("Fechar")}
              style={styles.fecharpedido}
            >
              <Text style={styles.txtfecharpedido}>Fechar o pedido</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      )}
    </View>
  );
}
async function obterId() {
  let id = 0;
  await db.transaction((ds) => {
    ds.executeSql(
      `select idusuario from dados order by id desc`,
      [],
      (_, { rows }) => {
        console.log(rows._array[0].idusuario);
        id = rows._array[0].idusuario;
      }
    );
  });
}
