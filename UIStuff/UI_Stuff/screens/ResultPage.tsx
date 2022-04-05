import styles from '../styles/Page.style';
import React, { useState, useEffect } from 'react';
import { Image, ImageBackground, Pressable, TouchableOpacity} from "react-native";
import { Text, View } from '../components/Themed';
import {getType, getTotalTime, getChallengeTime, getElapsedDistance, getDistanceGoal, checkCompleted} from '../ChallengeData';
import { RootTabScreenProps, RootStackParamList, RootTabParamList, RootStackScreenProps } from '../types';
import ResultProgressBar from '../components/ResultProgressBar';
import { ProgressBar } from 'react-native-paper';

export default function ResultPage({navigation}: RootTabScreenProps<'MainPage'>) {
    
   var goal = getDistanceGoal()

    return (
      <View style={styles.container}>
        <ImageBackground source={require('../Graphics/forest.png')} style={styles.forestBackground} resizeMode="cover">
            <Text>{getElapsedDistance() }</Text>
            <Text>{getTotalTime() }</Text>
            <Text>{getChallengeTime() }</Text>
            <TouchableOpacity onPress={() => navigation.navigate('MainPage')}><Text>Home</Text></TouchableOpacity>
            <ResultProgressBar></ResultProgressBar>
            <Text>___</Text>
        </ImageBackground>
      </View>
    );
}