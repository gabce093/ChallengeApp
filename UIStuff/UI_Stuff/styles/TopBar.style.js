import { StyleSheet } from 'react-native';

export default StyleSheet.create({
      TopBarHolder: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'top',
        
      },
      ProfileHolder: {
        alignItems: 'center',
        
        
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
        
      },
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        alignItems: 'center',
      },
      image: {
        width: 80,
        height: 80,
        resizeMode: 'stretch',
      },
});