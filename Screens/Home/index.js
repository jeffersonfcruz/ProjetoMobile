import { View } from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import Detalhes from "../Detalhes/Content";

export default function Home() {
 
	return (
	  <NavigationContainer independent={true}>
		<Stack.Navigator>
		  <Stack.Screen name = "Inicio" component={Inicio} options={{headerShown:false}}/>
		  <Stack.Screen name = "Detalhes" component={Detalhes}/>
		  <Stack.Screen name= "Carrinho" component={Carrinho}/>
		</Stack.Navigator>
	  </NavigationContainer>
	)
  }

function Inicio({navigation}) {
  return (
    <View style={{flex: 1}}>
      <Header tela={navigation}/>
	  <Content tela={navigation}/>
	  <Footer/>
    </View>
  );
}