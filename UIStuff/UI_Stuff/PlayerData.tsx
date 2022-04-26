import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootTabScreenProps, RootStackParamList, RootTabParamList, RootStackScreenProps } from './types';
//import {GetUserInfo} from './screens/Login';
// Datavalues (These values will be collected from the database):
var playerName = "";
var coins = 0;
var gems = 0;
var rank = 0;
var playerId = "";
var totalDistance = 0;
var username = "VeryLongNameTe";

// This should be an exponetial curve to lvl 20 when it caps and becomes constant.
var totalEXP = 1000;

// Will be a value between 0 and 1:
var handicap = 0.5;

// Weekly challenge:
var weeklyChallengeMax = 10000;
var CurrentweeklyChallenge = 1000;

// Updates values on database with the local ones
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
    // Updates local values on with the database ones

    playerName = JSON.parse(value).userName;
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

export function getPlayer() {

    return playerName;
}

export const getUsername = (): string => {

    return username;
}


export const getLevel = () => {
    var lvl = 0;
    if (totalEXP < 20000) {
        // Linjär funktion före lvl 20:
        lvl = Math.floor(totalEXP / 1000);
    } else {
        lvl = 20 + Math.floor((totalEXP - 20000) / 7500);
    }
    return lvl;
}

export const getLevelXp = () => {
    
    if(totalEXP < 20000)
    {
        return 1000;
    }else
    {
        return 7500;
    }
}

export const getLevelProgress = () => {
    var currentLvlProgress = 0.0;
    var lvl = 0;
    var lvlsOver20 = 0;
    var nextlvlExp = 0.0;
    if (totalEXP < 20000) {
        // Linjär funktion före lvl 20:
        currentLvlProgress = totalEXP / 1000;
        lvl = Math.floor(totalEXP / 1000);
        currentLvlProgress = currentLvlProgress - lvl;
    } else {
        currentLvlProgress = (totalEXP - 20000) / 7500
        lvl = Math.floor((totalEXP - 20000) / 7500);
        currentLvlProgress -= lvl;
    }

    return currentLvlProgress;
}

export const getCoins = (): number => {

    return coins;
}

export const getGems = (): number => {

    return gems;
}

export const getTotalExp = ():number => {

    return totalEXP;
}

export var addCoin = (n:number) => {
    coins += n;
    updateValues();
    console.log(coins);
};

export var addGem = (n: number) => {
    gems += n;
    updateValues();
    console.log(gems);
};

export var addEXP = (n: number) => {
    totalEXP += n;
    updateValues();
    //console.log(totalEXP);
};

//Function that removes a given number of coins (used to buy items)
export var removeCoins = (numbCoins: number) => {
    coins = getCoins() - numbCoins;
    console.log('You removed ' + numbCoins + ' coins' +
        ', now you have ' + coins + ' coins');
    updateValues();
};