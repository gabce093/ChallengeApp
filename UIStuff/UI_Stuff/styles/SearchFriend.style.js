import { StyleSheet } from 'react-native';

export default StyleSheet.create({

 
 button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#ff5c00",
  },
  buttonSubmit: {
    backgroundColor: "#ff5c00",
    borderRadius: 5,
    color: 'white',
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {

    textAlign: "center",
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  },
  
  centeredView: {
    height: 240,
    backgroundColor: '#dedede',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: '50%',
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalView: {
    justifyContent: 'space-evenly',
    backgroundColor: "#5c5c5c",
    borderRadius: 5,
    width: '90%',
    height: 220,
    alignSelf: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  textWindow: {
    backgroundColor: 'white',
    paddingLeft: 5,
    borderRadius: 5,
    borderColor: '#383838',
    borderWidth: 3,
    height: '20%',
    width: '80%',
  },

})