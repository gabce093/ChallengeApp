import styles from '../styles/GPSPage.style';
import React, { useState, useEffect } from 'react';
import { Text, View } from '../components/Themed';
import { Stopwatch} from 'react-native-stopwatch-timer';
import {getType, getDistanceGoal, checkCompleted, getElapsedDistance} from '../ChallengeData';
import {
    SafeAreaView,
    TouchableHighlight,
    Modal,
  } from 'react-native';
import { ProgressBar } from 'react-native-paper';

export default function ResultProgressBar(){ 

    var goal = getDistanceGoal();
    var elapsed_distance = getElapsedDistance();
    const [distance, setDistance] = useState(0);

   

    useEffect(() => {
        if(distance <= elapsed_distance - 1) {
            const interval = setTimeout(() => {
                    setDistance(prevDist => prevDist+1)  
            }, 100);
            return () => clearInterval(interval);
        }
    }, [distance])

    
    return (
        <View style={styles.progressContainer2}>
            <Text>{distance + "/"+ goal}</Text>
            <ProgressBar color="#FF5C00" progress={distance / goal} style={{
                height: 20,
                backgroundColor: "#151515",
                }}/>
            <ProgressBar color="green" progress={(distance- goal) / goal} style={{
                height: 20,
                backgroundColor: "transparent",
                }}/>
                
        </View>
    )
}