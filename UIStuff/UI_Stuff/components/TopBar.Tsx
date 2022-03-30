import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import styles from '../styles/TopBar.style';
import styles2 from '../styles/Page.style';
import { StyleSheet, ImageBackground} from 'react-native';

import * as React from 'react';
import { Pressable, Image, View, SafeAreaView  } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { Text, TextProps} from './Themed';
import { RootStackScreenProps } from '../types';
import {getLevel, getCurrentEXP, getMaxEXP, getCoins, getGems} from '../PlayerData';

{/*Topbar has alot of components, the errors are false; it works*/}
export default function TopBar({ navigation }: RootStackScreenProps<'Modal'>){
    const colorScheme = useColorScheme();
    return (
        <SafeAreaView  style={headerStyle.wholeHeader}>
            
            {/* Profile pic and LVL indicator:*/}
            <View style={styles.TopBarHolder}> 
                <View style={styles.ProfileHolder}>
                    

                        <Image style={styles.image}
                        source = {require('../Graphics/TempProfilePic.png')}/>
                        <ImageBackground source={require('../Graphics/ExpMask.png')} style={styles.lvlHolder} imageStyle={{tintColor:"#333333"}} resizeMode="stretch">
                        <Text style={styles.lvl}>LVL: { getLevel() }</Text>
                        </ImageBackground>
                    </View>
                    
                    

                {/* spreading along the entire top*/}
                <ImageBackground source={require('../Graphics/ExpMask.png')} style={styles.CurrencyAndEXPHolder} imageStyle={{tintColor:"#333333"}} resizeMode="stretch">
                <View style={styles.CurrencyAndEXPHolder}>
                    <View style={styles.CurrencyHolder}>
                        <Text style={styles.title}>
                            Coins: {getCoins()}   Gems: {getGems()}
                        </Text>
                    </View>
                    <View style={styles.EXPBarHolder}>
                    <ProgressBar color="#FF5C00"progress={getCurrentEXP() / getMaxEXP()} style={{
                        height: "100%",
                        backgroundColor: "#151515",
                        }}/>
                    </View>
                </View>
                </ImageBackground>

                {/* Setting on the edge of the screen*/}
                <View style={styles.SettingsHolder}>  
                    <Pressable
                onPress={() => navigation.replace('Root')}
                hitSlop={{bottom:200, top:200}}
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