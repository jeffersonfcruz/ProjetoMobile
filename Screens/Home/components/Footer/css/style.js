import { StyleSheet } from "react-native";

export const footer = StyleSheet.create ({
    container: {
        flex:0,
        flexDirection: "row",
        backgroundColor: "#eacffe",
		height:65
    },
    options: {
        marginLeft: "auto",
        marginRight: "auto",
        margin:5,
    },
    imgfooter: {
        width: 25,
        height: 25,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    txtfooter: {
        fontSize:14,
        textAlign: "center",
        fontWeight: "bold",
        marginVertical:5
    }
})