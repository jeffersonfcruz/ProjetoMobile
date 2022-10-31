import { ScrollView, View } from "react-native";
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Carrinho from "../Carrinho";
import Detalhes from "../Detalhes";

import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function Home() {
 
	return (
	  <NavigationContainer independent={true}>
		<Stack.Navigator>
		  <Stack.Screen name = "Inicio" component={Inicio} options={{headerShown:false}}/>
		  <Stack.Screen name = "Detalhes" component={Detalhes}/>
		  <Stack.Screen name = "Carrinho" component={Carrinho}/>
		</Stack.Navigator>
	  </NavigationContainer>
	)
  }

function Inicio({navigation}) {
  return (
    <View style={{flex: 1}}>
      		<Header tela={navigation}/>
		<ScrollView>
	  		<Content tela={navigation}/>
	  	</ScrollView>
	  		<Footer/>
    </View>
  );
}