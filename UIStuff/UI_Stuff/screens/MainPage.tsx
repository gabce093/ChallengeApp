import styles from '../styles/Page.style';
import { Image, ImageBackground, Pressable} from "react-native";

import React from 'react';
import { Button } from 'react-native';
import {getLevel, getCurrentEXP, getMaxEXP, getCoins, getGems} from '../PlayerData';

// Weekly challenge stuff:
import WeeklyChallengeOrb from '../components/WeeklyChallengeOrb';

//import EditScreenInfo from '../components/EditScreenInfo';
import { View,Text} from '../components/Themed';
import { RootTabScreenProps, RootStackParamList, RootTabParamList } from '../types';


export default function MainPageScreen({ navigation }: RootTabScreenProps<'MainPage'>) {
  return (
    <View style={styles.topContainer}>
      <ImageBackground source={require('../Graphics/forest.png')} style={styles.absolute} resizeMode="cover">
      <ImageBackground source={require('../Graphics/banan.png')} style={styles.banan} resizeMode="stretch">
      

      <View style={styles.playerContainer}>
      
      <View style={styles.subContainer}>
        <WeeklyChallengeOrb percent={50}/>
          <Text style={styles.username}>TheSonofa</Text>
        </View>
        
        <View style={styles.subContainer}>
          <ImageBackground source={require('../Graphics/wut2w_kepps.png')} style={styles.playerImage} resizeMode="cover"></ImageBackground>
        </View>
      </View>
      

      {/*<Image source={require('../Graphics/forest.png')} style={styles.absolute} resizeMode="cover"></Image>*/}
    
      
      

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      {/*<EditScreenInfo path="/screens/MainPage.tsx" >*/}

      <Pressable style={styles.challengeButton}
        onPress={() => navigation.navigate('CreateRun')}>
      <Text style={styles.challengeText}>Challenge!</Text>
      </Pressable>
      </ImageBackground>
      </ImageBackground>
    </View>
  );
}

