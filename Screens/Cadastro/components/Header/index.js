import { View, Image } from "react-native";
import { cadastro } from "./css/style";

export default function Header() {
  return (
    <View style={cadastro.viewlogo}>
      <Image
        source={require("../../../../assets/logo.png")}
        style={cadastro.logo}
      />
    </View>
  );
}
