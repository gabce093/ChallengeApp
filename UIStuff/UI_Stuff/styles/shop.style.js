import { StyleSheet } from "react-native";

{
  /*StyleSheet for the base of the pages*/
}
export default StyleSheet.create({
  //Shop page style

  //Container that holds every item on the character
  characterContainer: {
    justifyContent: "center",
    position: "relative",
    alignItems: "center",
    backgroundColor: "rgba(52, 52, 52, 0)",
    top: "-10%",
  },

  //Used by every character item
  character: {
    flex: 1,
    height: 300,
    width: 250,
    position: "absolute",
    scaleX: -1,
    zIndex: -1,
    paddingBottom: 450,
  },

  titleText: {
    alignContent: "center",
    fontSize: 45,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 30,
  },

  // Holds the shop information
  shopMenu: {
    height: "60%",
    width: 350,
    backgroundColor: "rgba(52, 52, 52, 0)",
    justifyContent: "center",
    alignItems: "center",
  },

  //Every button in the shop
  shopButton: {
    backgroundColor: "#939393",
    margin: 10,
    textAlign: "center",
    borderRadius: 5,
  },

  prevImg: {
    height: 90,
    width: 90,
    alignSelf: "center",
  },

  itemText: {
    borderRadius: 5,
    backgroundColor: "#FF5C00",
  },
});
