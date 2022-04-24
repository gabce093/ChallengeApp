import { StyleSheet } from "react-native";

{
  /*StyleSheet for inbox-page*/
}
export default StyleSheet.create({
  inboxContainer: {
    height: "90%",
    width: "96%",
    marginBottom: "3%",
    backgroundColor: "rgba(196, 196, 196, 0.9)",
    borderRadius: 8,
  },
  //Style for Friend-request square
  friendRequestContainer: {
    flex: 1,
    marginTop: "4%",
    marginHorizontal: "4%",
    backgroundColor: "#383838",
    borderRadius: 9,
    flexDirection: "row",
    justifyContent: "center",
  },

  imageAndNameHolder: {
    backgroundColor: "#383838",
    flexDirection: "column",
    marginTop: "2%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },

  textAndButtonsHolder: {
    flex: 2,
    flexDirection: "column",
    backgroundColor: "#383838",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 8,
  },
  messageHeadText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 30,
  },
  messageFromText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
  },
  statusButtonHolder: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#383838",
  },
  acceptButton: {
    backgroundColor: "rgb(91, 166, 53)",
    height: 40,
    width: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  declineButton: {
    backgroundColor: "red",
    height: 40,
    width: 80,
    marginLeft: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },

  //**CHALLENGE-card**/
  acceptChallengeButton: {
    backgroundColor: "#ff5c00",
    height: 40,
    width: 120,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },

  acceptChallengeButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  challengeDistanceText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
  },
  challengeDistanceHolder: {
    backgroundColor: "rgba(15, 15, 15, 0.5)",
    flex: 1,
    borderRadius: 8,
    justifyContent: "center",
    paddingHorizontal: 4,
    marginBottom: 5,
  },
});
