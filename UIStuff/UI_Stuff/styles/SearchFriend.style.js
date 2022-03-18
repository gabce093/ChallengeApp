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
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  
  centeredView: {
    backgroundColor: '#dedede',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: '35%',
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
    backgroundColor: "#5c5c5c",
    borderRadius: 5,
    width: '90%',
    height: '90%',
  
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
    height: '10%',
    width: '70%',
  },


  //TEMPORARY
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    paddingTop: 30,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '300',
    marginBottom: 20,
  },
  header: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)',
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)',
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10,
  },
  activeSelector: {
    fontWeight: 'bold',
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10,
    textAlign: 'center',
  },
  multipleToggle: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 30,
    alignItems: 'center',
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },

})