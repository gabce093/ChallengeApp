import styles from '../styles/Page.style';
import styles2 from '../styles/ResultPage.style'
import React, { useState, useEffect } from 'react';
import { Image, ImageBackground, Pressable, TouchableOpacity} from "react-native";
import { Text, View } from '../components/Themed';
import {getType, getTotalTime, getChallengeTime, getElapsedDistance, getDistanceGoal, checkCompleted} from '../ChallengeData';
import { RootTabScreenProps, RootStackParamList, RootTabParamList, RootStackScreenProps } from '../types';
import ResultProgressBar from '../components/ResultProgressBar';
import { ProgressBar } from 'react-native-paper';

export default function ResultPage({navigation}: RootTabScreenProps<'MainPage'>) {
    
   var string = "almost"
   if (checkCompleted()){
       string = ""
   }

    return (
      <View style={styles.container}>
        <ImageBackground source={require('../Graphics/forest.png')} style={styles.forestBackground} resizeMode="cover">
            <View style={styles2.container}>
              <Text style={styles2.title}>Challenge</Text>
              <Text style={styles2.title2}>{string}</Text>
              <Text style={styles2.title}>Complete!</Text>  
            </View>
            <ResultProgressBar goal={100} elapsedDistance={150}></ResultProgressBar>
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