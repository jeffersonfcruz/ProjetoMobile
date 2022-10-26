import { View } from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <View style={{flex: 1}}>
      <Header/>
	  <Footer/>
    </View>
  );
}