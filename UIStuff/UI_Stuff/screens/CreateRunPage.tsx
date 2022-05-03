import styles from '../styles/Page.style';
import styles2 from '../styles/CreateRunPage.style';
import {addCoin, addGem, addEXP} from '../PlayerData';
import {setDistanceGoal} from '../ChallengeData';
import { RootTabScreenProps, RootStackParamList, RootTabParamList, RootStackScreenProps } from '../types';

//import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import React from 'react';
import { Button, ImageBackground, TouchableHighlight } from 'react-native';

export default function CreateRunPage({ navigation }: RootStackScreenProps<'GPSPage'>) {

  const createChallenge = (distance: number) => {
    setDistanceGoal(distance);
    navigation.navigate('GPSPage')
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../Graphics/forest.png')} style={styles.forestBackground} resizeMode="cover">
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      {/*<EditScreenInfo path="/screens/CreateRunPage.tsx" >*/}

      <View style={styles2.container}>
        <Text style={styles2.bigText}>Select challenge:</Text>
        <TouchableHighlight 
          style={styles2.button}
          onPress={() => createChallenge(100)}>
            <Text style={styles2.text}>3km</Text>
        </TouchableHighlight>
        <TouchableHighlight 
          style={styles2.button}
          onPress={() => createChallenge(5000)}>
            <Text style={styles2.text}>5km</Text>
        </TouchableHighlight>
        <TouchableHighlight 
          style={styles2.button}
          onPress={() => createChallenge(7000)}>
            <Text style={styles2.text}>7km</Text>
        </TouchableHighlight>
      </View>
      </ImageBackground>
    </View>
  );
}