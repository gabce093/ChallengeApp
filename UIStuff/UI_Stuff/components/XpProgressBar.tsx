import styles from '../styles/ResultPage.style';
import React, { useState, useEffect } from 'react';
import { Text, View } from '../components/Themed';
import { Stopwatch} from 'react-native-stopwatch-timer';
import {getType,calculateXP, getDistanceGoal, checkCompleted, getElapsedDistance} from '../ChallengeData';
import { getLevelProgress, getLevelXp} from '../PlayerData';
import {
    SafeAreaView,
    TouchableHighlight,
    Modal,
  } from 'react-native';
import { ProgressBar } from 'react-native-paper';

export default function ResultProgressBar(props: any){ 

    const [xp, setXP] = useState(0);

    useEffect(() => {
        if(xp <= calculateXP()) {
            const interval = setTimeout(() => {
               setXP(prevXp => prevXp+1);   
               if (xp < 500)  setXP(prevXp => prevXp+100);
                else   setXP(prevXp => prevXp+1);   
            }, 10);
            return () => clearInterval(interval);
        }
        
    }, [xp])

    return (
        <View style={styles.progressContainer2}>
            <ProgressBar color="#FF5C00" progress={getLevelProgress() + xp/getLevelXp()} style={{
                height: 20,
                width: 340,
                borderRadius: 20,
                backgroundColor: "#151515",
                
                }}/>
            <ProgressBar color="#17BEBB" progress={getLevelProgress()} style={{
                height: 20,
                width: 340,
                backgroundColor: "transparent",
                borderRadius: 20,
                marginTop: -20,
                }}/>
                
        </View>
    )
}