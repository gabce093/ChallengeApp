import { StyleSheet } from 'react-native';


export default StyleSheet.create({
 

     // FRIEND PAGE STYLE
     groupContainer: {
      backgroundColor: '#939393',
      //flexDirection: "row",
        height: '56vw',
        width: '90vw',
        alignItems: 'center',
        borderRadius:5,
     },
     backimg: {
      flex: 1,
      justifyContent: "center",
      alignItems: 'center',
      width: "100%",

    },
     item: {
      width: '40vw',
      height: '48vw',
      marginVertical: '2vw',
      marginHorizontal: '2vw',
      alignItems: 'center',
    },

     nameText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: '4vw',
     },

     iconHolder:{
      backgroundColor: '#383838',
      alignItems: 'center',
     },
     playerIcon: {
      width: '25vw',
      height: '25vw',
      borderRadius: 100,
      overflow: "hidden",
      borderWidth: 5,
      borderColor: "#766449"
    },
    lvlBadge: {
      fontWeight: 'bold',
      backgroundColor: "#766449",
      color: '#181818',
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      position: 'absolute',
      marginVertical: '24vw'
    },


   

  });