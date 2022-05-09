import styles from '../styles/Page.style';
import { Image, ImageBackground, Pressable, View, Text, Dimensions, TouchableOpacity } from "react-native";
import LoginPage from './Login';

import React, { useEffect } from 'react';
import FriendSearchWindow from './FriendSearchWindow';
import { ProgressBar } from 'react-native-paper';
import { getUsername, getLevel, getCoins, getGems } from '../PlayerData';

import { RootTabScreenProps, RootStackParamList, RootTabParamList, RootStackScreenProps } from '../types';

/**
 * This function contains the functionality of the main page.
 * 
 * @author Henrik Gustafsson
 * @param navigation Uses navigation data keep track of what to diplay
 * @returns Itself as a component to be used by the navigation function in Index.
 */
export default function MainPageScreen({ navigation }: RootStackScreenProps<'CreateRunPage'>) {

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
            }} />

            <Text style={styles.CurrentWeeklyChaText}>Current KMs / MaxKms</Text>
            <Pressable style={styles.challengeButton} onPress={() => navigation.navigate('CreateRunPage')}>
              <Text style={styles.challengeText}>Challenge!</Text>
            </Pressable>
            <LoginPage />
          </View>
        </ImageBackground>
      </View>
    </ImageBackground>

  );
}

