import {

  View,
  Text

} from "react-native";


export default function Content() {

  return (
    <View style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>Pagamento Realizado.</Text>
      <Text style={{ fontSize: 15 }}>Agora você deve aguar nosso contato por email.</Text>
      <Text style={{ fontSize: 15 }}>Você verá todos os passos do processo do seu pedido.</Text>
    </View>
  );
}
