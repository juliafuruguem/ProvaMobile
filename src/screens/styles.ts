import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start', 
        alignItems: 'center',
        flex: 1,
        padding: 20
    },
    input: {
        width: 300,
        height: 35,
        borderWidth: 1, 
        borderStyle: "solid",
        borderRadius: 16, 
        marginTop: 20
    },
    info: {
        alignItems: 'flex-start',
        width: 200, 
        borderStyle: "solid",
        padding: 25
    }, 
    title: {
        fontFamily: "Arial", 
        fontSize: 17, 
        fontWeight: "600"
    },
    Button: {
        width: 100,
        height: 37,
        backgroundColor: '#ffffff',
        justifyContent:'center',
        textAlign: 'center',
        borderWidth: 1, 
        borderStyle: "solid",
        borderRadius: 16, 
        marginTop: 20
    }
})