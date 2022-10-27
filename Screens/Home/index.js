import { View } from "react-native";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

export default function Home() {
  return (
    <View style={{flex: 1}}>
      <Header/>
	  <Content/>
	  <Footer/>
    </View>
  );
}