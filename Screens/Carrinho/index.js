import { ScrollView, View } from "react-native";
import Content from "./components/Content";
import Header from "./components/Header";
import { styles } from "./css/Styles";

export default function Carrinho(route) {
  //const { idcli } = route.params;

  return (
    <View style={styles.pagcarrinho}>
      <Header />
      <Content />
    </View>
  );
}
