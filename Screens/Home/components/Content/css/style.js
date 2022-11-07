import { StyleSheet } from "react-native";

export const content = StyleSheet.create({
  viewprincipal: {
    flex: 2,
  },
  banner: {
    backgroundColor: "black",
    height: "30%",
    width: "100%",
  },
  viewprodutos: {
    marginTop: 10,
  },
  produtos: {
    borderBottomColor: "black",
    borderWidth: 0,
    borderRadius: 10,
    width: 181,
    height: 250,
    marginLeft: 25,
    marginRight: 25,
    marginTop: 40,
  },
  imageprod: {
    borderWidth: 2,
    height: "100%",
    width: "100%",
    borderRadius: 20,
  },
  txtprod: {
    position: "absolute",
    fontSize: 25,
    color: "black",
    marginTop: 200,
    marginLeft: 55,
    borderRadius: 5,
    backgroundColor: "white",
    width: 120,
    textAlign: "center",
  },
  txtprod1: {
    position: "absolute",
    fontSize: 25,
    color: "white",
    marginTop: 110,
    width: 181,
    textAlign: "center",
    borderColor: "black",
    borderRadius: 10,
    backgroundColor: "black",
    opacity: 0.5,
  },
  scrollview: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
});
