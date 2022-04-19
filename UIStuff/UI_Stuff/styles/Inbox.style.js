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
  },
  //Style for Friend-request square
  friendRequestContainer: {
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
  },

  textAndButtonsHolder: {
    flexDirection: "column",
    backgroundColor: "#383838",

    alignItems: "center",
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
    justifyContent: "flex-end",
    backgroundColor: "#383838",
    marginTop: 60,
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
});
