import styles from '../styles/Page.style';
import React, { useState, useEffect } from 'react';
import { Image, ImageBackground, Pressable} from "react-native";
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { Text, View } from '../components/Themed';
import Recorder from '../components/Recorder';

export default function GPSPage() {
    
    const [position, setPosition] = useState([0,0]);
    const [pace, setPace] = useState("00:00");
    const [errorMsg, setErrorMsg] = useState("null");
    
    let subscriber = null;   
    //Runs when page is open.
    useEffect(() => {
      (async () => {

        //Checks permission to use geolocation.
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }
        
        //Subscriber that watch the location. If user has moved more than 10 meters it will log the info.
        subscriber = await Location.watchPositionAsync(
          {
              accuracy: Location.Accuracy.BestForNavigation,
              distanceInterval: 10,
          },
          (location) => {
              setPosition([location.coords.longitude, location.coords.latitude]);
              if (location.coords.speed != null) {
                var min_per_m = location.coords.speed*60;
                var min_per_km = 1000/min_per_m;
                var minutes = Math.floor(min_per_km)
                var seconds = Math.round((min_per_km-minutes) * 60);
                
                if(10>seconds){
                    setPace(minutes + ":" + '0' + seconds);
                }
                else {
                    setPace(minutes + ":" + seconds);
                }
              }   
          }
      ); 
      })()
    }, [])

    return (
      <View style={styles.container}>
        <ImageBackground source={require('../Graphics/forest.png')} style={styles.absolute} resizeMode="cover"></ImageBackground>
        <Recorder position={position} pace={pace}></Recorder>  
        <Text>{pace}</Text>
      </View>
    );
}

//<Button title='Start' onPress={}/>