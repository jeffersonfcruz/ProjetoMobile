import React from "react";
import { ScrollView, View } from "react-native";
import Content from "./components/Content";
import Header from "./components/Header/index";

export default function Pagamento() {
  // const { idusuario } = route.params;

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Header />
        <Content />
      </ScrollView>
    </View>
  );
}
