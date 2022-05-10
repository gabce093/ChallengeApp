import { StyleSheet } from 'react-native';
// var screenWidth = Dimensions.get('window').width;

/**
 * This function contains the style of the stat page.
 * @author Fredrik Håkansson
 */


{/*StyleSheet for the base of the pages*/}
export default StyleSheet.create({
    
    // progresText: {
    //     backGroundColor: 'rgb(55, 55, 54)',
    // },
    infoDist: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 60,
    },
    descriptionText: {
        color: 'white',
        fontSize: 12,
    },
    largeInfoTextContainer: {
        height: '10%',
        width: '99%',
        borderRadius:5,
        marginTop: '15%',
        marginLeft: '5%',
     },

     challengeTitleText:{
      alignContent: 'center', 
      fontSize: '200%', 
      fontWeight: 'bold',
      marginBottom: '1%',
      marginTop: '1%',
      color: 'rgba(255, 255, 255, 1)',
    },

    
    challengeItem: {
      backgroundColor: 'rgba(134, 131, 131, 0.9)',
      padding: '1%',
      marginVertical: '1%',
      marginHorizontal: '0%',
      width: '49%',
      borderRadius: 5,
      marginRight: '2%',
    },

    ChallengeRow:{
      flex: 1,     
      // backgroundColor: 'rgba(134, 131, 131, 0.0)', 
      padding: "2%",
      margin: "0%",
      borderRadius: 5,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "left",
  },
    
    itemText:{
      borderRadius: 5,
      fontSize: '100%', 
      fontWeight: 'bold',
      marginBottom: '1%',
      marginTop: '1%',
      color: 'rgba(255, 255, 255, 1)',
    },

    title:{
      flex: 1,
      flexDirection: "row",
      fontSize: 5,
      fontWeight: 'bold',
      justifyContent: "center",
      alignItems: "center",

  },

  statHolder:{
      flex: 8,
      alignItems: "flex-start",
      backgroundColor: "transparent", 
      width: "100%",
      color: 'white',
  },
  row:{
      flex: 1,     
      backgroundColor: 'rgba(134, 131, 131, 0.9)', 
      padding: "3%",
      margin: "0%",
      marginVertical: '1%',
      borderRadius: 5,
      flexDirection: "row",
      justifyContent: "space-evenly",
      alignItems: "center",
  },
  statText:{
      width: "50%",
      fontSize: 5,
      fontWeight: 'bold',
      color: 'white',
  },

   
  });