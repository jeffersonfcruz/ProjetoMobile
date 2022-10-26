import { StyleSheet } from "react-native";

export const login = StyleSheet.create({
	viewtela: {
		flex: 3,
		padding:50,
		backgroundColor: "#efefff"
	},
	viewlogo: {
		alignItems:'center',
		padding:50,
		backgroundColor: "#efefff"
	},
	logo: {
		width:150,
		height:150,
		resizeMode: "contain"
	},
	viewlogin: {
		flexDirection: "row",
		paddingTop: 100,
	},
	txtlogin: {
		color: "#0c0031",
		fontSize: 25,
		fontWeight: 'bold',
		
		marginLeft: "auto",
		marginRight: "auto"
	},
	txtcadastro: {
		color: "#0c0031",
		fontSize: 25,
		fontWeight: 'bold',
		textDecorationLine: 'underline',
		marginLeft: "auto",
		marginRight: "auto"
	},
	btncadastro: {
		color: "#0c0031",
		fontSize: 25,
		fontWeight: 'bold',
		marginLeft: "auto",
		marginRight: "auto"
	},
	safe:{
		backgroundColor: 'white',
    	width: '100%',
    	borderRadius: 7,
    	flexDirection: 'row',
    	alignItems: 'center',
    	borderWidth: 2,
    	borderColor: 'black',
	},
	input1:{
		paddingTop: 30,
	},
	inputlogin: {
		borderWidth: 1,
		height: 60,
		backgroundColor: "white",
		borderColor: "black",
		borderRadius: 7,
		padding:15,
		color: "#acacac",
		fontSize: 20
	},
	inputsenha: {
		height: 60,
		padding:15,
		color: "#acacac",
		fontSize: 20,
		width: 320
	},
	btnentrar: {
		width: 130,
		height: 45,
		marginRight: "auto",
		marginLeft: "auto",
		backgroundColor: "#1d0940",
		borderRadius: 5,
		justifyContent: "center",
		alignItems: "center",
	},
	txtentrar: {
		color: "white",
		fontSize: 25,
	},
	viewentrar:{
		paddingTop: 60,
	}
})