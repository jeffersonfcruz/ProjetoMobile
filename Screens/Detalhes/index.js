import { ScrollView, View } from "react-native";
import Content from "./Content";
import Header from "./Header";

export default function Detalhes({ route }) {
  const { codigo } = route.params;

  return (
    <View style={{ flex: 3 }}>
      <Header />
      <Content codigo={codigo} />
    </View>
  );
}
