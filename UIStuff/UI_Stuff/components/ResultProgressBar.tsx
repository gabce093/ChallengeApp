import styles from '../styles/ResultPage.style';
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

export default function ResultProgressBar(props: any){ 

    
    const [distance, setDistance] = useState(0);

    useEffect(() => {
        if(distance <= props.elapsedDistance - 1) {
            const interval = setTimeout(() => {
                    setDistance(prevDist => prevDist+1)  
            }, 10);
            return () => clearInterval(interval);
        }
    }, [distance])

    return (
        <View style={styles.progressContainer}>
            <Text style={styles.text}>{distance + "m / "+ props.goal + "m"}</Text>
            <ProgressBar color="#FF5C00" progress={distance/props.goal} style={{
                height: 20,
                width: 340,
                borderRadius: 20,
                backgroundColor: "#151515",
                
                }}/>
            <ProgressBar color="#43FF25" progress={(distance-props.goal) / props.goal} style={{
                height: 20,
                width: 340,
                backgroundColor: "transparent",
                borderRadius: 20,
                marginTop: -20,
                }}/>
                
        </View>
    )
}