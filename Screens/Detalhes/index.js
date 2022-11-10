import { ScrollView, View } from "react-native";
import Header from "./components/Header";
import Content from "./components/Content";
export default function Detalhes({ route }) {
  const { codigo } = route.params;

  return (
    <View style={{ flex: 3 }}>
      <Header />
      <Content codigo={codigo} />
    </View>
  );
}
