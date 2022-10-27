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
		flex:2,
		alignItems: "center",
		justifyContent: "center",
    	flexDirection: 'row',
    	flexWrap: 'wrap',
		marginTop: 50,
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
		marginTop: 60,
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
		}
    }
)