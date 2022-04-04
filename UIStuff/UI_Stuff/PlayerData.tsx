import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootTabScreenProps, RootStackParamList, RootTabParamList, RootStackScreenProps } from './types';
//import {GetUserInfo} from './screens/Login';

// Datavalues (These values will be collected from the database):
var level = 5;
var playerName ="";
var coins = 0;
var gems = 0;
var playerId = "";
var currentEXP = 0;
var maxEXP = 10;
var totalDistance = 0; 





// Will be a value between 0 and 1:
var handicap = 0.5;

// Weekly challenge:
var weeklyChallengeMax = 10000;
var CurrentweeklyChallenge = 1000;


export function updateValues() {

    fetch(`http://213.188.152.167:5000/users/${playerId}`,

    {
        method: 'PATCH',
        headers: {
            Accept:
                'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            goldAmount: coins,
            expAmount: currentEXP,
            totalDistance: totalDistance
        })

    })
    .then(response => "")
   

}
export function setValues(value:string) {
    
    playerName = JSON.parse(value).firstName;
    currentEXP = JSON.parse(value).expAmount;
    coins = JSON.parse(value).goldAmount;
    playerId = JSON.parse(value).id
    console.log(coins)
}
export function getTotalDistance() {

return totalDistance;
}
// Helper functions, may be replaced at some point:
export function getPlayerId() {

    return playerId;
}

export  function getPlayer(){

    return playerName;
}

export const getMaxEXP = () => {

    return[maxEXP];
}

export const getCurrentEXP = () => {

    return[currentEXP];
}

export const getLevel = () => {

    
    return level;
}

export function getCoins() {
        console.log("getCoins")
      return coins;
}



export const getGems = () => {

    return[gems];
}

export var addCoin = () => {
    coins += 1;
    updateValues()
    console.log(coins);
};

export var addGem = () => {
    gems += 1;
    console.log(gems);
};

export var addEXP = () => {
    currentEXP += 1;
    if(currentEXP >= maxEXP){
        currentEXP -= maxEXP;
        level += 1;
    }
    console.log(gems);
};
