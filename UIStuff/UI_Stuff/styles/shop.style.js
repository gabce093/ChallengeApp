import { StyleSheet } from 'react-native';

{/*StyleSheet for the base of the pages*/}
export default StyleSheet.create({
    

    //Shop page style

    //Container that holds every item on the character
    characterContainer:{
      justifyContent: 'center',
      position:'relative',
      alignItems: 'center',
      backgroundColor: 'rgba(52, 52, 52, 0)',
      top: '-18%',
    },

    //Used by every character item
    character:{
      flex: 1,
      height: 250,
      width: 250,
      position: 'absolute',
      scaleX: -1,
      zIndex: -1,
    },

    // Holds the shop information
    shopMenu:{
      top:'7%',
      height:'32%',
      width: '90%',
      backgroundColor: 'rgba(52, 52, 52, 0)',
      flexDirection:"row",
      flexWrap:"wrap",
      justifyContent: 'center',
      alignItems:'center',
    },
    
    //Evvery button in the shop
    shopButton:{
      paddingHorizontal: 20,
      paddingVertical: 20,
      backgroundColor: 'pink',
      alignSelf: 'flex-start',
      marginHorizontal:"2%",
      marginVertical:"2%",
      textAlign:'center',
      borderRadius: 5,
    }

  });