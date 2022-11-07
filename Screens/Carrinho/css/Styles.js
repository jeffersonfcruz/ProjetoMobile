import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  pagcarrinho: {
    justifyContent: "center",
    backgroundColor: "#afa6db",
    flex: 1,
  },
  viewlogo: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  viewcarrinho: {
    flex: 10,
    justifyContent: "center",
    alignContent: "center",
  },
  prodcarrinho: {
    margin: 30,
    borderBottomWidth: 1,
    borderColor: "silver",
    flexDirection: "row",
  },
  viewprod: {
    flexDirection: "column",
  },
  viewquant: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  btncarrinho: {
    padding: 20,
    backgroundColor: "#600",
    margin: 20,
    borderRadius: 50,
    width: "50%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  txtcarrinho: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
  produto: {
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  preco: {
    padding: 10,
    color: "#900",
    fontWeight: "bold",
    fontSize: 15,
  },
  quantidade: {
    fontSize: 15,
    color: "darkblue",
    fontWeight: "bold",
    paddingLeft: 10,
  },
  btnremover: {
    width: 80,
    height: 30,
    marginTop: 30,
    backgroundColor: "red",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  txtremover: {
    color: "white",
    fontSize: 20,
  },
  fecharpedido: {
    width: 200,
    height: 40,
    marginTop: 30,
    backgroundColor: "#1d0940",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  txtfecharpedido: {
    color: "white",
    fontSize: 25,
  },
});
