
import styles from '../styles/GPSPage.style';
import { Button } from "react-native";
import React, { useState, useEffect } from 'react';
import { Text, View } from '../components/Themed';
import { Stopwatch, Timer } from 'react-native-stopwatch-timer';
import {getType, getTime, getDistanceGoal, checkCompleted, setElapsedDistance, setTime, CompleteChallenge} from '../ChallengeData';
import {
    SafeAreaView,
    TouchableHighlight,
    Modal,
  } from 'react-native';
import { background } from 'native-base/lib/typescript/theme/styled-system';


export default function Recorder( {position}: any, {pace}: any) {
    
    const [distance, setDistance] = useState(0);
    const [startposition, setStartPosition] = useState([0,0]);
    const [recording, setRecording] = useState(false);
    const [isStopwatchStart, setIsStopwatchStart] = useState(false);
    const [resetStopwatch, setResetStopwatch] = useState(false);
    const haversine = require('haversine');
    const [buttonColor, setButtonColor] = useState('#00FF47');
    const [speed, setSpeed] = useState('00:00');


    var goal = getDistanceGoal();
   
    //Runs when component opens and when position changes.
    useEffect(() => {
        //If recording, calculates distance moved from last point and add it
        //to the total distance.
        if (recording == true) {
            let distance_since_last = haversine(startposition, position, {unit: 'meter', format: '[lon,lat]' });
            setDistance(distance + distance_since_last);
            setStartPosition(position);
        }
    }, [position])
    
    
    
    //Switch between start and stop,
    const handleStartStop = () => {
        setIsStopwatchStart(!isStopwatchStart);
        setResetStopwatch(false);
        setRecording(!recording);
        setStartPosition(position);  
        if (isStopwatchStart==true){
            setButtonColor('#00FF47');
        }
        else {
            setButtonColor('#FF0000');
        }
    }

    //Reset button
    const handleReset = () => {
        setDistance(0)
        setRecording(false)
        setIsStopwatchStart(false);
        setResetStopwatch(true);
    }

    //Finish button
    const handleFinish = () => {
        setElapsedDistance(distance);
        if (checkCompleted()) {
            CompleteChallenge();
        }
        else {

        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <Stopwatch
                start={isStopwatchStart}
                reset={resetStopwatch}
                options={options}
                getTime={(time: any) => {
                    if (isStopwatchStart == false) {
                        setTime(time); 
                    }   
                }}
            />
            <View style={styles.subContainer}>
                <View style={styles.distanceContainer}>
                    <Text style={styles.text}>{Math.round(distance) + "/" + goal}</Text>
                    <Text style={styles.smallText}>Distance (km)</Text>
                </View>
                <View style={styles.paceContainer}>
                    <Text style={styles.text}>{pace}</Text>
                    <Text style={styles.smallText}>Pace (min/km)</Text>
                </View>   
            </View>
            
            <TouchableHighlight style={
                {
                    backgroundColor: buttonColor,
                    flex: 1,
                    justifyContent: 'center',
                    borderRadius: 5,
                    marginBottom: '5%',
                    marginTop: '5%',
                }
                } 
                onPress={handleStartStop}>
                <Text style={styles.buttonText}>{!isStopwatchStart ? 'START' : 'STOP'}</Text>
            </TouchableHighlight>
            <View style={styles.subContainer}>
                <TouchableHighlight 
                    style={styles.button}
                    onPress={handleReset}>
                    <Text style={styles.buttonText}>RESET</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.button}
                    onPress={handleFinish}>
                    <Text style={styles.buttonText}>FINISH</Text>
                </TouchableHighlight>
            </View>
        </SafeAreaView>   
    );
}  

const options = {
    container: {
      backgroundColor: '#282828',
      padding: 0,
      borderRadius: 5,
      marginBottom: '5%'
    },
    text: {
      fontSize: 65,
      color: '#FFF',
      textAlign: 'center',
    },
}