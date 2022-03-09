import { StyleSheet } from 'react-native';

export default StyleSheet.create({
      TopBarHolder: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'top',
        position: "relative",
        backgroundColor: 'transparent',

      },
      ProfileHolder: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        
      },
      CurrencyAndEXPHolder: {
        flex: 8,
        alignItems: 'left',
        height: '50%',
        flexDirection: 'column',
        backgroundColor: '#333333',
      },
      CurrencyHolder: {
        flex: 1,
        marginLeft: '1%',
        alignItems: 'top',
        flexDirection: 'row',
        backgroundColor: 'transparent',
      },
      EXPBarHolder: {
        flex: 1,
        alignItems: 'top',
        marginLeft: '1%',
        height: '2%',
        backgroundColor: '#333333',
      },
      SettingsHolder: {
        flex: 1,
        marginLeft: '4%',
        marginTop: '1%',
        alignItems: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0)',
      },
      title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: "#C4C4C4",
        alignItems: 'center',
        backgroundColor: '#333333',
      },
      image: {
        width: 80,
        height: 80,
        resizeMode: 'stretch',
      },
});