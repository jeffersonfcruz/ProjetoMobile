import { Text, View,TouchableNativeFeedback, Image } from "react-native";
import { ipnode } from "../../config/ip";
import { useEffect, useState } from "react";
import { headercategoria } from "./css/styles";

export default function Categoria(props) {
  //const [carregando, setcarregando] = useState(true);

  return (
    <View style={headercategoria.fullview}>
      <View style={headercategoria.header}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.SelectableBackground()}
        >
          <Image
            source={require("../../assets/logo.png")} 
            style={headercategoria.logo}
          />
        </TouchableNativeFeedback>
      </View>
    </View>
  );
}
