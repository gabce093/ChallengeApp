import { StyleSheet } from 'react-native';

{/*StyleSheet for friend-page*/}
export default StyleSheet.create({
    absolute: {
      position: 'absolute',
      alignItems: 'center',
      color: 'rgba(52, 52, 52, 0)',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 0,
    },
    banan: {
      position: 'absolute',
      top: '45%',
      height: '105%',
      alignItems: 'center',

      left: 0,
      right: 0,
      bottom: 0,
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
      
      backgroundColor: 'rgb(134, 164, 173)',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(52, 52, 52, 0)',
    },
    topContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(52, 52, 52, 0)',
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
      top: '-35%',
      flexDirection: 'row',
      backgroundColor: 'rgba(52, 52, 52, 0)',
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
    username: {
      fontSize: 30,
      width: '75%',
      alignItems: 'center',
      fontWeight: 'bold',
      color: "#C4C4C4",
      backgroundColor: 'rgba(52, 52, 52, 0)',
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
      top: '-25%',
      justifyContent: 'center',
      color: 'red',
      width: '80%',
      height: '20%',
      backgroundColor: '#FF5C00',
      borderRadius: 5,
    },
    challengeText: {
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