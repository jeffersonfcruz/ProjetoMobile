import { View } from "react-native";
import Header from "./components/Header";
import Main from "./components/Main";

export default function Login({ navigation }) {
  return (
    <View style={{flex: 1}}>
      <Header/>
	    <Main acao = { navigation }/>
    </View>
  );
}