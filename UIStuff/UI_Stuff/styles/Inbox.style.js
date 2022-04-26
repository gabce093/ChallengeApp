import { StyleSheet } from "react-native";

{
  /*StyleSheet for inbox-page*/
}
export default StyleSheet.create({
  inboxContainer: {
    height: "80%",
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
  FriendRequestText: {
    color: "#C4C4C4",
    fontWeight: "bold",
    fontSize: 30,
  },
  messageFromText: {
    color: "#C4C4C4",
    fontWeight: "bold",
    fontSize: 20,
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
  ChallengeText: {
    color: "#C4C4C4",
    fontWeight: "bold",
    fontSize: 42,
  },
  acceptChallengeButton: {
    backgroundColor: "#ff5c00",
    height: 40,
    width: 180,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },

  acceptChallengeButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 27,
  },
  challengeInfoHolder: {
    flexDirection: "row",
    backgroundColor: "rgba(15, 15, 15, 0.5)",
    flex: 1,
    borderRadius: 16,
    justifyContent: "center",
    paddingHorizontal: 1,
    marginBottom: 5,
    alignItems: "center",
  },
  infoBubbles: {
    backgroundColor: "#383838",
    borderRadius: 16,
    justifyContent: "center",
    height: 32,
    width: 100,
    marginHorizontal: 4,
    alignItems: "center",
  },
  challengeInfoText: {
    color: "#C4C4C4",
    fontWeight: "bold",
    fontSize: 26,
  },
});
