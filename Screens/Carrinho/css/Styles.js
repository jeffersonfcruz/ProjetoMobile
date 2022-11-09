import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  pagcarrinho: {
    justifyContent: "center",
    backgroundColor: "#efefff",
    flex: 1,
  },
  viewlogo: {
    flex: 0,
    width: "100%",
    alignItems: "center",
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  viewcarrinho: {
    flex: 1,
  },
  prodcarrinho: {
    marginTop: 40,
    width: "80%",
    alignSelf: "center",
  },
  viewprod: {},
  viewquant: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "red",
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
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "left",
    paddingLeft: 40,
    paddingTop: 40,
  },
  produto: {
    textAlign: "center",
    fontSize: 45,
    fontWeight: "bold",
  },
  preco: {
    fontWeight: "bold",
    fontSize: 25,
    color: "red",
    paddingTop: 20,
  },
  quantidade: {
    paddingTop: 10,
    fontSize: 20,
    color: "darkblue",
    fontWeight: "bold",
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
    backgroundColor: "#1d0940",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginVertical: 200,
  },
  txtfecharpedido: {
    color: "white",
    fontSize: 25,
  },
});
