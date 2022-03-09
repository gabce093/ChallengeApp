import styles from '../styles/Page.style';
import { Image, ImageBackground} from "react-native";

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
    <View style={styles.container}>
      <ImageBackground source={require('../Graphics/forest.png')} style={styles.absolute} resizeMode="cover"></ImageBackground>
      <Text style={styles.title}>Main Page</Text>
      {/*<Image source={require('../Graphics/forest.png')} style={styles.absolute} resizeMode="cover"></Image>*/}
    
      <WeeklyChallengeOrb/>
      

      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      
      {/*<EditScreenInfo path="/screens/MainPage.tsx" >*/}
      <Button
      onPress={() => navigation.navigate('CreateRun')}
      title="Start"
      color="#ed5c0e"
      />
    </View>
  );
}

