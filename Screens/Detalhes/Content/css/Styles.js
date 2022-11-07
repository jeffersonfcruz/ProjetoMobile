import { StyleSheet } from "react-native";

export const detalhes = StyleSheet.create({
  teladetalhes: {
    backgroundColor: "#afa6db",
    flex: 3,
  },
  nomeroupa: {
    fontSize: 25,
    marginLeft: "auto",
    marginRight: "auto",
    backgroundColor: "white",
  },
  descricao: {
    textAlign: "center",
    color: "white",
    backgroundColor: "white",
  },
  precoroupa: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    backgroundColor: "white",
  },
  roupa: {
    resizeMode: "contain",
    width: 400,
    height: 400,
    borderRadius: 20,
    marginLeft: 30,
  },
  btnadicionar: {
    width: 250,
    height: 50,
    marginTop: 30,
    marginRight: "auto",
    marginLeft: "auto",
    backgroundColor: "#1d0940",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  txtadicionar: {
    color: "white",
    fontSize: 25,
  },
  scrollview: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginVertical: 50,
  },
});
