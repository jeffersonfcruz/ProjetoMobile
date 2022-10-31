import { StyleSheet } from "react-native";

export const content = StyleSheet.create ({
    viewprincipal: {
		flex: 1,
		justifyContent: "center",
	},
	viewlista: {
		flexDirection: "row",
		marginLeft: "auto",
		marginRight: "auto",
		paddingTop: 10,
		paddingVertical: 10,
	},
	txthome: {
		fontSize: 20,
		fontWeight: "bold",
	},
	banner: {
		backgroundColor: "black",
		flex:1,
	},
	viewprodutos: {
		flex:1,
		alignItems: "center",
		justifyContent: "center",
	},
	produtos: {
		borderBottomColor: "black",
		borderWidth:2,
		borderRadius:100,
		width: 95,
		height: 95,
		alignItems: "center",
		marginLeft: 25,
		marginRight: 25,
		marginTop: 40,
	},
	imageprod: {
		borderWidth: 1,
		borderRadius: 100,
		width: 80,
		height: 80,
		margin: 5,
	},
	txtprod: {
		fontSize: 20,
		marginTop: 5
		},
		scrollview: {
			flexDirection: "row",
			flexWrap: "wrap",
			justifyContent: "center",
			alignItems: "center",
			marginVertical: -10,
		},
    }
)