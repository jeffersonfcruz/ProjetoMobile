import { StyleSheet } from "react-native";

export const footer = StyleSheet.create ({
    container: {
        flex:0,
        flexDirection: "row",
        backgroundColor: "#eacffe",
    },
    options: {
        marginLeft: "auto",
        marginRight: "auto",
        margin:5,
    },
    imgfooter: {
        width: 40,
        height: 40,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    txtfooter: {
        fontSize:17,
        textAlign: "center",
        fontWeight: "bold",
        marginVertical:5
    }
})