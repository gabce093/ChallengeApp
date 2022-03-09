import { StyleSheet } from 'react-native';


export default StyleSheet.create({
 

     // FRIEND PAGE STYLE
     groupContainer: {
      
        backgroundColor: '#939393',
        height: '30%',
        width: '90%',
        borderRadius:5,
     },
     backimg: {
      flex: 1,
      justifyContent: "center",
      alignItems: 'center',
      width: "100%",

    },

     item: {
      width: '46%',
      height: '97%',
      marginVertical: '2%',
      marginHorizontal: '2%',
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
      width: '40%',
      height: '40%',
      borderRadius: 100,
      overflow: "hidden",
      borderWidth: 5,
      borderColor: "#766449",
    },
    lvlBadge: {
      position: 'absolute',
      alignItems: 'center',
      flex: 1,
      justifyContent: 'flex-end',
      width: '50%',
      height: '40%',
      backgroundColor: "#766449",
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      marginTop: '80%',
    },
    lvlText: {

      fontWeight: 'bold',
      color: '#181818',
    },


   

  });