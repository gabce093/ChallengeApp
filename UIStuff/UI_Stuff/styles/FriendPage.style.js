import { StyleSheet } from "react-native";

export default StyleSheet.create({
  backimg: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    width: "100%",
  },

  // FRIEND PAGE STYLE
  //friend-part
  friendContainer: {
    backgroundColor: "rgba(196, 196, 196, 0.9)",
    height: "80%",
    width: "90%",
    borderRadius: 5,
    marginBottom: "7%",
  },

  friendHolder: {
    flex: 1 / 3,
    flexDirection: "column",
    marginVertical: "2%",
    marginHorizontal: "2%",
    marginBottom: 1,
    backgroundColor: "rgba(30, 54, 88,0.6)",
    borderRadius: 15,
  },
  nameText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: "8%",
  },

  friendIconHolder: {
    backgroundColor: "rgba(0,0,0,0)",
    alignItems: "center",
    width: "100%",
    marginTop: "2%",
  },
  playerIcon: {
    width: "30%",
    height: "30%",
    borderRadius: 100,
    overflow: "hidden",
    borderWidth: 5,
    borderColor: "#766449",
  },
  lvlBadge: {
    position: "absolute",
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
    width: "40%",
    height: "35%",
    backgroundColor: "#766449",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginTop: "35%",
  },
  lvlText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#181818",
  },
  friendChallengeButton: {
    backgroundColor: "#2076F6",
    width: 100,
    height: "30%",
    borderRadius: 10,
    elevation: 2,
  },
  challengeTxt: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },

  friendModal: {
    backgroundColor: "white",
    width: "100%",
    flexDirection: "column",
    flex: 1 / 6,
  },

  modalMenuButton: {
    flex: 1 / 3,
    justifyContent: "center",
    borderBottomColor: "lightgrey",
    borderBottomWidth: 1,
  },

  modalMenuText: {
    marginLeft: 20,
    fontSize: 16,
    color: "rgb(66, 66, 66)",
  },

  //*****Group-part******//

  groupContainer: {
    backgroundColor: "rgba(196, 196, 196, 0.9)",
    height: "25%",
    width: "90%",
    borderRadius: 5,
    marginBottom: "2%",
  },
  groupHolder: {
    flex: 1 / 2,
    flexDirection: "column",
    marginVertical: "2%",
    marginHorizontal: "2%",
    marginBottom: 1,
    backgroundColor: "#383838",
    borderRadius: 9,
    alignItems: "center",
  },
  groupIconHolder: {
    backgroundColor: "#383838",
    alignItems: "center",
    width: 120,
    height: 127,
    marginTop: "2%",
  },
  groupIcon: {
    width: 110,
    height: 110,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: "#766449",
  },
  groupLvlBadge: {
    position: "absolute",
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
    width: 65,
    height: "35%",
    backgroundColor: "#766449",
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginTop: 80,
  },
  groupNameText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: "2%",
  },
  groupChallengeButton: {
    backgroundColor: "#ff5c00",
    width: 100,
    height: "30%",
    borderRadius: 5,
    elevation: 2,
  },
  createGroupButton: {
    backgroundColor: "grey",
    fontSize: 20,
  },

  groupModal: {
    backgroundColor: "white",
    height: "90%",
    width: "100%",
  },
});
