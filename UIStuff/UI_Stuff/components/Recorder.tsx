
import styles from '../styles/GPSPage.style';
import React, { useState, useEffect } from 'react';
import { Text, View } from '../components/Themed';
import { Stopwatch } from 'react-native-stopwatch-timer';
import { getType, getDistanceGoal, checkCompleted, setElapsedDistance, setTotalTime, setChallengeTime, CompleteChallenge } from '../ChallengeData';
import {
    SafeAreaView,
    TouchableHighlight,
    Modal,
} from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { background } from 'native-base/lib/typescript/theme/styled-system';

/** 
  * This function records distance, time and pace for the user when recording a challenge.
  * 
  * @author Victor
  * @param props position, pace, navigation and watcher.
  * @returns The component that the user can record a challenge.
*/
export default function Recorder(props: any){
    
    const [distance, setDistance] = useState(0);
    const [startposition, setStartPosition] = useState([0, 0]);
    const [recording, setRecording] = useState(false);
    const [isStopwatchStart, setIsStopwatchStart] = useState(false);
    const [resetStopwatch, setResetStopwatch] = useState(false);
    const haversine = require('haversine');
    const [buttonColor, setButtonColor] = useState('#00FF47');
    const [speed, setSpeed] = useState('00:00');
    const [modalVisible, setModalVisible] = useState(false);


    var goal = getDistanceGoal();

    //Runs when component opens and when position changes.
    useEffect(() => {
        //If recording, calculates distance moved from last point and add it
        //to the total distance.
        if (recording == true) {
            let distance_since_last = haversine(startposition, props.position, { unit: 'meter', format: '[lon,lat]' });
            setDistance(distance + distance_since_last);
            setStartPosition(props.position);
        }
    }, [props.position])

    useEffect(() => {
        //If recording, calculates min/km.
        if (recording == true) {
            var meter_per_min = props.pace*60;
            var min_per_km = 1000/meter_per_min;
            var minutes = Math.floor(min_per_km)
            var seconds = Math.round((min_per_km - minutes) * 60);

            if (10 > seconds) {
                setSpeed(minutes + ":" + '0' + seconds);
            }
            else {
                setSpeed(minutes + ":" + seconds);
            }
        }
    }, [props.pace])
    
    /** 
     * This function switches the a button between between start and stop. Starts the recording and the stopwatch
     * when start is pressed. Stops recording and stopwatch when stop is pressed.
     * 
     * @author Victor 
    */
    const handleStartStop = () => {
        setIsStopwatchStart(!isStopwatchStart);
        setResetStopwatch(false);
        setRecording(!recording);
        setStartPosition(props.position);
        if (isStopwatchStart == true) {
            setButtonColor('#00FF47');
        }
        else {
            setButtonColor('#FF0000');
        }
    }

    /** 
     * This function handles the reset button. Resets distance and stopwatch.
     * 
     * @author Victor 
    */
    const handleReset = () => {
        setDistance(0)
        setRecording(false)
        setIsStopwatchStart(false);
        setResetStopwatch(true);
    }

    /** 
     * This function handles the finish button. Elapsed distance is saved. If distance goal is reached then 
     * the challenge is completed and the watcher is removed and the user is navigated to the ResultPage.
     * If not a modal pops up. If modal is visible when running function, watcher is removed and user 
     * is navigated to the ResultPage.
     * 
     * @author Victor 
    */
    const handleFinish = () => {
        setElapsedDistance(distance);
        if (distance > goal) {
            CompleteChallenge();
            console.log(props.watcher)
            props.watcher.remove();
            props.navigation.navigate('ResultPage');
        }
        else if (modalVisible){
            console.log(props.watcher)
            props.watcher.remove();
            props.navigation.navigate('ResultPage');
        }
        else{
            setModalVisible(!modalVisible)
        }
    }

    //Display reset and finshish if run is paused
    function StartAndResetButtons() {
        if (isStopwatchStart == false) {
            return (
                <View style={styles.subContainer}>
                    <TouchableHighlight 
                        style={styles.button2}
                        onPress={handleReset}>
                        <Text style={styles.buttonText}>RESET</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button2}
                        onPress={handleFinish}>
                        <Text style={styles.buttonText}>FINISH</Text>
                    </TouchableHighlight>
                </View>
            )
        }
        else {
            return (<View style={styles.subContainer}>
                <TouchableHighlight 
                    style={styles.button}
                    >
                    <Text style={styles.buttonText}>RESET</Text>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.button}
                    >
                    <Text style={styles.buttonText}>FINISH</Text>
                </TouchableHighlight>
            </View>)
        }
    }

    return (
        <View style={styles.container}>
           <Modal style={styles.modalView}
           transparent={true}
           animationType="slide"
           visible={modalVisible}
           onRequestClose={() => {
             setModalVisible(!modalVisible);
           }}>
               
               <View style={styles.modal}>
                    <Text>Challenge not completed. Are you sure you want to finish run?</Text>
                    <TouchableHighlight 
                        onPress={() => handleFinish()}>
                            <Text>Finish now</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.modalButton}
                        onPress={() => {
                            setModalVisible(!modalVisible)
                        }}>
                        <Text>Cancel</Text>
                    </TouchableHighlight>
                </View>
            </Modal>
            <Stopwatch
                start={isStopwatchStart}
                reset={resetStopwatch}
                options={options}
                getTime={(time: any) => {
                    if (isStopwatchStart == false) {
                        setTotalTime(time);
                    }
                    if (goal <= distance && distance <= (goal + 15)) {
                        setChallengeTime(time);
                    }
                }}
            />
            <View style={styles.subContainer}>
                <View style={styles.distanceContainer}>
                    <Text style={styles.text}>{Math.round(distance) + "/" + goal}</Text>
                    <Text style={styles.smallText}>Distance (m)</Text>
                </View>
                <View style={styles.paceContainer}>
                    <Text style={styles.text}>{speed}</Text>
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
            <StartAndResetButtons />
            <View style={styles.progressContainer}>
                <ProgressBar color="#00FF47"progress={distance / goal} style={{
                    height: 20,
                    backgroundColor: "#B8BCC3",
                    borderRadius: 10,
                    }}/>
            </View>
        </View>
    )

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