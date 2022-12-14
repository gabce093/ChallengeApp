import styles from '../styles/Page.style';
import SearchFriend from '../styles/SearchFriend.style.js';
import { Image, ImageBackground, Pressable, View, Text, TextInput, Dimensions, TouchableOpacity} from "react-native";
import Modal from "react-native-modal";
import { getLevelProgress, setValues } from '../PlayerData';
import React, { useEffect, useState } from 'react';
//import { FriendSearchWindow } from './FriendSearchWindow';
import { ProgressBar } from 'react-native-paper';
import {getUsername, getLevel, getCoins, getGems, getPlayer} from '../PlayerData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootTabScreenProps, RootStackParamList, RootTabParamList, RootStackScreenProps } from '../types';
import { useRoute } from '@react-navigation/native';
import LoginPage from './Login';

/**
 * This function contains the functionality of the main page.
 * 
 * @author Henrik Gustafsson
 * @param navigation Uses navigation data keep track of what to diplay
 * @returns Itself as a component to be used by the navigation function in Index.
 */
export default function MainPageScreen({navigation}: RootStackScreenProps<'CreateRunPage'>) {

  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    
    
  }, [refresh])

  

  return (
      <ImageBackground source={require('../Graphics/forest.png')} style={styles.forestBackground} resizeMode="cover">
    <View style={styles.screen}>
      
        <ImageBackground source={require('../Graphics/banan.png')} style={styles.banan} resizeMode="stretch">
      <View style={styles.topContainer}>
 
        <Image source={require('../Graphics/wut2w_kepps.png')} style={styles.playerImage} resizeMode="cover"></Image>
        <Text style={styles.username}>{getUsername()}</Text>
  

    </View>
        <View style={styles.bottomContainer}>
        <Text style={styles.WeeklyChaText}>Weekly Challenge Progress:</Text>
            <ProgressBar color="#43FF25" progress={0.7} style={{
                          height: "40%",
                          top: "-60%",
                          backgroundColor: "black",
                          borderRadius: 20,
                          width: 300,
                          zIndex: 10,
                          }}/>

            <Text style={styles.CurrentWeeklyChaText}>Current KMs / MaxKms</Text>  
          <Pressable style={styles.challengeButton} onPress={() => navigation.navigate('CreateRunPage')}>
              <Text style={styles.challengeText}>Challenge!</Text>
              </Pressable>         
              <View style={{ backgroundColor: 'rgba(0,0,0,0)' }}> 
    </View>
         <LoginPage ></LoginPage>
        </View>
        </ImageBackground>
    </View>
    </ImageBackground>
    
  );
}

