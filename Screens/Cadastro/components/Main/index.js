import { useState } from "react";
import {
  Alert,
  ScrollView,
  Text,
  TextInput,
  Pressable,
  View,
} from "react-native";
import { styles } from "./css/style";
import { ipnode } from "../../../../config/ip";

export default function Main(props) {
  const [nomecompleto, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <ScrollView horizontal={false} contentContainerStyle={styles.scrollview}>
      <View style={styles.viewinput}>
        <TextInput
          style={styles.caixa}
          placeholder="Nome"
          value={nomecompleto}
          onChangeText={(value) => setNome(value)}
        />
      </View>
      <View style={styles.viewinput}>
        <TextInput
          style={styles.caixa}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={(value) => setEmail(value)}
        />
      </View>
      <View style={styles.viewinput}>
        <TextInput
          style={styles.caixa}
          placeholder="CPF"
          keyboardType="number-pad"
          value={cpf}
          onChangeText={(value) => setCpf(value)}
        />
      </View>
      <View style={styles.viewinput}>
        <TextInput
          style={styles.caixa}
          placeholder="Usuário"
          value={usuario}
          onChangeText={(value) => setUsuario(value)}
        />
      </View>
      <View style={styles.viewinput}>
        <TextInput
          style={styles.caixa}
          placeholder="Senha"
          secureTextEntry
          value={senha}
          onChangeText={(value) => setSenha(value)}
        />
      </View>
      <View style={styles.viewinput}>
        <Pressable
          style={styles.btntccadastrar}
          onPress={() => {
            efetuarCadastro(nomecompleto, email, cpf, usuario, senha);
            Alert.alert("Cadastro efetuado");
            props.acao.navigate("Home");
          }}
        >
          <Text style={styles.txtcadastrar}>Cadastrar</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
function efetuarCadastro(nomecompleto, email, cpf, usuario, senha) {
  if (
    nomecompleto == "" ||
    email == "" ||
    cpf == "" ||
    usuario == "" ||
    senha == ""
  ) {
    return Alert.alert("Erro", "Você deve preencher todos os campos");
  }
  fetch(`${ipnode}/api/clientes/cadastro`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      nome: nomecompleto,
      login: usuario,
      email: email,
      cpf: cpf,
      senha: senha,
    }),
  })
    .then((response) => response.json())
    .then((rs) => console.log(rs))
    .catch((erro) => console.error(`Erro -> ${erro}`));
}
