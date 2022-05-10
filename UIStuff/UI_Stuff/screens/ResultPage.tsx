import styles from '../styles/Page.style';
import styles2 from '../styles/ResultPage.style'
import React, { useState, useEffect } from 'react';
import { Image, ImageBackground, Pressable, TouchableOpacity} from "react-native";
import { Text, View } from '../components/Themed';
import {getPace, getTotalTime, getChallengeTime, getElapsedDistance, getDistanceGoal, 
        checkCompleted, calculateXP, calculateCoins, getChallenger, getChallengerId, createChallenge, getMinPerK} from '../ChallengeData';
import { RootTabScreenProps, RootStackParamList, RootTabParamList, RootStackScreenProps } from '../types';
import ResultProgressBar from '../components/ResultProgressBar';
import XpProgressBar from '../components/XpProgressBar';
import { getUsername, getPlayerId, addCoin, addEXP } from '../PlayerData';
import Axios from "axios";


export default function ResultPage({ navigation }: RootStackScreenProps<'Root'>) {

  const [rank, setRank] = useState(0);
  const [data, setData] = useState([]);
  const [coin, setCoin]  = useState(0);
  useEffect(() => {
      
      Axios.get(`http://213.188.152.167:5000/challengeData/${getPlayerId()}/5`).then((response) => {
             if (response.data.length > 0) {
                  for (var i = 0; i < data.length; i++) {
                  setRank(prev => prev + getMinPerK(response.data[i].time, response.data[i].distance));
                  }
              } else {
                  console.log("was here")
                  setRank(6);
              }
            setCoin(calculateCoins(rank))  
          })
      
  }, [rank])
    
   var string = "almost"
   if (checkCompleted()){
       string = ""
   }

   var totalTime = getTotalTime();
   var challengeTime = getChallengeTime();
   var exp = calculateXP();

   const handleButton = () => {
     if (getChallenger()){
      createChallenge(getPlayerId())
      navigation.navigate('Root');
     }
     else {
      navigation.navigate('SendChallengePage');
     }
   }

    return (
      <View style={styles.container}>
        <ImageBackground source={require('../Graphics/forest.png')} style={styles.forestBackground} resizeMode="cover">
            <View style={styles2.container}>
              <Text style={styles2.title}>Challenge</Text>
              <Text style={styles2.title2}>{string}</Text>
              <Text style={styles2.title}>Complete!</Text>  
              <Text style={styles2.text}>Rewards:</Text>
              <Text style={styles2.text}>{"+"+Math.round(exp) +"xp, +" + Math.round(coin) + "coins"}</Text>
              <XpProgressBar></XpProgressBar>
            </View>
            
            
        </ImageBackground>
        <ImageBackground source={require('../Graphics/banan.png')} style={styles.banan} resizeMode="stretch">
          <View style={styles2.container2}>
          <Text style={styles2.text3}>{"Stats from your run"}</Text>
            <View style={styles2.rowContainer}> 
              <View style={styles2.timeContainer}>
                <Text style={styles2.text}>{challengeTime}</Text>
                <Text style={styles2.text2}>{"Time"}</Text>
              </View>
              <View style={styles2.paceContainer}>
                <Text style={styles2.text}>{getPace(getDistanceGoal(), challengeTime)}</Text>
                <Text style={styles2.text2}>{"Pace (min/km)"}</Text>
              </View>
              </View>
              <View style={styles2.rowContainer} >
                <View style={styles2.timeContainer}>
                  <Text style={styles2.text}>{totalTime}</Text>
                  <Text style={styles2.text2}>{"Total Time"}</Text>
                </View>
                <View style={styles2.paceContainer}>
                  <Text style={styles2.text}>{getPace(getElapsedDistance(), totalTime)}</Text>
                  <Text style={styles2.text2}>{"Pace (min/km)"}</Text>
                </View>
              </View>
              <ResultProgressBar goal={getDistanceGoal()} elapsedDistance={getElapsedDistance()}></ResultProgressBar>
              
              <TouchableOpacity style={styles2.button} onPress={() => {if (getChallenger()){
                                                                              createChallenge(getChallengerId())
                                                                              addEXP(exp);
                                                                              addCoin(coin);
                                                                              navigation.navigate('Root');
                                                                            }
                                                                            else {
                                                                              addEXP(exp);
                                                                              addCoin(coin);
                                                                              navigation.navigate('SendChallengePage');
                                                                            }}
                                                                 }>
                <Text style={styles2.buttonText}>Done</Text>
              </TouchableOpacity>
            </View>
        </ImageBackground>
      </View>
    );
}
//<View style={styles2.container}>
 //             <TouchableOpacity onPress={() => navigation.navigate('MainPage')}><Text>Home</Text></TouchableOpacity>
 //           </View>
//<Text>{getElapsedDistance() }</Text>
//<Text>{getTotalTime() }</Text>
//<Text>{getChallengeTime() }</Text>