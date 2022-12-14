import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import styles from '../styles/TopBar.style';
import styles2 from '../styles/Page.style';
import { StyleSheet, ImageBackground } from 'react-native';
import { Pressable, Image, View, SafeAreaView } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { Text, TextProps } from './Themed';
import { RootStackScreenProps } from '../types';
import { getLevel, getLevelProgress, getCoins, getGems, getPlayer } from '../PlayerData';
import React, { Component, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
/**
 * This function contains the functionality of the topbar in the header.
 * It displayer player information and gives acces to the settings menu.
 * 
 * @author Henrik Gustafsson
 * @param navigation Uses navigation data to remain on every desired page
 * @returns Itself as a component to be used by the navigation function in Index.
 */
export default function TopBar({ navigation, route }: RootStackScreenProps<'Modal'>){

    const [lvl, setLvl] = useState(0);
    const [lvlProgress, setLvlProgress] = useState(0);
    const [coins, setCoins] = useState(0);
    
    
    
  
    const colorScheme = useColorScheme();
    return (
        <SafeAreaView style={headerStyle.wholeHeader}>

            {/* Profile pic and LVL indicator:*/}
            <View style={styles.TopBarHolder}>
                <View style={styles.ProfileHolder}>


                    <Image style={styles.image}
                        source={require('../Graphics/TempProfilePic.png')} />
                    <ImageBackground source={require('../Graphics/ExpMask.png')} style={styles.lvlHolder} imageStyle={{ tintColor: "#333333" }} resizeMode="stretch">
                        <Text style={styles.lvl}>{getLevel()}</Text>
                    </ImageBackground>
                </View>



                {/* spreading along the entire top*/}
                <ImageBackground source={require('../Graphics/ExpMask.png')} style={styles.CurrencyAndEXPHolder} imageStyle={{ tintColor: "#333333" }} resizeMode="stretch">
                    <View style={styles.CurrencyAndEXPHolder}>
                        <View style={styles.CurrencyHolder}>
                            <Text style={styles.title}>
                                Coins: {getCoins()}   Gems: {getGems()}
                            </Text>
                        </View>
                        <View style={styles.EXPBarHolder}>
                            <ProgressBar color="#FF5C00" progress={getLevelProgress()} style={{
                                height: "100%",
                                backgroundColor: "#151515",
                            }} />
                        </View>
                    </View>
                </ImageBackground>

                {/* Setting on the edge of the screen*/}
                <View style={styles.SettingsHolder}>
                    <Pressable
                        onPress={() => navigation.replace('Root')}
                        hitSlop={{ bottom: 200, top: 200 }}
                        style={({ pressed }) => ({
                            opacity: pressed ? 0.5 : 1,
                        })}>
                        <Ionicons
                            name="settings"
                            size={36}
                            color={Colors[colorScheme].background}
                        />
                    </Pressable>
                </View>
            </View>

        </SafeAreaView >
    );
}

const headerStyle = StyleSheet.create({
    wholeHeader: {
        height: "10%",
        backgroundColor: "transparent",
    },
});