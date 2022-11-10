import { Text, View, TouchableNativeFeedback, Image } from "react-native";
import { headercategoria } from "../css/styles";

export default function Header() {
  return (
    <View style={headercategoria.fullview}>
      <View style={headercategoria.header}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.SelectableBackground()}
        >
          <Image
            source={require("../../../../assets/logo.png")}
            style={headercategoria.logo}
          />
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}
