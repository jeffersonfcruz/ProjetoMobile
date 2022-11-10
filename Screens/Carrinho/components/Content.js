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
import { styles } from "../components/css/Styles";

import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("mystore.banco");

export default function Content(props) {
  const { idcli } = props;

  const [carregando, setCarregando] = useState(true);

  const [produtos, setProdutos] = useState([
    {
      idcarrinho: "",
      idcli: "",
      chavecarrinho: "",
      idproduto: "",
      nomeproduto: "",
      preco: "",
      quantidade: "",
      subtotal: "",
    },
  ]);

  useEffect(() => {
    fetch(`${ipnode}/api/clientes/carrinho/${obterId()}`)
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
        <ActivityIndicator
          size={100}
          color="#0c0031"
          style={{ paddingTop: 400 }}
        />
      ) : (
        <View>
          <View style={{}}>
            <Text style={styles.txtcarrinho}> Meu Carrinho </Text>
          </View>
          <ScrollView horizontal={false}>
            {produtos.map((itens, ix) => (
              <View key={ix} style={styles.prodcarrinho}>
                <View style={styles.viewprod}>
                  <Text style={styles.produto}>{itens.nomeproduto}</Text>
                  <Text style={styles.quantidade}>
                    Quantidade: {itens.quantidade}
                  </Text>
                  <Text style={styles.preco}>Preço: R$ {itens.preco}</Text>
                  <Pressable style={styles.btnremover}>
                    <Text style={styles.txtremover}>Remover</Text>
                  </Pressable>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      )}
      <TouchableOpacity
        onPress={() => alert("Fechar")}
        style={styles.fecharpedido}
      >
        <Text style={styles.txtfecharpedido}>Finalizar Compra</Text>
      </TouchableOpacity>
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
        console.log(rows._array[0].idcli);
        id = rows._array[0].idcli;
      }
    );
  });
}
