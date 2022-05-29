import styles from '../styles/Page.style';
import { Image, ImageBackground, Pressable, View, Text, Dimensions, TouchableOpacity} from "react-native";
import LoginPage from './Login';
import Axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { useEffect, useState } from 'react';
import { ProgressBar } from 'react-native-paper';
import {getUsername, getLevel, getCoins, getGems, getPlayerId, getPlayer} from '../PlayerData';

import { RootTabScreenProps, RootStackParamList, RootTabParamList, RootStackScreenProps } from '../types';
import shopStyles from '../styles/shop.style';
import { useNavigationState, useNavigation } from '@react-navigation/native';

/**
 * This function contains the functionality of the main page.
 * 
 * @author Henrik Gustafsson
 * @param navigation Uses navigation data keep track of what to diplay
 * @returns Itself as a component to be used by the navigation function in Index.
 */




export default function MainPageScreen(page: any) {
 
  const nav = useNavigation();

  const [headImg, setHeadImg] = useState ('http://213.188.152.167:5000/graphics/character/empty.png');
  const [shirtImg,setShirtImg] = useState ('http://213.188.152.167:5000/graphics/character/empty.png');
  const [pantsImg,setPantsImg] = useState ('http://213.188.152.167:5000/graphics/character/empty.png');
  const [shoesImg,setShoesImg] = useState ('http://213.188.152.167:5000/graphics/character/empty.png');
  
  const GetEquippedItems = async () => {
    const value = await AsyncStorage.getItem('@userID_Key');
    console.log("hehe" + value)

    Axios
         .get(`http://213.188.152.167:5000/equipped/${value}`)
         .then((res) => {
          setHeadImg(()=>`http://213.188.152.167:5000/graphics/character/${res.data[0].hat}.png`)
          setShirtImg(`http://213.188.152.167:5000/graphics/character/${res.data[0].shirt}.png`)
          setPantsImg(`http://213.188.152.167:5000/graphics/character/${res.data[0].pants}.png`)
          setShoesImg(`http://213.188.152.167:5000/graphics/character/${res.data[0].boots}.png`)
           return res.data;
         })
         .catch((error) => {
          
   console.log("Sth wrong happened");
         });

  }

console.log(getPlayerId())
  useEffect(() => {

    GetEquippedItems();
   
}, []);

useEffect(() => {
  const unsubscribe = page.navigation.addListener('focus', () => {
    console.log('Refreshed!');
    GetEquippedItems();

  });
  return unsubscribe;
}, [page]);

GetEquippedItems();
  return (

      <ImageBackground source={require('../Graphics/forest.png')} style={styles.forestBackground} resizeMode="cover">
    <View style={styles.screen}>
      
        <ImageBackground source={require('../Graphics/banan.png')} style={styles.banan} resizeMode="stretch">
      <View style={styles.topContainer}>
 
      <ImageBackground
           source={require('../Graphics/character/Base_Character.png')}
           style={shopStyles.character} resizeMode="cover">
         </ImageBackground>

      <ImageBackground
           source={{uri:shirtImg}}
           fadeDuration={0}
           style={shopStyles.character} resizeMode="cover">
         </ImageBackground>
        
         <ImageBackground
           source={ {uri:pantsImg}}
           fadeDuration={0}
           style={shopStyles.character} resizeMode="cover">
         </ImageBackground>

         <ImageBackground
           source={ {uri:shoesImg}}
           fadeDuration={0}
           style={shopStyles.character} resizeMode="cover">
         </ImageBackground>

         <ImageBackground
           source={ {uri:headImg}}
           fadeDuration={0}
           style={shopStyles.character} resizeMode="cover">
         </ImageBackground>

        
        <Text style={styles.username}>{getPlayer()}</Text>
  

    </View>
        <View style={styles.bottomContainer}>
        
          <Pressable style={styles.challengeButton} onPress={() => page.navigation.navigate('CreateRunPage')}>
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


