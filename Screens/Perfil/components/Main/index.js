import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
  Pressable,
} from "react-native";
import { perfil } from "../css/styles";

export default function Main() {
  return (
    <View style={perfil.telaperfil}>
      <View style={perfil.lista}>
        <Image
          source={require("../../../../assets/profile.png")}
          style={perfil.logouser}
        />
      </View>

      <View style={perfil.lista}>
        <Image
          source={require("../../../../assets/dados.png")}
          style={perfil.logodados}
        />
        <Text style={perfil.infoconta}>Informações da conta</Text>
      </View>

      <View style={perfil.lista}>
        <Image
          source={require("../../../../assets/heart_icon.png")}
          style={perfil.logodados}
        />
        <Text style={perfil.infoconta}>Produtos favoritados</Text>
      </View>

      <View style={perfil.lista}>
        <Image
          source={require("../../../../assets/cupom.png")}
          style={perfil.logodados}
        />
        <Text style={perfil.infoconta}>Seus Cupons</Text>
      </View>
      <View style={perfil.lista}>
        <Image
          source={require("../../../../assets/settings.png")}
          style={perfil.logodados}
        />
        <Text style={perfil.infoconta}>Configurações</Text>
      </View>
      <Pressable style={perfil.btnsair}>
        <Text style={perfil.txtsair}>Sair</Text>
      </Pressable>
    </View>
  );
}
