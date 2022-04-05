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
var totalDistance = 0; 
var username = "VeryLongNameTe";

// This should be an exponetial curve to lvl 20 when it caps and becomes constant.
var maxEXP = 10;
var totalEXP = 34500;
var lvlProgress = 0.0;
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
            expAmount: totalEXP,
            totalDistance: totalDistance
        })

    })
    .then(response => "")
   

}
export function setValues(value:string) {
    
    playerName = JSON.parse(value).firstName;
    totalEXP = JSON.parse(value).expAmount;
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

export const getUsername = ():string => {

    return username;
}


export const getMaxEXP = ():number => {

    return maxEXP;
}

export const getCurrentEXP = ():number => {

    return totalEXP;
}

export const getLevel = () => {
    var lvl = 0;
    var lvlProgress = 0.0;
    if(totalEXP < 20000)
    {
        // Linjär funktion före lvl 20:
        lvl = Math.floor(totalEXP/1000);
        lvlProgress = totalEXP % 1000;
    }else
    {
        lvl = 20 + Math.floor((totalEXP-20000)/7500);
        lvlProgress = (totalEXP-20000) % 7500
    }
    level = lvl;
    return[level];
}

export const getLevelProgress = () => {
    var lvl = 0;
    var currentLvlProgress = 0.0;
    if(totalEXP < 20000)
    {
        // Linjär funktion före lvl 20:
        lvl = Math.floor(totalEXP/1000);
        lvlProgress = totalEXP % 1000;
    }else
    {
        lvl = 20 + Math.floor((totalEXP-20000)/7500);
        currentLvlProgress = (totalEXP-20000) % 7500
    }
    lvlProgress = currentLvlProgress;
    return[lvlProgress];
}

export const getCoins = ():number => {

    return coins;
}

export const getGems = ():number => {

    return gems;
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
    totalEXP += 1;
    if(totalEXP >= maxEXP){
        totalEXP -= maxEXP;
        level += 1;
    }
    console.log(totalEXP);
};

//Function that removes a given number of coins (used to buy items)
export var removeCoins = (numbCoins : number) =>{
    coins = getCoins() - numbCoins;
    console.log('You removed ' + numbCoins +' coins'+ 
    ', now you have '+ coins + ' coins');
    updateValues();
};