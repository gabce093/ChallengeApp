import { StyleSheet } from 'react-native';


export default StyleSheet.create({
 

    backimg: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'flex-end',
      width: "100%",
    },

     // FRIEND PAGE STYLE
     //friend-part
     friendContainer: {
        backgroundColor: '#939393', 
        height: '40%',
        width: '90%',
        borderRadius:5,
        marginBottom: '7%'
       
     },
     
    friendHolder: {
      flex: 1/3,
      flexDirection: 'column',
      marginVertical: '2%',
      marginHorizontal: '2%',
      marginBottom: 1,
      backgroundColor: 'rgba(30, 54, 88,0.5)',
      borderRadius: 15,
    },
     nameText: {
      color: 'white',
      fontWeight: 'bold',
      fontSize: 20, 
      marginTop: '8%'
     },

     friendIconHolder:{
      backgroundColor: 'rgba(0,0,0,0)',
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

    friendChallengeButton: {
      backgroundColor:"#2076F6",
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
    },
    
     //*****Group-part******//
     groupHolder: {
      flex: 1/2,
      flexDirection: 'column',
      marginVertical: '2%',
      marginHorizontal: '2%',
      marginBottom: 1,
      backgroundColor: '#383838',
      borderRadius: 3,
    },
    
    groupLvlBadge: {
      position: 'absolute',
      alignItems: 'center',
      flex: 1,
      justifyContent: 'flex-end',
      width: '40%',
      height: '35%',
      backgroundColor: "#766449",
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      marginTop: '23%',
    },
    groupIcon: {

      width: 110,
      height: 110,
      borderRadius: 100,
      borderWidth: 4,
      borderColor: "#766449", 
    },
    groupContainer: {
      backgroundColor: '#939393', 
      height: '30%',
      width: '90%',
      borderRadius:5,
      marginBottom: '2%'
     
   },
   groupChallengeButton: {
    backgroundColor:"#ff5c00",
    width: 100,
    height: '30%',
    borderRadius: 5,
    elevation: 2

  },
  groupIconHolder:{
    backgroundColor: '#383838',
    alignItems: 'center',
    width: '100%',
    marginTop: '2%',

   },

  });