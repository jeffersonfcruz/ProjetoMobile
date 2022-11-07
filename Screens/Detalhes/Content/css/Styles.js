import { StyleSheet } from "react-native";

export const detalhes = StyleSheet.create({
  teladetalhes: {
    backgroundColor: "#afa6db",
    flex: 3,
  },
  nomeroupa: {
    fontSize: 40,
    marginLeft: 35,
  },
  descricao: {
    fontSize: 25,
    marginTop: 10,
    color: "black",
    marginLeft: 35,
  },
  categoria: {
    marginLeft:35,
    color: "white",
    fontSize: 20,
    marginTop: 10,
    color: "black"
  },
  tamanho:{
    fontSize: 25,
    marginLeft: 35,
    backgroundColor: "white",
    borderRadius: 10,
    width: "10%",
    textAlign: "center",
    marginTop:10
  },
  precoroupa: {
    fontSize: 43,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    alignSelf: "center",
    backgroundColor: "white",
    width: "50%",
    borderRadius: 15,
    marginTop:40,
  },
  roupa: {
    resizeMode: "contain",
    width: 400,
    height: 400,
    borderRadius: 20,
    marginLeft: 30,
    marginRight: 30,
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
