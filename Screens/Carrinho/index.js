import { ScrollView, View } from "react-native";
import Content from "./components/Content";
import Header from "./components/Header";
import { styles } from "./components/css/Styles";

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
  <View style={styles.pagcarrinho}>
    <Header />
    <Content />
  </View>;
}
