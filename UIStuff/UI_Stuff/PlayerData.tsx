import React, { useState } from "react";
import { floor, sqrt } from "react-native-reanimated";
// Datavalues (These values will be collected from the database):
var level = 5;
var coins = 0;
var gems = 0;
var username = "VeryLongNameTe";

// This should be an exponetial curve to lvl 20 when it caps and becomes constant.
var currentEXP = 0;
var maxEXP = 10;
var totalEXP = 2000;
var lvlProgress = 0.0;
// Will be a value between 0 and 1:
var handicap = 0.5;

// Weekly challenge:
var weeklyChallengeMax = 10000;
var CurrentweeklyChallenge = 1000;


// Helper functions, may be replaced at some point:
export default function getPlayer(){

    return[username];
}

export const getUsername = ():string => {

    return username;
}


export const getMaxEXP = ():number => {

    return maxEXP;
}

export const getCurrentEXP = ():number => {

    return currentEXP;
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
    console.log(currentEXP);
};
