import styles from '../styles/Page.style';
import React, { useState, useEffect } from 'react';
import { Image, ImageBackground, Pressable, StatusBar} from "react-native";
import * as Location from 'expo-location';
import { Text, View } from '../components/Themed';
import Recorder from '../components/Recorder';
import { RootTabScreenProps, RootStackParamList, RootTabParamList, RootStackScreenProps } from '../types';
import { HeadingSubscriber } from 'expo-location/build/LocationSubscribers';


export default function GPSPage({ navigation }: RootStackScreenProps<'ResultPage'>) {
  StatusBar.setHidden(false);

    const [position, setPosition] = useState([0,0]);
    const [pace, setPace] = useState(0.0);
    const [watcher, setWatcher] = useState(null);
    const [errorMsg, setErrorMsg] = useState("null");
    
  
    //Runs when page is open.
    useEffect(() => {
      (async () => {

        //Checks permission to use geolocation.
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            console.log("permission denied")
        }
        
        //Subscriber that watch the location. If user has moved more than 10 meters it will log the info.
        const subscriber = await Location.watchPositionAsync(
          {
              accuracy: Location.Accuracy.BestForNavigation,
              distanceInterval: 10,
          },
          (location) => {
              setPosition([location.coords.longitude, location.coords.latitude]);
              if (location.coords.speed != null) {
                setPace(location.coords.speed);
              }   
          },
      ).then((locationWatcher) => {
        setWatcher(locationWatcher);
      }).catch((err) => {
        console.log(err)
      });  
      })()
    }, [])

    return (
      <View style={styles.container}>
        <ImageBackground source={require('../Graphics/forest.png')} style={styles.forestBackground} resizeMode="cover"></ImageBackground>
        <Recorder position={position} pace={pace} watcher={watcher} navigation={navigation}></Recorder>  
      </View>
    );
}

//<Button title='Start' onPress={}/>