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
      height: '97%',
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
      fontSize: 4,
     },

     iconHolder:{
      backgroundColor: '#383838',
      alignItems: 'center',
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
      marginTop: '83%',
    },
    lvlText: {
      fontSize: 12,
      fontWeight: 'bold',
      color: '#181818',
    },

    challengeButton: {
      textAlign: 'center',
      backgroundColor:"#ff5c00",
      width: 24,
      height: '30%',
      borderRadius: 5,
      elevation: 2

    },
    challengeTxt: {
      color: 'white',
      fontWeight: 'bold',
    }
  });