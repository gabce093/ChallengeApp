import React, { useState } from "react";
// Datavalues (These values will be collected from the database):
var level = 5;
var coins = 0;
var gems = 0;

var currentEXP = 0;
var maxEXP = 10;



export default function getPlayer(){

    return[level];
}

export const getMaxEXP = () => {

    return[maxEXP];
}

export const getCurrentEXP = () => {

    return[currentEXP];
}

export const getLevel = () => {

    return[level];
}

export const getCoins = () => {

    return[coins];
}

export const getGems = () => {

    return[gems];
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
    console.log(gems);
};
