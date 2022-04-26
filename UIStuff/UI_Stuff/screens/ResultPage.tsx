import styles from '../styles/Page.style';
import styles2 from '../styles/ResultPage.style'
import React, { useState, useEffect } from 'react';
import { Image, ImageBackground, Pressable, TouchableOpacity} from "react-native";
import { Text, View } from '../components/Themed';
import {getPace, getTotalTime, getChallengeTime, getElapsedDistance, getDistanceGoal, checkCompleted, calculateXP} from '../ChallengeData';
import { RootTabScreenProps, RootStackParamList, RootTabParamList, RootStackScreenProps } from '../types';
import ResultProgressBar from '../components/ResultProgressBar';
import XpProgressBar from '../components/XpProgressBar';


export default function ResultPage({navigation}: RootTabScreenProps<'MainPage'>) {
    
   var string = "almost"
   if (checkCompleted()){
       string = ""
   }

   var totalTime = getTotalTime();
   var challengeTime = getChallengeTime();

    return (
      <View style={styles.container}>
        <ImageBackground source={require('../Graphics/forest.png')} style={styles.forestBackground} resizeMode="cover">
            <View style={styles2.container}>
              <Text style={styles2.title}>Challenge</Text>
              <Text style={styles2.title2}>{string}</Text>
              <Text style={styles2.title}>Complete!</Text>  
              <Text style={styles2.text}>Rewards:</Text>
              <Text style={styles2.text}>{"+"+Math.round(calculateXP()) +"xp, +" + 50 + "coins"}</Text>
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
              
              <TouchableOpacity style={styles2.button} onPress={() => navigation.navigate('MainPage')}>
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