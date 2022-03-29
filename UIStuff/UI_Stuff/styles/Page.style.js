import { StyleSheet, Dimensions } from 'react-native';

var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

{/*StyleSheet for the base of the pages*/}
export default StyleSheet.create({
  forestHeader: {
      position: 'absolute',
      color: 'rgba(52, 52, 52, 0)',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -20,
    },
    forestBackground: {
      position: 'absolute',
      color: 'rgba(52, 52, 52, 0)',
      top: "-11.5%",
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -20,
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
      zIndex: 1,
    },
    playerImage: {
      height: 250,
      width: 250,
      marginTop: '30%',
      transform: [{ scaleX: -1 }],
      zIndex: 2,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(52, 52, 52, 0)',
    },
    topContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      
    },
    bottomContainer: {
      flex: 1,
      backgroundColor: 'transparent',
      alignItems: 'center',
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
      top: "-50%",
    },
    
    title: {
      
      color:'white',
      fontSize: 40,
      fontWeight: 'bold',
      
      color: "#C4C4C4",
      backgroundColor: 'rgba(52, 52, 52, 0)',
    },
    username: {
      flex: 1,
      fontSize: 0.06*screenWidth,
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: 'bold',
      color: "white",
      borderRadius: 5,
      paddingLeft: "2%",
      paddingRight: "2%",
      backgroundColor: 'rgba(0, 0, 0, 0)',
      
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
      fontSize: 30,
      justifyContent: 'center',
      top: "-30%",
      color: 'red',
      width: '80%',
      height: '80%',
      backgroundColor: '#FF5C00',
      borderRadius: 5,
      zIndex: 5,
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
  });