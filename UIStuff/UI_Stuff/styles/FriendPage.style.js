import { StyleSheet } from 'react-native';


export default StyleSheet.create({
 

     // FRIEND PAGE STYLE
     groupContainer: {
        backgroundColor: '#939393', 
        height: '50%',
        width: '90%',
        borderRadius:5,
        marginBottom: '5%',
     
     },
     backimg: {
      flex: 1,
      justifyContent: "center",
      alignItems: 'center',
      width: "100%",

    },
     item: {
      width: '29.5%',
      height: '85%',
      marginVertical: '2%',
      marginHorizontal: '2%',
      alignItems: 'center',
      marginBottom: 1,
      backgroundColor: '#383838',
      borderRadius: 3,
    },

     nameText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20, 
      marginTop: '8%'
     },

     iconHolder:{
      backgroundColor: '#383838',
      alignItems: 'center',
      width: '100%',
      marginTop: '2%',

     },
     playerIcon: {
      width: '30%',
      height: '30%',
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
      width: '40%',
      height: '35%',
      backgroundColor: "#766449",
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      marginTop: '35%',
    },
    lvlText: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#181818',
    },

    challengeButton: {
      
      backgroundColor:"#ff5c00",
      width: 100,
      height: '30%',
      borderRadius: 5,
      elevation: 2

    },
    challengeTxt: {
      textAlign: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: 15,
    }
  });