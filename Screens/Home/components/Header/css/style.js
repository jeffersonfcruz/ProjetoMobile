import { StyleSheet } from "react-native";

export const telaheader = StyleSheet.create({
  fullview: {
    flex: 0,
  },
  header: {
    flexDirection: "row",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 50,
  },
  fav: {
    marginRight: 100,
    width: 50,
    height: 50,
    top: 10,
  },
  logo: {
    width: 90,
    height: 90,
    marginLeft: "auto",
    marginRight: "auto",
    resizeMode: "contain",
  },
  cart: {
    marginLeft: 100,
    width: 50,
    height: 50,
    top: 10,
  },
  viewfind: {
    paddingTop: 0,
  },
  search: {
    width: 34,
    height: 34,
    left: 40,
    top: 45,
  },
  input: {
    borderColor: "#0c0031",
    borderRadius: 28,
    borderWidth: 2,
    width: "90%",
    height: 55,
    marginRight: "auto",
    marginLeft: "auto",
    paddingLeft: 65,
    fontWeight: "bold",
    fontSize: 22,
  },
});
