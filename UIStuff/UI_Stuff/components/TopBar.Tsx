import { FontAwesome } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import styles from '../styles/TopBar.style';

import * as React from 'react';
import { Pressable, Image } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { Text, TextProps, View } from './Themed';
import { RootStackScreenProps } from '../types';
import {getLevel, getCurrentEXP, getMaxEXP, getCoins, getGems} from '../PlayerData';

export default function TopBar({ navigation }: RootStackScreenProps<'Modal'>){
    const colorScheme = useColorScheme();
    return (
        <View style={styles.TopBarHolder}>
            
            {/* Profile pic and LVL indicator:*/}
            <View style={styles.ProfileHolder}>
                    <Image style={styles.image}
                    source = {require('../Graphics/TempProfilePic.png')}/>
                    <Text style={styles.title}>LVL: {getLevel()}</Text>
                    
                
                </View>
                
                

            {/* spreading along the entire top*/}
            <View style={styles.CurrencyAndEXPHolder}>
                <View style={styles.CurrencyHolder}>
                    <Text style={styles.title}>
                        Coins: {getCoins()}   Gems: {getGems()}
                    </Text>
                </View>
                <View style={styles.EXPBarHolder}>
                <Text style={styles.title}>Här är din exp:</Text>
                <ProgressBar progress={getCurrentEXP() / getMaxEXP()}/>
                </View>
            </View>

            {/* Setting on the edge of the screen*/}
            <View style={styles.SettingsHolder}>  
                <Pressable
              onPress={() => navigation.replace('Root')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="info-circle"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
                </Pressable>
            </View>
            
        </View>
    );
}