import { ScrollView, View } from "react-native";
import Content from "./components/Content";
import Header from "./components/Header";

export default function Carrinho(route) {
  //const { idusuario } = route.params;

  return (
    <View style={{ flex: 3, justifyContent: "center", alignItems: "center" }}>
      <Content />
    </View>
  );
}
