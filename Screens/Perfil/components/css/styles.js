import { StyleSheet } from "react-native";

export const perfil = StyleSheet.create({
  logouser: {
    marginLeft: "auto",
    marginRight: "auto",
    width: 80,
    height: 80,
    marginTop: 10,
    marginVertical: 60,
  },

  lista: {
    flexDirection: "row",
    marginTop: 10,
    marginLeft: "auto",
    marginRight: "auto",
  },
  logodados: {
    width: 50,
    height: 50,
    marginLeft: 10,
  },
  infoconta: {
    width: 200,
    height: 70,
    marginLeft: 10,
    fontSize: 19,
    fontWeight: "bold",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btnsair: {
    width: 130,
    height: 45,
    marginRight: "auto",
    marginLeft: "auto",
    backgroundColor: "#1d0940",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  txtsair: {
    color: "white",
    fontSize: 25,
  },
});
