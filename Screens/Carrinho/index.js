import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { ScrollView, View } from "react-native";
import Pagamento from "../Pagamento";
import Content from "./components/Content";
import { styles } from "./components/css/Styles";
import Header from "./components/Header";


const Stack = createNativeStackNavigator();

export default function Carrinho() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="ItemCarrinho"
          component={ItemCarrinho}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Pagamento"
          component={Pagamento}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function ItemCarrinho({ navigation }) {
  return (
  <View style={styles.pagcarrinho}>
    <Header />
    <Content tela = {navigation}/>
  </View>
  )
}
