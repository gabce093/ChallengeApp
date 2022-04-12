import { Center } from 'native-base';
import { StyleSheet } from 'react-native';

{/*StyleSheet for the base of the pages*/}
export default StyleSheet.create({
    

    //Shop page style

    //Container that holds every item on the character
    characterContainer:{
      top:'-40%',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'transparent',
      flex: 1,
    
    },

    //Used by every character item
    character:{
      position: 'absolute',
      height: 270,
      width: 250,
      transform: [{ scaleX: -1 }],
    
    },

    titleText:{
      textAlign: 'center', 
      fontSize: 45, 
      fontWeight: 'bold',
     
    },

    //nu ändrar du inte mer
    // Holds the shop information
    shopMenu:{
      height: 200,
      width: 350,
      backgroundColor: 'rgba(52, 52, 52, 0)',
      alignItems:'center',
      alignSelf: 'center',
      paddingBottom: 40,
    
    },
    
    //Every button in the shop
    shopButton:{
      backgroundColor: '#939393',
      margin: 10,
      borderRadius: 5,
    },

    prevImg:{
      height: 90,
      width: 90,
      alignSelf: 'center',
    },

    itemText:{
      borderRadius: 5,
      backgroundColor: '#FF5C00',
      textAlign:'center',
    },

  

   
  });