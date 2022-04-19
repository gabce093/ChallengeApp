import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import styles from '../styles/TopBar.style';

import * as React from 'react';
import { Pressable, Image, View } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { Text, TextProps } from './Themed';
import { RootStackScreenProps } from '../types';
import { getLevel, getCurrentEXP, getMaxEXP, getCoins, getGems } from '../PlayerData';

/** 
*The topbar that displays on all pages
* 
*@param navigation
*
*@returns A topbar with the players money, image and level information
*@category All Pages
*@author Henrik
*/
export default function TopBar({ navigation }: RootStackScreenProps<'Modal'>) {
    const colorScheme = useColorScheme();
    return (
        <View style={styles.TopBarHolder}>
            {/* Profile pic and LVL indicator:*/}
            <View style={styles.ProfileHolder}>
                <Image style={styles.image}
                    source={require('../Graphics/TempProfilePic.png')} />
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
                    <ProgressBar color="#FF5C00" progress={getCurrentEXP() / getMaxEXP()} style={{
                        height: 15,
                        backgroundColor: "#151515",
                    }} />
                </View>
            </View>

            {/* Setting on the edge of the screen*/}
            <View style={styles.SettingsHolder}>
                <Pressable
                    onPress={() => navigation.replace('Root')}
                    style={({ pressed }) => ({
                        opacity: pressed ? 0.5 : 1,
                    })}>
                    <Ionicons
                        name="settings"
                        size={28}
                        color={Colors[colorScheme].background}
                        style={{ marginRight: 15 }}
                    />
                </Pressable>
            </View>
        </View>
    );
}