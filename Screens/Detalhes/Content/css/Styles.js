import { StyleSheet } from "react-native";

export const detalhes = StyleSheet.create({
	teladetalhe: {
		width:"100%",
		height:"100%",
		backgroundColor: "#6cc6fe",
    },
	nomeroupa:{
		fontSize: 25,
		marginLeft: "auto",
		marginRight:"auto",
		marginTop:35,
		margin:10,
		fontFamily: "",

	},
oferta:{
	fontSize: 18,
	backgroundColor: "red",
	color: "white",
	textAlign: "center",
	margin:5,
	marginLeft:35,
},

descricao:{
	textAlign:"center",
	marginLeft: 70,
	
},

precoroupa:{
	fontSize:20,
	fontWeight:"bold",
	marginTop: 5,

},

codroupa:{
	fontSize: 15,
	marginLeft: -3,
	fontWeight:"bold",
	margin:10,
},

envio:{
	fontWeight:"bold",
	backgroundColor: "#269aed",
	textAlign:"center",
	fontSize:16,
	width:150,
	height:25,
	marginLeft:7,
	margin:10
	

},

addcarrinho:{
	marginLeft: "auto",
	marginRight: "auto",
	backgroundColor: "#269aed",
	textAlign:"center",
	margin:45,
	width: 250,
	height:35,
	fontWeight:"bold",
	fontSize: 20,
},

roupa:{
	flexDirection: "row",
		width:270,
		height:270,
	marginTop: 20,
	marginLeft: "auto",
	marginRight:"auto",
},
ladolado:{
	textAlign: "center",
	flexDirection: "row",
	marginRight: 100,
},
btnadicionar: {
	width: 130,
	height: 45,
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

});