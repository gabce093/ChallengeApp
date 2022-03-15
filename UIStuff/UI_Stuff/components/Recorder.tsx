
import styles from '../styles/Page.style';
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


export default function Recorder({position}: any) {
    
    const [distance, setDistance] = useState(0);
    const [startposition, setStartPosition] = useState([0,0]);
    const [recording, setRecording] = useState(false);
    const [isStopwatchStart, setIsStopwatchStart] = useState(false);
    const [resetStopwatch, setResetStopwatch] = useState(false);
    const haversine = require('haversine');
    
    var goal = getDistanceGoal();

    useEffect(() => {
      if (recording == true) {
        let distance_since_last = haversine(startposition, position, {unit: 'meter', format: '[lon,lat]' });
        setDistance(distance + distance_since_last);
        setStartPosition(position);
      }
    }, [position])

    const handleStartStop = () => {
        setIsStopwatchStart(!isStopwatchStart);
        setResetStopwatch(false);
        setRecording(!recording);
        setStartPosition(position);  
    }

    const handleReset = () => {
        setDistance(0)
        setRecording(false)
        setIsStopwatchStart(false);
        setResetStopwatch(true);
    }

    const handleFinish = () => {
        setElapsedDistance(distance);
        if (checkCompleted()) {
            CompleteChallenge();
        }
        else {

        }
    }

    return (
        <SafeAreaView>
            <Stopwatch
                start={isStopwatchStart}
                reset={resetStopwatch}

                getTime={(time: any) => {
                    if (isStopwatchStart == false) {
                        setTime(time); 
                    }   
                }}
            />
            <Text style={{color: "#fff"}}>{Math.round(distance) + "/" + goal}</Text>
            <TouchableHighlight
                onPress={handleStartStop}>
                <Text>{!isStopwatchStart ? 'START' : 'STOP'}</Text>
            </TouchableHighlight>
            <Button
                title= "Reset"
                onPress={handleReset}
            />
            <Button
                title= "Finish"
                onPress={handleFinish}
            />
        </SafeAreaView>   
    );
}  
