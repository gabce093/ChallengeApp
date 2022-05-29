import { StyleSheet, Dimensions } from 'react-native';

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

{/*StyleSheet for friend-page*/}
export default StyleSheet.create({
  forestHeader: {
      position: 'absolute',
      color: 'rgba(52, 52, 52, 0)',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      
    },
    forestBackground: {
      position: 'absolute',
      color: 'rgba(52, 52, 52, 0)',
      top: "-11.5%",
      left: 0,
      right: 0,
      bottom: 0,
      
    },

    screen: {
      flex:1,
      flexDirection: "column",
    },
    banan: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: "50%",
      
    },
    playerImage: {
      height: 250,
      width: 250,
      transform: [{ scaleX: -1 }],
      
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(52, 52, 52, 0)',
    },
    topContainer: {
      flex: 1,
      top: "-55%",
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bottomContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
      width: "100%",
      left: 0,
      right: 0,
    },
    subContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginRight: -10,
      backgroundColor: 'rgba(52, 52, 52, 0)',
    },
    flipperContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    playerContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      backgroundColor: 'transparent',
      right: 0,
      left: 0,
    },
    
    title: {
      
      color:'white',
      fontSize: 40,
      fontWeight: 'bold',
      
      color: "#C4C4C4",
      backgroundColor: 'rgba(52, 52, 52, 0)',
    },
    WeeklyChaText: {
      fontSize: 0.07*screenWidth,
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      color: "white",
      borderRadius: 5,
      opacity: 0.5,
      top: "-25%",
      paddingLeft: "2%",
      paddingRight: "2%",
      
    },
    CurrentWeeklyChaText: {
      fontSize: 0.06*screenWidth,
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      color: "white",
      borderRadius: 5,
      opacity: 0.5,
      top: "-45%",
      paddingLeft: "2%",
      paddingRight: "2%",
      
    },
    username: {
      fontSize: 0.09*screenWidth,
      justifyContent: 'center',
      top: "-90%",
      backgroundColor: "rgba(0,0,0,0.3)",
      alignItems: 'center',
      fontWeight: 'bold',
      color: "white",
      borderRadius: 5,
      paddingLeft: "2%",
      paddingRight: "2%",
      zIndex: 2,
      
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
      backgroundColor: 'rgba(52, 52, 52, 0)',
    },
    challengeButton: {
      
      shadowRadius: 100,
      shadowOpacity: 0.5,
      alignItems: 'center',
      justifyContent: 'center',
      top: "-30%",
      width: '80%',
      height: '80%',
      backgroundColor: '#FF5C00',
      borderRadius: 5,
      
    },
    challengeText: {
      color:'white',
      alignContent: 'center', 
      fontSize: 50, 
      fontWeight: 'bold',
      
    },
    link: {
      marginTop: 15,
      paddingVertical: 15,
    },
    linkText: {
      fontSize: 14,
      color: '#C4C4C4',
    },
    headertext: {
      fontSize: 15,
      color: '#C4C4C4',
    },
  });