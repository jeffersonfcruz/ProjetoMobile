import { AntDesign } from "@expo/vector-icons";
import { Image, Text, View } from "react-native";
import { styles } from "../components/css/Styles";

export default function Header() {
  return (
    <View style={styles.viewlogo}>
      <Image source={require("../../../assets/logo.png")} style={styles.logo} />
    </View>
  );
}
