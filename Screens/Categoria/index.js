import { Text, View } from "react-native";
import Header from "./components/Header";
import Content from "./components/Content";

export default function Categoria({ navigation }) {
  return (
    <View>
      <Header />
      <Content tela={navigation} />
    </View>
  );
}
