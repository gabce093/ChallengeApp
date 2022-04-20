import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        backgroundColor: '#333333',
        height: '60%',
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
    progressContainer: {
        backgroundColor: '#333333',
        paddingTop: '5%' 
    },
    progressContainer2: {
        justifyContent: 'center',
        height: '10%',
        width: '80%',
        backgroundColor: 'transparent',
        paddingTop: '5%', 
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
        opacity: 0.3,
        width: '47%',
        backgroundColor: '#282828',
        justifyContent: 'center',
        borderRadius: 5,
    },
    button2: {
        
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