import styles from '../styles/Page.style';

//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Button, PermissionsAndroid } from "react-native";
import React, { useState, useEffect } from 'react';
import { render } from "react-dom";
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { LocationSubscriber } from 'expo-location/build/LocationSubscribers';
import { subscribeToPermissionUpdates } from 'react-native-location';

export default function GPSPage() {
    
    const [distance, setDistance] = useState(0);
    const [position, setPosition] = useState([0,0]);
    const [errorMsg, setErrorMsg] = useState(null);
    
    const haversine = require('haversine')
    let subscriber = null;

    let challenge = {
      distance: 1000,
      completed: false
    }

    let run = {
      distance: 0,
      time: 0,
      speed: 0,
    }

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
              distanceInterval: 20,
          },
          (location) => {
              setPosition([location.coords.longitude, location.coords.latitude])
          }
      ); 
      })()
    }, [])

    useEffect(() => {
      setDistance(distance+20);
      console.log(distance);
    }, [position])

    return (
        <View style={styles.container}>
            <View>
            <Text>{position[0] + ", " + position[1]}</Text>
                
            </View>    
        </View>
    );    
}

//<Button title='Start' onPress={}/>