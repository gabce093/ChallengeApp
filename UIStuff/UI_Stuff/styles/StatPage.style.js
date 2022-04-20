import { StyleSheet, Dimensions } from 'react-native';
var screenWidth = Dimensions.get('window').width;

/**
 * This function contains the style of the base stat page.
 * @author Henrik Gustafsson
 */
export default StyleSheet.create({
    MainContainer: {
        position: "relative",
        flex: 1,
        margin: "5%",
        marginTop: "20%",
        backgroundColor: '#333333',
        opacity: .8,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
    },
    title:{
        flex: 1,
        flexDirection: "row",
        fontSize: 0.11*screenWidth,
        fontWeight: 'bold',
        justifyContent: "center",
        alignItems: "center",

    },
    statHolder:{
        flex: 8,
        alignItems: "flex-start",
        backgroundColor: "transparent", 
        width: "100%",
    },
    row:{
        flex: 1,     
        backgroundColor: "rgba(0,0,0,0.5)", 
        padding: "2%",
        margin: "1%",
        borderRadius: 15,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    statText:{
        width: "50%",
        fontSize: 0.05*screenWidth,
        fontWeight: 'bold',
    },
});
