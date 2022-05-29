import styles from '../styles/Page.style';
import React, { useState, useEffect } from 'react';
import { Image, ImageBackground, Pressable, StatusBar} from "react-native";
import * as Location from 'expo-location';
import { Text, View } from '../components/Themed';
import Recorder from '../components/Recorder';
import { RootTabScreenProps, RootStackParamList, RootTabParamList, RootStackScreenProps } from '../types';
import { HeadingSubscriber } from 'expo-location/build/LocationSubscribers';
import { LocationSubscription } from 'expo-location';
import { LogBox } from 'react-native';
 
// Ignore log notification by message
LogBox.ignoreLogs(['Warning: ...']);
 
//Ignore all log notifications
LogBox.ignoreAllLogs();

/** 
  * This function checks geolocationpermission from the user, if granted it starts logging geodata every 10 meters
  * the user is moving. Sends pace, position and watcher props to recorder component.
  * 
  * @author Victor
  * @param navigation The navigation variable to the resultpage.
  * @returns The page that the user can record a challenge.
*/
export default function GPSPage({ navigation }: RootStackScreenProps<'ResultPage'>) {
  

    const [position, setPosition] = useState([0,0]);
    const [pace, setPace] = useState(0.0);
    const [watcher, setWatcher] = useState<LocationSubscription | null>(null);
    const [errorMsg, setErrorMsg] = useState("null");
    
    /** 
     * @author Victor
     * 
    */
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