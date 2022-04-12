import { StyleSheet } from 'react-native';

export default StyleSheet.create({

    container: {
        marginTop: 80,
        flex: 1,
        height: '10%',
        width: '100%',
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    container2: {
        flex: 1,
        height:  100,
        width: 340,
        backgroundColor: 'transparent',
        alignItems: 'center',
        alignSelf: 'center'
    },
    rowContainer: {
        marginTop: 10,
        height: '50%',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',  
        alignContent: 'center',
        backgroundColor: 'transparent',
    },
    title: {
        fontSize: 50,
    },
    title2: {
        fontSize: 10,
        marginTop: "-3%",
        marginBottom: "-5%",
    },
    text: {
        fontSize: 30,
        color: 'white',
    },
    text2: {
        marginTop: -5,
        fontSize: 10,
        color: 'white',
    },
    text3: {
        
        fontSize: 30,
        color: '#FF5C00',
    },
    progressContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    timeContainer: {
        flex: 3,
        marginHorizontal: 2,
        marginRight: 10,
        
        marginVertical: 2,
        alignItems: 'center',
        borderRadius: 5,
        alignContent: 'center',
        backgroundColor: '#282828',
        
    },
    paceContainer: {
        flex: 2,
        marginHorizontal: 2,
        marginVertical: 2,
        
        alignItems: 'center',
        borderRadius: 5,
        
        backgroundColor: '#282828',
        
    },
    button: {
        flex: 1,
        
        margin: '5%',
        width: '40%',
        backgroundColor: '#FF5C00',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        borderRadius: 5,
    },
    buttonText: {
        fontSize: 40,
    },
});