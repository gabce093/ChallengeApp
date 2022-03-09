import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    absolute: {
      position: 'absolute',
      color: 'rgba(52, 52, 52, 0)',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: -1,
    },
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(52, 52, 52, 0)',
    },
    flipperContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    title: {
      fontSize: 40,
      fontWeight: 'bold',
      backgroundColor: 'rgba(52, 52, 52, 0)',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
      backgroundColor: 'rgba(52, 52, 52, 0)',
    },
    link: {
      marginTop: 15,
      paddingVertical: 15,
    },
    linkText: {
      fontSize: 14,
      color: '#2e78b7',
    },
  });