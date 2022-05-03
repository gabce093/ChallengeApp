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
    height: "84%",
    width: "90%",
    borderRadius: 5,
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
  FriendlvlText: {
    fontSize: 13,
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
  friendChallengeButtonTxt: {
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

  errorMessageText: {
    color: "white",
    fontSize: 17,
  },

  errorMessageHolder: {
    alignContent: "center",
    backgroundColor: "rgba(97, 116, 143, 1)", // "#383838" "rgba(97, 116, 143, 1)"
    alignItems: "center",
    height: 50,
    justifyContent: "center",

    marginTop: "40%",
  },

  //*****Group-part******//

  groupContainer: {
    backgroundColor: "rgba(196, 196, 196, 0.9)",
    height: "26%",
    width: "90%",
    borderRadius: 5,
    marginBottom: "2%",
    paddingLeft: 13,
    paddingRight: 13,
  },
  groupHolder: {
    flex: 1 / 2,
    flexDirection: "column",
    marginVertical: "2%",
    marginHorizontal: "0.5%",
    marginBottom: 1,
    backgroundColor: "#383838",
    borderRadius: 9,
    alignItems: "center",
  },
  groupIconHolder: {
    backgroundColor: "rgba(0,0,0,0)",
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
  },
  groupLvlBadge: {
    position: "absolute",
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
    width: 65,
    height: "35%",
    backgroundColor: "#212121", //#766449
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
  GrouplvlText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#C4C4C4", //#181818
  },
  groupChallengeButton: {
    backgroundColor: "#ff5c00",
    width: 180,
    height: "35%",
    borderRadius: 6,
    elevation: 2,
    justifyContent: "center",
  },
  groupChallengeButtonTxt: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
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
