import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        backgroundColor: '#333333',
        height: '50%',
        width: '88%',
        padding: '5%',
        borderRadius: 5,
    },
    subContainer: {
        backgroundColor: '#333333',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',  
    },
    distanceContainer: {
        borderRadius: 5,
        backgroundColor: '#282828',
        flex: 3,
        justifyContent: 'center',
        marginRight: '5%',
    },
    paceContainer: {
        backgroundColor: '#282828',
        flex: 2,
        justifyContent: 'center',
        borderRadius: 5,
    },
    button: {
        
        width: '47%',
        backgroundColor: '#282828',
        justifyContent: 'center',
        borderRadius: 5,
    },
    text: {
        fontSize: 30,
        textAlign: 'center',
        flex: 2,
    },
    smallText: {
        fontSize: 12,
        textAlign: 'center',
        flex: 1,
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 30,
    }
});