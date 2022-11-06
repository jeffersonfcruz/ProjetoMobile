import * as React from "react";
import { Image, TextInput, View, TouchableNativeFeedback } from "react-native";
import { telaheader } from "./css/style";

export default function Header(props) {
  return (
    <View style={telaheader.fullview}>
      <View style={telaheader.header}>
        <TouchableNativeFeedback
          onPress={alert}
          background={TouchableNativeFeedback.SelectableBackground()}
        >
          <Image
            source={require("../../../../assets/heart_icon.png")}
            style={telaheader.fav}
          />
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.SelectableBackground()}
        >
          <Image
            source={require("../../../../assets/logo.png")}
            style={telaheader.logo}
          />
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          onPress={() => {
            props.tela.navigate("Carrinho");
          }}
          background={TouchableNativeFeedback.SelectableBackground()}
        >
          <Image
            source={require("../../../../assets/cart_icon.png")}
            style={telaheader.cart}
          />
        </TouchableNativeFeedback>
      </View>
      <View style={telaheader.viewfind}>
        <Image
          source={require("../../../../assets/search_icon.png")}
          style={telaheader.search}
        />
        <TextInput
          style={telaheader.input}
          placeholder="Pesquisar"
          keyboardType="default"
        />
      </View>
    </View>
  );
}
