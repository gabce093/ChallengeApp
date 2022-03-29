import styles from '../styles/Page.style';
import React, { useState, useEffect } from 'react';
import { Image, ImageBackground, Pressable, TouchableOpacity} from "react-native";
import { Text, View } from '../components/Themed';
import {getType, getTime, getElapsedDistance, getDistanceGoal, checkCompleted, setElapsedDistance, setTime, CompleteChallenge} from '../ChallengeData';
import { RootTabScreenProps, RootStackParamList, RootTabParamList, RootStackScreenProps } from '../types';

export default function ResultPage({navigation}: RootTabScreenProps<'MainPage'>) {
    
   

    return (
      <View style={styles.container}>
        <ImageBackground source={require('../Graphics/forest.png')} style={styles.absolute} resizeMode="cover">
            <Text>{getElapsedDistance()}</Text>
            <TouchableOpacity onPress={() => navigation.navigate('MainPage')}><Text>Home</Text></TouchableOpacity>
        </ImageBackground>
      </View>
    );
}