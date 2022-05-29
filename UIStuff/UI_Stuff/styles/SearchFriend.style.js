import { StyleSheet } from "react-native";

export default StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    alignItems: "center",
    backgroundColor: "#2076F6", //"rgba(97, 116, 143, 1)"
    borderRadius: 100,
    flexDirection: "row",
    justifyContent: "center",
    height: 67,
    width: 67,
    marginTop: 20,
  },
  buttonSubmit: {
    backgroundColor: "#ff5c00",
    borderRadius: 5,
    color: "white",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  modalText: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  centeredView: {
    backgroundColor: "#dedede",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: "35%",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalView: {
    backgroundColor: "#5c5c5c",
    borderRadius: 5,
    width: "94%",
    height: "96%",

    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textWindow: {
    paddingLeft: 5,
    backgroundColor: "white",
    borderRadius: 5,
    borderColor: "#383838",
    borderWidth: 3,
    height: "10%",
    width: "70%",
  },

  //Search List
  container: {
    flex: 1,
    backgroundColor: "#F5FCFF",
    paddingTop: 30,
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "300",
    marginBottom: 20,
  },
  header: {
    flexDirection: "row",
    width: 280,
    backgroundColor: "#F5FCFF",
    paddingHorizontal: 10,
    paddingTop: 2,
    paddingBottom: 20,
    borderRadius: 8,
    justifyContent: "flex-start",
    marginTop: 5,
    alignItems: "center",
  },
  headerText: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  content: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 9,
  },
  active: {
    backgroundColor: "rgba(255,255,255,1)",
  },
  inactive: {
    backgroundColor: "rgba(245,252,255,1)",
  },
  selectors: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  selector: {
    backgroundColor: "#F5FCFF",
    padding: 10,
  },
  activeSelector: {
    fontWeight: "bold",
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: "500",
    padding: 10,
    textAlign: "center",
  },
  multipleToggle: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 30,
    alignItems: "center",
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});
