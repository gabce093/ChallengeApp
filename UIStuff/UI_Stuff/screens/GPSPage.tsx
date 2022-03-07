import styles from '../styles/Page.style';

//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Button, PermissionsAndroid } from "react-native";
import React, { useState, useEffect } from 'react';
import { render } from "react-dom";
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

export default function GPSPage() {
    
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

    let subscriber = null;
    const recordRun = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        subscriber = await Location.watchPositionAsync(
            {
                accuracy: Location.Accuracy.BestForNavigation,
            },
            location => {
                setLocation(location.coords)
                console.log(JSON.stringify(location))
            }
        );    
    }

    const stopRecord = async () => {
        console.log('Remove tracking')
        await subscriber?.remove();
    }

    return (
        <View style={styles.container}>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
            <Button
                title= "Start" onPress={recordRun}
            />   
            <Button
                title= "Stop" onPress={stopRecord}
            /> 
        </View>
    );
    
}

const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: "SPRINTQUEST Location Permission",
          message:
            "SPRINTQUEST needs access to your location " +
            "so you can record your run.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the location");
      } else {
        console.log("Location permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const recordRun = () => {
    Geolocation.setRNConfiguration();a
    Geolocation.getCurrentPosition(function(position) {
        console.log(position)
      });
  };