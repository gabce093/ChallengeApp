import { StyleSheet, Image } from 'react-native';
{/*This is the stylesheet used by the top bar of the screen*/}
export default StyleSheet.create({
      TopBarHolder: {
        flex: 1,
        position: "absolute",
        flexDirection: "row",
        backgroundColor: 'transparent',
        marginRight: 0,
        zIndex: 10,
      },
      ProfileHolder: {
        flex: 3,
        flexDirection: "column",
        backgroundColor: 'transparent',
      },
      CurrencyAndEXPHolder: {
        flex: 11,
        backgroundColor: 'transparent',
      },
      CurrencyHolder: {
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: 'row', 
        backgroundColor: 'transparent',
      },
      EXPBarHolder: {
        flex: 1,
        top: "11%",
        paddingRight: "12.5%",
        bottom: 0,
        backgroundColor: 'transparent',
      },
      SettingsHolder: {
        flex: 2,
        position: "relative",
        marginTop: "2%",
        paddingRight: "4%",
        marginRight: "2%",
        alignItems: 'flex-end',
        backgroundColor: 'transparent',
        zIndex: 15,
      },
      title: {
        flex:1,
        paddingLeft: "5%",
        height: "100%",
        fontSize: 20,
        fontWeight: 'bold',
        color: "#C4C4C4",
        backgroundColor: 'transparent',
      },
      lvl: {
        fontSize: 15,
        fontWeight: 'bold',
        color: "#C4C4C4",
      },
      lvlHolder: {
        flex: 1,
        color: "#C4C4C4",
        alignSelf: "flex-start",
        top: "160%",
        height: "30%",
        paddingRight: "35%",
        paddingBottom: "2%",
      },
      image: {
        flex: 1,
        height: undefined,
        width: undefined,
        marginBottom: "-120%"
      },
});