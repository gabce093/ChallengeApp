import styles from '../styles/Page.style';
import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { Text, View } from '../components/Themed';
import Recorder from '../components/Recorder';

export default function GPSPage() {
    
    const [position, setPosition] = useState([0,0]);
    const [errorMsg, setErrorMsg] = useState("null");
    
    let subscriber = null;
    
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }
        
        subscriber = await Location.watchPositionAsync(
          {
              accuracy: Location.Accuracy.BestForNavigation,
              distanceInterval: 10,
          },
          (location) => {
              setPosition([location.coords.longitude, location.coords.latitude])
          }
      ); 
      })()
    }, [])

    return (
      <View style={styles.container}>
        <Recorder position={position}></Recorder>  
      </View>
    );
}

//<Button title='Start' onPress={}/>