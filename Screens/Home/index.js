import { View } from "react-native";

import Header from "./Header";
import Footer from "./Footer";

export default function Home() {
  return (
    <View style={{flex: 1}}>
      <Header/>
      <Footer/>
    </View>
  );
}