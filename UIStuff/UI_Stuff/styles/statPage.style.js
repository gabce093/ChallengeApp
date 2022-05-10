// import { flexbox } from 'native-base/lib/typescript/theme/styled-system';
import { StyleSheet } from 'react-native';

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

    titleText:{
      alignContent: 'center', 
      fontSize: '200%', 
      fontWeight: 'bold',
      marginBottom: '1%',
      marginTop: '1%',
      color: 'rgba(255, 255, 255, 1)',
    },

    itemText:{
      borderRadius: 5,
      fontSize: '100%', 
      fontWeight: 'bold',
      marginBottom: '1%',
      marginTop: '1%',
      color: 'rgba(255, 255, 255, 1)',
    },

    item: {
      backgroundColor: 'rgba(134, 131, 131, 0.9)',
      padding: '1%',
      marginVertical: '1%',
      marginHorizontal: '1%',
      width: '48.5%',
      borderRadius: 5,
    },
   
  });