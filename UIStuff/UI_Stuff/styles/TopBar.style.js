import { StyleSheet, Image, Dimensions } from 'react-native';
var screenWidth = Dimensions.get('window').width;
{/*This is the stylesheet used by the top bar of the screen*/}
export default StyleSheet.create({
      TopBarHolder: {
        flex: 1,
        position: "absolute",
        flexDirection: "row",
        backgroundColor: 'transparent',
        marginRight: 0,
        
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
        fontSize: 0.05*screenWidth,
        fontWeight: 'bold',
        color: "#C4C4C4",
        justifyContent: "center",
        alignSelf: "center",
        paddingRight: "10%",
      },
      lvlHolder: {
        flex: 1,
        width:"100%",
        color: "#C4C4C4",
        alignSelf: "center",

        top: "175%",
        height: "30%",

        paddingBottom: "2%",
      },
      image: {
        flex: 1,
        height: undefined,
        width: undefined,
        marginBottom: "-130%"
      },
});