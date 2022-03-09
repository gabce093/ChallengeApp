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
  buttonClose: {
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
    marginBottom: '5vw',
    textAlign: "center",
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  centeredView: {
    backgroundColor: '#dedede',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: '76vw',
    marginHorizontal: '5vw',
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
    width: '75vw',
    height: '48vw',
  
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
    borderRadius: 5,
    borderColor: '#383838',
    borderWidth: 3,
    height: '9vw',
  },

})