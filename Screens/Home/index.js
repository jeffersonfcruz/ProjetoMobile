import { View } from "react-native";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Carrinho from "../Carrinho";
import Detalhes from "../Detalhes";
import Perfil from "../Perfil";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categoria from "../Categoria";

const Stack = createNativeStackNavigator();

export default function Home() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen
          name="Inicio"
          component={Inicio}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Detalhes" component={Detalhes} />
        <Stack.Screen name="Carrinho" component={Carrinho} />
        <Stack.Screen name="Perfil" component={Perfil} />
        <Stack.Screen name="Categoria" component={Categoria} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Inicio({ navigation }) {
  return (
    <View style={{ flex: 2 }}>
      <Header tela={navigation} />
      <Content tela={navigation} />
      <Footer tela={navigation} />
    </View>
  );
}
