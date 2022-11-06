import { View, TouchableNativeFeedback, Image } from "react-native";
import { telaheader } from "./css/styles";

export default function Header() {
  return (
    <View style={telaheader.header}>
      <TouchableNativeFeedback
        onPress={alert}
        background={TouchableNativeFeedback.SelectableBackground()}
      >
        <Image
          source={require("../../../assets/logo.png")}
          style={telaheader.logo}
        />
      </TouchableNativeFeedback>
    </View>
  );
}
