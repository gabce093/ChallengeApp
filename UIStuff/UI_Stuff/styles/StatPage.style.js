import { StyleSheet, Dimensions } from 'react-native';
var screenWidth = Dimensions.get('window').width;


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
        fontSize: 0.1*screenWidth,
        fontWeight: 'bold',

    },
    statHolder:{
        flex: 8,
        alignItems: "flex-start",
        backgroundColor: "transparent", 
        width: "100%",
    },
    row:{
        flex: 1,     
        backgroundColor: "transparent", 
        flexDirection: "row",
    },
    statText:{
        width: "50%",
        fontSize: 0.05*screenWidth,
        fontWeight: 'bold',
    },
});
