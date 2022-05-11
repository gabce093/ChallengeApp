import styles from '../styles/Page.style';
import styles2 from '../styles/ResultPage.style'
import {addCoin, addGem, addEXP} from '../PlayerData';
import {setDistanceGoal} from '../ChallengeData';
import { RootTabScreenProps, RootStackParamList, RootTabParamList, RootStackScreenProps } from '../types';

//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import React from 'react';
import { Button, ImageBackground, TouchableHighlight } from 'react-native';

export default function  SendChallengePage({navigation}: RootTabScreenProps<'MainPage'>) {

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../Graphics/forest.png')} style={styles.forestBackground} resizeMode="cover">
        <Text >Select friend:</Text>
      </ImageBackground>
    </View>
  );
}