// import { flexbox } from 'native-base/lib/typescript/theme/styled-system';
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

    bgTrack: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: "10%",
        
      },
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

    titleText:{
      alignContent: 'center', 
      fontSize: 45, 
      fontWeight: 'bold',
      marginBottom: 10,
      marginTop:30,
    },

    // Holds the shop information
    shopMenu:{
      height: 200,
      width: 350,
      backgroundColor: 'rgba(52, 52, 52, 0)',
      justifyContent: 'center',
      alignItems:'center',
    
    },
    
    //Every button in the shop
    shopButton:{
      backgroundColor: '#939393',
      margin: 10,
      textAlign:'center',
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
    },

    item: {
      backgroundColor: '#f9c2ff',
      padding: '1%',
      marginVertical: '1%',
      marginHorizontal: '1%',
      width: '50%',
      borderRadius: 5,
    },
   
  });