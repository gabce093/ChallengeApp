import styles from '../styles/ResultPage.style';
import React, { useState, useEffect } from 'react';
import { Text, View } from '../components/Themed';
import { Stopwatch} from 'react-native-stopwatch-timer';
import {getType,calculateXP, getDistanceGoal, checkCompleted, getElapsedDistance} from '../ChallengeData';
import { getLevel, getLevelProgress, getLevelXp} from '../PlayerData';
import {
    SafeAreaView,
    TouchableHighlight,
    Modal,
  } from 'react-native';
import { ProgressBar } from 'react-native-paper';

export default function ResultProgressBar(props: any){ 

    const [xp, setXP] = useState(0);
    var lvl = getLevel();
    var nextLvl = lvl +1;
    
    //UseEffect that runs every time distance is changed.
    useEffect(() => {
        //Increment xp after 10 millisec. Faster in the beginning, slower in the end.
        if(xp <= calculateXP()) {
            const interval = setTimeout(() => {
               setXP(prevXp => prevXp+1);   
               if (xp < 500)  setXP(prevXp => prevXp+50);
                else   setXP(prevXp => prevXp+1);   
            }, 10);
            return () => clearInterval(interval);
        }     
    }, [xp])

    //Set orange color to transparent if levelup
    const handleOrange = (n: number) => {
        
        if (n > 1) {
           return "transparent";
        }
        else {
           return "#FF5C00";
        }
    }

    //Set blue color to transparent if levelup
    const handleBlue = (n: number) => {
        
        if (n > 1) {
           return "transparent";
        }
        else {
           return "#17BEBB";
        }
    }

    return (
        <View style={styles.progressContainer2}>
            <ProgressBar color={handleBlue(getLevelProgress()+xp/getLevelXp())} progress={getLevelProgress()+xp/getLevelXp()} style={{
                height: 20,
                width: 340,
                borderRadius: 20,
                backgroundColor: "#151515",   
                }}/>
            <ProgressBar color={handleOrange(getLevelProgress()+xp/getLevelXp())} progress={getLevelProgress()} style={{
                height: 20,
                width: 340,
                backgroundColor: "transparent",
                borderRadius: 20,
                marginTop: -20,
                }}/>
            <ProgressBar color="#17BEBB" progress={xp/getLevelXp() + getLevelProgress() - 1} style={{
                height: 20,
                width: 340,
                borderRadius: 20,
                backgroundColor: "transparent", 
                marginTop: -20,
                }}/> 
            <Text>{(getLevelProgress()+xp/getLevelXp() > 1) ? "Current level: " + nextLvl + " Level up!" : "Current level: " + lvl }</Text>
        </View>
    )
}

//getLevelProgress() + xp/getLevelXp()
//getLevelProgress()
//#F59756 sandy brown
//#17BEBB light blue
//#FF5C00 orange
//#00A6A6 light sea green
//#1D3354 prussian blue
//#EAD2AC wheat