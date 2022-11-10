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
});
