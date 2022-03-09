import { StyleSheet } from 'react-native';

export default StyleSheet.create({
      TopBarHolder: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'top',
        position: "relative",
        backgroundColor: 'rgba(52, 52, 52, 0)',
      },
      ProfileHolder: {
        alignItems: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0)',
        
      },
      CurrencyAndEXPHolder: {
        flex: 8,
        alignItems: 'left',
        height: '50%',
        flexDirection: 'column',
        
      },
      CurrencyHolder: {
        flex: 1,
        marginLeft: '1%',
        alignItems: 'top',
        flexDirection: 'row',
        backgroundColor: 'rgba(52, 52, 52, 0)',
      },
      EXPBarHolder: {
        flex: 1,
        alignItems: 'top',
        marginLeft: '1%',
        height: '2%',
        
      },
      SettingsHolder: {
        flex: 1,
        marginLeft: '4%',
        marginTop: '1%',
        alignItems: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0)',
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0)',
      },
      image: {
        width: 80,
        height: 80,
        resizeMode: 'stretch',
      },
});